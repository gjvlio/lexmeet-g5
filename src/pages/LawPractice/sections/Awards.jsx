import { useState } from "react";
import GlassCard from "@/components/ui/GlassCard";
import Orb from "@/components/ui/Orb";
import medalImg from "@/assets/LPassets/medal.png";

const AWARDS = [
  "Best Law Firm in 2020 Women’s Rights Cases Category December 2020 (2020)",
  "Innovative Law Firm of the Year (2021)",
  "Top Tier Regional Legal Practice Award (2022)",
  "Excellence in Digital Client Services (2023)",
];

export default function Awards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);

  // Desktop configuration (show 2 awards at a time)
  const itemsPerPage = 2;
  const maxIndex = Math.max(0, AWARDS.length - itemsPerPage);
  
  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };
  
  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const handleMobilePrev = () => {
    setMobileIndex((prev) => (prev - 1 + AWARDS.length) % AWARDS.length);
  };

  const handleMobileNext = () => {
    setMobileIndex((prev) => (prev + 1) % AWARDS.length);
  };

  const visibleAwards = AWARDS.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section className="relative flex flex-col items-center">
      <Orb
        color="olive"
        className="-right-[150px] -top-[100px] h-[320px] w-[320px] lg:h-[500px] lg:w-[500px]"
        opacity={0.35}
      />
      
      <h2 className="relative z-10 mb-10 max-w-xs text-center font-display text-[32px] font-bold leading-tight text-ink sm:text-[36px] lg:mb-12 lg:text-[40px]">
        Special Awards and Citations
      </h2>

      {/* Mobile/Tablet View (< lg): Render 1:1 Slide Carousel with Arrows & Indicator Dots */}
      <div className="relative z-10 w-full lg:hidden flex flex-col items-center">
        <div className="flex w-full max-w-md items-center justify-between gap-3 px-4 sm:px-0">
          <button
            onClick={handleMobilePrev}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-olive active:scale-95 bg-white/70 shadow-sm border border-palm-leaf/10"
            aria-label="Previous award"
          >
            <svg fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="w-full max-w-xs transition-all duration-300">
            <GlassCard className="flex min-h-[240px] flex-col items-center justify-center gap-6 p-6 text-center !rounded-[24px]">
              <img
                src={medalImg}
                alt="Award Ribbon"
                className="h-[80px] w-[80px] object-contain drop-shadow-sm"
              />
              <p className="font-sans text-[14px] font-medium leading-relaxed text-ink/80">
                {AWARDS[mobileIndex]}
              </p>
            </GlassCard>
          </div>

          <button
            onClick={handleMobileNext}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-olive active:scale-95 bg-white/70 shadow-sm border border-palm-leaf/10"
            aria-label="Next award"
          >
            <svg fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Mobile Pagination Indicators */}
        <div className="mt-4 flex justify-center gap-1.5">
          {AWARDS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setMobileIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === mobileIndex ? "w-4 bg-olive-leaf" : "w-1.5 bg-carbon-black/25"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop View (lg+): Render standard multi-column scrolling awards */}
      <div className="relative z-10 hidden w-full items-center justify-center gap-8 lg:flex">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`flex h-12 w-12 items-center justify-center rounded-full text-olive transition-transform hover:scale-110 active:scale-95 ${
            currentIndex === 0 ? "opacity-30 cursor-not-allowed" : ""
          }`}
          aria-label="Previous awards"
        >
          <svg fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="h-8 w-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div className="flex gap-8 transition-all duration-300">
          {visibleAwards.map((text, idx) => (
            <GlassCard
              key={currentIndex + idx}
              className="flex h-[320px] w-[260px] flex-col items-center justify-center gap-6 p-8 text-center !rounded-[24px]"
            >
              <img
                src={medalImg}
                alt="Award Ribbon"
                className="h-[90px] w-[90px] object-contain drop-shadow-sm"
              />
              <p className="font-sans text-[15px] font-medium leading-relaxed text-ink/80">
                {text}
              </p>
            </GlassCard>
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={currentIndex >= maxIndex}
          className={`flex h-12 w-12 items-center justify-center rounded-full text-olive transition-transform hover:scale-110 active:scale-95 ${
            currentIndex >= maxIndex ? "opacity-30 cursor-not-allowed" : ""
          }`}
          aria-label="Next awards"
        >
          <svg fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="h-8 w-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
