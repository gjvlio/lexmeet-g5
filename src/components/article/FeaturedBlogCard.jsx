import { Link } from "react-router-dom";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";

export default function FeaturedBlogCard({ article }) {
  return (
    <GlassCard tone="light" className="flex flex-col p-5 sm:p-6 border border-white/90">
      <div className="w-full h-[200px] sm:h-[220px] shrink-0 mb-4">
        <img src={article.image} alt={article.title} className="w-full h-full rounded-2xl object-cover ring-1 ring-sage/90" />
      </div>
      
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-3">
          <img src={article.author.avatar} alt={article.author.name} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover" />
          <div className="flex flex-col">
            <span className="font-sans text-[14px] sm:text-[15px] font-bold text-ink leading-none">{article.author.name}</span>
            <span className="font-sans text-[12px] sm:text-[13px] text-ink/60 mt-0.5">{article.author.role}</span>
          </div>
        </div>
        <span className="bg-forest px-4 py-1.5 rounded-full font-sans text-[11px] sm:text-[12px] font-bold text-cream shadow-sm">
          Latest Blog
        </span>
      </div>
      
      <h3 className="font-display text-[24px] sm:text-[28px] font-bold text-ink leading-tight mb-3 mt-1">
        {article.title}
      </h3>
      <p className="font-sans text-[13px] sm:text-[14px] text-ink/70 mb-3 font-bold">
        {article.date} | {article.readTime}
      </p>
      <p className="font-sans text-[14px] sm:text-[15px] text-ink/80 mb-6 leading-relaxed">
        {article.excerpt}
      </p>
      
      <div className="mt-auto flex justify-center">
        <Link to={`/everyday-law/${article.category}/${article.slug}`}>
          <Button variant="olive" className="!px-10 !h-11 !text-[14px]">Read more</Button>
        </Link>
      </div>
    </GlassCard>
  );
}