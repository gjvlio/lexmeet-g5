import Orb from '@/components/ui/Orb';
import aboutusImg from '@/assets/AUassets/aboutus.png';

export default function AboutHero() {
  return (
    <section className="relative flex flex-col gap-12 lg:flex-row lg:items-center">
      <Orb color="sage" className="-left-[200px] top-0 h-[450px] w-[450px]" opacity={0.3} />

      {/* Left Column: Copy */}
      <div className="relative z-10 w-full space-y-8 pr-4 lg:w-6/12">
        
        {/* Eyebrow Label */}
        <div className="flex flex-col gap-2">
          <h2 className="font-display text-[20px] uppercase tracking-widest text-forest">
            About Us
          </h2>
          <div className="h-[1px] w-48 bg-sage/50"></div>
        </div>

        <h1 className="font-display text-[44px] font-bold leading-tight text-ink">
          Legal Consultations <br />
          Conducted Online
        </h1>
        
        <div className="space-y-6 font-sans text-[18px] leading-relaxed text-ink/80">
          <p>
            Rizal Law Office provides legal consultations through a secure online platform. Clients connect with Philippine Bar admitted lawyers using encrypted video, without visiting a physical office.
          </p>
          <p>
            Services include online consultations, digital document preparation, and cloud based case management. These are available to clients regardless of location.
          </p>
        </div>
      </div>

      {/* Right Column: Absolutely NO FRAME, just the raw, large image */}
      <div className="relative z-10 flex w-full justify-end lg:w-7/12">
        <img 
          src={aboutusImg} 
          alt="Legal Consultations Conducted Online" 
          className="h-[520px] w-full max-w-[920px] rounded-tl-[80px] rounded-br-[80px] rounded-tr-[24px] rounded-bl-[24px] object-contain object"
        />
      </div>

    </section>
  );
}