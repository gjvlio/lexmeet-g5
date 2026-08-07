import Orb from "@/components/ui/Orb";

const AREAS = [
  "Annulment of marriage",
  "Support",
  "Debt problem",
  "Investments",
  "Business",
  "Estate",
  "Conjugal property",
  "Real estate transactions",
];

export default function PromiseSection() {
  return (
    <section className="relative w-full text-ink">
      <Orb
        color="sage"
        className="-right-[200px] top-0 h-[280px] w-[280px] lg:h-[450px] lg:w-[450px]"
        opacity={0.35}
      />
      <div className="relative z-10 w-full px-6 sm:px-10 md:px-14">
        <h3 className="font-sans text-[18px] font-bold text-forest sm:text-[20px]">
          Our promise
        </h3>
        <h2 className="mb-5 font-display text-[32px] font-bold sm:mb-6 sm:text-[40px] lg:text-[44px]">
          What Can You Expect
        </h2>
        <div className="space-y-5 text-justify font-sans text-[16px] leading-relaxed text-ink/80 sm:space-y-6 sm:text-[18px]">
          <p>
            Clients may choose a lawyer based on disclosed practice areas, admission history, and availability.
          </p>
          <p>
            Consultations are conducted through an encrypted video platform designed for confidential legal discussions, and are available outside standard office hours, subject to individual lawyer availability.
          </p>
          <p>
            Booking involves selecting a lawyer, choosing a time slot, and confirming the applicable rate before the session is scheduled. Relevant documents may be uploaded ahead of time through the platform, stored using encrypted file storage.
          </p>
          <p className="pt-2 font-medium text-ink">
            Areas we handle include the following:
          </p>
        </div>
        <div className="mt-6 flex flex-wrap gap-3 sm:gap-4">
          {AREAS.map((area) => (
            <div
              key={area}
              className="flex items-center gap-2.5 rounded-full bg-mist/60 px-4 py-2 font-sans text-[14px] font-bold text-forest shadow-sm ring-1 ring-sage/20 sm:px-5 sm:text-[15px]"
            >
              <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-forest">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3 w-3 text-forest"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              {area}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
