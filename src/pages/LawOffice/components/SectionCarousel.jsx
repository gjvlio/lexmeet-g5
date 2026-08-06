import { useState, useEffect, useCallback } from 'react';

export default function SectionCarousel({ items, renderCard, darkTheme = true }) {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const total = items.length;

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Auto-slide every 5 seconds if not hovered
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered, handleNext]);

  const prevIndex = (activeIndex - 1 + total) % total;
  const nextIndex = (activeIndex + 1) % total;



  return (
    <div
      className="relative mt-5 sm:mt-8 w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Carousel Row */}
      <div className="relative flex items-center justify-between max-w-[960px] mx-auto px-1 sm:px-4">
        {/* Left Arrow Button */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous Slide"
          className={[
            'z-30 flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300',
            darkTheme
              ? 'bg-white/80 text-carbon-black hover:bg-white active:scale-95 shadow-md backdrop-blur-md'
              : 'bg-white text-carbon-black hover:bg-linen-olive active:scale-95 shadow-md border border-palm-leaf/20',
          ].join(' ')}
        >
          <svg
            className="h-4 w-4 sm:h-5 sm:w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Overlapping Cards Container */}
        <div className="relative flex items-center justify-center w-full max-w-[800px] mx-auto py-2 sm:py-4 overflow-visible">
          {/* Previous Card (Left) */}
          <div
            key={`prev-${items[prevIndex].id}`}
            onClick={() => setActiveIndex(prevIndex)}
            className="hidden sm:block cursor-pointer w-[28%] lg:w-[30%] shrink-0 transition-all duration-500 ease-out transform scale-90 opacity-75 hover:opacity-100 z-10 -mr-8 lg:-mr-12 animate-fade-in"
          >
            {renderCard(items[prevIndex], false, prevIndex)}
          </div>

          {/* Active Center Card */}
          <div 
            key={`active-${items[activeIndex].id}`}
            className="cursor-default w-[85%] sm:w-[48%] lg:w-[44%] shrink-0 transition-all duration-500 ease-out transform scale-100 sm:scale-105 z-20 shadow-xl animate-fade-in"
          >
            {renderCard(items[activeIndex], true, activeIndex)}
          </div>

          {/* Next Card (Right) */}
          <div
            key={`next-${items[nextIndex].id}`}
            onClick={() => setActiveIndex(nextIndex)}
            className="hidden sm:block cursor-pointer w-[28%] lg:w-[30%] shrink-0 transition-all duration-500 ease-out transform scale-90 opacity-75 hover:opacity-100 z-10 -ml-8 lg:-ml-12 animate-fade-in"
          >
            {renderCard(items[nextIndex], false, nextIndex)}
          </div>
        </div>

        {/* Right Arrow Button */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next Slide"
          className={[
            'z-30 flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300',
            darkTheme
              ? 'bg-white/80 text-carbon-black hover:bg-white active:scale-95 shadow-md backdrop-blur-md'
              : 'bg-white text-carbon-black hover:bg-linen-olive active:scale-95 shadow-md border border-palm-leaf/20',
          ].join(' ')}
        >
          <svg
            className="h-4 w-4 sm:h-5 sm:w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Pagination Indicator Dots */}
      <div className="mt-4 sm:mt-5 flex items-center justify-center gap-2">
        {items.map((_, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={[
                'h-2 rounded-full transition-all duration-300',
                isActive
                  ? darkTheme
                    ? 'w-6 bg-parchment'
                    : 'w-6 bg-olive-leaf'
                  : darkTheme
                    ? 'w-2 bg-white/35 hover:bg-white/60'
                    : 'w-2 bg-carbon-black/25 hover:bg-carbon-black/50',
              ].join(' ')}
            />
          );
        })}
      </div>
    </div>
  );
}
