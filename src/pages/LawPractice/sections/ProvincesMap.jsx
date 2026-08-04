import { useState } from "react";
import Button from "@/components/ui/Button";
import Orb from "@/components/ui/Orb";
// Importing the specific map fragments from LPassets
import phMap from "@/assets/LPassets/PH.png";
import luzonMap from "@/assets/LPassets/luzon.png";
import visayasMap from "@/assets/LPassets/visayas.png";
import mindanaoMap from "@/assets/LPassets/mindanao.png";

const ALL_PROVINCES = [
  "Cavite",
  "Bulacan",
  "Batangas",
  "Pangasinan",
  "Cebu",
  "Rizal",
  "Negros Occidental",
  "Laguna",
  "Pampanga",
  "Camarines Sur",
  "Iloilo",
  "Davao del Sur",
  "Benguet",
  "Bataan",
  "Tarlac",
  "Isabela"
];

export default function ProvincesMap() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="relative flex flex-col gap-12 lg:flex-row lg:gap-20">
      <Orb
        color="olive"
        className="-left-[100px] top-[20%] h-[300px] w-[300px] lg:h-[450px] lg:w-[450px]"
        opacity={0.3}
      />
      <Orb
        color="sage"
        className="-right-[200px] top-[10%] h-[320px] w-[320px] lg:h-[500px] lg:w-[500px]"
        opacity={0.4}
      />
      
      <div className="relative z-10 flex flex-1 flex-col items-center">
        <h3 className="mb-6 font-bold font-display text-[18px] uppercase tracking-widest sm:mb-8 sm:text-[20px]">
          Provinces
        </h3>
        
        {/* Collapsible container with smooth height transitions: 
            Collapsed shows 5 items on mobile (5 rows) and 10 items on desktop (5 rows of 2 columns) = max-h-[304px].
            Expanded shows all 16 items = max-h-[1050px] on mobile (16 rows) / sm:max-h-[520px] on desktop (8 rows). */}
        <div 
          className={`grid w-full max-w-md grid-cols-1 sm:grid-cols-2 gap-4 overflow-hidden transition-[max-height] duration-500 ease-in-out ${
            isExpanded ? "max-h-[1050px] sm:max-h-[520px]" : "max-h-[304px]"
          }`}
        >
          {ALL_PROVINCES.map((prov, idx) => (
            <div
              key={prov}
              className={`flex min-h-12 items-center justify-center rounded-2xl px-4 py-3 text-center font-sans text-sm text-cream shadow-pill ${
                idx % 2 === 0 ? "bg-gradient-to-br from-olive to-forest" : "bg-forest"
              }`}
            >
              {prov}
            </div>
          ))}
        </div>
        
        <Button
          variant="olive"
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-10 h-10 px-8 text-sm flex items-center gap-2"
        >
          {isExpanded ? "See Less" : "See More"}
          <svg
            className={`h-4 w-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </Button>
      </div>
      
      <div className="relative z-10 flex flex-1 flex-col items-center">
        <h2 className="mb-6 font-display text-3xl font-bold text-ink sm:mb-8 sm:text-4xl">
          Location of Practice
        </h2>
        <div className="relative flex w-full max-w-[500px] flex-col items-center gap-8 pt-2 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <div className="relative flex flex-col items-center gap-4">
            <img
              src={phMap}
              alt="Nationwide"
              className="h-[260px] w-auto object-contain drop-shadow-md sm:h-[320px] lg:h-[360px]"
            />
            <span className="font-sans text-[16px] text-ink sm:text-[17px]">
              Nationwide
            </span>
          </div>
          <div className="flex w-full max-w-[200px] flex-col justify-between gap-6 lg:h-[360px]">
            <div className="relative self-end">
              <img
                src={luzonMap}
                alt="Luzon"
                className="h-[120px] w-auto object-contain drop-shadow-md sm:h-[140px]"
              />
              <span className="absolute -bottom-4 right-0 font-sans text-base text-ink">
                Luzon
              </span>
            </div>
            <div className="relative self-start pt-2">
              <img
                src={visayasMap}
                alt="Visayas"
                className="h-[90px] w-auto object-contain drop-shadow-md sm:h-[100px]"
              />
              <span className="absolute -bottom-5 left-2 font-sans text-base text-ink">
                Visayas
              </span>
            </div>
            <div className="relative self-end pt-2">
              <img
                src={mindanaoMap}
                alt="Mindanao"
                className="h-[100px] w-auto object-contain drop-shadow-md sm:h-[110px]"
              />
              <span className="absolute -bottom-4 right-4 font-sans text-base text-ink">
                Mindanao
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
