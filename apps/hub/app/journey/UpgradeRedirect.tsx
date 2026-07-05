'use client';

// When the landing CTA "Get the Pro skill — $47" sends users here with ?upgrade=1,
// we render an inline banner offering to go straight to Stripe Checkout.
// We don't auto-redirect — feels jarring — but we make the path one click away.

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function UpgradeRedirect() {
  const params = useSearchParams();
  const wantsUpgrade = params.get('upgrade') === '1';
  const [email, setEmail] = useState('');
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  if (!wantsUpgrade) return null;

  async function goToCheckout(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    setBusy(true);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const json = await res.json();
      if (!res.ok || !json.url) throw new Error(json.error || 'Checkout failed.');
      window.location.href = json.url;
    } catch (error) {
      setErr(error instanceof Error ? error.message : 'Something went wrong.');
      setBusy(false);
    }
  }

  return (
    <div className="mb-7 rounded-xl bg-divergen text-white p-5">
      <div className="text-xs uppercase tracking-[0.18em] text-divergen-pop mb-1">
        Going Pro?
      </div>
      <p className="text-sm leading-relaxed">
        The full synthesis goes through Stripe Checkout ($97, one-time) then returns here to run.
        Drop your email and we'll send you to checkout.
      </p>
      <form onSubmit={goToCheckout} className="mt-3 flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 rounded-md bg-white/95 text-neutral-ink px-4 py-2.5 text-sm focus:outline-none"
        />
        <button
          type="submit"
          disabled={busy}
          className="rounded-md bg-divergen-pop text-neutral-ink px-5 py-2.5 text-sm font-medium hover:brightness-95 disabled:opacity-50"
        >
          {busy ? 'Opening Stripe…' : 'Go to checkout →'}
        </button>
      </form>
      {err && <p className="mt-2 text-sm text-divergen-pop">{err}</p>}
      <p className="mt-3 text-xs text-white/80">
        Or stay free — fill out the form below.
      </p>
    </div>
  );
}
