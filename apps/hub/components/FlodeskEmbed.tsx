'use client';

// ─────────────────────────────────────────────────────────────────────
// PASTE YOUR FLODESK INLINE EMBED CODE BETWEEN THE BACKTICKS BELOW.
// Flodesk → Forms → (your waitlist form) → Inline → copy the full
// embed snippet (both <script> blocks + the <div id="fd-form-...">).
// Until you do, a graceful placeholder renders instead.
// ─────────────────────────────────────────────────────────────────────
const FLODESK_INLINE_EMBED = ``;

import { useEffect, useRef } from 'react';

export default function FlodeskEmbed() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!FLODESK_INLINE_EMBED.trim() || !ref.current) return;
    // Flodesk embeds arrive as HTML containing <script> tags; scripts
    // injected via innerHTML don't execute, so re-create them manually.
    ref.current.innerHTML = FLODESK_INLINE_EMBED;
    const scripts = Array.from(ref.current.querySelectorAll('script'));
    for (const old of scripts) {
      const s = document.createElement('script');
      for (const attr of Array.from(old.attributes)) s.setAttribute(attr.name, attr.value);
      s.text = old.text;
      old.replaceWith(s);
    }
  }, []);

  if (!FLODESK_INLINE_EMBED.trim()) {
    return (
      <div className="rounded-xl border-2 border-dashed border-sage-tint bg-white/70 p-8 text-center">
        <p className="text-neutral-ink/70 text-sm leading-relaxed">
          <strong className="text-sage-deep">Flodesk form goes here.</strong>
          <br />
          Paste your inline embed code into{' '}
          <code className="text-xs">components/FlodeskEmbed.tsx</code> and redeploy.
        </p>
      </div>
    );
  }

  return <div ref={ref} />;
}
