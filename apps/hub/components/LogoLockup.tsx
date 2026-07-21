// Inline SVG wordmark lockup. Replace with real logo files in /public when ready.

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
      <span
        className="font-sans font-bold text-divergen tracking-tight"
        style={{ fontSize: compact ? '0.95rem' : '1.05rem' }}
      >
        Intelligence Layer
      </span>
    </div>
  );
}
