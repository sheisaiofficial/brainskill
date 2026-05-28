import Link from 'next/link';

export const metadata = {
  title: 'How to install your Brain Skill',
};

export default function HowToInstall() {
  return (
    <div className="max-w-prose mx-auto px-5 sm:px-8 py-16 md:py-20">
      <p className="text-xs uppercase tracking-[0.2em] text-sage-deep/80">
        Install guide
      </p>
      <h1 className="mt-3 font-serif text-4xl md:text-5xl text-neutral-ink leading-[1.1]">
        How to use your Brain Skill.
      </h1>
      <p className="mt-4 text-lg text-neutral-ink/75">
        Welcome to your Brain Skill. Here's how to get it working — takes about 90 seconds.
      </p>

      <div className="gold-rule my-10" />

      <h2 className="font-serif text-2xl text-neutral-ink mt-12">
        Step 1: Install the skill (90 seconds)
      </h2>

      <h3 className="font-serif text-xl text-neutral-ink mt-6">
        Claude Desktop or Cowork
      </h3>
      <ol className="mt-3 list-decimal pl-6 space-y-1 text-neutral-ink/85 leading-relaxed">
        <li>Open Claude</li>
        <li>Go to Settings → Skills → Add skill</li>
        <li>
          Drag the <code>.zip</code> file in (or drop in just the <code>SKILL.md</code> for
          the free version)
        </li>
        <li>Done.</li>
      </ol>

      <h3 className="font-serif text-xl text-neutral-ink mt-6">
        claude.ai in the browser
      </h3>
      <ol className="mt-3 list-decimal pl-6 space-y-1 text-neutral-ink/85 leading-relaxed">
        <li>Open your project</li>
        <li>
          Add the contents of <code>SKILL.md</code> to your project knowledge
        </li>
        <li>
          For Pro: add <code>brand-reference.md</code> too
        </li>
        <li>Save.</li>
      </ol>

      <h2 className="font-serif text-2xl text-neutral-ink mt-12">
        Step 2: Test that it's working
      </h2>
      <p className="mt-3 text-neutral-ink/85 leading-relaxed">
        Open a new Claude conversation and say:
      </p>
      <blockquote className="my-4 border-l-4 border-sage pl-4 italic text-neutral-ink/85">
        “Plan my day. I've got these things: [list 5–6 things]”
      </blockquote>
      <p className="text-neutral-ink/85 leading-relaxed">You should notice:</p>
      <ul className="mt-2 list-disc pl-6 space-y-1 text-neutral-ink/85 leading-relaxed">
        <li>Claude leads with the bigger picture, not a checklist</li>
        <li>It surfaces no more than three big things</li>
        <li>It puts creative work in your sharp window</li>
        <li>It batches admin into your dip window</li>
      </ul>
      <p className="mt-3 text-neutral-ink/85 leading-relaxed">
        If Claude does the generic “here's a numbered list of 8 things” response, the skill
        isn't loaded properly. Reinstall.
      </p>

      <h2 className="font-serif text-2xl text-neutral-ink mt-12">
        Step 3: Plug into the COO agent (Pro)
      </h2>
      <p className="mt-3 text-neutral-ink/85 leading-relaxed">
        Head to{' '}
        <a
          className="text-divergen underline hover:text-divergen-deep"
          href="https://coo.sheisai.ai"
        >
          coo.sheisai.ai
        </a>
        .
      </p>
      <p className="mt-3 text-neutral-ink/85 leading-relaxed">
        When the COO agent asks for your context, paste in your <code>SKILL.md</code> content
        (or upload the file). The COO agent will use it to drive your daily operating prompt.
      </p>
      <p className="mt-3 text-neutral-ink/85 leading-relaxed">
        From then on, every time you run your COO, it works with your wiring.
      </p>

      <h2 className="font-serif text-2xl text-neutral-ink mt-12">
        Step 4: Update when things change
      </h2>
      <p className="mt-3 text-neutral-ink/85 leading-relaxed">
        You're not a static profile. If you do a new card sort, learn something new about how
        you work, or change your energy pattern (different season, new role, new schedule) —
        come back to{' '}
        <Link href="/" className="underline text-divergen hover:text-divergen-deep">
          brainskill.sheisai.ai
        </Link>{' '}
        and generate a fresh skill.
      </p>
      <p className="mt-3 text-neutral-ink/85 leading-relaxed">You own this. It changes with you.</p>

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
