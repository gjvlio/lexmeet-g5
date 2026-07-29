import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';
import Orb from '@/components/ui/Orb';

// Pointing to the new LPassets directory
import casesImg from '@/assets/LPassets/cases-handled.png';

const CASES = [
  'Annulment of Marriage or Declaration of Nullity of Marriage',
  'Actions for Specific Performance',
  'Contract Drafting and Other Commercial Documents',
  'Labor Standards Compliance and Illegal Dismissal Defense',
  // Add more items here to see the scrollbar in action!
  // 'Intellectual Property and Trademark Registration',
  // 'Corporate Retainer and Regulatory Compliance',
];

export default function CasesHandled() {
  return (
    <section className="relative flex flex-col gap-10 md:flex-row md:items-end">
      <Orb color="olive" className="-left-[200px] top-[10%] h-[400px] w-[400px]" opacity={0.3} />
      <Orb color="sage" className="-right-[100px] -top-[50px] h-[500px] w-[500px]" opacity={0.35} />
      
      {/* Left Column: Image & Title */}
      <div className="relative z-10 flex-1 space-y-6">
        <h2 className="text-center font-display text-[44px] font-bold text-ink">
          Cases Handled
        </h2>
        <img 
          src={casesImg} 
          alt="Cases Handled" 
          className="mx-auto h-[380px] w-full max-w-[420px] rounded-tl-[48px] rounded-br-[48px] rounded-tr-[14px] rounded-bl-[14px] object-cover shadow-glass ring-1 ring-sage/90" 
        />
      </div>

      {/* Right Column: Scrollable List */}
      <div className="relative z-10 flex flex-1 flex-col justify-center">
        
        {/* 
          Functional Scrollbar Container:
          - h-[350px] forces a fixed height so it scrolls if content overflows
          - overflow-y-auto enables scrolling
          - The [&::-webkit-*] classes style the native browser scrollbar to match the design 
        */}
        <div className="flex h-[350px] flex-col gap-4 overflow-y-auto pr-4 
          [&::-webkit-scrollbar]:w-1.5 
          [&::-webkit-scrollbar-track]:rounded-full 
          [&::-webkit-scrollbar-track]:bg-white/40 
          [&::-webkit-scrollbar-track]:shadow-inner
          [&::-webkit-scrollbar-thumb]:rounded-full 
          [&::-webkit-scrollbar-thumb]:bg-forest 
          [&::-webkit-scrollbar-thumb]:shadow-sm"
        >
          {CASES.map((caseName, i) => (
            <GlassCard 
              key={i} 
              tone="light" 
              className="flex min-h-[76px] shrink-0 items-center px-6 py-4 shadow-sm !rounded-2xl"
            >
              <p className="font-sans text-[15px] leading-snug text-ink/90">
                {caseName}
              </p>
            </GlassCard>
          ))}
        </div>

        {/* Button aligns perfectly to the right */}
        <div className="mt-6 flex justify-end pr-4">
          <Button variant="olive" size="md">
            See More
          </Button>
        </div>
        
      </div>
    </section>
  );
}