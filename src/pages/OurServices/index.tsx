import { Link } from 'react-router-dom';
import AboutHero from './sections/AboutHero';
import Values from './sections/Values';
import MissionVision from './sections/MissionVision';
import PromiseSection from './sections/Promise';

export default function OurServices() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-practice-fade pb-24 pt-8">
      <div className="relative mx-auto max-w-[1440px] px-16">
        
        {/* Navigation Pills (Toggle) */}
        <div className="mb-16 flex justify-center gap-6">
          <Link 
            to="/law-practice" 
            className="flex h-12 items-center justify-center rounded-full border border-sage/50 bg-white/50 px-10 font-sans text-sm font-bold text-ink shadow-glass backdrop-blur-glass transition-colors hover:bg-white/80 active:scale-[0.98]"
          >
            Law Practice
          </Link>
          <button 
            className="flex h-12 items-center justify-center rounded-full bg-forest px-10 font-sans text-sm font-bold text-cream shadow-pill transition-transform active:scale-[0.98]"
          >
            About Us
          </button>
        </div>

        {/* Page Sections */}
        <div className="flex flex-col gap-24">
          <AboutHero />
          <Values />
          <MissionVision />
          <PromiseSection />
        </div>

      </div>
    </div>
  );
}