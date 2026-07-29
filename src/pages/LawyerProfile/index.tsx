import { useState } from 'react';
import { cn } from '@/utils/cn';
import { LAWYERS, TABS, TOTAL_LAWYERS, PAGE_COUNT, type Lawyer } from './lawyers';
import orbImage from '@/assets/LawyersProfile/orb.png';
import searchIcon from '@/assets/LawyersProfile/search-icon.png';
import callIcon from '@/assets/LawyersProfile/call-icon.png';
import onlineToggle from '@/assets/LawyersProfile/online-toggle.png';
import offlineToggle from '@/assets/LawyersProfile/offline-toggle.png';

/*
 * Geometry is measured off the 1440px Figma frames ("Lawyers Profile —
 * List of Lawyers / Ratings & Feedback / Availability"). Offsets below are
 * literal pixel values relative to the card's left edge, not flex-derived,
 * so the three tabs line up exactly as drawn. Responsive pass: docs/PROGRESS.md.
 */
const CARD_X = 146;
const CARD_W = 1150;
const ROW_H = 85;
const HEADER_BAND_H = 46;

/** Column anchors, relative to the card's left edge. */
const X = {
  avatar: 32,
  name: 113,
  positionCx: 567,
  /** The third column re-centres slightly per tab, as drawn. */
  actionCx: 829,
  ratingsCx: 809,
  availabilityCx: 825,
  seeMoreCx: 1019,
  ruleStart: 32,
  ruleEnd: 1121,
};

export default function LawyerProfile() {
  const [activeTab, setActiveTab] = useState(0);
  const [page, setPage] = useState(1);

  /** Kerr owns the shared lawyer modal — see docs/PROGRESS.md. */
  const handleSeeMore = (lawyer: Lawyer) => {
    console.info('Open lawyer modal for', lawyer.name);
  };

  return (
    <section className="relative overflow-hidden bg-parchment pb-8 pt-7">
      <BackgroundOrb corner="top-left" size={720} />
      <BackgroundOrb corner="bottom-right" size={900} />

      <div className="relative mx-auto w-[1440px]">
        <PageHeading />
        <ControlsRow activeTab={activeTab} onTabChange={setActiveTab} />
        <LawyerTable activeTab={activeTab} onSeeMore={handleSeeMore} />
        <Pagination page={page} onPageChange={setPage} />
        <ResultCount />
      </div>
    </section>
  );
}

/**
 * Corner glow. Both are anchored past the section's corners so only the inner
 * arc shows and the fade runs toward the middle of the page — the seam is the
 * viewport edge itself, so there is no hard line anywhere on the page.
 *
 * Anchoring is by corner rather than by coordinate (the bottom-right one uses
 * right/bottom) so each stays welded to its corner at any viewport width.
 * `max-w-none` is required, or Tailwind's preflight squashes the image to the
 * container width.
 */
function BackgroundOrb({ corner, size }: { corner: 'top-left' | 'bottom-right'; size: number }) {
  /**
   * Glow centres relative to their corner. The asset fades to zero at ~47% of
   * its width, so the top-left centre sits that far down from the section top:
   * any higher and the header seam clips the glow while it is still visible,
   * leaving a hard line. The bottom-right one needs no such clearance — the
   * dark footer starts immediately below it.
   */
  const centre = corner === 'top-left' ? { x: 80, y: size * 0.48 } : { x: 0, y: 253 };
  const offset = { x: centre.x - size / 2, y: centre.y - size / 2 };

  return (
    <img
      src={orbImage}
      alt=""
      aria-hidden
      className="pointer-events-none absolute max-w-none"
      style={{
        width: size,
        height: size,
        ...(corner === 'top-left'
          ? { left: offset.x, top: offset.y }
          : { right: offset.x, bottom: offset.y }),
      }}
    />
  );
}

function PageHeading() {
  return (
    <>
      <h1 className="text-center font-display text-[48px] font-bold leading-none text-carbon-black">
        Lawyers Profile
      </h1>
      <p className="mx-auto mt-5 max-w-[712px] text-center font-sans text-[15px] leading-[22px] text-charcoal-brown">
        Meet the attorneys behind our platform. Compare practice areas, ratings, and live
        availability, then book a secure online consultation in minutes.
      </p>
    </>
  );
}

