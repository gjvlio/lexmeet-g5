import { useRef, useState } from 'react';
import GlassCard from '@/components/ui/GlassCard';
import Orb from '@/components/ui/Orb';
import { CORE_VALUES_DATA } from '@/utils/content.js';

import ocImg from '@/assets/AUassets/OC.png';
import upImg from '@/assets/AUassets/UP.png';
import balImg from '@/assets/AUassets/BAL.png';

const VALUES = CORE_VALUES_DATA.map((v, i) => ({
  ...v,
  icon: i === 0 || i === 3 ? ocImg : i === 1 ? upImg : balImg
}));


export default function Values() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);
  const itemsPerPage = 3;
  const maxIndex = Math.max(0, VALUES.length - itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const visibleValues = VALUES.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-olive to-forest px-4 py-12 shadow-card sm:rounded-[60px] sm:px-6 sm:py-16">
      <Orb
        color="sage"
        className="-right-[100px] top-[20%] h-[260px] w-[260px] sm:h-[400px] sm:w-[400px]"
        opacity={0.3}
      />
      <div className="relative z-10 mx-auto max-w-[1400px] text-center">
        <h2 className="font-display text-3xl font-bold text-cream sm:text-4xl">
          Values we live by
        </h2>
        <div className="mx-auto mb-5 mt-4 h-[1px] w-48 bg-cream/30 sm:mb-6 sm:w-64" />
        <p className="mb-10 font-sans text-[16px] text-cream/90 sm:mb-14 sm:text-[18px]">
          These principles shape how we deliver every consultation.
        </p>

        {/* Mobile & Tablet View (< xl) - Horizontal Scrollable Carousel with Floating Left Icons */}
        <div className="xl:hidden w-full flex flex-col items-center">
          <div
            ref={scrollRef}
            className="-mx-4 w-[calc(100%+2rem)] sm:-mx-6 sm:w-[calc(100%+3rem)] flex gap-x-4 px-4 sm:px-8 overflow-x-auto scrollbar-none snap-x snap-mandatory py-4 touch-pan-x scroll-smooth items-stretch"
          >
            {VALUES.map((val, i) => (
              <div
                key={i}
                /* w-full is the strip's own content width, so the card fills
                   the scrollport at any phone size without a sliver of the
                   next card left clipped at the edge. Deliberately not a vw
                   calculation — the page wrapper and this strip both add
                   padding, so viewport width is not what is available here.
                   The cap lets neighbours peek once there is room. */
                className="w-full max-w-[360px] shrink-0 snap-center relative flex items-stretch pl-[36px]"
              >
                {/* Floating Left Icon Circle */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-full bg-cream shadow-pill drop-shadow-md">
                  <img
                    src={val.icon}
                    alt={val.title.replace('\n', ' ')}
                    className="h-[42px] w-[42px] object-contain"
                  />
                </div>

                {/* GlassCard with Left Padding for Icon */}
                <GlassCard
                  tone="dark"
                  className="flex h-full w-full flex-col justify-start gap-2.5 rounded-[24px] border border-white/20 !bg-white/10 pt-6 pb-5 pr-4 pl-[48px] text-left text-cream shadow-lg"
                >
                  <div className="min-h-[44px] flex items-center">
                    <h3 className="whitespace-pre-line font-display text-[17px] font-bold leading-tight text-cream">
                      {val.title}
                    </h3>
                  </div>
                  <p className="font-sans text-[12.5px] leading-relaxed text-cream/90">
                    {val.description || val.desc}
                  </p>
                </GlassCard>
              </div>
            ))}
          </div>

          {/* Mobile/Tablet Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              type="button"
              onClick={() => {
                if (scrollRef.current) {
                  scrollRef.current.scrollBy({ left: -280, behavior: 'smooth' });
                }
              }}
              aria-label="Previous value"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-cream text-forest shadow-md active:scale-95 transition-transform cursor-pointer"
            >
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="font-sans text-xs font-semibold text-cream/80 tracking-wider uppercase">
              Swipe for more
            </span>
            <button
              type="button"
              onClick={() => {
                if (scrollRef.current) {
                  scrollRef.current.scrollBy({ left: 280, behavior: 'smooth' });
                }
              }}
              aria-label="Next value"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-cream text-forest shadow-md active:scale-95 transition-transform cursor-pointer"
            >
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop View (xl+) - 3-Card Carousel with Floating Left Icon Badges */}
        <div className="hidden xl:flex w-full items-center justify-between gap-8">
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            aria-label="Previous values"
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cream text-forest shadow-md transition-transform hover:scale-105 active:scale-95 cursor-pointer ${
              currentIndex === 0 ? 'cursor-not-allowed opacity-40' : ''
            }`}
          >
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="3"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="grid w-full flex-1 grid-cols-3 gap-x-12 pl-[50px] transition-all duration-300 items-stretch">
            {visibleValues.map((val, i) => (
              <div key={currentIndex + i} className="relative flex items-stretch h-full">
                {/* Floating Left Circle Icon */}
                <div className="absolute -left-[50px] top-1/2 -translate-y-1/2 z-20 flex h-[100px] w-[100px] shrink-0 items-center justify-center rounded-full bg-cream shadow-pill drop-shadow-md">
                  <img
                    src={val.icon}
                    alt={val.title.replace('\n', ' ')}
                    className="h-[52px] w-[52px] object-contain"
                  />
                </div>

                {/* Uniform Height & Aligned Baseline GlassCard */}
                <GlassCard
                  tone="dark"
                  className="flex h-full w-full flex-col justify-start gap-3.5 !rounded-[32px] border border-white/20 !bg-white/10 pt-8 pb-7 pr-6 pl-[65px] text-left text-cream shadow-lg"
                >
                  <div className="min-h-[56px] flex items-center">
                    <h3 className="whitespace-pre-line font-display text-[22px] font-bold leading-tight text-cream">
                      {val.title}
                    </h3>
                  </div>
                  <p className="font-sans text-[13.5px] leading-relaxed text-cream/90">
                    {val.description || val.desc}
                  </p>
                </GlassCard>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            aria-label="Next values"
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cream text-forest shadow-md transition-transform hover:scale-105 active:scale-95 cursor-pointer ${
              currentIndex >= maxIndex ? 'cursor-not-allowed opacity-40' : ''
            }`}
          >
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="3"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
