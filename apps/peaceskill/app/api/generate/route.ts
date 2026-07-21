import { NextRequest, NextResponse } from 'next/server';
import { generateSkill } from '@/lib/anthropic';
import { verifyProSession } from '@/lib/stripe';
import { subscribeToFlodesk } from '@/lib/flodesk';
import { logGeneration } from '@/lib/db';
import { buildSkillZip } from '@/lib/zip';
import { extractPdfText } from '@/lib/pdf';
import { isValidEmail, MAX_FILE_BYTES } from '@/lib/validate';

export const runtime = 'nodejs';
export const maxDuration = 90;

type Body = {
  email?: string;
  name?: string;
  profileType?: string;
  profileContent?: string;
  profileFile?: string;  // base64
  fileType?: 'pdf' | 'image';
  fileMime?: string;
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
  const profileType = (body.profileType || '').trim();

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "That email doesn't look right." }, { status: 400 });
  }

  // Pro: verify Stripe session and check email match
  let stripeCustomerId: string | null = null;
  if (tier === 'pro') {
    if (!body.stripeSessionId) {
      return NextResponse.json(
        { error: 'Pro generation requires a paid Stripe session.' },
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
      // Soft check: if a different email was used on the form vs at Stripe,
      // we still let it through but log it.
      if (v.email && v.email.toLowerCase() !== email.toLowerCase()) {
        console.warn(
          `[generate/pro] form email "${email}" differs from Stripe email "${v.email}"`
        );
      }
      stripeCustomerId = v.customerId;
    } catch (err) {
      console.error('[generate] Stripe verify failed:', err);
      return NextResponse.json({ error: 'Could not verify payment.' }, { status: 500 });
    }
  }

  // Build profile text + optional image
  let profileText = body.profileContent || '';
  let imageBase64: string | undefined;
  let imageMediaType: 'image/png' | 'image/jpeg' | 'image/webp' | undefined;

  if (body.profileFile) {
    const buf = Buffer.from(body.profileFile, 'base64');
    if (buf.byteLength > MAX_FILE_BYTES) {
      return NextResponse.json(
        { error: 'That file is over 10MB. Try a smaller one, or paste the text instead.' },
        { status: 413 }
      );
    }

    if (body.fileType === 'pdf') {
      try {
        profileText = await extractPdfText(buf);
        if (!profileText.trim()) {
          return NextResponse.json(
            { error: "Couldn't read text from that PDF. Try pasting the content instead." },
            { status: 400 }
          );
        }
      } catch (err) {
        console.error('[generate] PDF parse failed:', err);
        return NextResponse.json(
          { error: "Couldn't read that PDF. Try a different file or paste as text." },
          { status: 400 }
        );
      }
    } else if (body.fileType === 'image') {
      imageBase64 = body.profileFile;
      const mime = (body.fileMime || 'image/png').toLowerCase();
      if (mime.includes('jpeg') || mime.includes('jpg')) imageMediaType = 'image/jpeg';
      else if (mime.includes('webp')) imageMediaType = 'image/webp';
      else imageMediaType = 'image/png';
    }
  }

  if (!profileText.trim() && !imageBase64) {
    return NextResponse.json(
      {
        error:
          "We need a bit more to work with. Tell us about your weeks, your routines, and what restores you.",
      },
      { status: 400 }
    );
  }

  // Call Anthropic
  let generated;
  try {
    generated = await generateSkill({
      tier,
      name,
      profileType,
      profileText: profileText || undefined,
      imageBase64,
      imageMediaType,
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

  // Build the download (data URL) — fast, no storage needed.
  let downloadUrl: string;
  if (tier === 'pro') {
    const zipBuf = await buildSkillZip(generated.files);
    downloadUrl = `data:application/zip;base64,${zipBuf.toString('base64')}`;
  } else {
    const md = generated.files[0]?.content ?? generated.raw;
    downloadUrl = `data:text/markdown;charset=utf-8;base64,${Buffer.from(md).toString('base64')}`;
  }

  // Best-effort: log + subscribe to Flodesk. Never block the user.
  await Promise.allSettled([
    logGeneration({
      email,
      name: name || null,
      tier,
      stripe_id: stripeCustomerId,
      profile_type: profileType || null,
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
    files: generated.files.map((f) => ({ name: f.name })), // names only, not content
    downloadUrl,
    preview: preview.slice(0, 6000), // cap preview for UI
  });
}
