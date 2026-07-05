import Button from '@/components/Button';

export const metadata = { title: 'About · SHE IS AI Intelligence Layer' };

export default function About() {
  return (
    <div className="max-w-prose mx-auto px-5 sm:px-8 py-16 md:py-20">
      <p className="text-xs uppercase tracking-[0.2em] text-sage-deep/80">About</p>
      <h1 className="mt-3 font-serif text-4xl md:text-5xl text-neutral-ink leading-[1.1]">
        First understand yourself. Then the machine. Then the world.
      </h1>

      <div className="gold-rule my-10" />

      <div className="space-y-5 text-neutral-ink/85 leading-relaxed text-lg">
        <p>
          Most people hand AI their to-do list and get a faster to-do list back. The AI never
          knows who it&apos;s working with — so it optimises the wrong things, pushes when it
          should protect, and gives everyone the same advice.
        </p>
        <p>
          SHE IS AI builds it in the right order, in three levels:
        </p>

        <h2 className="font-serif text-2xl text-neutral-ink mt-10">Level 1 — Soul: understand yourself</h2>
        <p>
          This site. You bring every lens you have — brain profile, Human Design, tropical
          astrology, Myers-Briggs, DISC, Gallup, Enneagram, numerology, and your own words
          about your journey, your current season, and your goals. The synthesis weaves them
          into your <strong>Intelligence Layer</strong>: one coherent map of who you are,
          plus the skill files that put it inside your AI.
        </p>

        <h2 className="font-serif text-2xl text-neutral-ink mt-10">Level 2 — Mind: understand the machine</h2>
        <p>
          AI itself: the infrastructure, the architecture, skills, agents, automation, the
          tools. We teach you how to build with the machine — and because your Intelligence
          Layer already exists, everything you build knows who it&apos;s building for. Your
          AI OS gets your brain, your business, and your values inherently infused — not
          bolted on afterwards.
        </p>

        <h2 className="font-serif text-2xl text-neutral-ink mt-10">Level 3 — Body: bring it into the world</h2>
        <p>
          The physical manifestation: you, your business, and your AI systems executing in
          the real world. Agents that work for you, systems that scale you — all operating
          inside the governance you set at Level 1.
        </p>

        <h2 className="font-serif text-2xl text-neutral-ink mt-10">Why the ethics come first</h2>
        <p>
          This is the most personal data there is. So: your inner data belongs to you (we
          delete content after synthesis), nothing is fabricated, everything is
          strengths-based, and every file is plain markdown you can edit, move, or delete.
          Other platforms lead with data and structure. We lead with consciousness and
          ethics — and the structure follows.
        </p>

        <h2 className="font-serif text-2xl text-neutral-ink mt-10">Who&apos;s behind it</h2>
        <p>
          Built by <strong>Amanda Jeffs</strong>, founder of{' '}
          <a className="underline hover:text-divergen" href="https://sheisai.ai">
            SHE IS AI
          </a>
          . SHE IS AI helps people and small businesses work better with AI — practically,
          in plain English. The Intelligence Layer is the heart of the SHE IS AI ecosystem:
          Brain Skill, Peace Skill, the COO, and everything still to come all plug into it.
        </p>
      </div>

      <div className="mt-12">
        <Button href="/journey" variant="primary" size="lg">
          Begin the journey — free
        </Button>
      </div>
    </div>
  );
}
