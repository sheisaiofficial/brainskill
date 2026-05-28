import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { requireStripe } from '@/lib/stripe';
import { markRefunded } from '@/lib/db';

export const runtime = 'nodejs';

// Stripe needs the raw body to verify the signature.
export async function POST(req: NextRequest) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret) {
    console.error('[stripe webhook] STRIPE_WEBHOOK_SECRET not set');
    return NextResponse.json({ error: 'Webhook not configured.' }, { status: 500 });
  }

  const sig = req.headers.get('stripe-signature');
  if (!sig) {
    return NextResponse.json({ error: 'Missing signature.' }, { status: 400 });
  }

  const rawBody = await req.text();
  const stripe = requireStripe();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, secret);
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'unknown';
    console.error('[stripe webhook] signature verification failed:', msg);
    return NextResponse.json({ error: `Webhook Error: ${msg}` }, { status: 400 });
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session;
      console.log('[stripe webhook] checkout.session.completed', {
        id: session.id,
        email: session.customer_details?.email,
      });
      // No-op: the actual generation happens on the /generate/pro redirect.
      break;
    }
    case 'charge.refunded': {
      const charge = event.data.object as Stripe.Charge;
      const customerId =
        typeof charge.customer === 'string' ? charge.customer : charge.customer?.id;
      if (customerId) {
        await markRefunded(customerId);
        console.log('[stripe webhook] charge.refunded — marked', customerId);
      }
      break;
    }
    default:
      // Ignore everything else.
      break;
  }

  return NextResponse.json({ received: true });
}
