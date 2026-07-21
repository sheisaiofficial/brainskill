import Link from 'next/link';

export const metadata = {
  title: 'How to install your Intelligence Layer',
};

export default function HowToInstall() {
  return (
    <div className="max-w-prose mx-auto px-5 sm:px-8 py-16 md:py-20">
      <p className="text-xs uppercase tracking-[0.2em] text-sage-deep/80">
        Install guide
      </p>
      <h1 className="mt-3 font-serif text-4xl md:text-5xl text-neutral-ink leading-[1.1]">
        How to use your Intelligence Layer.
      </h1>
      <p className="mt-4 text-lg text-neutral-ink/75">
        Your zip holds your report and your skills. Here&apos;s how to get them working —
        takes about two minutes.
      </p>

      <div className="gold-rule my-10" />

      <h2 className="font-serif text-2xl text-neutral-ink mt-12">
        What&apos;s in the zip
      </h2>
      <ul className="mt-3 list-disc pl-6 space-y-1 text-neutral-ink/85 leading-relaxed">
        <li>
          <code>intelligence-report.md</code> — your map. Read it first. It&apos;s for you,
          not for the AI.
        </li>
        <li>
          <code>SKILL.md</code> — the Intelligence Layer skill: teaches your AI who it&apos;s
          working with.
        </li>
        <li>
          <code>intelligence-support-SKILL.md</code> — day-to-day support: decisions,
          alignment checks, stuck moments.
        </li>
        <li>
          Pro adds <code>consciousness-index.json</code> (the machine-readable map) and{' '}
          <code>GOVERNANCE.md</code> (your values as operating rules).
        </li>
      </ul>

      <h2 className="font-serif text-2xl text-neutral-ink mt-12">
        Step 1: Install the skills
      </h2>

      <h3 className="font-serif text-xl text-neutral-ink mt-6">
        Claude Desktop or Cowork
      </h3>
      <ol className="mt-3 list-decimal pl-6 space-y-1 text-neutral-ink/85 leading-relaxed">
        <li>Open Claude</li>
        <li>Go to Settings → Skills → Add skill</li>
        <li>
          Add <code>SKILL.md</code> and <code>intelligence-support-SKILL.md</code> as two
          separate skills
        </li>
        <li>Done.</li>
      </ol>

      <h3 className="font-serif text-xl text-neutral-ink mt-6">
        claude.ai in the browser
      </h3>
      <ol className="mt-3 list-decimal pl-6 space-y-1 text-neutral-ink/85 leading-relaxed">
        <li>Open (or create) your personal project</li>
        <li>Add the contents of both skill files to your project knowledge</li>
        <li>
          Pro: add <code>GOVERNANCE.md</code> and <code>consciousness-index.json</code> too —
          they govern everything the project does
        </li>
        <li>Save.</li>
      </ol>

      <h2 className="font-serif text-2xl text-neutral-ink mt-12">
        Step 2: Test that it&apos;s working
      </h2>
      <p className="mt-3 text-neutral-ink/85 leading-relaxed">
        Open a new Claude conversation and ask:
      </p>
      <blockquote className="my-4 border-l-4 border-sage pl-4 italic text-neutral-ink/85">
        &ldquo;Based on what you know about me, is [a real decision you&apos;re weighing]
        aligned with who I am?&rdquo;
      </blockquote>
      <p className="text-neutral-ink/85 leading-relaxed">You should notice:</p>
      <ul className="mt-2 list-disc pl-6 space-y-1 text-neutral-ink/85 leading-relaxed">
        <li>Claude answers from YOUR map — your strengths, drivers, and tensions by name</li>
        <li>It checks the decision against where you said you&apos;re headed</li>
        <li>It pushes back when something conflicts with who you are</li>
      </ul>
      <p className="mt-3 text-neutral-ink/85 leading-relaxed">
        If the answer is generic, the skills aren&apos;t loaded properly. Reinstall.
      </p>

      <h2 className="font-serif text-2xl text-neutral-ink mt-12">
        Step 3: Feed the rest of your tools
      </h2>
      <p className="mt-3 text-neutral-ink/85 leading-relaxed">
        Your Intelligence Layer is the base every other SHE IS AI tool builds on. Bring it to{' '}
        <a className="text-divergen underline hover:text-divergen-deep" href="https://coo.sheisai.ai">
          coo.sheisai.ai
        </a>{' '}
        so your operations agent knows who it works for, and pair it with your{' '}
        <a className="text-divergen underline hover:text-divergen-deep" href="https://brainskill.sheisai.ai">
          Brain Skill
        </a>{' '}
        and{' '}
        <a className="text-divergen underline hover:text-divergen-deep" href="https://peaceskill.sheisai.ai">
          Peace Skill
        </a>
        . When you build agents later, they all inherit this layer.
      </p>

      <h2 className="font-serif text-2xl text-neutral-ink mt-12">
        Step 4: Update when you change
      </h2>
      <p className="mt-3 text-neutral-ink/85 leading-relaxed">
        You&apos;re not a static profile. New assessment, new season, new phase — come back to{' '}
        <Link href="/journey" className="underline text-divergen hover:text-divergen-deep">
          the journey
        </Link>{' '}
        and run a fresh synthesis. You own this. It changes with you.
      </p>

      <div className="gold-rule my-12" />

      <p className="text-sm text-neutral-ink/65">
        Questions? Email{' '}
        <a className="underline hover:text-divergen" href="mailto:hello@sheisai.ai">
          hello@sheisai.ai
        </a>
        . We read everything.
      </p>
    </div>
  );
}
