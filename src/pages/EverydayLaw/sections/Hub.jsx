import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ARTICLES } from "@/utils/articles";
import Orb from "@/components/ui/Orb";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import ArticleCardHorizontal from "@/components/article/ArticleCardHorizontal";
import FeaturedBlogCard from "@/components/article/FeaturedBlogCard";
import SearchBar from "@/components/article/SearchBar";

const POPULAR_TOPICS = [
  "All",
  "Human Rights",
  "Family Law",
  "Marriage",
  "Annulment",
  "Labor & Employment",
  "Property & Real Estate",
  "Business & Corporate",
  "Criminal Law",
  "Data Privacy",
  "E-Commerce",
  "Taxation",
  "Wills & Inheritance",
  "Intellectual Property",
  "Contracts",
  "Consumer Protection",
];

export default function Hub() {
  const latestEverydayLaw = ARTICLES.find(a => a.slug === 'online-startup-msme-registration');
  const latestLawUpdates = ARTICLES.find(a => a.slug === 'expanded-maternity-leave-now-in-effect');
  const latestLawBlogs = ARTICLES.find(a => a.slug === 'can-your-employer-really-withhold-your-final-pay');
  const featuredBlog = ARTICLES.find(a => a.slug === 'e-commerce-data-protection');

  const [activeTopic, setActiveTopic] = useState("All");
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // Mouse drag-to-swipe state for desktop
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);
  const [hasDragged, setHasDragged] = useState(false);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -240 : 240;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Mouse drag handlers for desktop swipe functionality
  const handleMouseDown = (e) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setHasDragged(false);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeftPos(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !scrollRef.current) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    if (Math.abs(walk) > 5) {
      setHasDragged(true);
    }
    scrollRef.current.scrollLeft = scrollLeftPos - walk;
  };

  const handleWheel = (e) => {
    if (scrollRef.current && e.deltaY !== 0) {
      scrollRef.current.scrollLeft += e.deltaY;
    }
  };

  const handleTopicClick = (topic) => {
    if (!hasDragged) {
      setActiveTopic(topic);
    }
  };

  return (
    <div className="relative w-full overflow-x-clip">
      <Orb color="sage" className="-left-[200px] top-[10%] h-[500px] w-[500px]" opacity={0.35} />
      <Orb color="olive" className="-right-[150px] top-[40%] h-[600px] w-[600px]" opacity={0.25} />

      {/* Hero Band */}
      <section className="bg-olive py-8 px-4 text-center">
        <h1 className="font-display text-[32px] sm:text-[40px] text-cream uppercase tracking-wide font-bold">
          EVERYDAY LAW
        </h1>
      </section>

      {/* Main Content */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-16">
        <p className="max-w-2xl mx-auto font-sans text-[15px] sm:text-[16px] text-ink/80 text-center mb-8">
          Practical perspectives from our lawyers on the cases, questions, and everyday legal problems Filipinos face.
        </p>

        <div className="flex justify-center mb-8">
          <SearchBar placeholder="Search articles..." className="w-full max-w-xl" />
        </div>

        {/* Popular Topics Bar (Horizontally scrollable like YouTube mobile chips, with swipe support on desktop & mobile arrows) */}
        <div className="glass w-full mb-10 rounded-full px-2.5 sm:px-5 py-2 flex items-center gap-2 sm:gap-3 relative shadow-glass border border-white/90">
          <div className="flex items-center shrink-0 pr-2 sm:pr-3 border-r border-ink/15">
            <SectionLabel 
              text="Popular Topics" 
              tone="ink" 
              className="!text-[12px] sm:!text-[14px] !tracking-normal ![writing-mode:horizontal-tb] ![text-orientation:mixed] whitespace-nowrap font-bold" 
            />
          </div>

          {showLeftArrow && (
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="flex shrink-0 items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-forest text-cream shadow-md hover:scale-110 active:scale-95 transition-all z-10"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          <div 
            ref={scrollRef}
            onScroll={checkScroll}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onWheel={handleWheel}
            className={`flex-1 flex items-center gap-2 overflow-x-auto scrollbar-none py-1 scroll-smooth touch-pan-x select-none ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
          >
            {POPULAR_TOPICS.map((topic) => {
              const isActive = activeTopic === topic;
              return (
                <button
                  key={topic}
                  onClick={() => handleTopicClick(topic)}
                  className={`shrink-0 px-3.5 sm:px-4 py-1.5 rounded-full font-sans text-xs font-semibold shadow-sm transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? "bg-forest text-cream ring-2 ring-forest/30 scale-[1.02]"
                      : "bg-forest/10 text-ink/90 hover:bg-forest/20 hover:text-ink"
                  }`}
                >
                  {topic}
                </button>
              );
            })}
          </div>

          {showRightArrow && (
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="flex shrink-0 items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-forest text-cream shadow-md hover:scale-110 active:scale-95 transition-all z-10"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Left Column: Stacked Cards (Narrower) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {latestEverydayLaw && <ArticleCardHorizontal article={latestEverydayLaw} />}
            {latestLawUpdates && <ArticleCardHorizontal article={latestLawUpdates} />}
            {latestLawBlogs && <ArticleCardHorizontal article={latestLawBlogs} />}
          </div>

          {/* Right Column: Featured & CTA (Wider) */}
          <div className="lg:col-span-7 flex flex-col gap-6 h-full">
            {featuredBlog && <FeaturedBlogCard article={featuredBlog} />}
            
            {/* Need Legal Help CTA - Added flex-1 to auto-stretch and align with the bottom of the left column */}
            <GlassCard tone="light" className="py-14 px-10 sm:px-12 text-center flex flex-col items-center justify-center gap-5 border border-white/90 flex-1">
              <h3 className="font-display text-[36px] sm:text-[42px] font-bold text-ink">Need legal help?</h3>
              <p className="font-sans text-[16px] sm:text-[18px] text-ink/80 leading-relaxed mb-4 max-w-md">
                Talk to a lawyer for legal advice on your specific concern. Get clear next steps before taking action
              </p>
              <Link to="/lawyer-profile">
                <Button variant="olive" className="!h-14 !px-12 !text-[16px]">
                  Talk to a Lawyer
                </Button>
              </Link>
            </GlassCard>
          </div>

        </div>

        {/* Editorial Standard */}
        <div className="mt-24 text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink mb-3">Editorial Standard</h2>
          <p className="font-sans text-[16px] text-ink/80">
            Articles are reviewed for legal accuracy and updated as laws and jurisprudence change.
          </p>
        </div>
      </section>
    </div>
  );
}