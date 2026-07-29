import { useState } from 'react';
import GlassCard from '@/components/ui/GlassCard';
import Orb from '@/components/ui/Orb';

// Exact filenames from your AUassets folder
import ocImg from '@/assets/AUassets/OC.png';
import upImg from '@/assets/AUassets/UP.png';
import balImg from '@/assets/AUassets/BAL.png';

const VALUES = [
  {
    title: 'Online\nConsultations',
    desc: 'Clients schedule and attend consultations through secure video, from any location with an internet connection.',
    icon: ocImg
  },
  {
    title: 'Upfront\nPricing',
    desc: 'Flat rate and subscription pricing is disclosed before a client commits to a consultation or service.',
    icon: upImg
  },
  {
    title: 'Bar Admitted\nLawyers',
    desc: 'Each lawyer listed on our platform is admitted to the Philippine Bar, with admission year and IBP chapter disclosed on their profile.',
    icon: balImg
  },
  // Dummy 4th item to enable carousel functionality
  {
    title: 'Secure\nPlatform',
    desc: 'All communications and documents are protected using enterprise-grade encryption standards.',
    icon: ocImg 
  }
];

export default function Values() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Show 3 values at a time in the viewport
  const itemsPerPage = 3;
  const maxIndex = Math.max(0, VALUES.length - itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const visibleValues = VALUES.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section className="relative overflow-hidden rounded-[60px] bg-gradient-to-br from-olive to-forest px-6 py-16 shadow-card">
      <Orb color="sage" className="-right-[100px] top-[20%] h-[400px] w-[400px]" opacity={0.3} />

      {/* Increased max-width slightly so the perfectly spaced cards have room to breathe */}
      <div className="relative z-10 mx-auto max-w-[1400px] text-center">
        
        {/* Headers */}
        <h2 className="font-display text-4xl font-bold text-cream">Values we live by</h2>
        <div className="mx-auto mb-6 mt-4 h-[1px] w-64 bg-cream/30"></div>
        <p className="mb-14 font-sans text-[18px] text-cream/90">
          These principles shape how we deliver every consultation.
        </p>

        {/* Carousel Controls & Cards - gap-10 locks the outer spacing to exactly 40px */}
        <div className="flex w-full items-center justify-between gap-10">
          
          {/* Left Arrow */}
          <button 
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cream text-forest shadow-md transition-transform hover:scale-105 active:scale-95 ${currentIndex === 0 ? 'cursor-not-allowed opacity-40' : ''}`}
          >
            <svg fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* 
            Value Cards Viewport 
            - pl-[65px] perfectly offsets the first circle's -left-[65px] protrusion 
            - gap-x-[105px] minus the circle's 65px protrusion = exactly 40px visible gap between cards
          */}
          <div className="grid w-full flex-1 grid-cols-1 gap-y-16 gap-x-[105px] pl-[65px] transition-all duration-300 md:grid-cols-3">
            {visibleValues.map((val, i) => (
              <div key={currentIndex + i} className="relative flex items-center">
                
                {/* Overlapping Container (Sticks out exactly 65px) */}
                <div className="absolute -left-[65px] z-20 flex h-[130px] w-[130px] items-center justify-center rounded-full bg-cream shadow-pill drop-shadow-md">
                  <img src={val.icon} alt={val.title.replace('\n', ' ')} className="h-[75px] w-[75px] object-contain" />
                </div>
                
                <GlassCard 
                  tone="dark" 
                  className="flex min-h-[240px] w-full flex-col justify-center gap-4 !rounded-[32px] border border-white/20 !bg-white/10 py-8 pr-6 pl-[85px] text-left text-cream shadow-lg"
                >
                  <h3 className="whitespace-pre-line font-display text-[24px] font-bold leading-tight text-cream">
                    {val.title}
                  </h3>
                  <p className="font-sans text-[14px] leading-relaxed text-cream/90">
                    {val.desc}
                  </p>
                </GlassCard>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button 
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cream text-forest shadow-md transition-transform hover:scale-105 active:scale-95 ${currentIndex >= maxIndex ? 'cursor-not-allowed opacity-40' : ''}`}
          >
            <svg fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

        </div>
      </div>
    </section>
  );
}