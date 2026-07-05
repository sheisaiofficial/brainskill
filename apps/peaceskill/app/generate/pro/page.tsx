import { redirect } from 'next/navigation';
import GenerateForm from '@/components/GenerateForm';
import { verifyProSession } from '@/lib/stripe';

export const metadata = {
  title: 'Generate your Pro skill · Peace Skill',
};

export default async function ProGeneratePage({
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
    console.error('[/generate/pro] Stripe verify failed:', err);
    redirect('/?error=verify-failed');
  }

  if (!verified.paid) {
    redirect('/?error=not-paid');
  }

  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-16 md:py-20">
      <p className="text-xs uppercase tracking-[0.2em] text-gold-muted">
        Pro tier · Three files · Built with Claude Opus
      </p>
      <h1 className="mt-3 font-serif text-4xl md:text-5xl text-neutral-ink leading-[1.1]">
        Welcome — let's build your Pro skill.
      </h1>
      <p className="mt-4 text-lg text-neutral-ink/75">
        Payment received. Drop in your profile and we'll build the deeper version — with energy
        mapping, overwhelm protocols, decision support, and COO integration.
      </p>

      <div className="mt-10 rounded-2xl border border-divergen/30 bg-neutral-paper shadow-soft p-7 sm:p-9 relative">
        <div className="absolute -top-3 left-7 inline-flex items-center bg-gold text-neutral-ink text-xs font-semibold px-3 py-1 rounded-full">
          PRO
        </div>
        <GenerateForm
          tier="pro"
          stripeSessionId={sessionId}
          initialEmail={verified.email || ''}
        />
      </div>

      <div className="gold-rule my-12" />

      <div className="text-sm text-neutral-ink/70 max-w-prose">
        <p>
          You can re-generate from this page anytime within the next 24 hours by returning to
          this URL. After that, your Pro receipt is the proof of purchase — email{' '}
          <a className="underline hover:text-divergen" href="mailto:hello@sheisai.ai">
            hello@sheisai.ai
          </a>{' '}
          if you need a re-generation.
        </p>
      </div>
    </div>
  );
}
