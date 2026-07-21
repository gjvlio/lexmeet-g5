import { Link } from 'react-router-dom';
import { NAV_ITEMS } from '@/utils/content';
import ScalesIcon from '@/components/ui/ScalesIcon';

/** Top navigation — fixed 220px band, cream, centered logo lockup + nav row. */
export default function Header() {
  return (
    <header className="relative z-30 bg-cream">
      <div className="mx-auto flex h-[130px] max-w-[1440px] items-center justify-center px-16">
        {/* left rule */}
        <span className="hidden h-px flex-1 bg-sage/70 md:block" />
        <div className="flex items-center gap-3 px-8">
          <ScalesIcon className="h-9 w-9 text-ink" />
          <span className="font-display text-[34px] tracking-[0.18em] text-ink">
            RIZAL LAW OFFICE
          </span>
        </div>
        <span className="hidden h-px flex-1 bg-sage/70 md:block" />
        <button
          aria-label="Account"
          className="ml-6 grid h-11 w-11 place-items-center rounded-full border border-ink/30 text-ink"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20a8 8 0 0 1 16 0" />
          </svg>
        </button>
      </div>

      <nav className="flex justify-center gap-11 pb-6">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.label}
            to={item.href}
            className="font-sans text-[15px] font-medium text-ink/90 transition-colors hover:text-olive"
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <span className="block h-px w-full bg-sage/60" />
    </header>
  );
}
