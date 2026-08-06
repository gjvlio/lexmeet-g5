import LocationCarousel from '../components/LocationCarousel';
import orbImg from '../../../assets/LawyersProfile/orb.png';
import { OFFICE_LOCATIONS } from '@/utils/content.js';

import officeBuilding from '../../../assets/OurLawOffice/OfficeLocation/officeAIC.jpg';
import officeDistrict from '../../../assets/OurLawOffice/OfficeLocation/office-slide-2.jpg';
import officeCasework from '../../../assets/OurLawOffice/OfficeLocation/office-slide-3.png';

const LOCATION_SLIDES = [
  { id: 1, title: OFFICE_LOCATIONS[0]?.region || 'AIC Burgundy Empire Tower', image: officeBuilding },
  { id: 2, title: 'Ortigas Center business district', image: officeDistrict },
  { id: 3, title: 'In-person consultations and case work', image: officeCasework },
];


function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2.4" />
      </g>
    </svg>
  );
}

export default function OfficeLocation() {
  const mapQueryUrl =
    'https://maps.google.com/maps?q=AIC+Burgundy+Empire+Tower,+ADB+Avenue+corner+Garnet+Road,+Ortigas+Center,+Pasig+City&t=&z=16&ie=UTF8&iwloc=&output=embed';
  const googleMapsExternalUrl =
    'https://www.google.com/maps/search/?api=1&query=AIC+Burgundy+Empire+Tower+Ortigas+Center+Pasig+City';

  return (
    <section className="relative overflow-hidden bg-parchment px-4 pb-6 pt-4 sm:px-6 sm:pb-8 sm:pt-6 lg:px-16 lg:pb-10 lg:pt-8">
      {/* Corner Orb Graphics */}
      <img
        src={orbImg}
        alt=""
        className="pointer-events-none absolute -top-12 -left-12 w-56 select-none opacity-40 mix-blend-multiply sm:w-80"
      />
      <img
        src={orbImg}
        alt=""
        className="pointer-events-none absolute -bottom-12 -right-12 w-56 rotate-180 select-none opacity-40 mix-blend-multiply sm:w-80"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1050px]">
        {/* Dark panel holding both columns, matching the sibling sections */}
        <div className="rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,#2A2C19_0%,#1D1F10_100%)] p-4 text-parchment shadow-card sm:p-6">
          <div className="grid items-stretch gap-4 lg:grid-cols-2 lg:gap-6">
            {/* Left: heading, address and map stacked. Ordered second in the
                DOM so the carousel leads when the columns stack on mobile. */}
            <div className="flex flex-col gap-4 text-left lg:order-first">
              <div>
                <p className="font-display text-[13px] uppercase tracking-[0.20em] text-linen-olive/80">
                  Office Location
                </p>
                <h2 className="mt-1 font-display text-2xl font-bold leading-tight tracking-[-0.02em] text-parchment sm:text-3xl">
                  Visit us for in-person legal consultations
                </h2>
                <p className="mt-2 font-sans text-xs leading-relaxed text-linen-olive sm:text-sm">
                  Document review and case strategy sessions, at our Ortigas Center office.
                </p>
              </div>

              {/* Address card */}
              <div className="flex items-start justify-between gap-4 rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur-sm">
                <div className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-parchment">
                    <PinIcon />
                  </span>
                  <div className="font-sans text-xs leading-relaxed text-linen-olive sm:text-sm">
                    <p className="font-semibold tracking-[0.12em] text-parchment">ADDRESS</p>
                    <p className="mt-1 font-medium text-parchment">Unit 608, 6th floor</p>
                    <p>AIC Burgundy Empire Tower</p>
                    <p>ADB Avenue Corner, Garnet Road</p>
                    <p>Ortigas Center, Pasig City</p>
                  </div>
                </div>

                <a
                  href={googleMapsExternalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 shrink-0 items-center justify-center rounded-full bg-parchment px-5 font-sans text-xs font-semibold text-olive-leaf shadow-pill transition-all hover:bg-white active:scale-98"
                >
                  Read More
                </a>
              </div>

              {/* Map */}
              <div className="relative min-h-[180px] flex-1 overflow-hidden rounded-2xl border-2 border-parchment/90 bg-white/5">
                <iframe
                  title="Office Location Map"
                  src={mapQueryUrl}
                  className="h-full w-full min-h-[180px] border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                <a
                  href={googleMapsExternalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute right-2.5 top-2.5 z-10 flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-carbon-black shadow-md backdrop-blur-sm transition-all hover:bg-white"
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

            {/* Right: photo carousel */}
            <LocationCarousel slides={LOCATION_SLIDES} />
          </div>
        </div>
      </div>
    </section>
  );
}
