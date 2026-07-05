import Stripe from 'stripe';

const secret = process.env.STRIPE_SECRET_KEY;

export const stripe = secret
  ? new Stripe(secret, { apiVersion: '2024-12-18.acacia' as Stripe.LatestApiVersion })
  : null;

export function requireStripe(): Stripe {
  if (!stripe) {
    throw new Error('STRIPE_SECRET_KEY is not configured.');
  }
  return stripe;
}

export async function createProCheckoutSession(email: string): Promise<string> {
  const s = requireStripe();
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://peaceskill.sheisai.ai';
  const priceId = process.env.STRIPE_PRICE_ID_PRO;

  if (!priceId) {
    throw new Error('STRIPE_PRICE_ID_PRO is not set.');
  }

  const session = await s.checkout.sessions.create({
    mode: 'payment',
    line_items: [{ price: priceId, quantity: 1 }],
    customer_email: email,
    success_url: `${appUrl}/generate/pro?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${appUrl}/`,
    allow_promotion_codes: true,
    payment_intent_data: {
      metadata: { product: 'peaceskill-pro' },
    },
    metadata: { product: 'peaceskill-pro' },
  });

  if (!session.url) {
    throw new Error('Stripe did not return a checkout URL.');
  }

  return session.url;
}

export async function verifyProSession(sessionId: string): Promise<{
  paid: boolean;
  email: string | null;
  customerId: string | null;
}> {
  const s = requireStripe();
  const session = await s.checkout.sessions.retrieve(sessionId);
  return {
    paid: session.payment_status === 'paid',
    email: session.customer_details?.email ?? session.customer_email ?? null,
    customerId:
      typeof session.customer === 'string' ? session.customer : session.customer?.id ?? null,
  };
}
