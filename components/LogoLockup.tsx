// Inline SVG wordmark lockup. Replace with real logo files in /public when ready.
// Layout: [SHE IS AI in sage] · [hairline divider] · ["in partnership with"] · [DivergenThinking in blue]

export default function LogoLockup({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3 select-none">
      <span
        className="font-serif font-semibold text-sage-deep tracking-tight"
        style={{ fontSize: compact ? '0.95rem' : '1.05rem' }}
      >
        SHE IS AI
      </span>
      <span className="h-4 w-px bg-neutral-warm" aria-hidden />
      <span className="flex items-center gap-1.5">
        {!compact && (
          <span className="text-[0.7rem] uppercase tracking-[0.16em] text-neutral-ink/55">
            in partnership with
          </span>
        )}
        <span
          className="font-sans font-bold text-divergen tracking-tight"
          style={{ fontSize: compact ? '0.95rem' : '1.05rem' }}
        >
          Diverg<span className="text-divergen-pop">e</span>nThinking
        </span>
      </span>
    </div>
  );
}
