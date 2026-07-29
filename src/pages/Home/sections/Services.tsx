import { SERVICES } from '@/utils/content';
import { PHOTOS } from '@/utils/images';
import SectionLabel from '@/components/ui/SectionLabel';
import Orb from '@/components/ui/Orb';
import { cn } from '@/utils/cn';

/** SERVICES band — olive glass cards with pop-out cut-out photos. */
export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-services-fade py-14 lg:py-24">
      <Orb color="sage" className="left-[-140px] top-[70px] h-[480px] w-[480px]" opacity={0.55} />
      <Orb color="olive" className="right-[-120px] top-[220px] h-[560px] w-[560px]" opacity={0.35} />

      <div className="relative mx-auto flex max-w-[1440px] gap-8 px-4 sm:px-6 lg:px-16">
        {/* Vertical wordmark is decorative and costs a phone too much width. */}
        <SectionLabel text="SERVICES" className="mt-16 hidden lg:block" />

        <div className="grid flex-1 grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
          {SERVICES.map((s, i) => {
            const photo = PHOTOS[`service-${s.key}`];
            const cornerBig = i % 2 === 0 ? 'rounded-br-[100px]' : 'rounded-bl-[100px]';
            return (
              <article
                key={s.key}
                className={cn(
                  'relative flex flex-col gap-5 overflow-visible rounded-3xl border border-white/28 bg-service-card p-6 shadow-card sm:flex-row lg:min-h-[300px] lg:p-8 lg:pl-6',
                  cornerBig,
                )}
              >
                {/* Photo chip pops above the card edge — but only once it sits
                    beside the copy; stacked, the overhang would clip. */}
                <div className="relative h-[180px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[300px] sm:w-[140px] lg:-mt-12 lg:w-[170px]">
                  {photo ? (
                    <img src={photo} alt={s.title} className="h-full w-full object-cover" />
                  ) : (
                    <div className="h-full w-full bg-gradient-to-b from-sage/70 to-olive" />
                  )}
                </div>

                <div className="lg:pt-4">
                  <h3 className="font-display text-2xl font-bold text-cream lg:text-3xl">
                    {s.title}
                  </h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-cream/90 lg:text-[15px]">
                    {s.body}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
