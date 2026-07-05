'use client';

import { useState, useEffect, useRef } from 'react';
import Button from './Button';
import { PROFILE_TYPES, MAX_TEXT_CHARS, MAX_FILE_BYTES, isValidEmail } from '@/lib/validate';

type Tier = 'free' | 'pro';

type Props = {
  tier: Tier;
  stripeSessionId?: string;
  initialEmail?: string;
};

type InputMethod = 'paste' | 'pdf' | 'image';

const LOADING_LINES = [
  'Reading what you shared…',
  'Finding your rhythm…',
  'Drafting your Peace Skill…',
  'Almost there — formatting your file…',
];

export default function GenerateForm({ tier, stripeSessionId, initialEmail = '' }: Props) {
  const [email, setEmail] = useState(initialEmail);
  const [name, setName] = useState('');
  const [profileType, setProfileType] = useState<string>('');
  const [method, setMethod] = useState<InputMethod>('paste');
  const [text, setText] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [loadingMsg, setLoadingMsg] = useState(LOADING_LINES[0]);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{
    files: { name: string; content: string }[];
    downloadUrl: string;
    preview: string;
  } | null>(null);

  // Rotate loading messages while submitting
  useEffect(() => {
    if (!submitting) return;
    let i = 0;
    setLoadingMsg(LOADING_LINES[0]);
    const timer = setInterval(() => {
      i = (i + 1) % LOADING_LINES.length;
      setLoadingMsg(LOADING_LINES[i]);
    }, 6000);
    return () => clearInterval(timer);
  }, [submitting]);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  function reset() {
    setResult(null);
    setError(null);
    setSubmitting(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!isValidEmail(email)) {
      setError("That email doesn't look right. Want to try again?");
      return;
    }
    if (method === 'paste' && text.trim().length < 100) {
      setError(
        "We need a bit more to work with. Tell us about your weeks, your routines, and what restores you."
      );
      return;
    }
    if ((method === 'pdf' || method === 'image') && !file) {
      setError(method === 'pdf' ? 'Please attach a PDF.' : 'Please attach an image.');
      return;
    }
    if (file && file.size > MAX_FILE_BYTES) {
      setError('That file is over 10MB. Try a smaller one, or paste the text instead.');
      return;
    }

    setSubmitting(true);

    try {
      const body: Record<string, unknown> = {
        email,
        name,
        profileType,
        tier,
        stripeSessionId,
      };

      if (method === 'paste') {
        body.profileContent = text.trim();
      } else if (file) {
        body.profileFile = await fileToBase64(file);
        body.fileType = method;
        body.fileMime = file.type || (method === 'pdf' ? 'application/pdf' : 'image/png');
      }

      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error || 'Something went wrong on our end. Try again in a moment.');
      }

      setResult({
        files: json.files || [],
        downloadUrl: json.downloadUrl,
        preview: json.preview || (json.files?.[0]?.content ?? ''),
      });
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Unknown error';
      setError(
        msg.includes('rate')
          ? 'Claude is busy right now — try again in a moment.'
          : msg
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (result) {
    return <SuccessState tier={tier} result={result} onReset={reset} email={email} />;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      {/* Email */}
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

      {/* Name */}
      <Field label="Your first name" hint="Optional — used to personalise the skill">
        <input
          type="text"
          placeholder="Sam"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg border border-neutral-warm bg-white px-4 py-3 text-base focus:border-sage focus:outline-none"
        />
      </Field>

      {/* Profile type */}
      <Field label="What are you sharing?" hint="Optional — helps Claude calibrate">
        <select
          value={profileType}
          onChange={(e) => setProfileType(e.target.value)}
          className="w-full rounded-lg border border-neutral-warm bg-white px-4 py-3 text-base focus:border-sage focus:outline-none"
        >
          <option value="">— pick one —</option>
          {PROFILE_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </Field>

      {/* Input method picker */}
      <div>
        <div className="text-sm font-medium text-neutral-ink mb-3">
          Tell us about your life <span className="text-rose-700">*</span>
        </div>
        <div className="grid grid-cols-3 gap-2 rounded-lg border border-neutral-warm p-1 bg-white">
          {(['paste', 'pdf', 'image'] as InputMethod[]).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => {
                setMethod(m);
                setFile(null);
                if (fileInputRef.current) fileInputRef.current.value = '';
              }}
              className={`py-2.5 rounded-md text-sm font-medium transition-colors ${
                method === m
                  ? 'bg-sage text-white'
                  : 'text-neutral-ink/70 hover:bg-sage-wash'
              }`}
            >
              {m === 'paste' ? 'Paste text' : m === 'pdf' ? 'Upload PDF' : 'Upload image'}
            </button>
          ))}
        </div>

        <div className="mt-4">
          {method === 'paste' && (
            <>
              <textarea
                required
                value={text}
                onChange={(e) => setText(e.target.value.slice(0, MAX_TEXT_CHARS))}
                rows={10}
                placeholder="Describe a typical week — your routines (the ones you keep and the ones you skip), what restores you, where balance slips, and what you want your weeks to look like…"
                className="w-full rounded-lg border border-neutral-warm bg-white px-4 py-3 text-base font-mono focus:border-sage focus:outline-none"
              />
              <div className="mt-1 text-xs text-neutral-ink/55 text-right">
                {text.length} / {MAX_TEXT_CHARS}
              </div>
            </>
          )}

          {method === 'pdf' && (
            <input
              ref={fileInputRef}
              type="file"
              accept="application/pdf"
              onChange={(e) => setFile(e.target.files?.[0] ?? null)}
              className="block w-full text-sm file:mr-4 file:rounded-full file:border-0 file:bg-sage file:text-white file:px-4 file:py-2 file:font-medium hover:file:bg-sage-deep"
            />
          )}

          {method === 'image' && (
            <input
              ref={fileInputRef}
              type="file"
              accept="image/png,image/jpeg,image/webp,image/heic"
              onChange={(e) => setFile(e.target.files?.[0] ?? null)}
              className="block w-full text-sm file:mr-4 file:rounded-full file:border-0 file:bg-sage file:text-white file:px-4 file:py-2 file:font-medium hover:file:bg-sage-deep"
            />
          )}

          {file && (
            <div className="mt-2 text-xs text-neutral-ink/65">
              {file.name} · {(file.size / 1024 / 1024).toFixed(2)} MB
            </div>
          )}
        </div>
      </div>

      {/* Error */}
      {error && (
        <div
          role="alert"
          className="rounded-lg border border-rose-200 bg-rose-50 text-rose-900 px-4 py-3 text-sm"
        >
          {error}
        </div>
      )}

      {/* Submit */}
      <div className="pt-2">
        <Button variant={tier === 'pro' ? 'divergen' : 'primary'} size="lg" disabled={submitting}>
          {submitting ? loadingMsg : tier === 'pro' ? 'Generate my Pro skill' : 'Generate my skill'}
        </Button>
        <p className="mt-3 text-xs text-neutral-ink/55">
          What you share is deleted from our server the moment your skill is generated.
        </p>
      </div>
    </form>
  );
}

