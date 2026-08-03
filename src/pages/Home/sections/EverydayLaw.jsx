import { Link } from "react-router-dom";
import Button from "@/components/ui/Button";
import Orb from "@/components/ui/Orb";
import elImg from "@/assets/homeAssets/EL.png";

export default function EverydayLaw() {
  return (
    <section id="everyday" className="relative py-10 lg:py-16 pb-20 lg:pb-24">
      <Orb color="sage" className="-right-[150px] top-[10%] h-[400px] w-[400px] lg:h-[550px] lg:w-[550px]" opacity={0.3} />
      
      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-16">
        
        {/* Reverted to items-center */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left lg:pr-6">
            
            {/* H2 moved INSIDE the text column */}
            <h2 className="w-full text-left font-display text-4xl sm:text-5xl lg:text-[56px] font-bold text-carbon-black mb-4 tracking-tight">
              Everyday Law
            </h2>
            
            <h3 className="font-display text-2xl sm:text-3xl lg:text-[34px] font-bold text-carbon-black leading-snug mb-5">
              Your Legal Partner, Online and On Your Time
            </h3>
            <p className="font-sans text-sm sm:text-base lg:text-[17px] text-carbon-black/85 leading-relaxed mb-8 max-w-[600px]">
              Navigating the legalities of daily life is now as easy as checking your email. We've transformed traditional, slow legal hurdles into streamlined digital experiences. From document reviews and basic dispute resolution to securing your business agreements, we handle the legal heavy lifting entirely online.
            </p>
            
            <Link to="/everyday-law/everyday-law" className="outline-none">
              <Button variant="olive" className="!px-10 !h-12 !text-[13px] tracking-wide shadow-card">
                Read more
              </Button>
            </Link>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <img 
              src={elImg} 
              alt="Everyday Law" 
              className="w-full max-w-[500px] lg:max-w-[600px] h-auto object-contain" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}