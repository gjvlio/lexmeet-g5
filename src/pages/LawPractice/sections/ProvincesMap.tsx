import Button from '@/components/ui/Button';
import Orb from '@/components/ui/Orb';

// Importing the specific map fragments from LPassets
import phMap from '@/assets/LPassets/PH.png';
import luzonMap from '@/assets/LPassets/luzon.png';
import visayasMap from '@/assets/LPassets/visayas.png';
import mindanaoMap from '@/assets/LPassets/mindanao.png';

const PROVINCES_LEFT = ['Cavite', 'Batangas', 'Cebu', 'Negros Occidental', 'Pampanga'];
const PROVINCES_RIGHT = ['Bulacan', 'Pangasinan', 'Rizal', 'Laguna', 'Camarines Sur'];

export default function ProvincesMap() {
  return (
    <section className="relative flex flex-col gap-12 md:flex-row md:gap-20">
      <Orb color="olive" className="-left-[100px] top-[20%] h-[450px] w-[450px]" opacity={0.3} />
      <Orb color="sage" className="-right-[200px] top-[10%] h-[500px] w-[500px]" opacity={0.4} />

      {/* Left Column: Provinces List */}
      <div className="relative z-10 flex flex-1 flex-col items-center">
        <h2 className="mb-8 font-display text-4xl font-bold text-ink">
          Provinces
        </h2>
        
        <div className="flex w-full max-w-md justify-between gap-4">
          <div className="flex flex-1 flex-col gap-4">
            {PROVINCES_LEFT.map((prov) => (
              <div key={prov} className="flex h-12 items-center justify-center rounded-2xl bg-gradient-to-br from-olive to-forest px-4 text-center font-sans text-sm text-cream shadow-pill">
                {prov}
              </div>
            ))}
          </div>
          <div className="flex flex-1 flex-col gap-4">
            {PROVINCES_RIGHT.map((prov) => (
              <div key={prov} className="flex h-12 items-center justify-center rounded-2xl bg-forest px-4 text-center font-sans text-sm text-cream shadow-pill">
                {prov}
              </div>
            ))}
          </div>
        </div>

        <Button variant="olive" className="mt-10 h-10 px-8 text-sm">
          See More
        </Button>
      </div>

      {/* Right Column: Location Map Grid */}
      <div className="relative z-10 flex flex-1 flex-col items-center">
        <h2 className="mb-8 font-display text-4xl font-bold text-ink">
          Location of Practice
        </h2>
        
        {/* Changed to items-start to pull everything to the top */}
        <div className="relative flex w-full max-w-[500px] items-start justify-between gap-12 pt-2">
          
          {/* Nationwide Map (Left side) - Fixed overlap by using flex-col and gap-4 */}
          <div className="relative flex flex-col items-center gap-4">
            <img src={phMap} alt="Nationwide" className="h-[360px] w-auto object-contain drop-shadow-md" />
            <span className="font-sans text-[17px] text-ink">Nationwide</span>
          </div>

          {/* Regional Maps Column (Right side) */}
          {/* Reduced height from 420px to 360px to pull Mindanao up */}
          <div className="flex h-[360px] w-[200px] flex-col justify-between">
            
            {/* Luzon Map (Top right, staggered right) */}
            <div className="relative self-end">
              <img src={luzonMap} alt="Luzon" className="h-[140px] w-auto object-contain drop-shadow-md" />
              <span className="absolute -bottom-4 right-0 font-sans text-base text-ink">Luzon</span>
            </div>

            {/* Visayas Map (Middle, staggered left) */}
            <div className="relative self-start pt-2">
              <img src={visayasMap} alt="Visayas" className="h-[100px] w-auto object-contain drop-shadow-md" />
              <span className="absolute -bottom-5 left-2 font-sans text-base text-ink">Visayas</span>
            </div>

            {/* Mindanao Map (Bottom right, staggered right) */}
            <div className="relative self-end pt-2">
              <img src={mindanaoMap} alt="Mindanao" className="h-[110px] w-auto object-contain drop-shadow-md" />
              <span className="absolute -bottom-4 right-4 font-sans text-base text-ink">Mindanao</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}