import bgImg from "@/assets/homeAssets/bg.png";
import { PRACTICE_AREAS_LIST } from "@/utils/services.js";
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
  // ROW 1: 3 Pairs (6 tiles)
  { type: 'icon', src: familyImg, bg: glassClass },
  { type: 'text', title: 'FAMILY\nLAW', bg: solidClass },
  { type: 'icon', src: civilImg, bg: glassClass },
  { type: 'text', title: 'CIVIL\nLAW', bg: solidClass },
  { type: 'icon', src: laborImg, bg: glassClass },
  { type: 'text', title: 'LABOR\nLAW', bg: solidClass },

  // ROW 2: 2 Pairs (4 tiles) Centered with Glass Tile bookends
  { type: 'glass', bg: glassClass }, // Fills left gap
  { type: 'icon', src: criminalImg, bg: glassClass },
  { type: 'text', title: 'CRIMINAL\nLAW', bg: solidClass },
  { type: 'icon', src: immigrationImg, bg: glassClass },
  { type: 'text', title: 'IMMIGRATION\nLAW', bg: solidClass },
  { type: 'glass', bg: glassClass }, // Fills right gap

  // ROW 3: 3 Pairs (6 tiles)
  { type: 'icon', src: commercialImg, bg: glassClass },
  { type: 'text', title: 'COMMERCIAL\nLAW', bg: solidClass },
  { type: 'icon', src: taxationImg, bg: glassClass },
  { type: 'text', title: 'TAXATION\nLAW', bg: solidClass },
  { type: 'icon', src: specialImg, bg: glassClass },
  { type: 'text', title: 'SPECIAL\nSERVICES', bg: solidClass },
];

export default function Practice() {
  return (
    <section id="practice" className="relative z-20 pb-16 lg:pb-28 pt-8 lg:pt-10">
      {/* Background Image & Lighter Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: `url(${bgImg})` }} 
      />
      <div className="absolute inset-0 bg-ink/65 z-0"></div>

      {/* Bottom Fade to Parchment */}
      <div className="absolute bottom-0 left-0 right-0 h-8 lg:h-16 bg-gradient-to-b from-transparent to-parchment z-0 pointer-events-none"></div>

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 z-10 -mt-10 lg:-mt-20">
        
        {/* Outlined Heading - Dynamic Fluid Scale */}
        <div className="w-full mb-6 lg:mb-8">
          <h2 className="font-['IBM_Plex_Sans'] text-[clamp(26px,7.5vw,90px)] font-bold leading-none text-transparent [-webkit-text-stroke:1px_theme(colors.dusty-olive)] sm:[-webkit-text-stroke:1.5px_theme(colors.dusty-olive)] tracking-normal whitespace-nowrap">
            PRACTICE AREAS
          </h2>
        </div>
        
        {/* Strict 6-Column Grid for the 3-2-3 Layout */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 pl-[1px] pt-[1px] mt-7 lg:mt-7">
          {GRID_ITEMS.map((item, i) => {
            // Render the empty glass tiles for layout spacing on desktop only
            if (item.type === 'glass') {
              return (
                <div 
                  key={i} 
                  className={`hidden lg:flex aspect-square border border-white/10 -ml-[1px] -mt-[1px] transition-colors ${item.bg}`}
                ></div>
              );
            }

            return (
              <div 
                key={i} 
                className={`aspect-square flex flex-col items-center justify-center p-3 text-center ${item.bg} border border-white/10 -ml-[1px] -mt-[1px] transition-colors`}
              >
                {item.type === 'icon' && (
                  <img src={item.src} alt="" className="w-[50%] h-[50%] lg:w-[60%] lg:h-[60%] max-w-[95px] lg:max-w-[145px] object-contain drop-shadow-xl" />
                )}
                
                {item.type === 'text' && (
                  <>
                    <h3 className="font-display text-[12px] sm:text-[14px] lg:text-[19px] font-bold text-cream mb-2 lg:mb-5 tracking-wider leading-tight whitespace-pre-line">
                      {item.title}
                    </h3>
                    <button className="bg-sage-mist hover:bg-palm-leaf text-dark-khaki rounded-full px-3 py-1 sm:px-5 sm:py-1.5 lg:py-2 font-sans text-[9px] sm:text-[10px] lg:text-[11px] font-bold transition-all duration-200 ease-out hover:scale-105 active:scale-95 focus:outline-none shadow-sm">
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