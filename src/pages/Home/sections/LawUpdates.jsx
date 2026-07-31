import { Link } from "react-router-dom";
import Button from "@/components/ui/Button";
import Orb from "@/components/ui/Orb";
import luImg from "@/assets/homeAssets/LU.png";

export default function LawUpdates() {
  return (
    // Removed bg-parchment and z-20 so the Orb can bleed cleanly into EverydayLaw
    <section id="updates" className="relative py-16 lg:py-24">
      {/* Ambient Background Orb */}
      <Orb color="olive" className="-left-[150px] top-[20%] h-[400px] w-[400px] lg:h-[600px] lg:w-[600px]" opacity={0.25} />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-16">
        
        <h2 className="text-right font-display text-4xl sm:text-5xl lg:text-[64px] font-bold text-carbon-black mb-10 tracking-tight">
          Law Updates
        </h2>
        
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <img 
              src={luImg} 
              alt="Law Updates" 
              className="w-full max-w-[500px] lg:max-w-[600px] h-auto object-contain" 
            />
          </div>
          
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left lg:pl-6">
            <h3 className="font-display text-2xl sm:text-3xl lg:text-[34px] font-bold text-carbon-black leading-snug mb-5">
              Can your text message or e-mail message be used as evidence in court?
            </h3>
            <p className="font-sans text-sm sm:text-base lg:text-[17px] text-carbon-black/85 leading-relaxed mb-8 max-w-[600px]">
              Before the advent of computer age we have been familiar with the use of documentary evidence in court such as contracts, agreements, letters and other writing. These writings printed in papers or paper-based documents are popularly known as our documentary evidence.
            </p>
            <Link to="/everyday-law" className="outline-none">
              <Button variant="olive" className="!px-10 !h-12 !text-[13px] tracking-wide shadow-card">
                Read more
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}