export const metadata = { title: 'Privacy · SHE IS AI Intelligence Layer' };

export default function Privacy() {
  return (
    <div className="max-w-prose mx-auto px-5 sm:px-8 py-16 md:py-20">
      <h1 className="font-serif text-4xl text-neutral-ink">Privacy</h1>
      <p className="mt-2 text-sm text-neutral-ink/55">
        Last updated: {new Date().toLocaleDateString('en-NZ', { year: 'numeric', month: 'long', day: 'numeric' })}
      </p>

      <div className="gold-rule my-8" />

      <div className="space-y-5 text-neutral-ink/85 leading-relaxed">
        <p>
          Short version: we delete your profile content the moment we've generated your skill.
          We keep your email, your name (if you gave it), and a record of which tier you got.
          We don't sell anything.
        </p>

        <h2 className="font-serif text-2xl text-neutral-ink mt-8">What we collect</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Email</strong> — so we can email you the skill.
          </li>
          <li>
            <strong>Name</strong> — only if you gave it, used in the skill copy.
          </li>
          <li>
            <strong>Tier</strong> — free or Pro, and the Stripe customer ID for Pro purchases.
          </li>
          <li>
            <strong>Timestamp</strong> — when you generated.
          </li>
        </ul>

        <h2 className="font-serif text-2xl text-neutral-ink mt-8">What we don't keep</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Your profile content</strong> — pasted text, PDF, or image. Sent to
            Anthropic for the generation, then deleted.
          </li>
          <li>
            <strong>The generated skill</strong> — we send it to you and don't store a copy.
          </li>
        </ul>

        <h2 className="font-serif text-2xl text-neutral-ink mt-8">Who else gets the data</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Anthropic</strong> — receives the profile to generate the skill. They have
            their own privacy policy.
          </li>
          <li>
            <strong>Flodesk</strong> — receives your email, name, and tier to send you the skill
            and (occasionally) updates from SHE IS AI. You can unsubscribe any time.
          </li>
          <li>
            <strong>Stripe</strong> — handles payments for Pro. We never see your card details.
          </li>
        </ul>

        <h2 className="font-serif text-2xl text-neutral-ink mt-8">Analytics</h2>
        <p>
          We use Plausible — privacy-respecting page analytics, no cookies, no personal data.
          No Google Analytics, no Facebook pixel.
        </p>

        <h2 className="font-serif text-2xl text-neutral-ink mt-8">Deletion</h2>
        <p>
          Email <a className="underline hover:text-divergen" href="mailto:hello@sheisai.ai">hello@sheisai.ai</a>{' '}
          and we'll remove your email and any record we have. Allow up to 7 days.
        </p>

        <h2 className="font-serif text-2xl text-neutral-ink mt-8">Jurisdiction</h2>
        <p>SHE IS AI is based in Tauranga, Aotearoa New Zealand.</p>
      </div>
    </div>
  );
}
