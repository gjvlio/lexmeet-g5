import { useCallback, useEffect, useState } from 'react';

/**
 * Single-image carousel for the Office Location column — one photo filling
 * the frame with the controls laid over it, rather than the three-across
 * card treatment SectionCarousel gives the sibling sections.
 */
export default function LocationCarousel({ slides }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = slides.length;

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Auto-advance, held while the pointer is over the frame or a control has
  // keyboard focus — matches SectionCarousel's 5s cadence.
  useEffect(() => {
    if (isPaused || total < 2) return;
    const timer = setInterval(goNext, 5000);
    return () => clearInterval(timer);
  }, [isPaused, goNext, total]);

  return (
    <div
      className="relative h-[240px] overflow-hidden rounded-[20px] border-2 border-parchment/90 bg-carbon-black shadow-card sm:h-[320px] lg:h-full lg:min-h-[380px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      {slides.map((slide, index) => (
        <img
          key={slide.id}
          src={slide.image}
          alt={slide.title}
          aria-hidden={index !== activeIndex}
          className={[
            'absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700',
            index === activeIndex ? 'opacity-100' : 'opacity-0',
          ].join(' ')}
        />
      ))}

      {/* Bottom scrim so the caption and dots stay readable on any photo */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-carbon-black/80 to-transparent" />

      {total > 1 && (
        <>
          <CarouselArrow direction="prev" onClick={goPrev} />
          <CarouselArrow direction="next" onClick={goNext} />
        </>
      )}

      <p className="absolute bottom-9 left-4 right-4 truncate text-center font-sans text-[12px] font-medium text-parchment">
        {slides[activeIndex].title}
      </p>

      {total > 1 && (
        <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === activeIndex}
              className={[
                'h-2 rounded-full transition-all duration-300',
                index === activeIndex ? 'w-6 bg-parchment' : 'w-2 bg-white/45 hover:bg-white/70',
              ].join(' ')}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function CarouselArrow({ direction, onClick }) {
  const isPrev = direction === 'prev';

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isPrev ? 'Previous slide' : 'Next slide'}
      className={[
        'absolute top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full',
        'bg-carbon-black/45 text-parchment shadow-md backdrop-blur-md transition-all',
        'hover:bg-carbon-black/70 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-parchment/70',
        isPrev ? 'left-3' : 'right-3',
      ].join(' ')}
    >
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.5}
          d={isPrev ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'}
        />
      </svg>
    </button>
  );
}
