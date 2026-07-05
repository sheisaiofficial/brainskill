export const metadata = { title: 'Terms · SHE IS AI Intelligence Layer' };

export default function Terms() {
  return (
    <div className="max-w-prose mx-auto px-5 sm:px-8 py-16 md:py-20">
      <h1 className="font-serif text-4xl text-neutral-ink">Terms</h1>
      <p className="mt-2 text-sm text-neutral-ink/55">
        Plain language. Read it like a friend wrote it, because one did.
      </p>

      <div className="gold-rule my-8" />

      <div className="space-y-5 text-neutral-ink/85 leading-relaxed">
        <h2 className="font-serif text-2xl text-neutral-ink">The product</h2>
        <p>
          The Intelligence Layer is a digital product. You pay (or don't, for the free tier), we generate
          a skill, you download it. Nothing ships in the post.
        </p>

        <h2 className="font-serif text-2xl text-neutral-ink mt-6">Refunds</h2>
        <p>
          <strong>30-day money-back on Pro, no questions.</strong> Email{' '}
          <a className="underline hover:text-divergen" href="mailto:hello@sheisai.ai">
            hello@sheisai.ai
          </a>{' '}
          and we'll process the refund through Stripe.
        </p>

        <h2 className="font-serif text-2xl text-neutral-ink mt-6">What you can do with the skill</h2>
        <p>
          The skill we generate is yours. Use it. Modify it. Share it with a friend. Just don't
          resell it as-is or repackage it as a product of your own.
        </p>

        <h2 className="font-serif text-2xl text-neutral-ink mt-6">Liability</h2>
        <p>
          We're not liable for how the AI behaves once you install the skill in your own
          Claude. The skill is a working agreement — you stay in charge of how you use it.
        </p>

        <h2 className="font-serif text-2xl text-neutral-ink mt-6">Jurisdiction</h2>
        <p>
          New Zealand law applies. If something goes wrong, talk to us first — most things get
          sorted with a friendly email.
        </p>

        <p className="mt-6 text-sm text-neutral-ink/60">
          Last updated: {new Date().toLocaleDateString('en-NZ', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>
    </div>
  );
}
