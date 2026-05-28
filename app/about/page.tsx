import Link from 'next/link';
import Button from '@/components/Button';

export const metadata = { title: 'About · Brain Skill' };

export default function About() {
  return (
    <div className="max-w-prose mx-auto px-5 sm:px-8 py-16 md:py-20">
      <p className="text-xs uppercase tracking-[0.2em] text-sage-deep/80">About</p>
      <h1 className="mt-3 font-serif text-4xl md:text-5xl text-neutral-ink leading-[1.1]">
        Built so your AI works the way your brain works.
      </h1>

      <div className="gold-rule my-10" />

      <div className="space-y-5 text-neutral-ink/85 leading-relaxed text-lg">
        <p>
          Most AI tools treat everyone the same. They give you the same plan, the same options,
          the same numbered list of eight things. That's fine if you're average. Most people
          aren't.
        </p>
        <p>
          Brain Skill takes how you actually work — your card-sort result, your strengths
          report, your own writing about your wiring — and turns it into a skill your Claude
          reads every time you ask it for help. From then on, your AI plans the day the way
          you actually work the day.
        </p>
        <p>
          It's strengths-based. It's not a diagnosis, not a label, not a productivity
          framework. It's a working agreement between you and your AI.
        </p>

        <h2 className="font-serif text-2xl text-neutral-ink mt-10">Who's behind it</h2>
        <p>
          Built by <strong>Amanda Jeffs</strong>, founder of{' '}
          <a className="underline hover:text-divergen" href="https://sheisai.ai">
            SHE IS AI
          </a>
          . SHE IS AI helps people and small businesses work better with AI — practically, in
          plain English, without the wellness fluff. This tool is part of a bigger set of
          practical AI tools for real people doing real work.
        </p>
        <p>
          The methodology behind Brain Skill draws on{' '}
          <a
            className="underline text-divergen hover:text-divergen-deep"
            href="https://divergenthinking.learnworlds.com/start"
          >
            DivergenThinking
          </a>{' '}
          — a brain-wiring-as-design-spec approach (not as deficit). If you haven't done a
          card sort, that's a great place to start.
        </p>

        <h2 className="font-serif text-2xl text-neutral-ink mt-10">Where we are</h2>
        <p>Tauranga, Aotearoa New Zealand.</p>
      </div>

      <div className="mt-12 flex flex-col sm:flex-row gap-4">
        <Button href="/generate" variant="primary" size="lg">
          Generate my skill — free
        </Button>
        <Button href="/generate?upgrade=1" variant="gold" size="lg">
          Get the Pro skill — $47
        </Button>
      </div>

      <p className="mt-10 text-sm text-neutral-ink/60">
        Email <a className="underline hover:text-divergen" href="mailto:hello@sheisai.ai">hello@sheisai.ai</a>{' '}
        or head <Link className="underline hover:text-divergen" href="/">back home</Link>.
      </p>
    </div>
  );
}
