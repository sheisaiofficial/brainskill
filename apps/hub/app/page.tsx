import Link from 'next/link';
import Button from '@/components/Button';
import { METHODOLOGIES, CATEGORIES } from '@/lib/methodologies';

export default function LandingPage() {
  return (
    <>
      {/* ───────── HERO ───────── */}
      <section className="hero-band">
        <div className="max-w-page mx-auto px-5 sm:px-8 pt-20 pb-24 md:pt-28 md:pb-32 text-center">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-sage-deep/80">
            SHE IS AI · The Intelligence Layer
          </p>
          <h1 className="mt-6 font-serif text-4xl sm:text-5xl md:text-6xl text-neutral-ink leading-[1.1] max-w-3xl mx-auto">
            AI that works with your consciousness, not just your calendar.
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-neutral-ink/75 leading-relaxed">
            Bring every lens you have — your brain profile, Human Design, astrology,
            Myers-Briggs, DISC, numerology, your own words. Leave with your Intelligence
            Layer: one coherent map of who you are, and the files that teach your AI to
            work with all of it.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button href="/journey" variant="primary" size="lg">
              Begin the journey — free
            </Button>
            <Button href="/journey?upgrade=1" variant="gold" size="lg">
              Full synthesis — $97
            </Button>
          </div>

          <p className="mt-6 text-xs text-neutral-ink/55">
            Built by SHE IS AI · No account needed · What you share is deleted after synthesis
          </p>
        </div>
      </section>

      <div className="gold-rule max-w-page mx-auto my-0" />

      {/* ───────── THE THREE LEVELS ───────── */}
      <section className="max-w-page mx-auto px-5 sm:px-8 py-20 md:py-24">
        <h2 className="font-serif text-3xl md:text-4xl text-neutral-ink text-center">
          Three levels. Built in order.
        </h2>
        <p className="mt-4 text-center text-neutral-ink/70 max-w-2xl mx-auto text-lg">
          First understand yourself. Then understand the machine. Then bring it all into
          the world.
        </p>

        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            {
              n: 'Level 1',
              tag: 'Soul',
              t: 'Understand yourself',
              b: 'Every lens you have, woven into one Intelligence Layer — your map, your skills, your governance. This is what this site does. You are here.',
              here: true,
            },
            {
              n: 'Level 2',
              tag: 'Mind',
              t: 'Understand the machine',
              b: 'AI itself — infrastructure, architecture, skills, agents, automation. We teach you to build with the machine, with your Intelligence Layer already inside it.',
              here: false,
            },
            {
              n: 'Level 3',
              tag: 'Body',
              t: 'Bring it into the world',
              b: 'The physical manifestation — you, your business, and your AI systems executing in the real world, all inheriting who you are and how you want it done.',
              here: false,
            },
          ].map((step) => (
            <li
              key={step.n}
              className={`relative rounded-2xl p-7 border ${
                step.here
                  ? 'bg-white shadow-soft border-sage'
                  : 'bg-white/60 border-neutral-warm/60'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center rounded-full bg-sage text-white font-serif text-sm px-3 py-1 shadow-soft">
                  {step.n}
                </span>
                <span className="text-xs uppercase tracking-[0.18em] text-sage-deep/80">
                  {step.tag} level
                </span>
                {step.here && (
                  <span className="ml-auto text-[10px] uppercase tracking-wider bg-gold text-neutral-ink rounded-full px-2 py-0.5 font-semibold">
                    you are here
                  </span>
                )}
              </div>
              <h3 className="mt-4 font-serif text-xl text-neutral-ink">{step.t}</h3>
              <p className="mt-3 text-neutral-ink/80 leading-relaxed">{step.b}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ───────── THE LENSES ───────── */}
      <section className="bg-sage-wash/40 border-y border-neutral-warm/60">
        <div className="max-w-page mx-auto px-5 sm:px-8 py-20 md:py-24">
          <h2 className="font-serif text-3xl md:text-4xl text-neutral-ink text-center">
            Every lens is welcome
          </h2>
          <p className="mt-4 text-center text-neutral-ink/70 max-w-2xl mx-auto text-lg">
            No single system holds all of you. The synthesis finds where your lenses agree,
            where they pull against each other, and the one story they&apos;re all telling.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {(Object.keys(CATEGORIES) as (keyof typeof CATEGORIES)[]).map((cat) => (
              <div key={cat} className="rounded-2xl bg-white border border-neutral-warm p-7">
                <h3 className="font-serif text-xl text-neutral-ink">{CATEGORIES[cat].title}</h3>
                <p className="mt-2 text-sm text-neutral-ink/70 leading-relaxed">
                  {CATEGORIES[cat].blurb}
                </p>
                <ul className="mt-5 space-y-2">
                  {METHODOLOGIES.filter((m) => m.category === cat).map((m) => (
                    <li key={m.id} className="flex items-baseline gap-2 text-neutral-ink/85">
                      <span className="text-sage-deep">·</span>
                      {m.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-neutral-ink/60">
            Don&apos;t have them all? Bring two. The journey shows you where to get the rest.
          </p>
        </div>
      </section>

      {/* ───────── WHAT YOU GET ───────── */}
      <section className="max-w-page mx-auto px-5 sm:px-8 py-20 md:py-24">
        <h2 className="font-serif text-3xl md:text-4xl text-neutral-ink text-center">
          What you walk away with
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* FREE */}
          <div className="rounded-2xl bg-white border border-neutral-warm p-8 flex flex-col">
            <div className="text-xs uppercase tracking-[0.18em] text-sage-deep">Free</div>
            <h3 className="mt-2 font-serif text-2xl text-neutral-ink">Your Intelligence Layer</h3>
            <ul className="mt-6 space-y-3 text-neutral-ink/85 leading-relaxed flex-1">
              <li>
                <code className="text-sm">intelligence-report.md</code> — your complete map:
                journey, baseline, current state, strengths, growth edges, next phase
              </li>
              <li>
                <code className="text-sm">SKILL.md</code> — the Intelligence Layer skill: your
                AI finally knows who it&apos;s working with
              </li>
              <li>
                <code className="text-sm">intelligence-support-SKILL.md</code> — day-to-day
                support: decisions, alignment checks, stuck moments
              </li>
              <li>Downloadable <code className="text-sm">.zip</code>, emailed to you</li>
            </ul>
            <div className="mt-7">
              <Button href="/journey" variant="primary" size="lg">
                Begin the journey — free
              </Button>
            </div>
          </div>

          {/* PRO */}
          <div className="rounded-2xl bg-neutral-ink text-neutral-paper border border-neutral-ink p-8 flex flex-col relative overflow-hidden">
            <div className="absolute -right-12 -top-12 w-44 h-44 rounded-full bg-divergen/20 blur-2xl" />
            <div className="text-xs uppercase tracking-[0.18em] text-gold">
              Pro — $97 one-time
            </div>
            <h3 className="mt-2 font-serif text-2xl">The Full Synthesis</h3>
            <p className="mt-2 text-neutral-paper/70 text-sm">
              Everything in free, at full Claude Opus depth, plus:
            </p>
            <ul className="mt-5 space-y-3 text-neutral-paper/90 leading-relaxed flex-1">
              <li>
                <strong className="text-gold">consciousness-index.json</strong> — your map,
                machine-readable: every agent you ever build can inherit it
              </li>
              <li>
                <strong className="text-gold">GOVERNANCE.md</strong> — your values as operating
                rules: what your AI may do, drafts, and never touches
              </li>
              <li>
                <strong className="text-gold">Full-depth report</strong> — every lens woven in,
                every tension explored, concrete next-phase guidance
              </li>
              <li>Ready for Level 2 — these files plug straight into your AI OS build</li>
              <li>30-day money-back, no questions</li>
            </ul>
            <div className="mt-7">
              <Button href="/journey?upgrade=1" variant="gold" size="lg">
                Get the full synthesis — $97
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── THE ETHICS ───────── */}
      <section className="bg-sage-wash/40 border-y border-neutral-warm/60">
        <div className="max-w-page mx-auto px-5 sm:px-8 py-20 md:py-24">
          <h2 className="font-serif text-3xl md:text-4xl text-neutral-ink text-center">
            The ethics are the architecture
          </h2>
          <div className="max-w-prose mx-auto mt-8 space-y-5 text-lg text-neutral-ink/85 leading-relaxed">
            <p>
              This is the most personal data there is — how you think, what drives you, where
              you&apos;re fragile. So the rules are simple and non-negotiable:
            </p>
            <ul className="space-y-3">
              <li>
                <strong>Your inner data belongs to you.</strong> The synthesis runs, your files
                are delivered, the content is deleted. We keep an email and a timestamp.
              </li>
              <li>
                <strong>Nothing is fabricated.</strong> Every line traces back to something you
                brought. Missing lenses are named, never invented.
              </li>
              <li>
                <strong>Strengths-based, always.</strong> No labels, no pathology, no
                &ldquo;what&apos;s wrong with you.&rdquo; Growth edges, not flaws.
              </li>
              <li>
                <strong>Portable, not captive.</strong> Plain markdown and JSON. Yours to edit,
                move, or delete. No lock-in, ever.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ───────── ECOSYSTEM ───────── */}
      <section className="max-w-page mx-auto px-5 sm:px-8 py-20 md:py-24">
        <h2 className="font-serif text-3xl md:text-4xl text-neutral-ink text-center">
          The SHE IS AI tools
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3 max-w-4xl mx-auto">
          {[
            {
              name: 'Brain Skill',
              url: 'https://brainskill.sheisai.ai',
              b: 'Your brain profile, turned into a Claude skill. How you work best.',
            },
            {
              name: 'Peace Skill',
              url: 'https://peaceskill.sheisai.ai',
              b: 'Self-care, weekly rhythm, work-life balance — a skill that protects your peace.',
            },
            {
              name: 'COO',
              url: 'https://coo.sheisai.ai',
              b: 'The operations agent that runs your business day with you.',
            },
          ].map((t) => (
            <a
              key={t.name}
              href={t.url}
              className="rounded-2xl bg-white border border-neutral-warm p-6 hover:shadow-soft hover:border-sage transition-all"
            >
              <h3 className="font-serif text-lg text-neutral-ink">{t.name} ↗</h3>
              <p className="mt-2 text-sm text-neutral-ink/70 leading-relaxed">{t.b}</p>
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-neutral-ink/70 max-w-2xl mx-auto">
          Each tool deepens one part of your map. The Intelligence Layer weaves them together —
          and everything you build from here inherits it.
        </p>
      </section>

      {/* ───────── FINAL CTA ───────── */}
      <section className="bg-neutral-ink">
        <div className="max-w-page mx-auto px-5 sm:px-8 py-20 md:py-28 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-neutral-paper">
            Understand yourself first. Everything else is built on it.
          </h2>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button href="/journey" variant="primary" size="lg">
              Begin the journey — free
            </Button>
            <Button href="/journey?upgrade=1" variant="gold" size="lg">
              Get the full synthesis — $97
            </Button>
          </div>
          <p className="mt-6 text-xs text-neutral-paper/50">
            Level 1 of 3 · The Soul level ·{' '}
            <Link className="underline hover:text-neutral-paper" href="/about">
              read about the three levels
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
