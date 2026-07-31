import { Link } from "react-router-dom";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";

export default function ArticleCardHorizontal({ article }) {
  const categoryLabel = article.category === 'law-updates' ? 'Law Updates' : article.category === 'law-blogs' ? 'Law Blogs' : 'Everyday Law';
  const categoryListUrl = `/everyday-law/${article.category}`;

  return (
    <GlassCard tone="light" className="flex flex-col p-5 gap-0 border border-white/90">
      <Link to={categoryListUrl} className="w-full h-[150px] shrink-0 mb-4 block group">
        <img src={article.image} alt={article.title} className="w-full h-full rounded-2xl object-cover ring-1 ring-sage/90 group-hover:opacity-95 transition-opacity" />
      </Link>
      
      <div className="flex flex-col">
        <div className="flex justify-between items-center mb-3 mt-1">
          <div className="flex items-center gap-3">
            <img src={article.author.avatar} alt={article.author.name} className="w-9 h-9 rounded-full object-cover" />
            <div className="flex flex-col">
              <span className="font-sans text-[12px] font-bold text-ink leading-none">{article.author.name}</span>
              <span className="font-sans text-[11px] text-ink/60 mt-0.5">{article.author.role}</span>
            </div>
          </div>
          <Link to={categoryListUrl} className="bg-white/60 border border-sage/30 px-3 py-1.5 rounded-full font-sans text-[10px] font-bold text-ink shadow-sm hover:bg-white transition-colors">
            {categoryLabel}
          </Link>
        </div>
        
        <Link to={categoryListUrl}>
          <h3 className="font-display text-[18px] sm:text-[20px] font-bold text-ink leading-tight mb-2 mt-1 line-clamp-2 hover:text-forest transition-colors">
            {article.title}
          </h3>
        </Link>
        <p className="font-sans text-[11px] sm:text-xs text-ink/70 mb-3 font-bold">
          {article.date} | {article.readTime}
        </p>
        <p className="font-sans text-[12px] sm:text-[13px] text-ink/80 line-clamp-2 mb-5 leading-relaxed">
          {article.excerpt}
        </p>
        
        <div className="mt-auto flex justify-center">
          <Link to={categoryListUrl}>
            <Button variant="olive" className="!h-9 !px-8 !text-[12px]">View all</Button>
          </Link>
        </div>
      </div>
    </GlassCard>
  );
}