import Button from "@/components/ui/Button";
import Orb from "@/components/ui/Orb";
import { SERVICES_LIST } from "@/utils/services.js";

import assistIcon from "@/assets/homeAssets/Assist.png";
import docsIcon from "@/assets/homeAssets/Docs.png";
import consultIcon from "@/assets/homeAssets/Consult.png";
import worksIcon from "@/assets/homeAssets/Works.png";

const ICON_MAP = {
  assist: assistIcon,
  consult: consultIcon,
  docs: worksIcon,
  works: docsIcon
};

const SERVICES = SERVICES_LIST.map(s => ({
  ...s,
  icon: ICON_MAP[s.id] || assistIcon,
  buttonLabel: s.id === 'assist' ? 'Ask Lawyers' : s.id === 'consult' ? 'Talk to Lawyers' : s.id === 'docs' ? 'Create Legal Document' : 'Submit Case'
}));

export default function Services() {
  return (
    <section id="services" className="relative bg-services-fade pt-10 pb-10 lg:pt-8 lg:pb-16 z-10">
      {/* Ambient Background Orbs */}
      <Orb color="sage" className="-left-[150px] top-[10%] h-[400px] w-[400px] lg:h-[500px] lg:w-[500px]" opacity={0.4} />
      <Orb color="olive" className="-right-[150px] top-[50%] h-[450px] w-[450px] lg:h-[600px] lg:w-[600px]" opacity={0.25} />

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 z-10">

        {/* Outlined Heading - Dynamic Fluid Scale */}
        <div className="w-full mb-6 lg:mb-8">
          <h2 className="font-['IBM_Plex_Sans'] text-[clamp(26px,7.5vw,90px)] font-bold leading-none text-transparent [-webkit-text-stroke:1px_theme(colors.dusty-olive)] sm:[-webkit-text-stroke:1.5px_theme(colors.dusty-olive)] tracking-normal whitespace-nowrap">
            OUR SERVICES
          </h2>
        </div>

        {/* 2x2 Grid */}
        <div className="mx-auto max-w-[980px] px-8 sm:px-12 mt-2 sm:mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 lg:gap-x-16 lg:gap-y-14">
            {SERVICES.map((s, i) => {
              const isLeft = i % 2 === 0;
              return (
                <article
                  key={s.key}
                  className={`relative flex flex-col justify-center bg-service-card px-4 py-6 sm:px-6 sm:py-8 lg:py-10 shadow-card transition-all duration-300 w-full ${isLeft
                    ? 'rounded-3xl rounded-br-[50px] sm:rounded-br-[70px] lg:rounded-br-[80px]'
                    : 'rounded-3xl rounded-bl-[50px] sm:rounded-bl-[70px] lg:rounded-bl-[80px]'
                    }`}
                >
                  <div
                    className={`absolute top-1/2 -translate-y-1/2 ${isLeft ? '-left-6 sm:-left-8 lg:-left-16' : '-right-6 sm:-right-8 lg:-right-16'
                      } z-10 flex items-center justify-center pointer-events-none`}
                  >
                    <img src={s.icon} alt="" className="h-[70px] w-[70px] sm:h-[90px] sm:w-[90px] lg:h-[130px] lg:w-[130px] object-contain drop-shadow-xl" />
                  </div>

                  <div className={`flex flex-col w-full ${isLeft ? 'items-start text-left pl-14 sm:pl-20 lg:pl-24' : 'items-end text-right pr-14 pr-20 lg:pr-24'}`}>
                    <h3 className="font-display text-[20px] sm:text-[24px] lg:text-[30px] font-bold text-cream tracking-wide">
                      {s.title}
                    </h3>
                    <p className="mt-2 mb-5 sm:mb-6 font-sans text-xs sm:text-sm lg:text-[15px] text-cream/90 max-w-[220px] sm:max-w-[260px] leading-relaxed whitespace-pre-line">
                      {s.body}
                    </p>
                    <Button variant="cream" className="!h-[38px] sm:!h-[42px] lg:!h-[46px] !px-5 sm:!px-7 lg:!px-8 !text-xs sm:!text-[13px] lg:!text-[14px] font-bold shadow-md hover:!bg-white whitespace-nowrap">
                      {s.buttonLabel}
                    </Button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}