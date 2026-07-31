import searchIcon from '@/assets/ELassets/searchbutton.png';

export default function SearchBar({ placeholder, compact, className = "" }) {
  const heightClass = compact ? "h-10" : "h-12";
  const textClass = compact ? "text-xs" : "text-sm";

  return (
    <div className={`glass flex items-center gap-3 rounded-full !bg-white/60 px-2 ring-1 ring-sage/90 shadow-sm ${heightClass} ${className}`}>
      {/* Replaced SVG with direct image import */}
      <img src={searchIcon} alt="Search" className="h-8 w-8 shrink-0 object-contain" />
      <input 
        type="search" 
        placeholder={placeholder} 
        className={`bg-transparent outline-none border-none text-ink/80 w-full font-sans placeholder:text-ink/60 pr-4 ${textClass}`} 
      />
    </div>
  );
}