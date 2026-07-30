import orbImg from '../../../assets/LawyersProfile/orb.png';

export default function OfficeLocation() {
  const mapQueryUrl =
    'https://maps.google.com/maps?q=AIC+Burgundy+Empire+Tower,+ADB+Avenue+corner+Garnet+Road,+Ortigas+Center,+Pasig+City&t=&z=16&ie=UTF8&iwloc=&output=embed';
  const googleMapsExternalUrl =
    'https://www.google.com/maps/search/?api=1&query=AIC+Burgundy+Empire+Tower+Ortigas+Center+Pasig+City';

  return (
    <section className="relative overflow-hidden bg-parchment px-4 py-10 sm:px-6 sm:py-12 lg:px-16 lg:py-16">
      {/* Corner Orb Graphics */}
      <img
        src={orbImg}
        alt=""
        className="pointer-events-none absolute -top-12 -left-12 w-56 sm:w-80 opacity-40 mix-blend-multiply select-none"
      />
      <img
        src={orbImg}
        alt=""
        className="pointer-events-none absolute -bottom-12 -right-12 w-56 sm:w-80 opacity-40 mix-blend-multiply select-none rotate-180"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1050px] text-center">
        {/* h1: "OFFICE LOCATION" */}
        <h1 className="font-display font-normal text-[14px] sm:text-[16px] lg:text-[18px] tracking-[0.20em] uppercase text-olive-leaf leading-tight">
          OFFICE LOCATION
        </h1>

        {/* h2: "Visit us..." */}
        <h2 className="mt-2 font-display font-bold text-2xl sm:text-3xl lg:text-[38px] tracking-[-0.03em] leading-tight text-carbon-black max-w-[760px] mx-auto">
          Visit us for in-person legal consultations, document review, and case strategy sessions
        </h2>

        {/* Outer Dark Container Box */}
        <div className="mt-6 sm:mt-8 rounded-[24px] bg-[linear-gradient(180deg,#2A2C19_0%,#1D1F10_100%)] p-4 sm:p-6 text-left text-parchment shadow-card border border-white/10">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.1fr_1fr_1fr] items-stretch">
            {/* Box 1: Location Info Details */}
            <div className="flex flex-col justify-between rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm">
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-semibold leading-none text-parchment">
                  Office Location
                </h3>

                <div className="mt-3 space-y-1 font-sans text-xs sm:text-sm leading-relaxed text-linen-olive">
                  <p className="font-medium text-parchment">Unit 608, 6th floor</p>
                  <p>AIC Burgundy Empire Tower</p>
                  <p>ADB Avenue Corner, Garnet Road</p>
                  <p>Ortigas Center, Pasig City</p>
                </div>

                <p className="mt-3 font-sans text-xs text-linen-olive/80 leading-normal">
                  Drop by for in-person consultations, document review, and case strategy.
                </p>
              </div>

              <div className="mt-4">
                <a
                  href={googleMapsExternalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-9 rounded-full bg-parchment px-5 font-sans text-xs font-semibold text-olive-leaf shadow-pill hover:bg-white active:scale-98 transition-all"
                >
                  Read More
                </a>
              </div>
            </div>

            {/* Box 2: Building Exterior Photo Placeholder */}
            <div
              style={{ borderRadius: '20px' }}
              className="relative min-h-[180px] sm:min-h-[200px] overflow-hidden border-2 border-parchment/90 bg-white/5"
            >
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
                alt="AIC Burgundy Empire Tower Pasig City"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-carbon-black/70 via-carbon-black/20 to-transparent" />

              {/* Red Map Pin Icon Overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 shadow-lg ring-4 ring-white/90 animate-bounce">
                  <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
              </div>

              {/* Caption Overlay */}
              <div className="absolute bottom-2.5 left-2.5 right-2.5 rounded-lg bg-carbon-black/60 px-3 py-1 backdrop-blur-md border border-white/10">
                <p className="font-sans text-[11px] font-medium text-parchment text-center truncate">
                  AIC Burgundy Empire Tower
                </p>
              </div>
            </div>

            {/* Box 3: Google Maps Equipped */}
            <div
              style={{ borderRadius: '20px' }}
              className="relative min-h-[180px] sm:min-h-[200px] overflow-hidden border-2 border-parchment/90 bg-white/5"
            >
              <iframe
                title="Office Location Map"
                src={mapQueryUrl}
                className="h-full w-full min-h-[180px] sm:min-h-[200px] border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <a
                href={googleMapsExternalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-2.5 right-2.5 z-10 flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-carbon-black shadow-md hover:bg-white backdrop-blur-sm transition-all"
              >
                <span>Open in Maps</span>
                <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
