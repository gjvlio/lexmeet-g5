import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { EVERYDAY_LAW_ARTICLES } from "../data";
import Breadcrumb from "./Breadcrumb";
import ShareModal from "./ShareModal";
import ArticleHeader from "./ArticleHeader";
import Orb from "@/components/ui/Orb";

export default function ArticleDetail() {
  const { category, slug } = useParams();
  const navigate = useNavigate();
  const [isShareModalOpen, setShareModalOpen] = useState(false);

  const article = EVERYDAY_LAW_ARTICLES.find(a => a.slug === slug);
  if (!article) return <div className="p-20 text-center">Article not found.</div>;

  return (
    <div className="relative w-full pb-20">
      {/* Background Orbs */}
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
            <button className="flex items-center gap-2 rounded-full bg-forest px-4 py-2 font-sans text-xs font-semibold text-cream shadow-pill hover:brightness-110 transition-all">
              ♡ Like
            </button>
            <button 
              onClick={() => setShareModalOpen(true)}
              className="flex items-center gap-2 rounded-full bg-forest px-4 py-2 font-sans text-xs font-semibold text-cream shadow-pill hover:brightness-110 transition-all"
            >
              ⤴ Share
            </button>
          </div>
        </div>

        <ArticleHeader article={article} />

        {/* Removed border-t and pt-4 here since ArticleHeader now provides the divider */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-sans text-xs font-bold text-ink/80 mr-1">TAGS:</span>
            {article.tags.map(tag => (
              <span key={tag} className="rounded-full bg-forest px-3 py-1 font-sans text-[10px] font-semibold text-cream">
                {tag}
              </span>
            ))}
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

        <div className="mt-16 flex justify-end items-center gap-4">
          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-sage bg-mist/60 text-ink shadow-sm transition-colors hover:bg-white active:scale-95">
             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-sage bg-mist/60 text-ink shadow-sm transition-colors hover:bg-white active:scale-95">
             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>
      </section>

      <ShareModal isOpen={isShareModalOpen} onClose={() => setShareModalOpen(false)} url={window.location.href} />
    </div>
  );
}