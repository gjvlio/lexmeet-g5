import { useState } from "react";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import Orb from "@/components/ui/Orb";
// Pointing to the new LPassets directory
import casesJpg from "@/assets/LPassets/cases-handled.jpg";

const CASES = [
  "Annulment of Marriage or Declaration of Nullity of Marriage",
  "Actions for Specific Performance",
  "Contract Drafting and Other Commercial Documents",
  "Labor Standards Compliance and Illegal Dismissal Defense",
  "Intellectual Property and Trademark Registration",
  "Corporate Retainer and Regulatory Compliance",
  "Wills, Succession, and Estate Planning",
  "Real Estate Transactions and Property Disputes",
  "Criminal Defense and Representation in Courts",
  "Immigration Visas and Work Permit Services"
];

export default function CasesHandled() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="relative flex flex-col gap-10 lg:flex-row lg:items-start">
      <Orb
        color="olive"
        className="-left-[200px] top-[10%] h-[280px] w-[280px] lg:h-[400px] lg:w-[400px]"
        opacity={0.3}
      />
      <Orb
        color="sage"
        className="-right-[100px] -top-[50px] h-[320px] w-[320px] lg:h-[500px] lg:w-[500px]"
        opacity={0.35}
      />
      
      <div className="relative z-10 flex-1 space-y-5 lg:space-y-6">
        <h2 className="text-center font-display text-[32px] font-bold text-ink sm:text-[38px] lg:text-[44px]">
          Cases Handled
        </h2>
        {/* Dynamic frame placeholder copying outline, dimensions, and corner radius of EL.png but taller (matching original cases aspect ratio 1.25) */}
        <div className="w-full max-w-[420px] mx-auto aspect-[538/430] rounded-tl-[32px] rounded-br-[32px] rounded-tr-[12px] rounded-bl-[12px] md:rounded-tl-[64px] md:rounded-br-[64px] md:rounded-tr-[20px] md:rounded-bl-[20px] border-[1.5px] border-[#878C60] overflow-hidden shadow-xl">
          <img
            src={casesJpg}
            alt="Cases Handled"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <div className="relative z-10 flex flex-1 flex-col justify-center">
        {/* Collapsible container with smooth height animation */}
        <div 
          className={`flex flex-col gap-4 overflow-hidden transition-[max-height] duration-500 ease-in-out pr-0 lg:pr-4 ${
            isExpanded ? "max-h-[1200px]" : "max-h-[440px]"
          }`}
        >
          {CASES.map((caseName, i) => (
            <GlassCard
              key={i}
              tone="light"
              className="flex min-h-[72px] shrink-0 items-center px-5 py-4 shadow-sm !rounded-2xl sm:px-6 lg:min-h-[76px]"
            >
              <p className="font-sans text-[14px] leading-snug text-ink/90 sm:text-[15px]">
                {caseName}
              </p>
            </GlassCard>
          ))}
        </div>
        
        <div className="mt-6 flex justify-center lg:justify-end lg:pr-4">
          <Button
            variant="olive"
            size="md"
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2"
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
      </div>
    </section>
  );
}
