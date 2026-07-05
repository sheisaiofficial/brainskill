import Link from 'next/link';
import Button from '@/components/Button';

export default function LandingPage() {
  return (
    <>
      {/* ───────── HERO ───────── */}
      <section className="hero-band">
        <div className="max-w-page mx-auto px-5 sm:px-8 pt-20 pb-24 md:pt-28 md:pb-32 text-center">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-sage-deep/80">
            A SHE IS AI tool
          </p>
          <h1 className="mt-6 font-serif text-4xl sm:text-5xl md:text-6xl text-neutral-ink leading-[1.1] max-w-3xl mx-auto">
            A Claude skill that protects your peace.
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-neutral-ink/75 leading-relaxed">
            Your AI already helps you do more. This teaches it to help you live well —
            your self-care routines kept alive, your week planned around your energy,
            your work-life balance actually defended.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button href="/generate" variant="primary" size="lg">
              Generate my Peace Skill — free
            </Button>
            <Button href="/generate?upgrade=1" variant="gold" size="lg">
              Get the Pro skill — $47
            </Button>
          </div>

          <p className="mt-6 text-xs text-neutral-ink/55">
            Built by SHE IS AI · No account needed · What you share is deleted after generation
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
              t: 'Tell it about your life',
              b: 'Describe a typical week, your routines (kept and skipped), what restores you, where balance slips. Paste text, upload a PDF, or drop in your Brain Skill file.',
            },
            {
              n: '2',
              t: 'Claude reads it',
              b: 'The tool builds a skill in your voice — what peace looks like for you, your non-negotiables, your warning signs, and exactly how your AI should protect them.',
            },
            {
              n: '3',
              t: 'Download your skill',
              b: 'You get a file ready to install in Claude. From then on, every plan your AI makes has your wellbeing built in — not bolted on.',
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
            What&apos;s in your skill
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {/* FREE */}
            <div className="rounded-2xl bg-white border border-neutral-warm p-8 flex flex-col">
              <div className="text-xs uppercase tracking-[0.18em] text-sage-deep">Free</div>
              <h3 className="mt-2 font-serif text-2xl text-neutral-ink">Your Peace Skill</h3>
              <ul className="mt-6 space-y-3 text-neutral-ink/85 leading-relaxed flex-1">
                <li>&ldquo;What peace looks like for me&rdquo; — in your own voice</li>
                <li>&ldquo;My non-negotiables&rdquo; — the routines your AI defends</li>
                <li>&ldquo;How to help me&rdquo; — week planning, boundaries, winding down</li>
                <li>&ldquo;My warning signs&rdquo; — how it looks when balance slips</li>
                <li>&ldquo;What restores me&rdquo; — so your AI can suggest the right reset</li>
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
              <h3 className="mt-2 font-serif text-2xl">Peace Skill+</h3>
              <p className="mt-2 text-neutral-paper/70 text-sm">
                Everything in the free skill, plus:
              </p>
              <ul className="mt-5 space-y-3 text-neutral-paper/90 leading-relaxed flex-1">
                <li>
                  <strong className="text-gold">Your weekly rhythm</strong> — an ideal,
                  sustainable week your AI plans inside, not over
                </li>
                <li>
                  <strong className="text-gold">Running-on-empty protocol</strong> — the exact
                  steps your AI takes when you&apos;re depleted
                </li>
                <li>
                  <strong className="text-gold">Balance check-ins</strong> — your AI scans every
                  plan for stacked evenings, skipped routines, and missing white space
                </li>
                <li>
                  <strong className="text-gold">Brain Skill + COO integration</strong> — your
                  Brain Skill governs how you work; this governs how you sustain it
                </li>
                <li>Built with Claude Opus for depth and nuance</li>
                <li>
                  Downloadable <code className="text-sm">.zip</code> with three files
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
            This is for anyone whose AI makes their to-do list longer but never asks when
            they last had a day off. For the person whose self-care routine survives exactly
            until the first busy week. For anyone building a business who doesn&apos;t want
            to burn down their life to do it.
          </p>
          <p>
            You don&apos;t need a formal assessment. You just need to be honest about what
            your weeks actually look like — and what you want them to look like.
          </p>
        </div>

        <div className="mt-10 max-w-prose mx-auto border-l-4 border-divergen pl-5 py-2">
          <p className="text-neutral-ink/90 leading-relaxed">
            This isn&apos;t a productivity tool wearing a wellness mask. It treats rest as
            productive, boundaries as infrastructure, and your peace as something your AI
            is responsible for protecting — not spending.
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
          Ready for an AI that defends your peace, not just your deadlines?
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
    q: 'How is this different from the Brain Skill?',
    a: 'The Brain Skill (brainskill.sheisai.ai) teaches your AI how you work best — your thinking style, your strengths, your motivators. The Peace Skill teaches your AI how you stay well — your routines, your boundaries, your rhythm. They\'re designed to be installed together: one governs how you work, the other governs how you sustain it.',
  },
  {
    q: 'How do I install it?',
    a: 'Once you download the file, drop it into your Claude project (or Claude Desktop / Cowork). We send you step-by-step instructions with the file. Takes about 90 seconds.',
  },
  {
    q: 'Do you store what I share?',
    a: 'No. We delete what you shared from our server the moment the skill is generated. We keep your email (so we can send you the file) and we tell our email tool whether you bought the Pro version. That\'s it.',
  },
  {
    q: 'Is this therapy or mental-health advice?',
    a: 'No. The Peace Skill supports routines, planning, and balance — it doesn\'t diagnose or treat anything, and it will encourage you to talk to a qualified professional where that\'s the right move. If you\'re struggling, please reach out to someone qualified.',
  },
  {
    q: "What's the difference between free and Pro?",
    a: 'Free is a solid skill — your peace picture, non-negotiables, warning signs, and how your AI should help. Pro adds your weekly rhythm map, a running-on-empty protocol, balance check-ins, and Brain Skill + COO integration — plus it\'s built with Claude Opus, so the output is noticeably deeper.',
  },
  {
    q: 'Is the Pro tier a subscription?',
    a: 'No. One-time $47. You own the skill.',
  },
  {
    q: "What if it's not useful?",
    a: '30-day money-back on Pro, no questions. Just email us.',
  },
  {
    q: 'Who built this?',
    a: 'Amanda Jeffs — founder of SHE IS AI. She helps people and small businesses work better with AI. Peace Skill is part of the SHE IS AI intelligence layer: a set of tools that help your AI work with all of you — brain, business, and wellbeing.',
  },
];
