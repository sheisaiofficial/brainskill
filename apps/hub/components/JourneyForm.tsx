'use client';

import { useEffect, useState } from 'react';
import Button from './Button';
import { isValidEmail } from '@/lib/validate';
import {
  METHODOLOGIES,
  CATEGORIES,
  MIN_INPUTS,
  MAX_INPUT_CHARS,
  MethodologyCategory,
} from '@/lib/methodologies';

type Tier = 'free' | 'pro';

type Props = {
  tier: Tier;
  stripeSessionId?: string;
  initialEmail?: string;
};

const STEP_ORDER: (MethodologyCategory | 'about' | 'review')[] = [
  'about',
  'mind',
  'energetic',
  'own-words',
  'review',
];

const STEP_TITLES: Record<string, string> = {
  about: 'About you',
  mind: CATEGORIES.mind.title,
  energetic: CATEGORIES.energetic.title,
  'own-words': CATEGORIES['own-words'].title,
  review: 'Review & generate',
};

const LOADING_LINES = [
  'Reading every lens you brought…',
  'Finding the convergences…',
  'Naming the tensions…',
  'Following the golden thread…',
  'Writing your Intelligence Layer Report…',
  'Building your skills…',
  'Almost there — packing your files…',
];

export default function JourneyForm({ tier, stripeSessionId, initialEmail = '' }: Props) {
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState(initialEmail);
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [birthTime, setBirthTime] = useState('');
  const [birthPlace, setBirthPlace] = useState('');
  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const [submitting, setSubmitting] = useState(false);
  const [loadingMsg, setLoadingMsg] = useState(LOADING_LINES[0]);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{
    files: { name: string }[];
    downloadUrl: string;
    preview: string;
  } | null>(null);

  useEffect(() => {
    if (!submitting) return;
    let i = 0;
    setLoadingMsg(LOADING_LINES[0]);
    const timer = setInterval(() => {
      i = (i + 1) % LOADING_LINES.length;
      setLoadingMsg(LOADING_LINES[i]);
    }, 7000);
    return () => clearInterval(timer);
  }, [submitting]);

  const stepKey = STEP_ORDER[step];
  const filledLenses = METHODOLOGIES.filter((m) => (inputs[m.id] || '').trim().length > 0);

  function next() {
    setError(null);
    if (stepKey === 'about' && !isValidEmail(email)) {
      setError("That email doesn't look right. Want to try again?");
      return;
    }
    setStep((s) => Math.min(s + 1, STEP_ORDER.length - 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function back() {
    setError(null);
    setStep((s) => Math.max(s - 1, 0));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  async function handleSubmit() {
    setError(null);
    if (!isValidEmail(email)) {
      setError("That email doesn't look right — head back to step 1.");
      return;
    }
    if (filledLenses.length < MIN_INPUTS) {
      setError(
        `Bring at least ${MIN_INPUTS} lenses so the synthesis has something to weave together. Your own words count as a lens.`
      );
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          name,
          birthDate,
          birthTime,
          birthPlace,
          tier,
          stripeSessionId,
          inputs: filledLenses.map((m) => ({ id: m.id, content: inputs[m.id] })),
        }),
      });
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.error || 'Something went wrong on our end. Try again in a moment.');
      }
      setResult({
        files: json.files || [],
        downloadUrl: json.downloadUrl,
        preview: json.preview || '',
      });
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Unknown error';
      setError(msg.includes('rate') ? 'Claude is busy right now — try again in a moment.' : msg);
    } finally {
      setSubmitting(false);
    }
  }

  if (result) {
    return <SuccessState tier={tier} result={result} email={email} />;
  }

  return (
    <div>
      {/* Progress */}
      <ol className="flex items-center gap-1.5 mb-8">
        {STEP_ORDER.map((k, i) => (
          <li key={k} className="flex-1">
            <button
              type="button"
              onClick={() => i < step && setStep(i)}
              className={`w-full h-1.5 rounded-full transition-colors ${
                i < step ? 'bg-sage' : i === step ? 'bg-sage-deep' : 'bg-neutral-warm'
              }`}
              aria-label={STEP_TITLES[k]}
            />
          </li>
        ))}
      </ol>
      <p className="text-xs uppercase tracking-[0.2em] text-sage-deep/80 mb-1">
        Step {step + 1} of {STEP_ORDER.length}
      </p>
      <h2 className="font-serif text-2xl md:text-3xl text-neutral-ink mb-6">
        {STEP_TITLES[stepKey]}
      </h2>

      {/* ── Step: About you ── */}
      {stepKey === 'about' && (
        <div className="space-y-6">
          <Field label="Your email" required>
            <input
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-neutral-warm bg-white px-4 py-3 text-base focus:border-sage focus:outline-none"
            />
          </Field>
          <Field label="Your first name" hint="Used throughout your files">
            <input
              type="text"
              placeholder="Sam"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border border-neutral-warm bg-white px-4 py-3 text-base focus:border-sage focus:outline-none"
            />
          </Field>
          <div className="rounded-xl bg-sage-wash/60 border border-sage-tint p-5">
            <p className="text-sm text-neutral-ink/80 leading-relaxed">
              <strong>Optional — for the energetic lenses.</strong> Human Design, astrology and
              numerology are built from your birth details. Only share what you're comfortable
              sharing; everything still works without them.
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <Field label="Birth date">
                <input
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  className="w-full rounded-lg border border-neutral-warm bg-white px-3 py-2.5 text-sm focus:border-sage focus:outline-none"
                />
              </Field>
              <Field label="Birth time">
                <input
                  type="time"
                  value={birthTime}
                  onChange={(e) => setBirthTime(e.target.value)}
                  className="w-full rounded-lg border border-neutral-warm bg-white px-3 py-2.5 text-sm focus:border-sage focus:outline-none"
                />
              </Field>
              <Field label="Birth place">
                <input
                  type="text"
                  placeholder="City, Country"
                  value={birthPlace}
                  onChange={(e) => setBirthPlace(e.target.value)}
                  className="w-full rounded-lg border border-neutral-warm bg-white px-3 py-2.5 text-sm focus:border-sage focus:outline-none"
                />
              </Field>
            </div>
          </div>
        </div>
      )}

      {/* ── Steps: lens categories ── */}
      {(stepKey === 'mind' || stepKey === 'energetic' || stepKey === 'own-words') && (
        <div>
          <p className="text-neutral-ink/75 leading-relaxed mb-6">
            {CATEGORIES[stepKey].blurb}{' '}
            <span className="text-neutral-ink/55">
              Everything here is optional — bring what you have.
            </span>
          </p>
          <div className="space-y-3">
            {METHODOLOGIES.filter((m) => m.category === stepKey).map((m) => {
              const has = (inputs[m.id] || '').trim().length > 0;
              const isOpen = open[m.id] ?? (stepKey === 'own-words' || has);
              return (
                <div
                  key={m.id}
                  className={`rounded-xl border bg-white transition-colors ${
                    has ? 'border-sage shadow-soft' : 'border-neutral-warm/80'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen((o) => ({ ...o, [m.id]: !isOpen }))}
                    className="w-full flex items-start justify-between gap-4 p-5 text-left"
                  >
                    <span>
                      <span className="font-serif text-lg text-neutral-ink flex items-center gap-2">
                        {m.name}
                        {has && (
                          <span className="inline-flex items-center rounded-full bg-sage text-white text-[10px] px-2 py-0.5 uppercase tracking-wider">
                            added
                          </span>
                        )}
                      </span>
                      <span className="block mt-1 text-sm text-neutral-ink/70">{m.reveals}</span>
                    </span>
                    <span className="text-sage-deep text-2xl leading-none select-none">
                      {isOpen ? '–' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5">
                      {m.getIt && (
                        <p className="text-xs text-neutral-ink/60 mb-2">
                          Don&apos;t have it yet?{' '}
                          <a
                            href={m.getIt.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline text-divergen hover:text-divergen-deep"
                          >
                            {m.getIt.label} ↗
                          </a>
                        </p>
                      )}
                      <textarea
                        value={inputs[m.id] || ''}
                        onChange={(e) =>
                          setInputs((prev) => ({
                            ...prev,
                            [m.id]: e.target.value.slice(0, MAX_INPUT_CHARS),
                          }))
                        }
                        rows={6}
                        placeholder={m.placeholder}
                        className="w-full rounded-lg border border-neutral-warm bg-white px-4 py-3 text-sm font-mono focus:border-sage focus:outline-none"
                      />
                      <div className="mt-1 text-xs text-neutral-ink/55 text-right">
                        {(inputs[m.id] || '').length} / {MAX_INPUT_CHARS}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ── Step: Review ── */}
      {stepKey === 'review' && (
        <div className="space-y-6">
          <p className="text-neutral-ink/80 leading-relaxed">
            You&apos;re bringing <strong>{filledLenses.length}</strong>{' '}
            {filledLenses.length === 1 ? 'lens' : 'lenses'} to the synthesis
            {filledLenses.length >= MIN_INPUTS
              ? '. The more you bring, the richer the weave — but this is enough to begin.'
              : ` — bring at least ${MIN_INPUTS} (your own words count).`}
          </p>
          <ul className="space-y-2">
            {METHODOLOGIES.map((m) => {
              const has = (inputs[m.id] || '').trim().length > 0;
              return (
                <li
                  key={m.id}
                  className={`flex items-center gap-3 rounded-lg border px-4 py-2.5 text-sm ${
                    has
                      ? 'border-sage-tint bg-sage-wash/50 text-neutral-ink'
                      : 'border-neutral-warm/60 text-neutral-ink/45'
                  }`}
                >
                  <span
                    className={`inline-flex w-5 h-5 rounded-full items-center justify-center text-[11px] ${
                      has ? 'bg-sage text-white' : 'bg-neutral-warm/60 text-neutral-ink/50'
                    }`}
                  >
                    {has ? '✓' : '·'}
                  </span>
                  {m.name}
                </li>
              );
            })}
          </ul>
          <div className="rounded-xl bg-neutral-paper border border-neutral-warm p-5 text-sm text-neutral-ink/75 leading-relaxed">
            What you&apos;ve shared is sent to Anthropic to run the synthesis, then deleted from
            our server. We keep your email and a timestamp — never the content.
          </div>
        </div>
      )}

      {/* Error */}
      {error && (
        <div
          role="alert"
          className="mt-6 rounded-lg border border-rose-200 bg-rose-50 text-rose-900 px-4 py-3 text-sm"
        >
          {error}
        </div>
      )}

      {/* Nav */}
      <div className="mt-8 flex items-center justify-between gap-4">
        {step > 0 ? (
          <button
            type="button"
            onClick={back}
            disabled={submitting}
            className="text-sm text-neutral-ink/60 hover:text-neutral-ink underline"
          >
            ← Back
          </button>
        ) : (
          <span />
        )}
        {stepKey === 'review' ? (
          <Button
            variant={tier === 'pro' ? 'divergen' : 'primary'}
            size="lg"
            disabled={submitting}
            onClick={handleSubmit}
          >
            {submitting
              ? loadingMsg
              : tier === 'pro'
                ? 'Run my Pro synthesis'
                : 'Run my synthesis'}
          </Button>
        ) : (
          <Button variant="primary" size="lg" onClick={next}>
            Continue →
          </Button>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  hint,
  required,
  children,
}: {
  label: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <div className="flex items-baseline justify-between">
        <span className="text-sm font-medium text-neutral-ink">
          {label}
          {required && <span className="text-rose-700"> *</span>}
        </span>
        {hint && <span className="text-xs text-neutral-ink/55">{hint}</span>}
      </div>
      <div className="mt-2">{children}</div>
    </label>
  );
}

function SuccessState({
  tier,
  result,
  email,
}: {
  tier: Tier;
  result: { files: { name: string }[]; downloadUrl: string; preview: string };
  email: string;
}) {
  return (
    <div className="space-y-7">
      <div className="rounded-2xl bg-sage-wash border border-sage-tint p-6">
        <h2 className="font-serif text-2xl text-sage-deep">Your Intelligence Layer is ready.</h2>
        <p className="mt-2 text-neutral-ink/85">
          {result.files.length} files, packed and ready. Download it now and save it
          somewhere safe — this link lives only on this page. (We&apos;ve added{' '}
          <strong>{email}</strong> to the list for what comes next.)
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {result.files.map((f) => (
            <li
              key={f.name}
              className="rounded-full bg-white border border-sage-tint px-3 py-1 text-xs font-mono text-neutral-ink/80"
            >
              {f.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <a
          href={result.downloadUrl}
          download="intelligence-layer.zip"
          className="inline-flex items-center justify-center rounded-full bg-sage text-white px-7 py-3.5 text-base font-medium hover:bg-sage-deep transition-colors"
        >
          Download my Intelligence Layer (.zip)
        </a>
        <a href="/how-to-install" className="text-sm text-divergen hover:text-divergen-deep underline">
          How to install it →
        </a>
      </div>

      <div>
        <div className="text-xs uppercase tracking-[0.18em] text-neutral-ink/60 mb-2">
          Preview — intelligence-report.md
        </div>
        <pre className="skill-preview">{result.preview}</pre>
      </div>

      {tier === 'free' && (
        <div className="rounded-2xl bg-neutral-ink text-neutral-paper p-7">
          <div className="text-xs uppercase tracking-[0.18em] text-gold mb-2">Go deeper</div>
          <p className="text-lg leading-relaxed">
            The Pro synthesis is built with Claude Opus at full depth — and adds your{' '}
            <strong className="text-gold">consciousness-index.json</strong> (the machine-readable
            map every future agent can inherit) and your personal{' '}
            <strong className="text-gold">GOVERNANCE.md</strong> (the values your AI operates
            inside). → Upgrade for $97.
          </p>
          <div className="mt-5">
            <Button href={`/api/checkout?email=${encodeURIComponent(email)}`} variant="gold" size="lg">
              Get the Pro synthesis
            </Button>
          </div>
        </div>
      )}

      {tier === 'pro' && (
        <div className="rounded-2xl bg-divergen text-white p-7">
          <p className="text-lg leading-relaxed">
            Level 1 complete. Install your files, then bring your Intelligence Layer to{' '}
            <a className="underline text-divergen-pop" href="https://coo.sheisai.ai">
              coo.sheisai.ai
            </a>{' '}
            and{' '}
            <a className="underline text-divergen-pop" href="https://peaceskill.sheisai.ai">
              peaceskill.sheisai.ai
            </a>{' '}
            — Level 2 (the Machine) is where you learn to build with it.
          </p>
        </div>
      )}
    </div>
  );
}
