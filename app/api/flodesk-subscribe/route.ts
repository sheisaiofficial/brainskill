import { NextRequest, NextResponse } from 'next/server';
import { subscribeToFlodesk } from '@/lib/flodesk';
import { isValidEmail } from '@/lib/validate';

export const runtime = 'nodejs';

// Internal helper endpoint. Not consumed by the public client, but useful
// for re-syncs / manual subscribe / future automations.
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const email = (body.email || '').trim();
    const tier = body.tier === 'pro' ? 'pro' : 'free';
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: 'Invalid email.' }, { status: 400 });
    }
    const r = await subscribeToFlodesk({
      tier,
      email,
      name: body.name,
      stripeCustomerId: body.stripeCustomerId,
    });
    if (!r.ok) {
      return NextResponse.json({ error: r.reason }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[flodesk-subscribe]', err);
    return NextResponse.json({ error: 'Internal error.' }, { status: 500 });
  }
}
