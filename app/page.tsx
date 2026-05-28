import Link from 'next/link';
import Button from '@/components/Button';

export default function LandingPage() {
  return (
    <>
      {/* ───────── HERO ───────── */}
      <section className="hero-band">
        <div className="max-w-page mx-auto px-5 sm:px-8 pt-20 pb-24 md:pt-28 md:pb-32 text-center">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-sage-deep/80">
            A SHE IS AI tool · in partnership with{' '}
            <span className="text-divergen font-medium">DivergenThinking</span>
          </p>
          <h1 className="mt-6 font-serif text-4xl sm:text-5xl md:text-6xl text-neutral-ink leading-[1.1] max-w-3xl mx-auto">
            Your brain profile, turned into a Claude skill.
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-neutral-ink/75 leading-relaxed">
            You've done the assessment. You've read the result. Now turn it into something
            your AI actually uses, every day.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button href="/generate" variant="primary" size="lg">
              Generate my skill — free
            </Button>
            <Button href="/generate?upgrade=1" variant="gold" size="lg">
              Get the Pro skill — $47
            </Button>
          </div>

          <p className="mt-6 text-xs text-neutral-ink/55">
            Built by SHE IS AI · No account needed · Your profile is deleted after generation
          </p>
        </div>
      </section>

      <div className="gold-rule max-w-page mx-auto my-0" />

      {/* ───────── HOW IT WORKS ───────── */}
      <section id="how-it-works" className="max-w-page mx-auto px-5 sm:px-8 py-20 md:py-24">
        <h2 className="font-serif text-3xl md:text-4xl text-neutral-ink text-center">
          How it works
        </h2>

        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            {
              n: '1',
              t: 'Bring your profile',
              b: 'Did the DivergenThinking card sort? Gallup StrengthsFinder? Working Genius? HBDI? Or just written about how you work? Upload it as text, PDF, or screenshot.',
            },
            {
              n: '2',
              t: 'Claude reads it',
              b: 'The tool reads your profile and builds a skill in your voice — how you work best, what helps, what trips you up, what motivates you.',
            },
            {
              n: '3',
              t: 'Download your skill',
              b: 'You get a .zip file ready to install in Claude. From then on, your AI works the way your brain works.',
            },
          ].map((step) => (
            <li
              key={step.n}
              className="relative rounded-2xl bg-white shadow-soft border border-neutral-warm/60 p-7"
            >
              <div className="absolute -top-4 left-7 inline-flex items-center justify-center w-9 h-9 rounded-full bg-sage text-white font-serif text-lg shadow-soft">
                {step.n}
              </div>
              <h3 className="mt-4 font-serif text-xl text-neutral-ink">{step.t}</h3>
              <p className="mt-3 text-neutral-ink/80 leading-relaxed">{step.b}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ───────── WHAT YOU GET ───────── */}
      <section id="whats-in" className="bg-sage-wash/40 border-y border-neutral-warm/60">
        <div className="max-w-page mx-auto px-5 sm:px-8 py-20 md:py-24">
          <h2 className="font-serif text-3xl md:text-4xl text-neutral-ink text-center">
            What's in your skill
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {/* FREE */}
            <div className="rounded-2xl bg-white border border-neutral-warm p-8 flex flex-col">
              <div className="text-xs uppercase tracking-[0.18em] text-sage-deep">Free</div>
              <h3 className="mt-2 font-serif text-2xl text-neutral-ink">Your Brain Skill</h3>
              <ul className="mt-6 space-y-3 text-neutral-ink/85 leading-relaxed flex-1">
                <li>“How I work best” — strengths-first summary</li>
                <li>“How to help me” — instructions your AI follows</li>
                <li>“My triggers” — what to avoid</li>
                <li>“What motivates me” — how to frame work</li>
                <li>Downloadable <code className="text-sm">.md</code> file</li>
                <li>Emailed to you</li>
              </ul>
              <div className="mt-7">
                <Button href="/generate" variant="primary" size="lg">
                  Generate my skill — free
                </Button>
              </div>
            </div>

            {/* PRO */}
            <div className="rounded-2xl bg-neutral-ink text-neutral-paper border border-neutral-ink p-8 flex flex-col relative overflow-hidden">
              <div className="absolute -right-12 -top-12 w-44 h-44 rounded-full bg-divergen/20 blur-2xl" />
              <div className="text-xs uppercase tracking-[0.18em] text-gold">Pro — $47 one-time</div>
              <h3 className="mt-2 font-serif text-2xl">Brain Skill+</h3>
              <p className="mt-2 text-neutral-paper/70 text-sm">
                Everything in the free skill, plus:
              </p>
              <ul className="mt-5 space-y-3 text-neutral-paper/90 leading-relaxed flex-1">
                <li>
                  <strong className="text-gold">Energy mapping</strong> — when you're sharp,
                  when you're not, and how your AI works with that
                </li>
                <li>
                  <strong className="text-gold">Overwhelm protocols</strong> — what your AI
                  does when you're overloaded
                </li>
                <li>
                  <strong className="text-gold">Decision support</strong> — how your AI helps
                  you decide (more options, narrow down, sleep on it, push for action —
                  whatever fits you)
                </li>
                <li>
                  <strong className="text-gold">COO integration</strong> — plugs straight into
                  the SHE IS AI COO agent
                </li>
                <li>Built with Claude Opus for depth and nuance</li>
                <li>
                  Downloadable <code className="text-sm">.zip</code> file with three files
                  ready to install
                </li>
                <li>30-day money-back, no questions</li>
              </ul>
              <div className="mt-7">
                <Button href="/generate?upgrade=1" variant="gold" size="lg">
                  Get the Pro skill — $47
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── WHO IT'S FOR ───────── */}
      <section className="max-w-page mx-auto px-5 sm:px-8 py-20 md:py-24">
        <h2 className="font-serif text-3xl md:text-4xl text-neutral-ink text-center">
          Who this is for
        </h2>
        <div className="max-w-prose mx-auto mt-8 space-y-5 text-lg text-neutral-ink/85 leading-relaxed">
          <p>
            This tool is for anyone who's done a structured profile — a card sort, a strengths
            test, a thinking-style assessment, a personality framework — and wants their AI to
            actually use it.
          </p>
          <p>
            It's also for anyone who hasn't done a formal profile but knows how they work and
            can write about it.
          </p>
        </div>

        <div className="mt-10 max-w-prose mx-auto rounded-2xl bg-neutral-paper border border-neutral-warm p-6">
          <p className="text-xs uppercase tracking-[0.18em] text-sage-deep mb-3">It works with</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 text-neutral-ink/85">
            <li>DivergenThinking card sort</li>
            <li>Gallup CliftonStrengths</li>
            <li>Working Genius</li>
            <li>HBDI / Herrmann Brain Dominance</li>
            <li>MBTI / Myers-Briggs</li>
            <li>Enneagram</li>
            <li>DISC</li>
            <li>Any other thinking-style or personality profile</li>
            <li className="sm:col-span-2">Or just your own writing about how you work best</li>
          </ul>
        </div>

        <div className="mt-10 max-w-prose mx-auto border-l-4 border-divergen pl-5 py-2">
          <p className="text-neutral-ink/90 leading-relaxed">
            This isn't a wellness tool. It's not going to tell you what's “wrong” with you.
            There is nothing wrong with you. This treats your wiring as the design spec, not a
            problem to be fixed.
          </p>
        </div>
      </section>

      {/* ───────── FAQ ───────── */}
      <section className="bg-sage-wash/40 border-y border-neutral-warm/60">
        <div className="max-w-page mx-auto px-5 sm:px-8 py-20 md:py-24">
          <h2 className="font-serif text-3xl md:text-4xl text-neutral-ink text-center">
            Things you might be wondering
          </h2>

          <div className="mt-12 max-w-3xl mx-auto space-y-3">
            {FAQ.map((q) => (
              <details
                key={q.q}
                className="group rounded-xl bg-white border border-neutral-warm/80 p-5 open:shadow-soft"
              >
                <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                  <span className="font-serif text-lg text-neutral-ink">{q.q}</span>
                  <span className="text-sage-deep text-2xl leading-none select-none transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div
                  className="mt-3 text-neutral-ink/85 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: q.a }}
                />
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── FINAL CTA ───────── */}
      <section className="max-w-page mx-auto px-5 sm:px-8 py-20 md:py-28 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-neutral-ink">
          Ready to make your AI work the way your brain works?
        </h2>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Button href="/generate" variant="primary" size="lg">
            Generate my skill — free
          </Button>
          <Button href="/generate?upgrade=1" variant="gold" size="lg">
            Get the Pro skill — $47
          </Button>
        </div>
        <p className="mt-6 text-xs text-neutral-ink/55">
          Or read{' '}
          <Link className="underline hover:text-divergen" href="/how-to-install">
            how to install
          </Link>{' '}
          before you start.
        </p>
      </section>
    </>
  );
}

const FAQ: { q: string; a: string }[] = [
  {
    q: "What's a skill?",
    a: 'A skill is a file Claude reads to learn how to work with you. Once you install it, Claude follows the instructions in it every time it helps you. Think of it as a working agreement between you and your AI.',
  },
  {
    q: 'How do I install it?',
    a: 'Once you download the <code>.zip</code>, drop the files into your Claude project (or Claude Desktop / Cowork). We send you step-by-step instructions with the file. Takes about 90 seconds.',
  },
  {
    q: 'Do I need to be technical?',
    a: 'No. If you can drag a file into a folder, you can install this.',
  },
  {
    q: 'Do you store my profile?',
    a: 'No. We delete the profile content from our server the moment the skill is generated. We keep your email (so we can send you the file) and we tell our email tool whether you bought the Pro version. That\'s it.',
  },
  {
    q: 'What if my profile is just my own writing?',
    a: 'That works. The tool reads whatever you give it — a formal report, a few paragraphs, a screenshot, a PDF. The more specific you are, the better the skill.',
  },
  {
    q: "What's the difference between free and Pro?",
    a: 'Free is a solid skill — strengths, working style, triggers, motivators. Pro adds energy mapping, overwhelm protocols, decision support, and a COO integration layer — plus it\'s built with Claude Opus, so the output is noticeably deeper.',
  },
  {
    q: 'Is the Pro tier a subscription?',
    a: 'No. One-time $47. You own the skill.',
  },
  {
    q: 'Can I use this with ChatGPT or Gemini?',
    a: 'The skill is built in Claude\'s skill format, so it works in Claude. You can adapt the content for other AIs — the writing is in plain English — but the install process is Claude-specific.',
  },
  {
    q: "What if it's not useful?",
    a: '30-day money-back on Pro, no questions. Just email us.',
  },
  {
    q: 'Who built this?',
    a: 'Amanda Jeffs — founder of SHE IS AI. She helps people and small businesses work better with AI. This tool is part of a bigger set of practical AI tools for real people doing real work.',
  },
];
