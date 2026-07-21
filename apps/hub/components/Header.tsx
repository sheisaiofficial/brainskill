import Link from 'next/link';
import LogoLockup from './LogoLockup';

export default function Header() {
  return (
    <header className="border-b border-neutral-warm/60 bg-neutral-paper/80 backdrop-blur sticky top-0 z-30">
      <div className="max-w-page mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link href="/" aria-label="SHE IS AI Intelligence Layer home" className="block">
          <LogoLockup />
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm">
          <Link className="text-neutral-ink/75 hover:text-neutral-ink" href="/about">
            The three levels
          </Link>
          <Link className="text-neutral-ink/75 hover:text-neutral-ink" href="/how-to-install">
            How to install
          </Link>
          <Link className="text-neutral-ink/75 hover:text-neutral-ink" href="/about">
            About
          </Link>
          <Link
            href="/journey"
            className="inline-flex items-center rounded-full bg-sage text-white px-4 py-1.5 font-medium hover:bg-sage-deep transition-colors"
          >
            Begin the journey
          </Link>
        </nav>
      </div>
    </header>
  );
}
