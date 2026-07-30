import { HERO } from '@/utils/content';
import { PHOTOS } from '@/utils/images';
import Button from '@/components/ui/Button';

const SOCIAL_RAIL = ['f', 'ig', 'in', 'yt'];

/** Hero band — full-bleed photo card with frosted copy panel + CTA + social rail. */
export default function Hero() {
  const hero = PHOTOS['hero'];
  return (
    <section className="relative bg-hero-fade px-4 pb-10 pt-8 sm:px-6 lg:pb-16 lg:pt-12">
      <div className="relative mx-auto max-w-[1440px]">
        {/* photo card with custom corners */}
        <div className="relative h-[560px] overflow-hidden rounded-tl-[40px] rounded-tr-[40px] rounded-bl-[40px] rounded-br-[80px] sm:h-[680px] lg:h-[820px] lg:rounded-br-[180px]">
          {hero ? (
            <img src={hero} alt="Law library" className="h-full w-full object-cover" />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-forest via-deep to-ink" />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-ink/25 to-ink/85" />

          {/* copy */}
          <div className="absolute inset-0 flex flex-col items-center overflow-y-auto px-4 pt-12 text-center sm:px-6 lg:pt-24">
            <p className="font-display text-xs font-light tracking-[0.28em] text-cream sm:text-base sm:tracking-[0.36em] lg:text-[22px]">
              {HERO.eyebrow}
            </p>
            <h1 className="mt-2 font-display text-[64px] font-bold leading-none text-white drop-shadow-[0_8px_32px_rgba(0,0,0,0.35)] sm:text-[96px] lg:text-[120px] xl:text-[170px]">
              {HERO.headline}
            </h1>

            <div className="glass-dark mt-6 max-w-[560px] rounded-3xl bg-white/[0.12] p-5 text-center sm:p-7 lg:mt-8">
              <p className="font-sans text-sm leading-relaxed text-cream sm:text-base lg:text-lg">
                {HERO.body}
              </p>
            </div>

            <Button variant="cream" size="lg" className="mt-6 lg:mt-8">
              {HERO.cta}
            </Button>
          </div>

          {/* social rail */}
          <div className="glass-dark absolute right-6 top-1/2 hidden -translate-y-1/2 flex-col gap-4 rounded-full bg-white/[0.12] p-3 md:flex">
            {SOCIAL_RAIL.map((s) => (
              <a
                key={s}
                href="#"
                aria-label={s}
                className="grid h-10 w-10 place-items-center rounded-full bg-white/20 text-sm font-bold text-white"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
