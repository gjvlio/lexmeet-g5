import SectionCarousel from '../components/SectionCarousel';
import orbImg from '../../../assets/LawyersProfile/orb.png';
import { LAWYER_SLIDES } from '../../LawyerProfile/lawyers.js';

import lawyerImg1 from '../../../assets/OurLawOffice/OurLawyers/lawyer-slide-1.png';
import lawyerImg2 from '../../../assets/OurLawOffice/OurLawyers/lawyer-slide-2.png';
import lawyerImg3 from '../../../assets/OurLawOffice/OurLawyers/lawyer-slide-3.png';

const LAWYER_SLOTS = LAWYER_SLIDES.map((l, i) => ({
  id: i + 1,
  title: l.name,
  image: l.photo || (i % 3 === 0 ? lawyerImg1 : i % 3 === 1 ? lawyerImg2 : lawyerImg3)
}));


export default function OurLawyers() {
  const renderCard = (item, isHighlighted) => (
    <div
      style={{ borderRadius: '32px 12px 32px 12px' }}
      className={[
        'relative overflow-hidden border-2 border-parchment/90 transition-all duration-300 shadow-lg',
        'h-[150px] sm:h-[190px] lg:h-[220px] w-full bg-carbon-black',
        isHighlighted ? 'ring-2 ring-olive-leaf/50 shadow-xl scale-105' : '',
      ].join(' ')}
    >
      <img
        src={item.image}
        alt={item.title}
        className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
      />
    </div>
  );

  return (
    <section className="relative overflow-hidden bg-parchment px-4 py-10 sm:px-6 sm:py-12 lg:px-16 lg:py-16">
      {/* Corner Orb Graphics */}
      <img
        src={orbImg}
        alt=""
        className="pointer-events-none absolute -top-12 -left-12 w-56 sm:w-80 opacity-40 mix-blend-multiply select-none"
      />
      <img
        src={orbImg}
        alt=""
        className="pointer-events-none absolute -bottom-12 -right-12 w-56 sm:w-80 opacity-40 mix-blend-multiply select-none rotate-180"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1050px] text-center">
        {/* h1: "OUR LAWYERS" */}
        <h1 className="font-display font-normal text-[14px] sm:text-[16px] lg:text-[18px] tracking-[0.20em] uppercase text-olive-leaf leading-tight">
          OUR LAWYERS
        </h1>

        {/* h2: "Manned by..." */}
        <h2 className="mt-2 font-display font-bold text-2xl sm:text-3xl lg:text-[38px] tracking-[-0.03em] leading-tight text-carbon-black">
          Manned by Competent and Trustworthy Lawyers
        </h2>

        {/* h3: "Our legal team..." */}
        <h3 className="mx-auto mt-3 max-w-[700px] font-sans font-normal text-sm sm:text-base lg:text-[17px] leading-relaxed text-charcoal-brown">
          Our legal team is trained in litigation, advisory, and documentation work, ensuring accurate
          legal guidance from first consultation to case resolution
        </h3>

        {/* 6-Slot Interactive Alternating Carousel */}
        <SectionCarousel items={LAWYER_SLOTS} renderCard={renderCard} darkTheme={false} />

        {/* Action Button */}
        <button
          type="button"
          className="mt-6 h-10 rounded-full bg-olive-pill px-7 font-sans text-xs sm:text-sm font-semibold text-parchment shadow-pill hover:opacity-90 active:scale-98 transition-all"
        >
          Read More
        </button>
      </div>
    </section>
  );
}