function ControlsRow({
  activeTab,
  onTabChange,
}: {
  activeTab: number;
  onTabChange: (i: number) => void;
}) {
  return (
    <div className="relative mt-[46px] h-[50px]">
      <SearchField />
      {TABS.map((tab, i) => (
        <button
          key={tab.label}
          type="button"
          onClick={() => onTabChange(i)}
          style={{ left: 623 + i * 222 }}
          className={cn(
            'absolute top-0 h-[50px] w-[200px] rounded-full font-sans text-[16px] transition-colors',
            i === activeTab
              ? 'bg-olive-pill font-semibold text-parchment shadow-pill'
              : 'border border-palm-leaf/90 bg-[#F8F8F2] text-carbon-black hover:bg-white',
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

function SearchField() {
  return (
    <div className="absolute left-[145px] top-0 flex h-[50px] w-[420px] items-center gap-[15px] rounded-full border border-palm-leaf/90 bg-white/45 pl-[10px] backdrop-blur-glass">
      <img src={searchIcon} alt="" className="h-[30px] w-[30px]" />
      <input
        type="search"
        placeholder="Search a lawyer..."
        aria-label="Search a lawyer"
        className="h-full flex-1 bg-transparent pr-6 font-sans text-[15px] text-carbon-black placeholder:text-carbon-black/45 focus:outline-none"
      />
    </div>
  );
}

function LawyerTable({
  activeTab,
  onSeeMore,
}: {
  activeTab: number;
  onSeeMore: (lawyer: Lawyer) => void;
}) {
  return (
    /*
     * Frosted panel, same treatment as the search field, so the orb reads
     * through its left side as in the design. The fill is a light neutral at
     * 60% rather than plain white: solving the reference card against both
     * its backdrops (plain page vs. over the orb) gives rgba(237,238,236,.6),
     * and pure white can only lighten, never desaturate.
     */
    <div
      className="relative mt-[30px] overflow-hidden rounded-3xl border border-white/90 bg-[rgba(237,238,236,0.6)] shadow-glass backdrop-blur-glass"
      style={{ marginLeft: CARD_X, width: CARD_W, height: HEADER_BAND_H + ROW_H * LAWYERS.length }}
    >
      <ColumnHeaders activeTab={activeTab} />
      {LAWYERS.map((lawyer, i) => (
        <LawyerRow
          key={lawyer.name}
          lawyer={lawyer}
          activeTab={activeTab}
          isLast={i === LAWYERS.length - 1}
          onSeeMore={onSeeMore}
        />
      ))}
    </div>
  );
}

/** Column labels sit in their own band above the first rule. */
function ColumnHeaders({ activeTab }: { activeTab: number }) {
  const label = 'font-sans text-[11px] font-semibold uppercase tracking-[0.09em] text-olive-leaf';
  const thirdCx = [X.actionCx, X.ratingsCx, X.availabilityCx][activeTab];

  return (
    <div className="relative" style={{ height: HEADER_BAND_H }}>
      <span className={cn('absolute bottom-[10px]', label)} style={{ left: X.avatar }}>
        Lawyer
      </span>
      <span
        className={cn('absolute bottom-[10px] -translate-x-1/2', label)}
        style={{ left: X.positionCx }}
      >
        Position
      </span>
      <span
        className={cn('absolute bottom-[10px] -translate-x-1/2', label)}
        style={{ left: thirdCx }}
      >
        {TABS[activeTab].column}
      </span>
      <Rule className="bottom-0 bg-[#C0C3A8]" />
    </div>
  );
}

/** Hairline between rows — inset from the card edge, as drawn. */
function Rule({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn('absolute h-px', className)}
      style={{ left: X.ruleStart, width: X.ruleEnd - X.ruleStart }}
    />
  );
}

function LawyerRow({
  lawyer,
  activeTab,
  isLast,
  onSeeMore,
}: {
  lawyer: Lawyer;
  activeTab: number;
  isLast: boolean;
  onSeeMore: (lawyer: Lawyer) => void;
}) {
  return (
    <div className="relative" style={{ height: ROW_H }}>
      <Avatar lawyer={lawyer} />

      <span
        className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap font-display text-[20px] font-semibold text-carbon-black"
        style={{ left: X.name }}
      >
        {lawyer.name}
      </span>

      <span
        className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-sans text-[18px] text-carbon-black"
        style={{ left: X.positionCx }}
      >
        {lawyer.position}
      </span>

      {activeTab === 0 && <CallButton />}
      {activeTab === 1 && <RatingCell rating={lawyer.rating} />}
      {activeTab === 2 && <AvailabilityPill available={lawyer.available} />}

      <SeeMoreButton onClick={() => onSeeMore(lawyer)} />

      {!isLast && <Rule className="bottom-0 bg-[#D2D4C2]" />}
    </div>
  );
}

function Avatar({ lawyer }: { lawyer: Lawyer }) {
  return (
    <span
      className="absolute top-1/2 h-[60px] w-[60px] -translate-y-1/2"
      style={{ left: X.avatar }}
    >
      <img
        src={lawyer.photo}
        alt=""
        className="h-[60px] w-[60px] rounded-full object-cover ring-1 ring-dark-khaki"
      />
      <img
        src={lawyer.online ? onlineToggle : offlineToggle}
        alt={lawyer.online ? 'Online' : 'Offline'}
        className="absolute bottom-[3px] right-[8px] h-[12px] w-[12px]"
      />
    </span>
  );
}

function CallButton() {
  return (
    <button
      type="button"
      className="absolute top-1/2 flex h-[40px] w-[107px] -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-[9px] rounded-full border border-palm-leaf/90 bg-white/60 font-sans text-[13px] font-semibold text-olive-leaf backdrop-blur-glass transition-colors hover:bg-white/80"
      style={{ left: X.actionCx }}
    >
      <img src={callIcon} alt="" className="h-[20px] w-[20px]" />
      Call
    </button>
  );
}

/** Five stars (14px, 7px apart) then the numeric score, as drawn. */
function RatingCell({ rating }: { rating: number }) {
  return (
    <span
      className="absolute top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-[11px]"
      style={{ left: X.ratingsCx }}
    >
      <span className="flex gap-[7px]">
        {Array.from({ length: 5 }, (_, i) => (
          <Star key={i} filled={i < Math.round(rating)} />
        ))}
      </span>
      <span className="font-sans text-[18px] font-semibold text-carbon-black">
        {rating.toFixed(1)}
      </span>
    </span>
  );
}

function Star({ filled }: { filled: boolean }) {
  return (
    <svg
      viewBox="0 0 14 13"
      aria-hidden
      className={cn('h-[13px] w-[14px]', filled ? 'text-olive-leaf' : 'text-palm-leaf/40')}
    >
      <path
        d="M7 0l2.163 4.382 4.837.703-3.5 3.411.826 4.817L7 11.04l-4.326 2.273.826-4.817L0 5.085l4.837-.703L7 0z"
        fill="currentColor"
      />
    </svg>
  );
}

function AvailabilityPill({ available }: { available: boolean }) {
  return (
    <span
      className={cn(
        'absolute top-1/2 grid h-[40px] w-[120px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border font-sans text-[13px] font-semibold text-carbon-black',
        available
          ? 'border-palm-leaf/80 bg-linen-olive/80'
          : 'border-palm-leaf/90 bg-white/70 backdrop-blur-glass',
      )}
      style={{ left: X.availabilityCx }}
    >
      {available ? 'Available' : 'Not Available'}
    </span>
  );
}

function SeeMoreButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="absolute top-1/2 h-[40px] w-[120px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-olive-pill font-sans text-[13px] font-semibold text-parchment shadow-pill transition-[filter] hover:brightness-110"
      style={{ left: X.seeMoreCx }}
    >
      See More
    </button>
  );
}

function Pagination({ page, onPageChange }: { page: number; onPageChange: (p: number) => void }) {
  const base =
    'grid h-[40px] w-[40px] place-items-center rounded-full font-sans text-[14px] transition-colors';
  const outline =
    'border border-palm-leaf/90 bg-white/60 text-carbon-black backdrop-blur-glass hover:bg-white/80';

  return (
    <nav aria-label="Pagination" className="mt-10 flex justify-center gap-[13px]">
      <button
        type="button"
        aria-label="Previous page"
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
        className={cn(base, outline, 'disabled:opacity-45')}
      >
        &lsaquo;
      </button>

      {Array.from({ length: PAGE_COUNT }, (_, i) => i + 1).map((n) => (
        <button
          key={n}
          type="button"
          aria-current={n === page ? 'page' : undefined}
          onClick={() => onPageChange(n)}
          className={cn(
            base,
            n === page ? 'bg-olive-pill font-semibold text-parchment shadow-pill' : outline,
          )}
        >
          {n}
        </button>
      ))}

      <button
        type="button"
        aria-label="Next page"
        disabled={page === PAGE_COUNT}
        onClick={() => onPageChange(page + 1)}
        className={cn(base, outline, 'disabled:opacity-45')}
      >
        &rsaquo;
      </button>
    </nav>
  );
}

function ResultCount() {
  return (
    <p className="mt-[11px] text-center font-sans text-[13px] leading-[18px] text-carbon-black/60">
      Showing 1-{LAWYERS.length} of {TOTAL_LAWYERS} Lawyers
    </p>
  );
}
