import { useEffect, useState } from 'react';
import Modal from '@/components/ui/Modal';
import { cn } from '@/utils/cn';
import { getCv } from '../cv';
import LawyerCV from './LawyerCV';
import LawyerRatings from './LawyerRatings';

const TABS = ['Curriculum Vitae', 'Ratings & Feedback', 'Lawyer Schedule'];

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" aria-hidden>
      <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2.4" />
      </g>
    </svg>
  );
}

function CaseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" aria-hidden>
      <g stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
        <circle cx="12" cy="8" r="3.5" />
        <path d="M4.5 20a7.5 7.5 0 0 1 15 0" strokeLinecap="round" />
      </g>
    </svg>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden>
      <path
        d="m12 3 2.7 5.9 6.3.7-4.7 4.3 1.3 6.1L12 17l-5.6 3 1.3-6.1L3 9.6l6.3-.7L12 3Z"
        fill="currentColor"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden>
      <path
        d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3a1.5 1.5 0 0 1-1.6 1.5C11.6 19.9 4.1 12.4 3.5 5.1A1.5 1.5 0 0 1 5 3.5h1.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Placeholder for a tab whose content is owned elsewhere or still pending. */
function TabPlaceholder({ children }) {
  return (
    <div className="grid min-h-[240px] place-items-center rounded-2xl border border-white/80 bg-white/40 p-10 text-center font-sans text-sm text-dusty-olive">
      {children}
    </div>
  );
}

/**
 * "See more" dialog for a lawyer row — profile header, the three comp tabs,
 * and the Curriculum Vitae panel. Ratings and Schedule are stubbed: the
 * Ratings comp hasn't landed yet and Lawyer Schedule is El's section.
 */
export default function LawyerModal({ lawyer, isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState(0);

  // A freshly opened lawyer should always start on the CV tab.
  useEffect(() => {
    if (isOpen) setActiveTab(0);
  }, [isOpen, lawyer]);

  if (!lawyer) return null;

  const cv = getCv(lawyer);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="xl"
      /* Denser than the default .glass fill — the CV is long-form text and
         needs a calmer surface than the roster showing through. */
      className="!bg-white/80 p-6 sm:p-8"
    >
      <header className="flex flex-col gap-5 pr-8 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="relative shrink-0">
            <img
              src={lawyer.photo}
              alt=""
              className="h-14 w-14 rounded-full object-cover sm:h-[72px] sm:w-[72px]"
            />
            {lawyer.online && (
              <span
                className="absolute bottom-1 right-1 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-500"
                aria-label="Online"
              />
            )}
          </div>

          <div className="min-w-0">
            <h2 className="font-display text-xl font-bold text-carbon-black sm:text-[28px]">
              {lawyer.name}
            </h2>
            <p className="font-sans text-[13px] text-dusty-olive">{lawyer.position}</p>
            <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 font-sans text-[12px] text-dark-khaki">
              <span className="inline-flex items-center gap-1">
                <PinIcon />
                {cv.location}
              </span>
              <span className="inline-flex items-center gap-1">
                <CaseIcon />
                {cv.caseCount}
              </span>
              <span className="inline-flex items-center gap-1">
                <StarIcon />
                {lawyer.rating.toFixed(1)}
              </span>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-full shrink-0 items-center justify-center gap-2 rounded-full bg-olive-pill px-5 font-sans text-sm font-bold text-parchment shadow-pill transition-[filter] hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-olive-leaf/60 sm:w-auto"
        >
          <span className="grid h-7 w-7 place-items-center rounded-full bg-parchment/20">
            <PhoneIcon />
          </span>
          Talk to this Lawyer
        </button>
      </header>

      <div role="tablist" className="mt-6 grid gap-3 sm:grid-cols-3">
        {TABS.map((label, i) => (
          <button
            key={label}
            type="button"
            role="tab"
            aria-selected={activeTab === i}
            onClick={() => setActiveTab(i)}
            className={cn(
              'h-11 rounded-full border px-3 font-sans text-[13px] font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-olive-leaf/60 sm:text-sm',
              activeTab === i
                ? 'border-transparent bg-olive-pill text-parchment shadow-pill'
                : 'border-sage-mist/80 bg-white/60 text-carbon-black hover:bg-white/80',
            )}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="mt-6 max-h-[65vh] overflow-y-auto pr-1 sm:mt-7 sm:max-h-[60vh]">
        {/* key resets the See More toggles when a different lawyer is opened */}
        {activeTab === 0 && <LawyerCV key={lawyer.name} lawyer={lawyer} />}
        {activeTab === 1 && <LawyerRatings lawyer={lawyer} />}
        {activeTab === 2 && <TabPlaceholder>Lawyer Schedule</TabPlaceholder>}
      </div>
    </Modal>
  );
}
