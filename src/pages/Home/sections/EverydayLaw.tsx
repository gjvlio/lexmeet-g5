import { EVERYDAY_LAW } from '@/utils/content';
import { PHOTOS } from '@/utils/images';

/** EVERYDAY LAW band — centered title, body copy + custom-corner photo. */
export default function EverydayLaw() {
  const photo = PHOTOS['practice-civil'];
  return (
    <section id="everyday" className="relative bg-everyday-fade py-20">
      <div className="mx-auto max-w-[1440px] px-16">
        <h2 className="text-center font-display text-[56px] font-bold text-ink">EVERYDAY LAW</h2>

        <div className="mt-10 flex items-start gap-12">
          <p className="max-w-[660px] font-sans text-[17px] leading-[1.55] text-deep">
            {EVERYDAY_LAW}
          </p>

          <div className="h-[246px] w-[460px] shrink-0 overflow-hidden rounded-tl-[100px] rounded-br-[100px] rounded-tr-[20px] rounded-bl-[20px] ring-1 ring-sage/90">
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
