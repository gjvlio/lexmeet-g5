import Button from '@/components/ui/Button';
import Orb from '@/components/ui/Orb';

// Importing the exact image names provided from the LPassets folder
import familyImg from '@/assets/LPassets/family.png';
import laborImg from '@/assets/LPassets/briefcase.png';
import civilImg from '@/assets/LPassets/rights.png';
import immigrationImg from '@/assets/LPassets/passport.png';
import criminalImg from '@/assets/LPassets/cuffs.png';
import commercialImg from '@/assets/LPassets/comm.png';
import taxationImg from '@/assets/LPassets/tax.png';
import specialImg from '@/assets/LPassets/hammer.png';

const CATEGORIES = [
  { title: 'Family Law', image: familyImg },
  { title: 'Labor Law', image: laborImg },
  { title: 'Civil Law', image: civilImg },
  { title: 'Immigration Law', image: immigrationImg },
  { title: 'Criminal Law', image: criminalImg },
  { title: 'Commercial Law', image: commercialImg },
  { title: 'Taxation Law', image: taxationImg },
  { title: 'Special Services', image: specialImg },
];

export default function CategoryGrid() {
  return (
    <section className="relative mx-auto w-full">
      <Orb color="sage" className="-left-[150px] top-[100px] h-[450px] w-[450px]" opacity={0.4} />
      
      {/* 
        Replaced the flat bg-forest with a smooth gradient.
        bg-gradient-to-br flows from top-left (olive) to bottom-right (forest).
      */}
      <div className="relative z-10 mx-auto max-w-[1000px] overflow-hidden rounded-tl-[80px] rounded-br-[80px] rounded-tr-[24px] rounded-bl-[24px] bg-gradient-to-br from-olive to-forest py-12 shadow-card">
        <div className="mx-auto px-10">
          <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
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