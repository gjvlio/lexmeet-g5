// src/pages/Home/sections/Practice.jsx
import bgImg from "@/assets/homeAssets/bg.png";
import familyImg from "@/assets/LPassets/family.png";
import laborImg from "@/assets/LPassets/briefcase.png";
import civilImg from "@/assets/LPassets/rights.png";
import immigrationImg from "@/assets/LPassets/passport.png";
import criminalImg from "@/assets/LPassets/cuffs.png";
import commercialImg from "@/assets/LPassets/comm.png";
import taxationImg from "@/assets/LPassets/tax.png";
import specialImg from "@/assets/LPassets/hammer.png";

// Distinct tile styles per the design
const glassClass = "bg-white/10 backdrop-blur-md";
const solidClass = "bg-dark-khaki"; // The proper, lighter olive green

const GRID_ITEMS = [
  // ROW 1
  { type: 'icon', src: familyImg, bg: glassClass },
  { type: 'text', title: 'FAMILY\nLAW', bg: solidClass },
  { type: 'icon', src: civilImg, bg: glassClass }, 
  { type: 'text', title: 'CIVIL\nLAW', bg: solidClass },
  { type: 'icon', src: laborImg, bg: glassClass },
  { type: 'text', title: 'LABOR\nLAW', bg: solidClass },

  // ROW 2
  { type: 'text', title: 'CRIMINAL\nLAW', bg: solidClass },
  { type: 'icon', src: criminalImg, bg: glassClass }, 
  { type: 'text', title: 'IMMIGRATION\nLAW', bg: solidClass },
  { type: 'icon', src: immigrationImg, bg: glassClass }, 
  { type: 'text', title: 'COMMERCIAL\nLAW', bg: solidClass },
  { type: 'icon', src: commercialImg, bg: glassClass }, 

  // ROW 3 - Outermost tiles mapped to "empty"
  { type: 'empty' }, 
  { type: 'text', title: 'TAXATION\nLAW', bg: solidClass },
  { type: 'icon', src: taxationImg, bg: glassClass }, 
  { type: 'text', title: 'SPECIAL\nSERVICES', bg: solidClass },
  { type: 'icon', src: specialImg, bg: glassClass }, 
  { type: 'empty' },
];

export default function Practice() {
  return (
    <section id="practice" className="relative z-20 pb-16 lg:pb-28 pt-16 lg:pt-20">
      {/* Background Image & Lighter Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: `url(${bgImg})` }} 
      />
      <div className="absolute inset-0 bg-ink/65 z-0"></div>

      {/* Bottom Fade to Parchment */}
      <div className="absolute bottom-0 left-0 right-0 h-8 lg:h-16 bg-gradient-to-b from-transparent to-parchment z-0 pointer-events-none"></div>

      {/* 
        Title Container
        Pinned directly to the top edge of the section (top-0). 
        -translate-y-1/2 perfectly splits the text 50/50 across the boundary line.
      */}
      <div className="absolute top-0 left-0 w-full z-30 pointer-events-none">
        <div className="relative mx-auto max-w-[1280px]">
          <h2 className="absolute -left-4 sm:-left-8 lg:-left-16 top-0 -translate-y-1/2 font-display text-[65px] sm:text-[90px] lg:text-[120px] font-bold leading-none text-transparent [-webkit-text-stroke:1.5px_theme(colors.dusty-olive)] tracking-normal whitespace-nowrap">
            PRACTICE AREAS
          </h2>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 z-10">
        
        {/* 6x3 Checkerboard Grid */}
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 pl-[1px] pt-[1px] mt-4 sm:mt-6 lg:mt-8">
          {GRID_ITEMS.map((item, i) => {
            if (item.type === 'empty') {
              return <div key={i} className="hidden lg:block pointer-events-none"></div>;
            }

            return (
              <div 
                key={i} 
                className={`aspect-square flex flex-col items-center justify-center p-3 text-center ${item.bg} border border-white/10 -ml-[1px] -mt-[1px] transition-colors`}
              >
                {/* Scaled the raw PNG directly */}
                {item.type === 'icon' && (
                  <img src={item.src} alt="" className="h-[95px] w-[95px] lg:h-[145px] lg:w-[145px] object-contain drop-shadow-xl" />
                )}
                
                {item.type === 'text' && (
                  <>
                    <h3 className="font-display text-base lg:text-[19px] font-bold text-cream mb-4 lg:mb-5 tracking-wider leading-tight whitespace-pre-line">
                      {item.title}
                    </h3>
                    {/* UPDATED BUTTON: Solid sage-mist background with dark-khaki text */}
                    <button className="bg-sage-mist hover:bg-palm-leaf text-dark-khaki rounded-full px-5 py-1.5 lg:py-2 font-sans text-[10px] lg:text-[11px] font-bold transition-all duration-200 ease-out hover:scale-105 active:scale-95 focus:outline-none shadow-sm">
                      Learn More
                    </button>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}