import SectionCarousel from '../components/SectionCarousel';
import lawofficeBg from '../../../assets/OurLawOffice/lawoffice-bg.png';

import officeImg1 from '../../../assets/OurLawOffice/OurLawOffice/lawoffice-slide-1.png';
import officeImg2 from '../../../assets/OurLawOffice/OurLawOffice/lawoffice-slide-2.png';
import officeImg3 from '../../../assets/OurLawOffice/OurLawOffice/lawoffice-slide-3.png';

const LAW_OFFICE_SLOTS = [
  { id: 1, title: 'Our Law Office 1', image: officeImg1 },
  { id: 2, title: 'Our Law Office 2', image: officeImg2 },
  { id: 3, title: 'Our Law Office 3', image: officeImg3 },
  { id: 4, title: 'Our Law Office 4', image: officeImg1 },
  { id: 5, title: 'Our Law Office 5', image: officeImg2 },
  { id: 6, title: 'Our Law Office 6', image: officeImg3 },
];

export default function OurLawOffice() {
  const renderCard = (item, isHighlighted) => (
    <div
      style={{ borderRadius: '32px 12px 32px 12px' }}
      className={[
        'relative overflow-hidden border-2 border-parchment/90 transition-all duration-300 shadow-lg',
        'h-[150px] sm:h-[190px] lg:h-[220px] w-full bg-carbon-black',
        isHighlighted ? 'ring-2 ring-white/50 shadow-xl scale-105' : '',
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
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#2B2D19_0%,#1C1F11_35%,#3D4223_60%,#555B2F_75%,#949A6A_87%,#F0F1E4_100%)] px-4 py-10 sm:px-6 sm:py-12 lg:px-16 lg:py-16">
      {/* Background Bookshelf Watermark Texture */}
      <img
        src={lawofficeBg}
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-overlay"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1050px] text-center text-parchment">
        {/* h1: "OUR LAW OFFICE" */}
        <h1 className="font-display font-normal text-[14px] sm:text-[16px] lg:text-[18px] tracking-[0.20em] uppercase text-linen-olive/90 leading-tight">
          OUR LAW OFFICE
        </h1>

        {/* h2: "Step into..." */}
        <h2 className="mt-2 font-display font-bold text-2xl sm:text-3xl lg:text-[38px] tracking-[-0.03em] leading-tight text-parchment">
          Step into the future of legal excellence
        </h2>

        {/* h3: "Equipped with..." */}
        <h3 className="mx-auto mt-3 max-w-[700px] font-sans font-normal text-sm sm:text-base lg:text-[17px] leading-relaxed text-linen-olive">
          Equipped with modern systems, experienced professionals, and practical legal workflows
          that put clients first
        </h3>

        {/* 6-Slot Interactive Alternating Carousel */}
        <SectionCarousel items={LAW_OFFICE_SLOTS} renderCard={renderCard} darkTheme={true} />

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
