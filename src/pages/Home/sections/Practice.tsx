import { PRACTICE_AREAS } from '@/utils/content';
import { PHOTOS } from '@/utils/images';
import SectionLabel from '@/components/ui/SectionLabel';
import { cn } from '@/utils/cn';

const PHOTO_KEYS = ['practice-family', 'practice-civil', 'practice-criminal', 'practice-labor'];

/**
 * PRACTICE band — split outline/filled headline over a darkened photo,
 * with light glass cards holding custom-corner photo thumbs.
 */
export default function Practice() {
  return (
    <section id="practice" className="relative overflow-hidden bg-ink py-20">
      {/* subtle photo texture */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-mist via-forest to-ink" />
      <div className="pointer-events-none absolute inset-0 bg-ink/40 mix-blend-multiply" />

      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-16">
        {/* Split headline — the two copies are stacked, so both scale together. */}
        <div className="relative mb-8 h-[48px] sm:h-[80px] lg:mb-10 lg:h-[150px]">
          <h2 className="absolute left-0 top-0 font-display text-[48px] font-bold leading-none text-cream sm:text-[80px] lg:text-[150px]">
            PRACTICE
          </h2>
          <h2
            aria-hidden
            className="absolute left-0 top-0 font-display text-[48px] font-bold leading-none text-transparent [-webkit-text-stroke:1px_theme(colors.sage)] [clip-path:inset(50%_0_0_0)] sm:text-[80px] lg:text-[150px]"
          >
            PRACTICE
          </h2>
        </div>

        <div className="flex gap-6">
          <div className="grid flex-1 grid-cols-1 gap-6 lg:grid-cols-2">
            {PRACTICE_AREAS.map((p, i) => {
              const photo = PHOTOS[PHOTO_KEYS[i]];
              const bigLeft = i % 2 === 0;
              return (
                <article
                  key={p.title}
                  className={cn(
                    'flex flex-col gap-5 rounded-3xl border border-white/85 bg-white/55 p-5 shadow-glass backdrop-blur-glass sm:flex-row lg:p-7',
                    bigLeft ? 'rounded-tl-[48px] lg:rounded-tl-[80px]' : 'rounded-tr-[48px] lg:rounded-tr-[80px]',
                  )}
                >
                  <div
                    className={cn(
                      'h-[180px] w-full shrink-0 overflow-hidden ring-1 ring-sage/80 sm:h-[224px] sm:w-[150px] lg:w-[170px]',
                      bigLeft
                        ? 'rounded-tl-[60px] rounded-tr-2xl rounded-bl-2xl rounded-br-2xl'
                        : 'rounded-tr-[60px] rounded-tl-2xl rounded-bl-2xl rounded-br-2xl',
                    )}
                  >
                    {photo ? (
                      <img src={photo} alt={p.title} className="h-full w-full object-cover" />
                    ) : (
                      <div className="h-full w-full bg-gradient-to-br from-sage to-olive" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-ink lg:text-[32px]">
                      {p.title}
                    </h3>
                    <p className="mt-2 font-sans text-[13px] leading-[1.42] text-deep">{p.body}</p>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Decorative vertical wordmark — desktop only, as in Services. */}
          <SectionLabel text="PRACTICE" tone="cream" className="mt-10 hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
