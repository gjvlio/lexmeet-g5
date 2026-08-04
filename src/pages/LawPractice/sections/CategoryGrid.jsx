import Button from "@/components/ui/Button";
import Orb from "@/components/ui/Orb";
import SectionCarousel from "@/pages/LawOffice/components/SectionCarousel";

// Importing the exact image names provided from the LPassets folder
import familyImg from "@/assets/LPassets/family.png";
import laborImg from "@/assets/LPassets/briefcase.png";
import civilImg from "@/assets/LPassets/rights.png";
import immigrationImg from "@/assets/LPassets/passport.png";
import criminalImg from "@/assets/LPassets/cuffs.png";
import commercialImg from "@/assets/LPassets/comm.png";
import taxationImg from "@/assets/LPassets/tax.png";
import specialImg from "@/assets/LPassets/hammer.png";

const CATEGORIES = [
  { id: 1, title: "Family Law", image: familyImg },
  { id: 2, title: "Labor Law", image: laborImg },
  { id: 3, title: "Civil Law", image: civilImg },
  { id: 4, title: "Immigration Law", image: immigrationImg },
  { id: 5, title: "Criminal Law", image: criminalImg },
  { id: 6, title: "Commercial Law", image: commercialImg },
  { id: 7, title: "Taxation Law", image: taxationImg },
  { id: 8, title: "Special Services", image: specialImg },
];

export default function CategoryGrid() {
  // Card renderer for the mobile SectionCarousel
  const renderMobileCard = (cat) => (
    <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm shadow-inner min-h-[280px] justify-center">
      <img
        src={cat.image}
        alt={cat.title}
        className="h-[110px] w-[110px] object-contain drop-shadow-md sm:h-[130px] sm:w-[130px]"
      />
      <h3 className="mb-5 mt-4 font-display text-[20px] font-bold text-cream">
        {cat.title}
      </h3>
      <Button
        variant="cream"
        className="h-10 px-7 text-[13px] font-bold tracking-wide shadow-sm !bg-mist hover:!bg-mist/80"
      >
        Learn More
      </Button>
    </div>
  );

  return (
    <section className="relative mx-auto w-full">
      <Orb
        color="sage"
        className="-left-[150px] top-[100px] h-[320px] w-[320px] lg:h-[450px] lg:w-[450px]"
        opacity={0.4}
      />
      
      <div className="relative z-10 mx-auto max-w-[1000px] overflow-hidden rounded-tl-[48px] rounded-br-[48px] rounded-tr-[20px] rounded-bl-[20px] bg-gradient-to-br from-olive to-forest py-10 shadow-card sm:rounded-tl-[80px] sm:rounded-br-[80px] sm:py-12">
        <div className="mx-auto px-4 sm:px-6 lg:px-10">
          
          {/* Mobile View: Render SectionCarousel below sm breakpoint */}
          <div className="block sm:hidden">
            <SectionCarousel 
              items={CATEGORIES} 
              renderCard={renderMobileCard} 
              darkTheme={true} 
            />
          </div>

          {/* Desktop/Tablet View: Render standard grid on sm and larger screens */}
          <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 lg:gap-y-12">
            {CATEGORIES.map((cat) => (
              <div key={cat.title} className="flex flex-col items-center text-center">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="h-[130px] w-[130px] object-contain drop-shadow-md"
                />
                <h3 className="mb-4 mt-5 font-display text-[24px] font-bold text-cream">
                  {cat.title}
                </h3>
                <Button
                  variant="cream"
                  className="h-10 px-8 text-[14px] font-bold tracking-wide shadow-sm !bg-mist hover:!bg-mist/80"
                >
                  Learn More
                </Button>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
