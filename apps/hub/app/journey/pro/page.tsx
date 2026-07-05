import { redirect } from 'next/navigation';
import JourneyForm from '@/components/JourneyForm';
import { verifyProSession } from '@/lib/stripe';

export const metadata = {
  title: 'Pro synthesis · SHE IS AI Intelligence Layer',
};

export default async function ProJourneyPage({
  searchParams,
}: {
  searchParams: { session_id?: string };
}) {
  const sessionId = searchParams.session_id;

  if (!sessionId) {
    redirect('/?error=missing-session');
  }

  let verified;
  try {
    verified = await verifyProSession(sessionId);
  } catch (err) {
    console.error('[/journey/pro] Stripe verify failed:', err);
    redirect('/?error=verify-failed');
  }

  if (!verified.paid) {
    redirect('/?error=not-paid');
  }

  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-16 md:py-20">
      <p className="text-xs uppercase tracking-[0.2em] text-gold-muted">
        Pro synthesis · Five files · Built with Claude Opus
      </p>
      <h1 className="mt-3 font-serif text-4xl md:text-5xl text-neutral-ink leading-[1.1]">
        Welcome — let&apos;s run your full synthesis.
      </h1>
      <p className="mt-4 text-lg text-neutral-ink/75">
        Payment received. Bring your lenses and we&apos;ll build the deep version — the full
        Intelligence Layer Report, both skills, your consciousness index, and your personal
        AI governance file.
      </p>

      <div className="mt-10 rounded-2xl border border-divergen/30 bg-neutral-paper shadow-soft p-7 sm:p-9 relative">
        <div className="absolute -top-3 left-7 inline-flex items-center bg-gold text-neutral-ink text-xs font-semibold px-3 py-1 rounded-full">
          PRO
        </div>
        <JourneyForm tier="pro" stripeSessionId={sessionId} initialEmail={verified.email || ''} />
      </div>

      <div className="gold-rule my-12" />

      <div className="text-sm text-neutral-ink/70 max-w-prose">
        <p>
          You can re-run your synthesis from this page anytime within the next 24 hours by
          returning to this URL. After that, your Pro receipt is the proof of purchase — email{' '}
          <a className="underline hover:text-divergen" href="mailto:hello@sheisai.ai">
            hello@sheisai.ai
          </a>{' '}
          if you need a re-run.
        </p>
      </div>
    </div>
  );
}
