import FlodeskEmbed from '@/components/FlodeskEmbed';

export const metadata = {
  title: 'The Intelligence Layer — join the waitlist · SHE IS AI × SHE IS SOL',
  description:
    'AI that knows who it\'s working with. Bring every lens you have — leave with one coherent map of who you are, and the files that make every AI you use work like it was built for you. Join the waitlist.',
};

export default function WaitlistPage() {
  return (
    <>
      {/* ───────── HERO ───────── */}
      <section className="hero-band">
        <div className="max-w-page mx-auto px-5 sm:px-8 pt-20 pb-20 md:pt-28 md:pb-24 text-center">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-sage-deep/80">
            SHE IS AI × SHE IS SOL · Coming soon
          </p>
          <h1 className="mt-6 font-serif text-4xl sm:text-5xl md:text-6xl text-neutral-ink leading-[1.1] max-w-3xl mx-auto">
            Never explain yourself to your AI again.
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-neutral-ink/75 leading-relaxed">
            The Intelligence Layer takes every lens you have — your brain profile, Human
            Design, astrology, Gene Keys, Myers-Briggs, numerology, your own words — and
            weaves them into one coherent map of who you are. Then it hands you the files
            that make every AI you use work like it was built for you. Because it was.
          </p>

          <div className="mt-10">
            <a
              href="#waitlist"
              className="inline-flex items-center justify-center rounded-full bg-sage text-white px-8 py-4 text-lg font-medium hover:bg-sage-deep transition-colors"
            >
              Join the waitlist
            </a>
          </div>
          <p className="mt-5 text-xs text-neutral-ink/55">
            Founding members get first access and the founding price.
          </p>
        </div>
      </section>

      <div className="gold-rule max-w-page mx-auto my-0" />

      {/* ───────── THE PROBLEM ───────── */}
      <section className="max-w-page mx-auto px-5 sm:px-8 py-16 md:py-20">
        <div className="max-w-prose mx-auto space-y-5 text-lg text-neutral-ink/85 leading-relaxed">
          <p>
            You&apos;ve done the work. The assessments, the charts, the readings, the
            journalling. Somewhere in a drawer is a brain profile that nailed you, a Human
            Design chart that explained your whole energy, a Myers-Briggs type you nodded
            along to.
          </p>
          <p>
            And none of it talks to each other. And none of it talks to your AI — the tool
            you now spend hours a day with, which still treats you like everyone else:
            the same advice, the same eight-point plans, the same pace, for a person it
            has never met.
          </p>
          <p className="font-serif text-2xl text-sage-deep pt-2">
            The AI era doesn&apos;t reward more tools. It rewards the person the tools are
            pointed at knowing exactly who they are.
          </p>
        </div>
      </section>

      {/* ───────── WHAT IT IS ───────── */}
      <section className="bg-sage-wash/40 border-y border-neutral-warm/60">
        <div className="max-w-page mx-auto px-5 sm:px-8 py-16 md:py-20">
          <h2 className="font-serif text-3xl md:text-4xl text-neutral-ink text-center">
            One journey. Every lens. Your Intelligence Layer.
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
            {[
              {
                n: '1',
                t: 'Bring every lens',
                b: 'Your brain profile, Human Design, astrology, Gene Keys, MBTI, DISC, numerology — plus our proprietary Soul-Led Interview, a deep conversation you have with your own AI, where nothing counts as true until you say "yes, that\'s it."',
              },
              {
                n: '2',
                t: 'We weave the map',
                b: 'Not a summary — a synthesis. Where your lenses agree (load-bearing), where they disagree (the interesting part), the one golden thread they\'re all telling, and the gap no single lens could show you.',
              },
              {
                n: '3',
                t: 'Your AI finally knows you',
                b: 'You leave with your Intelligence Report, skills your AI reads every day, your personal AI governance file, a machine-readable index every future agent inherits — and a living visual map of you.',
              },
            ].map((s) => (
              <div key={s.n} className="relative rounded-2xl bg-white shadow-soft border border-neutral-warm/60 p-7">
                <div className="absolute -top-4 left-7 inline-flex items-center justify-center w-9 h-9 rounded-full bg-sage text-white font-serif text-lg shadow-soft">
                  {s.n}
                </div>
                <h3 className="mt-4 font-serif text-xl text-neutral-ink">{s.t}</h3>
                <p className="mt-3 text-neutral-ink/80 leading-relaxed text-[0.95rem]">{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── WHY IT'S DIFFERENT ───────── */}
      <section className="max-w-page mx-auto px-5 sm:px-8 py-16 md:py-20">
        <h2 className="font-serif text-3xl md:text-4xl text-neutral-ink text-center">
          This is not another personality quiz
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {[
            {
              t: 'Provenance, not horoscopes',
              b: 'Every finding in your report is traced: confirmed by an assessment you brought, recognised by you in the interview, or clearly labelled as a read. That discipline is the difference between an intelligence layer and a horoscope.',
            },
            {
              t: 'The gap, named honestly',
              b: 'Most tools flatter you. Ours tells you the corner of the map you don\'t natively cover — confirmed from multiple directions — and builds the system that carries it. Not so you avoid the resistance: so you can face it, supported.',
            },
            {
              t: 'Soul-level, not just work-brain',
              b: 'Your energy, your seasons, your values, your relationships, what restores you — treated as intelligence, not decoration. This is the level the productivity tools never touch.',
            },
            {
              t: 'You own everything. You need us never.',
              b: 'Plain files, delivered once, yours forever. Your answers to the deep interview never touch our servers — it runs in your own AI. We delete what you share the moment your synthesis is done.',
            },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl bg-white border border-neutral-warm p-7">
              <h3 className="font-serif text-xl text-sage-deep">{c.t}</h3>
              <p className="mt-3 text-neutral-ink/80 leading-relaxed text-[0.95rem]">{c.b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ───────── THE THREE LEVELS ───────── */}
      <section className="bg-neutral-ink">
        <div className="max-w-page mx-auto px-5 sm:px-8 py-16 md:py-20 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-neutral-paper">
            First understand yourself. Then the machine. Then the world.
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-neutral-paper/75 text-lg leading-relaxed">
            The Intelligence Layer is Level 1 of the SHE IS AI path — the Soul level.
            From here, your AI OS gets built around who you actually are (Level 2), and
            then you, your business, and your agents execute in the real world with your
            values wired in (Level 3). Everything you build inherits everything you learn.
          </p>
          <p className="mt-8 text-xs uppercase tracking-[0.2em] text-gold">
            Soul → Mind → Body · Built in order · Nothing generic survives
          </p>
        </div>
      </section>

      {/* ───────── TEAMS TEASER ───────── */}
      <section className="max-w-page mx-auto px-5 sm:px-8 py-16 md:py-20">
        <div className="max-w-prose mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-sage-deep/80">Also coming — for teams</p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl text-neutral-ink">
            Then see your whole team as one living mind.
          </h2>
          <p className="mt-5 text-lg text-neutral-ink/80 leading-relaxed">
            Combine your team&apos;s intelligence layers into one map: where you overlap,
            where you genuinely complement each other, and the gap nobody covers — glowing
            red, so you can finally stop pretending someone&apos;s got it. We ran it on our
            own founding team first. It told us the truth. It will tell you yours.
          </p>
        </div>
      </section>

      {/* ───────── WAITLIST ───────── */}
      <section id="waitlist" className="bg-sage-wash/60 border-t border-neutral-warm/60">
        <div className="max-w-page mx-auto px-5 sm:px-8 py-16 md:py-24">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-neutral-ink">
              Be first through the door.
            </h2>
            <p className="mt-4 text-lg text-neutral-ink/75 leading-relaxed">
              Join the waitlist and you&apos;ll get first access, the founding-member
              price, and the Soul-Led Interview before anyone else.
            </p>
            <div className="mt-8 text-left">
              <FlodeskEmbed />
            </div>
            <p className="mt-5 text-xs text-neutral-ink/55">
              From SHE IS AI × SHE IS SOL · No spam, just the door opening.
            </p>
          </div>
        </div>
      </section>

      {/* ───────── FOUNDER LINE ───────── */}
      <section className="max-w-page mx-auto px-5 sm:px-8 py-14 text-center">
        <p className="max-w-prose mx-auto text-neutral-ink/70 leading-relaxed">
          Built by <strong>Amanda Jeffs</strong> (SHE IS AI) with <strong>SHE IS SOL</strong> —
          the team behind{' '}
          <a className="underline hover:text-divergen" href="https://brainskill.sheisai.ai">
            Brain Skill
          </a>
          . We mapped ourselves first. What we found changed how we work together. That&apos;s
          the product.
        </p>
      </section>
    </>
  );
}
