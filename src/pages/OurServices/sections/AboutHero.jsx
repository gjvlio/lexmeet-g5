import Orb from "@/components/ui/Orb";
import aboutusImg from "@/assets/AUassets/aboutus.png";

export default function AboutHero() {
  return (
    <section className="relative flex flex-col gap-10 lg:flex-row lg:items-center px-6 sm:px-10 md:px-14">
      <Orb
        color="sage"
        className="-left-[200px] top-0 h-[280px] w-[280px] lg:h-[450px] lg:w-[450px]"
        opacity={0.3}
      />
      <div className="relative z-10 w-full space-y-6 lg:w-6/12 lg:space-y-8 lg:pr-4">
        <div className="flex flex-col gap-2">
          <h2 className="font-display text-[18px] uppercase tracking-widest text-forest sm:text-[20px]">
            About Us
          </h2>
          <div className="h-[1px] w-48 bg-sage/50" />
        </div>
        <h1 className="font-display text-[34px] font-bold leading-tight text-ink sm:text-[40px] lg:text-[44px]">
          Legal Consultations <br />
          Conducted Online
        </h1>
        <div className="space-y-5 font-sans text-[16px] leading-relaxed text-ink/80 sm:text-[18px] max-h-[180px] sm:max-h-[220px] overflow-y-auto pr-3 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-sage/50 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-sage/80">
          <p>
            Rizal Law Office provides legal consultations through a secure online platform. Clients connect with Philippine Bar admitted lawyers using encrypted video, without visiting a physical office. We are dedicated to providing accessible and high-quality legal services to everyone, everywhere.
          </p>
          <p>
            Services include online consultations, digital document preparation, and cloud based case management. These are available to clients regardless of location. With our innovative approach, we strive to break down barriers to legal access and empower individuals with the knowledge they need.
          </p>
          <p>
            Our team of experienced professionals ensures that every case is handled with the utmost care, confidentiality, and expertise. Experience a new era of legal services tailored to the modern world.
          </p>
        </div>
      </div>
      <div className="relative z-10 flex w-full justify-end lg:w-6/12">
        <img
          src={aboutusImg}
          alt="Legal Consultations Conducted Online"
          className="h-[280px] w-full max-w-[920px] rounded-tl-[40px] rounded-br-[40px] rounded-tr-[24px] rounded-bl-[24px] object-cover sm:h-[380px] lg:h-[400px] lg:rounded-tl-[80px] lg:rounded-br-[80px]"
        />
      </div>
    </section>
  );
}
