import { Link } from 'react-router-dom';
import CategoryGrid from './sections/CategoryGrid';
import CasesHandled from './sections/CasesHandled';
import ProvincesMap from './sections/ProvincesMap';
import Awards from './sections/Awards';
import NotableMembers from './sections/NotableMembers';

export default function LawPractice() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-practice-fade pt-8 pb-24">
      <div className="relative mx-auto max-w-[1440px] px-16">
        
        {/* Navigation Pills (Toggle) */}
        <div className="mb-16 flex justify-center gap-6">
          <button className="flex h-12 items-center justify-center rounded-full bg-forest px-10 font-sans text-sm font-bold text-cream shadow-pill transition-transform active:scale-[0.98]">
            Law Practice
          </button>
          <Link 
            to="/our-services"
            className="flex h-12 items-center justify-center rounded-full border border-sage/50 bg-white/50 px-10 font-sans text-sm font-bold text-ink shadow-glass backdrop-blur-glass transition-colors hover:bg-white/80 active:scale-[0.98]"
          >
            About Us
          </Link>
        </div>

        {/* Page Sections */}
        <div className="flex flex-col gap-28">
          <CategoryGrid />
          <CasesHandled />
          <ProvincesMap />
          <Awards />
          <NotableMembers />
        </div>

      </div>
    </div>
  );
}