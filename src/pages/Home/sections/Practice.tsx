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

      <div className="relative mx-auto max-w-[1440px] px-16">
        {/* split headline */}
        <div className="relative mb-10 h-[150px]">
          <h2 className="absolute left-0 top-0 font-display text-[150px] font-bold leading-none text-cream">
            PRACTICE
          </h2>
          <h2
            aria-hidden
            className="absolute left-0 top-0 font-display text-[150px] font-bold leading-none text-transparent [-webkit-text-stroke:1px_theme(colors.sage)] [clip-path:inset(50%_0_0_0)]"
          >
            PRACTICE
          </h2>
        </div>

        <div className="flex gap-6">
          <div className="grid flex-1 grid-cols-1 gap-6 md:grid-cols-2">
            {PRACTICE_AREAS.map((p, i) => {
              const photo = PHOTOS[PHOTO_KEYS[i]];
              const bigLeft = i % 2 === 0;
              return (
                <article
                  key={p.title}
                  className={cn(
                    'flex gap-5 rounded-3xl border border-white/85 bg-white/55 p-7 shadow-glass backdrop-blur-glass',
                    bigLeft ? 'rounded-tl-[80px]' : 'rounded-tr-[80px]',
                  )}
                >
                  <div
                    className={cn(
                      'h-[224px] w-[170px] shrink-0 overflow-hidden ring-1 ring-sage/80',
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
                    <h3 className="font-display text-[32px] font-bold text-ink">{p.title}</h3>
                    <p className="mt-2 font-sans text-[13px] leading-[1.42] text-deep">{p.body}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <SectionLabel text="PRACTICE" tone="cream" className="mt-10" />
        </div>
      </div>
    </section>
  );
}
