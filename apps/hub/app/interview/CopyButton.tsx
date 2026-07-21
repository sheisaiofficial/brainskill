'use client';

import { useState } from 'react';

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Clipboard blocked — select-all fallback is the <pre> below.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center justify-center rounded-full bg-sage text-white px-7 py-3.5 text-base font-medium hover:bg-sage-deep transition-colors"
    >
      {copied ? 'Copied — paste it into Claude' : 'Copy the full interview prompt'}
    </button>
  );
}