// FileReader-based base64 — `Buffer` isn't available in the browser.
async function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      if (typeof result !== 'string') {
        reject(new Error('Unexpected FileReader result'));
        return;
      }
      // result is "data:<mime>;base64,<payload>"
      const comma = result.indexOf(',');
      resolve(comma >= 0 ? result.slice(comma + 1) : result);
    };
    reader.onerror = () => reject(reader.error || new Error('File read failed'));
    reader.readAsDataURL(file);
  });
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
  onReset,
  email,
}: {
  tier: Tier;
  result: { files: { name: string; content: string }[]; downloadUrl: string; preview: string };
  onReset: () => void;
  email: string;
}) {
  return (
    <div className="space-y-7">
      <div className="rounded-2xl bg-sage-wash border border-sage-tint p-6">
        <h2 className="font-serif text-2xl text-sage-deep">Your skill is ready.</h2>
        <p className="mt-2 text-neutral-ink/85">
          We've also emailed it to <strong>{email}</strong>. If it doesn't arrive in 5 minutes,
          check spam.
        </p>
      </div>

      {/* Download */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <a
          href={result.downloadUrl}
          download={tier === 'pro' ? 'peace-skill-pro.zip' : 'SKILL.md'}
          className="inline-flex items-center justify-center rounded-full bg-sage text-white px-7 py-3.5 text-base font-medium hover:bg-sage-deep transition-colors"
        >
          {tier === 'pro' ? 'Download .zip (3 files)' : 'Download SKILL.md'}
        </a>
        <a
          href="/how-to-install"
          className="text-sm text-divergen hover:text-divergen-deep underline"
        >
          How to install it →
        </a>
      </div>

      {/* Preview */}
      <div>
        <div className="text-xs uppercase tracking-[0.18em] text-neutral-ink/60 mb-2">
          Preview
        </div>
        <pre className="skill-preview">{result.preview}</pre>
      </div>

      {/* Upsell (free only) */}
      {tier === 'free' && (
        <div className="rounded-2xl bg-neutral-ink text-neutral-paper p-7">
          <div className="text-xs uppercase tracking-[0.18em] text-gold mb-2">
            Want more?
          </div>
          <p className="text-lg leading-relaxed">
            Want the Pro version? Add: your weekly rhythm map, a running-on-empty protocol,
            balance check-ins, and Brain Skill + COO integration. → Upgrade for $47.
          </p>
          <div className="mt-5">
            <Button href={`/api/checkout?email=${encodeURIComponent(email)}`} variant="gold" size="lg">
              Get the Pro skill
            </Button>
          </div>
        </div>
      )}

      {/* Pro: COO CTA */}
      {tier === 'pro' && (
        <div className="rounded-2xl bg-divergen text-white p-7">
          <p className="text-lg leading-relaxed">
            Now plug it in. Head to{' '}
            <a className="underline text-divergen-pop" href="https://coo.sheisai.ai">
              coo.sheisai.ai
            </a>{' '}
            and paste in your SKILL.md content.
          </p>
        </div>
      )}

      <button
        type="button"
        onClick={onReset}
        className="text-sm text-neutral-ink/60 hover:text-neutral-ink underline"
      >
        ← Generate another
      </button>
    </div>
  );
}
