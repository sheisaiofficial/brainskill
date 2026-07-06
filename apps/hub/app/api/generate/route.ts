import { NextRequest, NextResponse } from 'next/server';
import { generateSynthesis } from '@/lib/anthropic';
import { verifyProSession } from '@/lib/stripe';
import { subscribeToFlodesk } from '@/lib/flodesk';
import { logGeneration } from '@/lib/db';
import { buildSkillZip } from '@/lib/zip';
import { isValidEmail } from '@/lib/validate';
import { OS_BRIDGE_FILENAME, OS_BRIDGE_MD } from '@/lib/os-bridge';
import {
  methodologyById,
  MIN_INPUTS,
  MAX_INPUT_CHARS,
  MAX_TOTAL_CHARS,
} from '@/lib/methodologies';

export const runtime = 'nodejs';
export const maxDuration = 300;

type Body = {
  email?: string;
  name?: string;
  birthDate?: string;
  birthTime?: string;
  birthPlace?: string;
  inputs?: { id: string; content: string }[];
  tier?: 'free' | 'pro';
  stripeSessionId?: string;
};

export async function POST(req: NextRequest) {
  let body: Body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 });
  }

  const tier: 'free' | 'pro' = body.tier === 'pro' ? 'pro' : 'free';
  const email = (body.email || '').trim();
  const name = (body.name || '').trim();

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "That email doesn't look right." }, { status: 400 });
  }

  // Pro: verify Stripe session
  let stripeCustomerId: string | null = null;
  if (tier === 'pro') {
    if (!body.stripeSessionId) {
      return NextResponse.json(
        { error: 'Pro synthesis requires a paid Stripe session.' },
        { status: 401 }
      );
    }
    try {
      const v = await verifyProSession(body.stripeSessionId);
      if (!v.paid) {
        return NextResponse.json(
          { error: 'Payment not confirmed yet — try again in a moment.' },
          { status: 402 }
        );
      }
      if (v.email && v.email.toLowerCase() !== email.toLowerCase()) {
        console.warn(`[generate/pro] form email "${email}" differs from Stripe email "${v.email}"`);
      }
      stripeCustomerId = v.customerId;
    } catch (err) {
      console.error('[generate] Stripe verify failed:', err);
      return NextResponse.json({ error: 'Could not verify payment.' }, { status: 500 });
    }
  }

  // Collect and validate lenses
  const lenses = (body.inputs || [])
    .map((i) => {
      const m = methodologyById(i.id);
      const content = (i.content || '').trim().slice(0, MAX_INPUT_CHARS);
      return m && content ? { id: m.id, name: m.name, content } : null;
    })
    .filter((l): l is { id: string; name: string; content: string } => l !== null);

  if (lenses.length < MIN_INPUTS) {
    return NextResponse.json(
      {
        error: `Bring at least ${MIN_INPUTS} lenses so the synthesis has something to weave together. Your own words count as a lens.`,
      },
      { status: 400 }
    );
  }

  const totalChars = lenses.reduce((n, l) => n + l.content.length, 0);
  if (totalChars > MAX_TOTAL_CHARS) {
    return NextResponse.json(
      { error: 'That\'s a lot of material — trim the longest inputs and try again.' },
      { status: 413 }
    );
  }

  // Call Anthropic
  let generated;
  try {
    generated = await generateSynthesis({
      tier,
      name,
      birthDate: (body.birthDate || '').trim() || undefined,
      birthTime: (body.birthTime || '').trim() || undefined,
      birthPlace: (body.birthPlace || '').trim() || undefined,
      lenses,
    });
  } catch (err) {
    console.error('[generate] Anthropic call failed:', err);
    const msg = err instanceof Error ? err.message : '';
    if (msg.toLowerCase().includes('rate')) {
      return NextResponse.json(
        { error: 'Claude is busy right now. Try again in a moment.' },
        { status: 429 }
      );
    }
    return NextResponse.json(
      { error: 'Something went wrong on our end. Try again in a moment.' },
      { status: 502 }
    );
  }

  // Always a zip — the intelligence layer is a multi-file pack.
  // Pro packs also carry the static Level 1 → Level 2 bridge.
  const packFiles =
    tier === 'pro'
      ? [...generated.files, { name: OS_BRIDGE_FILENAME, content: OS_BRIDGE_MD }]
      : generated.files;
  const zipBuf = await buildSkillZip(packFiles);
  const downloadUrl = `data:application/zip;base64,${zipBuf.toString('base64')}`;

  // Best-effort: log + subscribe. Never block the user.
  await Promise.allSettled([
    logGeneration({
      email,
      name: name || null,
      tier,
      stripe_id: stripeCustomerId,
      profile_type: `level1:${lenses.map((l) => l.id).join(',')}`,
    }),
    subscribeToFlodesk({
      tier,
      email,
      name,
      stripeCustomerId: stripeCustomerId || undefined,
    }).then((r) => {
      if (!r.ok) console.warn('[flodesk]', r.reason);
    }),
  ]);

  const preview = generated.files[0]?.content ?? generated.raw;

  return NextResponse.json({
    ok: true,
    tier,
    files: packFiles.map((f) => ({ name: f.name })),
    downloadUrl,
    preview: preview.slice(0, 6000),
  });
}
