import { EVERYDAY_LAW } from '@/utils/content';
import { PHOTOS } from '@/utils/images';

/** EVERYDAY LAW band — centered title, body copy + custom-corner photo. */
export default function EverydayLaw() {
  const photo = PHOTOS['practice-civil'];
  return (
    <section id="everyday" className="relative bg-everyday-fade py-14 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-16">
        <h2 className="text-center font-display text-3xl font-bold text-ink sm:text-4xl lg:text-[56px]">
          EVERYDAY LAW
        </h2>

        <div className="mt-8 flex flex-col items-start gap-8 lg:mt-10 lg:flex-row lg:gap-12">
          <p className="max-w-[660px] font-sans text-[15px] leading-[1.55] text-deep lg:text-[17px]">
            {EVERYDAY_LAW}
          </p>

          <div className="h-[200px] w-full shrink-0 overflow-hidden rounded-tl-[64px] rounded-br-[64px] rounded-tr-[20px] rounded-bl-[20px] ring-1 ring-sage/90 lg:h-[246px] lg:w-[460px] lg:rounded-tl-[100px] lg:rounded-br-[100px]">
            {photo ? (
              <img src={photo} alt="Everyday law" className="h-full w-full object-cover" />
            ) : (
              <div className="h-full w-full bg-gradient-to-br from-sage to-olive" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
