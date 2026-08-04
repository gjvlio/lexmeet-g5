import { useState } from "react";
import Orb from "@/components/ui/Orb";
import attyLouisse from "@/assets/LPassets/Atty. Louisse.png";
import attyAnna from "@/assets/LPassets/Atty. Anna.png";
import attyKalix from "@/assets/LPassets/Atty. Kalix.png";

const MEMBERS = [
  {
    name: "Atty. Louisse V. Martinez",
    detail: "Top 100 Lawyers of the Philippines 2021 Asia Business Law Journal",
    photo: attyLouisse,
  },
  {
    name: "Atty. Anna C. Bermudez",
    detail: "ALB Philippines Client Choice Lawyers 2021",
    photo: attyAnna,
  },
  {
    name: "Atty. Kalix Jace Martinez",
    detail: "Commended External Counsel of the Year 2021 In-House Community",
    photo: attyKalix,
  },
  {
    name: "Atty. Mateo D. Santos",
    detail: "Leading Specialist in Corporate Mergers and Acquisitions 2022",
    photo: attyLouisse, // Placeholder fallback image until additional assets are added
  },
];

export default function NotableMembers() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);

  // Desktop configuration (show 3 members at a time)
  const itemsPerPage = 3;
  const maxIndex = Math.max(0, MEMBERS.length - itemsPerPage);
  
  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };
  
  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const handleMobilePrev = () => {
    setMobileIndex((prev) => (prev - 1 + MEMBERS.length) % MEMBERS.length);
  };

  const handleMobileNext = () => {
    setMobileIndex((prev) => (prev + 1) % MEMBERS.length);
  };

  const visibleMembers = MEMBERS.slice(
    currentIndex,
    currentIndex + itemsPerPage,
  );

  return (
    <section className="relative mb-12 flex flex-col items-center">
      <Orb
        color="sage"
        className="-left-[250px] top-[10%] h-[340px] w-[340px] lg:h-[550px] lg:w-[550px]"
        opacity={0.4}
      />
      
      <h2 className="relative z-10 mb-10 font-display text-[32px] font-bold text-ink sm:text-[36px] lg:mb-14 lg:text-[40px]">
        Notable Members
      </h2>

      {/* Mobile/Tablet View (< lg): Render 1:1 Slide Carousel with Arrows & Indicator Dots */}
      <div className="relative z-10 w-full max-w-md lg:hidden flex flex-col items-center">
        <div className="flex w-full items-center justify-between gap-3 px-4 sm:px-0">
          <button
            onClick={handleMobilePrev}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-olive active:scale-95 bg-white/70 shadow-sm border border-palm-leaf/10"
            aria-label="Previous member"
          >
            <svg fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="w-full max-w-xs transition-all duration-300">
            <div className="flex flex-col gap-4 rounded-[28px] bg-olive-pill p-5 text-cream shadow-card">
              <div className="mx-auto flex h-[120px] w-[120px] shrink-0 items-center justify-center overflow-hidden rounded-full border-[5px] border-cream bg-mist/50 shadow-pill">
                <img
                  src={MEMBERS[mobileIndex].photo}
                  alt={MEMBERS[mobileIndex].name}
                  className="h-[108px] w-[108px] rounded-full object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="font-display text-[20px] font-bold tracking-wide text-cream">
                  {MEMBERS[mobileIndex].name}
                </h3>
                <p className="mt-2 font-sans text-[14px] font-medium leading-snug text-cream/90">
                  {MEMBERS[mobileIndex].detail}
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={handleMobileNext}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-olive active:scale-95 bg-white/70 shadow-sm border border-palm-leaf/10"
            aria-label="Next member"
          >
            <svg fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Mobile Pagination Indicators */}
        <div className="mt-4 flex justify-center gap-1.5">
          {MEMBERS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setMobileIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === mobileIndex ? "w-4 bg-olive-leaf" : "w-1.5 bg-carbon-black/25"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop View (lg+): Render standard overlapping horizontal list of members */}
      <div className="relative z-10 hidden w-full max-w-4xl lg:block">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`absolute -left-16 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-olive transition-transform hover:scale-110 active:scale-95 z-20 ${
            currentIndex === 0 ? "opacity-30 cursor-not-allowed" : ""
          }`}
          aria-label="Previous members"
        >
          <svg fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="h-10 w-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div className="flex flex-col gap-6 pl-10 transition-all duration-300">
          {visibleMembers.map((member, i) => (
            <div key={currentIndex + i} className="relative flex items-center">
              <div className="absolute left-[-60px] z-10 flex h-[170px] w-[170px] shrink-0 items-center justify-center overflow-hidden rounded-full border-[6px] border-cream bg-mist/50 shadow-pill">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="h-[158px] w-[158px] rounded-full object-cover"
                />
              </div>
              <div className="flex min-h-[140px] w-full items-center rounded-r-[40px] rounded-l-[80px] bg-olive-pill py-6 pr-12 pl-[140px] shadow-card">
                <div>
                  <h3 className="font-display text-[22px] font-bold tracking-wide text-cream">
                    {member.name}
                  </h3>
                  <p className="mt-1 max-w-xl font-sans text-[15px] font-medium leading-snug text-cream/90">
                    {member.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={currentIndex >= maxIndex}
          className={`absolute -right-11 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-olive transition-transform hover:scale-110 active:scale-95 z-20 ${
            currentIndex >= maxIndex ? "opacity-30 cursor-not-allowed" : ""
          }`}
          aria-label="Next members"
        >
          <svg fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="h-10 w-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
