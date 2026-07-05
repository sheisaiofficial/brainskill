import Link from 'next/link';
import LogoLockup from './LogoLockup';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-neutral-warm/60 bg-neutral-paper">
      <div className="max-w-page mx-auto px-5 sm:px-8 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <div className="font-serif text-lg font-semibold text-neutral-ink">
            peaceskill.sheisai.ai
          </div>
          <div className="mt-2">
            <LogoLockup compact />
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-neutral-ink/60 mb-3">
            Links
          </div>
          <ul className="space-y-2 text-sm">
            <li>
              <a className="hover:text-divergen" href="https://sheisai.ai">
                About SHE IS AI → sheisai.ai
              </a>
            </li>
            <li>
              <a className="hover:text-divergen" href="https://coo.sheisai.ai">
                The COO tool → coo.sheisai.ai
              </a>
            </li>
            <li>
              <a className="hover:text-divergen" href="https://brainskill.sheisai.ai">
                The Brain Skill → brainskill.sheisai.ai
              </a>
            </li>
            <li>
              <a className="hover:text-divergen" href="https://intelligence.sheisai.ai">
                The Intelligence Layer → intelligence.sheisai.ai
              </a>
            </li>
            <li>
              <Link className="hover:text-divergen" href="/privacy">
                Privacy
              </Link>
            </li>
            <li>
              <Link className="hover:text-divergen" href="/terms">
                Terms
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-neutral-ink/60 mb-3">
            Voice
          </div>
          <p className="text-sm text-neutral-ink/80">
            Built by humans · Run by Claude · Owned by you
          </p>
          <p className="mt-6 text-xs text-neutral-ink/55">
            © SHE IS AI {new Date().getFullYear()} · Made in Tauranga, Aotearoa
          </p>
        </div>
      </div>
    </footer>
  );
}
