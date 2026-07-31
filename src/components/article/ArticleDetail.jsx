import { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ARTICLES } from "@/utils/articles";
import Breadcrumb from "./Breadcrumb";
import ShareModal from "./ShareModal";
import ArticleHeader from "./ArticleHeader";
import Orb from "@/components/ui/Orb";

import likeIcon from '@/assets/ELassets/likebutton.png';
import shareIcon from '@/assets/ELassets/share.png';

export default function ArticleDetail() {
  const { category, slug } = useParams();
  const navigate = useNavigate();
  const [isShareModalOpen, setShareModalOpen] = useState(false);

  const article = ARTICLES.find(a => a.slug === slug);

  // Horizontal scroll & drag state for Tags (Naked View)
  const tagsScrollRef = useRef(null);
  const [showTagsLeftArrow, setShowTagsLeftArrow] = useState(false);
  const [showTagsRightArrow, setShowTagsRightArrow] = useState(false);
  const [isTagsDragging, setIsTagsDragging] = useState(false);
  const [tagsStartX, setTagsStartX] = useState(0);
  const [tagsScrollLeftPos, setTagsScrollLeftPos] = useState(0);

  const checkTagsScroll = () => {
    if (tagsScrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tagsScrollRef.current;
      setShowTagsLeftArrow(scrollLeft > 10);
      setShowTagsRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkTagsScroll();
    window.addEventListener("resize", checkTagsScroll);
    return () => window.removeEventListener("resize", checkTagsScroll);
  }, [article]);

  const scrollTags = (direction) => {
    if (tagsScrollRef.current) {
      const scrollAmount = direction === "left" ? -180 : 180;
      tagsScrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleTagsMouseDown = (e) => {
    if (!tagsScrollRef.current) return;
    setIsTagsDragging(true);
    setTagsStartX(e.pageX - tagsScrollRef.current.offsetLeft);
    setTagsScrollLeftPos(tagsScrollRef.current.scrollLeft);
  };

  const handleTagsMouseLeave = () => {
    setIsTagsDragging(false);
  };

  const handleTagsMouseUp = () => {
    setIsTagsDragging(false);
  };

  const handleTagsMouseMove = (e) => {
    if (!isTagsDragging || !tagsScrollRef.current) return;
    const x = e.pageX - tagsScrollRef.current.offsetLeft;
    const walk = (x - tagsStartX) * 1.5;
    tagsScrollRef.current.scrollLeft = tagsScrollLeftPos - walk;
  };

  const handleTagsWheel = (e) => {
    if (tagsScrollRef.current && e.deltaY !== 0) {
      tagsScrollRef.current.scrollLeft += e.deltaY;
    }
  };

  if (!article) return <div className="p-20 text-center">Article not found.</div>;

  // Next and Previous Article Navigation within the same category
  const categoryArticles = ARTICLES.filter(a => a.category === article.category);
  const currentIndex = categoryArticles.findIndex(a => a.slug === article.slug);
  const prevArticle = currentIndex > 0 ? categoryArticles[currentIndex - 1] : null;
  const nextArticle = currentIndex < categoryArticles.length - 1 ? categoryArticles[currentIndex + 1] : null;

  const handlePrev = () => {
    if (prevArticle) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      navigate(`/everyday-law/${article.category}/${prevArticle.slug}`);
    }
  };

  const handleNext = () => {
    if (nextArticle) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      navigate(`/everyday-law/${article.category}/${nextArticle.slug}`);
    }
  };

  return (
    <div className="relative w-full overflow-x-clip pb-20">
      <Orb color="sage" className="-left-[200px] top-[10%] h-[500px] w-[500px]" opacity={0.35} />
      <Orb color="olive" className="-right-[150px] top-[40%] h-[600px] w-[600px]" opacity={0.25} />

      <section className="bg-olive py-8 px-4 text-center relative z-10">
        <h1 className="font-display text-2xl sm:text-3xl text-cream uppercase tracking-wide font-bold">
          {article.category === 'law-updates' ? 'LAW UPDATES' : article.category === 'law-blogs' ? 'LAW BLOGS' : 'EVERYDAY LAW'}
        </h1>
      </section>

      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-8">
        <button 
          onClick={() => navigate(-1)} 
          className="mb-6 flex items-center justify-center rounded-full border border-sage/50 bg-white/50 px-4 py-1.5 font-sans text-[11px] font-bold text-ink shadow-sm backdrop-blur-glass transition-colors hover:bg-white/80 active:scale-95"
        >
          ← BACK
        </button>

        <Breadcrumb category={category} title={article.title} />

        <div className="mt-6 flex flex-col sm:flex-row sm:items-start justify-between gap-6">
          <h1 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-ink leading-tight flex-1">
            {article.title}
          </h1>
          <div className="flex items-center gap-3 shrink-0">
            {/* Replaced solid bg with gradient from olive to forest */}
            <button className="flex items-center gap-2 rounded-full bg-gradient-to-r from-olive to-forest pl-2.5 pr-4 py-1.5 font-sans text-[13px] font-semibold text-cream shadow-pill hover:brightness-110 hover:scale-105 transition-all">
              <img src={likeIcon} alt="Like" className="w-5 h-5 object-contain" />
              Like
            </button>
            <button 
              onClick={() => setShareModalOpen(true)}
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-olive to-forest pl-2.5 pr-4 py-1.5 font-sans text-[13px] font-semibold text-cream shadow-pill hover:brightness-110 hover:scale-105 transition-all"
            >
              <img src={shareIcon} alt="Share" className="w-[18px] h-[18px] object-contain" />
              Share
            </button>
          </div>
        </div>

        <ArticleHeader article={article} />

        <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Naked View Tags Container with Horizontal Scroll & Mouse Drag */}
          <div className="flex items-center gap-2 min-w-0 flex-1 relative">
            <span className="font-sans text-xs font-bold text-ink/80 shrink-0 mr-1">TAGS:</span>

            {showTagsLeftArrow && (
              <button
                onClick={() => scrollTags("left")}
                aria-label="Scroll left tags"
                className="flex shrink-0 items-center justify-center w-6 h-6 rounded-full bg-forest text-cream shadow-md hover:scale-110 active:scale-95 transition-all z-10"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            <div 
              ref={tagsScrollRef}
              onScroll={checkTagsScroll}
              onMouseDown={handleTagsMouseDown}
              onMouseLeave={handleTagsMouseLeave}
              onMouseUp={handleTagsMouseUp}
              onMouseMove={handleTagsMouseMove}
              onWheel={handleTagsWheel}
              className={`flex-1 flex items-center gap-2 overflow-x-auto scrollbar-none py-1 scroll-smooth touch-pan-x select-none ${
                isTagsDragging ? "cursor-grabbing" : "cursor-grab"
              }`}
            >
              {article.tags.map(tag => (
                <span key={tag} className="shrink-0 rounded-full bg-olive px-4 py-1.5 font-sans text-[11px] font-semibold text-cream whitespace-nowrap shadow-sm">
                  {tag}
                </span>
              ))}
            </div>

            {showTagsRightArrow && (
              <button
                onClick={() => scrollTags("right")}
                aria-label="Scroll right tags"
                className="flex shrink-0 items-center justify-center w-6 h-6 rounded-full bg-forest text-cream shadow-md hover:scale-110 active:scale-95 transition-all z-10"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>

          <div className="flex items-center gap-4 font-sans text-xs font-medium text-ink/70 shrink-0">
            <span>{article.readTime}</span>
            <span className="flex items-center gap-1.5">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
               {article.views} views
            </span>
          </div>
        </div>

        <div className="mt-6 w-full h-[300px] sm:h-[450px] lg:h-[500px]">
          <img src={article.image} alt={article.title} className="w-full h-full rounded-3xl object-cover shadow-glass ring-1 ring-sage/90" />
        </div>

        <div className="mt-10 font-sans text-[16px] sm:text-[18px] text-ink/85 leading-relaxed space-y-6 text-justify">
          {article.body ? article.body.split('\n\n').map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          )) : <p>Full article content currently unavailable.</p>}
        </div>

        {/* Previous and Next Article Navigation Buttons */}
        <div className="mt-16 flex justify-end items-center gap-4">
          <button
            onClick={handlePrev}
            disabled={!prevArticle}
            title={prevArticle ? `Previous: ${prevArticle.title}` : "No previous article"}
            aria-label="Previous Article"
            className={`flex h-10 w-10 items-center justify-center rounded-full border border-sage bg-mist/60 text-ink shadow-sm transition-all ${
              prevArticle
                ? "hover:bg-white active:scale-95 cursor-pointer opacity-100"
                : "opacity-40 cursor-not-allowed"
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            disabled={!nextArticle}
            title={nextArticle ? `Next: ${nextArticle.title}` : "No next article"}
            aria-label="Next Article"
            className={`flex h-10 w-10 items-center justify-center rounded-full border border-sage bg-mist/60 text-ink shadow-sm transition-all ${
              nextArticle
                ? "hover:bg-white active:scale-95 cursor-pointer opacity-100"
                : "opacity-40 cursor-not-allowed"
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>

      <ShareModal isOpen={isShareModalOpen} onClose={() => setShareModalOpen(false)} url={window.location.href} />
    </div>
  );
}