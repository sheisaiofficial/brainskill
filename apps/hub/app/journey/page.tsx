import { Suspense } from 'react';
import JourneyForm from '@/components/JourneyForm';
import UpgradeRedirect from './UpgradeRedirect';

export const metadata = {
  title: 'Begin the journey · SHE IS AI Intelligence Layer',
};

export default function JourneyPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-16 md:py-20">
      <p className="text-xs uppercase tracking-[0.2em] text-sage-deep/80">
        Level 1 · The Soul level · SHE IS AI × SHE IS SOL
      </p>
      <h1 className="mt-3 font-serif text-4xl md:text-5xl text-neutral-ink leading-[1.1]">
        Bring every lens. Leave with your Intelligence Layer.
      </h1>
      <p className="mt-4 text-lg text-neutral-ink/75">
        Step through the lenses below — assessments, energetic systems, your own words. Bring
        what you have; skip what you don&apos;t. Claude weaves it into your Intelligence Layer
        Report and two skills your AI reads from that day on.
      </p>

      <div className="mt-10 rounded-2xl border border-neutral-warm bg-neutral-paper shadow-soft p-7 sm:p-9">
        <Suspense fallback={null}>
          <UpgradeRedirect />
        </Suspense>
        <JourneyForm tier="free" />
      </div>

      <div className="gold-rule my-12" />

      <div className="text-sm text-neutral-ink/70 max-w-prose">
        <p>
          <strong>Privacy:</strong> what you share is sent to Anthropic to run the synthesis,
          then deleted. We keep your email and a timestamp — never the content. Read the{' '}
          <a href="/privacy" className="underline hover:text-divergen">
            privacy page
          </a>{' '}
          for the full picture.
        </p>
      </div>
    </div>
  );
}
