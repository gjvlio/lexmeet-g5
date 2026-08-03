import Button from "@/components/ui/Button";
import Orb from "@/components/ui/Orb";

import assistIcon from "@/assets/homeAssets/Assist.png";
import docsIcon from "@/assets/homeAssets/Docs.png";
import consultIcon from "@/assets/homeAssets/Consult.png";
import worksIcon from "@/assets/homeAssets/Works.png";

const SERVICES = [
  {
    key: 'assist',
    title: 'ASSIST',
    body: 'FREE Online Legal Assessment',
    icon: assistIcon,
    buttonLabel: 'Ask Lawyers'
  },
  {
    key: 'consult',
    title: 'CONSULT',
    body: 'Paid Online Legal Consultation',
    icon: consultIcon,
    buttonLabel: 'Talk to Lawyers'
  },
  {
    key: 'docs',
    title: 'DOCS',
    body: 'Create Own Documents With\nLawyer Review',
    icon: worksIcon,
    buttonLabel: 'Create Legal Document'
  },
  {
    key: 'works',
    title: 'WORKS',
    body: 'FREE Legal Fee Proposals and\nPaid Legal Works Delivery',
    icon: docsIcon,
    buttonLabel: 'Request Proposal'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative bg-services-fade py-10 lg:py-16 z-10">
      {/* Ambient Background Orbs */}
      <Orb color="sage" className="-left-[150px] top-[10%] h-[400px] w-[400px] lg:h-[500px] lg:w-[500px]" opacity={0.4} />
      <Orb color="olive" className="-right-[150px] top-[50%] h-[450px] w-[450px] lg:h-[600px] lg:w-[600px]" opacity={0.25} />
      
      <div className="relative mx-auto max-w-[1280px] z-10">
        
        {/* Large Outlined Heading - Scaled Down */}
        <div className="relative mb-8 h-[35px] xs:h-[42px] sm:h-[60px] lg:h-[80px] w-full">
          <h2 className="absolute -left-4 sm:-left-8 lg:-left-16 top-0 font-['IBM_Plex_Sans'] text-[32px] xs:text-[38px] sm:text-[70px] lg:text-[90px] font-bold leading-none text-transparent [-webkit-text-stroke:1px_theme(colors.dusty-olive)] sm:[-webkit-text-stroke:1.5px_theme(colors.dusty-olive)] tracking-normal whitespace-nowrap">
            OUR SERVICES
          </h2>
        </div>

        {/* 2x2 Grid */}
        <div className="mx-auto max-w-[980px] px-8 sm:px-12 mt-8 lg:mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 lg:gap-x-16 lg:gap-y-14">
            {SERVICES.map((s, i) => {
              const isLeft = i % 2 === 0;
              return (
                <article 
                  key={s.key} 
                  className={`relative flex flex-col justify-center bg-service-card px-6 py-8 lg:py-10 shadow-card transition-all duration-300 w-full ${
                    isLeft 
                      ? 'rounded-3xl rounded-br-[70px] lg:rounded-br-[80px]' 
                      : 'rounded-3xl rounded-bl-[70px] lg:rounded-bl-[80px]'
                  }`}
                >
                  <div 
                    className={`absolute top-1/2 -translate-y-1/2 ${
                      isLeft ? '-left-12 lg:-left-16' : '-right-12 lg:-right-16'
                    } z-10 flex items-center justify-center pointer-events-none`}
                  >
                    <img src={s.icon} alt="" className="h-[100px] w-[100px] lg:h-[130px] lg:w-[130px] object-contain drop-shadow-xl" />
                  </div>
                  
                  <div className={`flex flex-col w-full ${isLeft ? 'items-start text-left pl-16 sm:pl-20 lg:pl-24' : 'items-end text-right pr-16 sm:pr-20 lg:pr-24'}`}>
                    <h3 className="font-display text-[22px] lg:text-[26px] font-bold text-cream tracking-wide">
                      {s.title}
                    </h3>
                    <p className="mt-1.5 mb-5 font-sans text-[11px] lg:text-xs text-cream/90 max-w-[200px] leading-relaxed whitespace-pre-line">
                      {s.body}
                    </p>
                    <Button variant="cream" className="!h-[38px] !px-4 sm:!px-6 !text-[12px] font-bold shadow-md hover:!bg-white whitespace-nowrap">
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