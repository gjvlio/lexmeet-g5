import Orb from '@/components/ui/Orb';

// Exact filenames from your AUassets folder
import missionImg from '@/assets/AUassets/MISSION.png';
import visionImg from '@/assets/AUassets/VISION.png';

export default function MissionVision() {
  return (
    <section className="relative flex w-full flex-col gap-10 lg:gap-14">
      <Orb color="olive" className="-left-[150px] top-[30%] h-[260px] w-[260px] lg:h-[400px] lg:w-[400px]" opacity={0.3} />

      <div className="relative z-10 flex w-full flex-col items-start gap-6 rounded-[24px] bg-gradient-to-r from-olive to-forest p-6 text-cream shadow-card sm:p-10 md:p-14 lg:flex-row lg:items-center lg:gap-12">
        <div className="flex h-[96px] w-[96px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-olive to-forest shadow-[inset_0_2px_4px_rgba(255,255,255,0.2),0_8px_20px_rgba(0,0,0,0.4)] ring-1 ring-white/10 sm:h-[130px] sm:w-[130px]">
          <img src={missionImg} alt="Mission" className="h-[54px] w-[54px] object-contain drop-shadow-md sm:h-[70px] sm:w-[70px]" />
        </div>

        <div className="flex flex-1 flex-col text-left">
          <h3 className="font-sans text-[15px] font-bold text-cream/90 sm:text-[16px]">Our mission</h3>
          <h2 className="mb-3 mt-1 font-display text-[30px] font-bold tracking-wide sm:mb-4 sm:text-[36px] lg:text-[40px]">Why we Exist</h2>
          <div className="max-w-4xl space-y-4 font-sans text-[15px] leading-relaxed text-cream/90 sm:text-[17px]">
            <p>
              To provide accessible legal consultation services to clients who face distance, time, or mobility constraints.
            </p>
            <p>
              Using secure digital platforms, we handle scheduling, video consultations, and document exchange entirely online.
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex w-full flex-col-reverse items-start gap-6 rounded-[24px] bg-gradient-to-r from-white to-mist p-6 text-ink shadow-card sm:p-10 md:p-14 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        <div className="flex flex-1 flex-col text-left">
          <h3 className="font-sans text-[15px] font-bold text-forest sm:text-[16px]">Our vision</h3>
          <h2 className="mb-3 mt-1 font-display text-[30px] font-bold tracking-wide sm:mb-4 sm:text-[36px] lg:text-[40px]">Built for Accessibility</h2>
          <div className="max-w-4xl space-y-4 font-sans text-[15px] leading-relaxed text-ink/80 sm:text-[17px]">
            <p>
              A legal consultation model built for OFWs, small business owners, homeowners association officers, and individual clients.
            </p>
            <p>
              One where licensed counsel is accessible without requiring an in person office visit, regardless of a client's location or working hours.
            </p>
          </div>
        </div>
        
        <div className="flex h-[96px] w-[96px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-white to-mist shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_8px_20px_rgba(0,0,0,0.15)] ring-1 ring-black/5 sm:h-[130px] sm:w-[130px]">
          <img src={visionImg} alt="Vision" className="h-[54px] w-[54px] object-contain drop-shadow-md sm:h-[70px] sm:w-[70px]" />
        </div>
      </div>
    </section>
  );
}