import { SERVICES } from '@/utils/content';
import { PHOTOS } from '@/utils/images';
import SectionLabel from '@/components/ui/SectionLabel';
import Orb from '@/components/ui/Orb';
import { cn } from '@/utils/cn';

/** SERVICES band — olive glass cards with pop-out cut-out photos. */
export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-services-fade py-24">
      <Orb color="sage" className="left-[-140px] top-[70px] h-[480px] w-[480px]" opacity={0.55} />
      <Orb color="olive" className="right-[-120px] top-[220px] h-[560px] w-[560px]" opacity={0.35} />

      <div className="relative mx-auto flex max-w-[1440px] gap-8 px-16">
        <SectionLabel text="SERVICES" className="mt-16" />

        <div className="grid flex-1 grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
          {SERVICES.map((s, i) => {
            const photo = PHOTOS[`service-${s.key}`];
            const cornerBig = i % 2 === 0 ? 'rounded-br-[100px]' : 'rounded-bl-[100px]';
            return (
              <article
                key={s.key}
                className={cn(
                  'relative flex min-h-[300px] gap-5 overflow-visible rounded-3xl border border-white/28 bg-service-card p-8 pl-6 shadow-card',
                  cornerBig,
                )}
              >
                {/* photo chip pops above the card edge */}
                <div className="relative -mt-12 h-[300px] w-[170px] shrink-0 overflow-hidden rounded-2xl">
                  {photo ? (
                    <img src={photo} alt={s.title} className="h-full w-full object-cover" />
                  ) : (
                    <div className="h-full w-full bg-gradient-to-b from-sage/70 to-olive" />
                  )}
                </div>

                <div className="pt-4">
                  <h3 className="font-display text-3xl font-bold text-cream">{s.title}</h3>
                  <p className="mt-3 font-sans text-[15px] leading-relaxed text-cream/90">
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
