import { Link } from "react-router-dom";
import Button from "@/components/ui/Button";
import lineImg from "@/assets/homeAssets/Line.png";

export default function GotLegal() {
  return (
    // Removed bg-parchment and z-20 so it sits transparently on the global cream background
    <section className="relative py-16 lg:py-20 flex flex-col items-center justify-center text-center px-4">
      <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center gap-7">
        <img src={lineImg} alt="" className="w-full h-auto object-contain opacity-70 max-w-[700px]" aria-hidden="true" />
        
        <div className="flex flex-col gap-3 my-2">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-[64px] font-bold text-carbon-black tracking-tight leading-none">
            Got a legal question?
          </h2>
          <p className="font-sans text-lg sm:text-xl text-carbon-black/80 font-medium mt-1">
            Get in touch with us!
          </p>
        </div>

        <Link to="/contact-us" className="mt-3 outline-none">
          <Button variant="olive" className="!px-12 !h-14 !text-base shadow-card border border-[#2A2C19]/20">
            Contact Us
          </Button>
        </Link>
        
        <img src={lineImg} alt="" className="w-full h-auto object-contain opacity-70 max-w-[700px] mt-6" aria-hidden="true" />
      </div>
    </section>
  );
}