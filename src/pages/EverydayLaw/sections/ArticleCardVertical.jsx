import { Link } from "react-router-dom";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";

export default function ArticleCardVertical({ article }) {
  return (
    <GlassCard tone="light" className="flex flex-col p-4 border border-white/90 h-full">
      <div className="w-full h-[180px] mb-4 shrink-0">
        <img src={article.image} alt={article.title} className="w-full h-full rounded-2xl object-cover ring-1 ring-sage/90" />
      </div>
      <div className="flex items-center gap-2 mb-3">
        <img src={article.author.avatar} alt={article.author.name} className="w-7 h-7 rounded-full object-cover" />
        <div className="flex flex-col">
          <span className="font-sans text-[11px] font-bold text-ink leading-none">{article.author.name}</span>
          <span className="font-sans text-[10px] text-ink/60">{article.author.role}</span>
        </div>
      </div>
      <h3 className="font-display text-[22px] font-bold text-ink leading-snug mb-2 line-clamp-2">
        {article.title}
      </h3>
      <p className="font-sans text-xs text-ink/70 mb-4 font-medium">
        {article.date} | {article.readTime}
      </p>
      <p className="font-sans text-[13px] text-ink/80 line-clamp-3 mb-5 flex-1">
        {article.excerpt}
      </p>
      <div className="mt-auto self-center w-full">
        <Link to={`/everyday-law/${article.category}/${article.slug}`} className="w-full block">
          <Button variant="olive" className="w-full !h-10 !text-xs">Read More</Button>
        </Link>
      </div>
    </GlassCard>
  );
}