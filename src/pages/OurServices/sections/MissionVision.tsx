import Orb from '@/components/ui/Orb';

// Exact filenames from your AUassets folder
import missionImg from '@/assets/AUassets/MISSION.png';
import visionImg from '@/assets/AUassets/VISION.png';

export default function MissionVision() {
  return (
    <section className="relative flex w-full flex-col gap-14">
      <Orb color="olive" className="-left-[150px] top-[30%] h-[400px] w-[400px]" opacity={0.3} />

      {/* Mission Card (Dark) - Sphere on Left, Text on Right */}
      <div className="relative z-10 flex w-full items-center gap-12 rounded-[24px] bg-gradient-to-r from-olive to-forest p-10 md:p-14 text-cream shadow-card">
        
        {/* Inline Icon Sphere on Left (Completely contained inside the card) */}
        <div className="flex h-[130px] w-[130px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-olive to-forest shadow-[inset_0_2px_4px_rgba(255,255,255,0.2),0_8px_20px_rgba(0,0,0,0.4)] ring-1 ring-white/10">
          <img src={missionImg} alt="Mission" className="h-[70px] w-[70px] object-contain drop-shadow-md" />
        </div>

        {/* Text Block - Pushed Rightward */}
        <div className="flex flex-1 flex-col text-left">
          <h3 className="font-sans text-[16px] font-bold text-cream/90">Our mission</h3>
          <h2 className="mb-4 mt-1 font-display text-[40px] font-bold tracking-wide">Why we Exist</h2>
          <div className="max-w-4xl space-y-4 font-sans text-[17px] leading-relaxed text-cream/90">
            <p>
              To provide accessible legal consultation services to clients who face distance, time, or mobility constraints.
            </p>
            <p>
              Using secure digital platforms, we handle scheduling, video consultations, and document exchange entirely online.
            </p>
          </div>
        </div>
      </div>

      {/* Vision Card (Light) - Text on Left, Sphere on Right */}
      <div className="relative z-10 flex w-full items-center justify-between gap-12 rounded-[24px] bg-gradient-to-r from-white to-mist p-10 md:p-14 text-ink shadow-card">
        
        {/* Text Block - Anchored Leftward */}
        <div className="flex flex-1 flex-col text-left">
          <h3 className="font-sans text-[16px] font-bold text-forest">Our vision</h3>
          <h2 className="mb-4 mt-1 font-display text-[40px] font-bold tracking-wide">Built for Accessibility</h2>
          <div className="max-w-4xl space-y-4 font-sans text-[17px] leading-relaxed text-ink/80">
            <p>
              A legal consultation model built for OFWs, small business owners, homeowners association officers, and individual clients.
            </p>
            <p>
              One where licensed counsel is accessible without requiring an in person office visit, regardless of a client's location or working hours.
            </p>
          </div>
        </div>
        
        {/* Inline Icon Sphere on Right (Completely contained inside the card) */}
        <div className="flex h-[130px] w-[130px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-white to-mist shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_8px_20px_rgba(0,0,0,0.15)] ring-1 ring-black/5">
          <img src={visionImg} alt="Vision" className="h-[70px] w-[70px] object-contain drop-shadow-md" />
        </div>

      </div>
    </section>
  );
}