import Button from '@/components/Button';

export const metadata = { title: 'About · Peace Skill' };

export default function About() {
  return (
    <div className="max-w-prose mx-auto px-5 sm:px-8 py-16 md:py-20">
      <p className="text-xs uppercase tracking-[0.2em] text-sage-deep/80">About</p>
      <h1 className="mt-3 font-serif text-4xl md:text-5xl text-neutral-ink leading-[1.1]">
        Built so your AI protects your peace, not just your output.
      </h1>

      <div className="gold-rule my-10" />

      <div className="space-y-5 text-neutral-ink/85 leading-relaxed text-lg">
        <p>
          AI is very good at helping you do more. Left to itself, it will happily fill every
          gap in your calendar with more doing. Nothing in it knows that you haven&apos;t had a
          proper weekend in a month, that your morning walk is the thing holding the week
          together, or that Thursday nights are sacred.
        </p>
        <p>
          Peace Skill fixes that. It takes what you tell it about your life — your routines,
          your rhythms, what restores you, where balance slips — and turns it into a skill
          your Claude reads every time you ask it for help. From then on, your AI plans your
          week around your life, not through it.
        </p>
        <p>
          It&apos;s not therapy and it&apos;s not a wellness program. It&apos;s a working
          agreement between you and your AI: rest is productive, boundaries are
          infrastructure, and no plan is a good plan if it costs you your peace.
        </p>

        <h2 className="font-serif text-2xl text-neutral-ink mt-10">Part of something bigger</h2>
        <p>
          Peace Skill is one layer of the SHE IS AI intelligence layer. The{' '}
          <a className="underline hover:text-divergen" href="https://brainskill.sheisai.ai">
            Brain Skill
          </a>{' '}
          teaches your AI how you work best. The Peace Skill teaches it how you stay well.
          Together they feed the{' '}
          <a className="underline hover:text-divergen" href="https://intelligence.sheisai.ai">
            SHE IS AI intelligence layer
          </a>{' '}
          — a complete picture of you that your AI, and every agent you build, inherits.
        </p>

        <h2 className="font-serif text-2xl text-neutral-ink mt-10">Who&apos;s behind it</h2>
        <p>
          Built by <strong>Amanda Jeffs</strong>, founder of{' '}
          <a className="underline hover:text-divergen" href="https://sheisai.ai">
            SHE IS AI
          </a>
          . SHE IS AI helps people and small businesses work better with AI — practically, in
          plain English, without the wellness fluff. This tool is part of a bigger set of
          practical AI tools for real people doing real work.
        </p>
      </div>

      <div className="mt-12">
        <Button href="/generate" variant="primary" size="lg">
          Generate my Peace Skill — free
        </Button>
      </div>
    </div>
  );
}
