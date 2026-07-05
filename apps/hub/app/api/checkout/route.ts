import { NextRequest, NextResponse } from 'next/server';
import { createProCheckoutSession } from '@/lib/stripe';
import { isValidEmail } from '@/lib/validate';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  let email: string | undefined;
  try {
    const body = await req.json();
    email = (body.email || '').trim();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 });
  }

  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: "That email doesn't look right." }, { status: 400 });
  }

  try {
    const url = await createProCheckoutSession(email);
    return NextResponse.json({ url });
  } catch (err) {
    console.error('[checkout] failed:', err);
    return NextResponse.json(
      { error: 'Could not create checkout. Try again in a moment.' },
      { status: 500 }
    );
  }
}

// GET shortcut for the upsell link in the free success state.
export async function GET(req: NextRequest) {
  const email = req.nextUrl.searchParams.get('email') || '';
  if (!isValidEmail(email)) {
    return NextResponse.redirect(new URL('/generate?upgrade=1', req.url));
  }

  try {
    const url = await createProCheckoutSession(email);
    return NextResponse.redirect(url);
  } catch (err) {
    console.error('[checkout] GET failed:', err);
    return NextResponse.redirect(new URL('/?error=checkout', req.url));
  }
}
