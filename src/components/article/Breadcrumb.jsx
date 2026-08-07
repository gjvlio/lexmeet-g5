import { Link } from "react-router-dom";
import { ARTICLE_CATEGORIES } from "@/utils/articles";
import { useState, useRef, useEffect } from "react";

export default function Breadcrumb({ category, title }) {
  const categoryName = category ? (ARTICLE_CATEGORIES[category] || category) : null;
  
  const navRef = useRef(null);
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(false);

  const tickingRef = useRef(false);
  const checkScroll = () => {
    if (!tickingRef.current) {
      window.requestAnimationFrame(() => {
        if (navRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = navRef.current;
          const nextLeft = scrollLeft > 5;
          const nextRight = scrollLeft < scrollWidth - clientWidth - 5;
          setShowLeftFade((prev) => (prev !== nextLeft ? nextLeft : prev));
          setShowRightFade((prev) => (prev !== nextRight ? nextRight : prev));
        }
        tickingRef.current = false;
      });
      tickingRef.current = true;
    }
  };

  useEffect(() => {
    // Small delay to ensure layout rendering has settled and scrollWidth is accurate
    const timer = setTimeout(checkScroll, 100);
    window.addEventListener("resize", checkScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", checkScroll);
    };
  }, [title, category]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Left Gradient Shadow Fade (Visible when scrolled to the right) */}
      <div 
        className={`absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/[0.06] to-transparent pointer-events-none z-10 transition-opacity duration-500 ease-in-out [will-change:opacity] rounded-l-md ${
          showLeftFade ? "opacity-100" : "opacity-0"
        }`} 
      />
      
      {/* Right Gradient Shadow Fade (Visible when there is more content to the right) */}
      <div 
        className={`absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black/[0.06] to-transparent pointer-events-none z-10 transition-opacity duration-500 ease-in-out [will-change:opacity] rounded-r-md ${
          showRightFade ? "opacity-100" : "opacity-0"
        }`} 
      />

      <nav 
        ref={navRef}
        onScroll={checkScroll}
        className="font-sans text-xs text-ink/80 flex items-center gap-2 font-medium overflow-x-auto whitespace-nowrap py-1.5 px-1 w-full [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <Link to="/" className="font-bold text-ink hover:underline shrink-0">Home</Link>
        <span className="shrink-0">/</span>
        
        {category ? (
          <Link to="/everyday-law" className="font-bold text-ink hover:underline shrink-0">
            Everyday Law - Main
          </Link>
        ) : (
          <span className="text-ink/60 shrink-0">Everyday Law - Main</span>
        )}
        
        {category && (
          <>
            <span className="shrink-0">/</span>
            {title ? (
              <Link to={`/everyday-law/${category}`} className="font-bold text-ink hover:underline shrink-0">
                {categoryName}
              </Link>
            ) : (
              <span className="text-ink/60 shrink-0">{categoryName}</span>
            )}
          </>
        )}
        
        {title && (
          <>
            <span className="shrink-0">/</span>
            <span className="text-ink/60 shrink-0">{title}</span>
          </>
        )}
      </nav>
    </div>
  );
}