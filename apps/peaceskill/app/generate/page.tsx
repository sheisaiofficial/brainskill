import { Suspense } from 'react';
import GenerateForm from '@/components/GenerateForm';
import UpgradeRedirect from './UpgradeRedirect';

export const metadata = {
  title: 'Generate your skill — free · Peace Skill',
};

export default function GeneratePage() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-16 md:py-20">
      <p className="text-xs uppercase tracking-[0.2em] text-sage-deep/80">
        Free tier · One file · Emailed + downloaded
      </p>
      <h1 className="mt-3 font-serif text-4xl md:text-5xl text-neutral-ink leading-[1.1]">
        Generate your Peace Skill.
      </h1>
      <p className="mt-4 text-lg text-neutral-ink/75">
        Tell us about your life and your weeks. We'll read it, build the skill, and email it
        through. Takes about a minute.
      </p>

      <div className="mt-10 rounded-2xl border border-neutral-warm bg-neutral-paper shadow-soft p-7 sm:p-9">
        <Suspense fallback={null}>
          <UpgradeRedirect />
        </Suspense>
        <GenerateForm tier="free" />
      </div>

      <div className="gold-rule my-12" />

      <div className="text-sm text-neutral-ink/70 max-w-prose">
        <p>
          <strong>Privacy:</strong> what you share is sent to Anthropic to generate the skill,
          then deleted. We keep your email and a timestamp. Read the{' '}
          <a href="/privacy" className="underline hover:text-divergen">
            privacy page
          </a>{' '}
          for the full picture.
        </p>
      </div>
    </div>
  );
}
