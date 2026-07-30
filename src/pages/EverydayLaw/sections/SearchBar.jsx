export default function SearchBar({ placeholder, compact, className = "" }) {
  const heightClass = compact ? "h-10" : "h-12";
  const textClass = compact ? "text-xs" : "text-sm";

  return (
    <div className={`glass flex items-center gap-3 rounded-full !bg-white/60 px-4 ring-1 ring-sage/90 shadow-sm ${heightClass} ${className}`}>
      <span className="grid h-6 w-6 place-items-center rounded-full bg-olive text-cream shrink-0">
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="7"></circle>
          <path d="m20 20-3-3"></path>
        </svg>
      </span>
      <input 
        type="search" 
        placeholder={placeholder} 
        className={`bg-transparent outline-none border-none text-ink/80 w-full font-sans placeholder:text-ink/60 ${textClass}`} 
      />
    </div>
  );
}