import { Link } from "react-router-dom";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";

export default function ArticleCardVertical({ article, index }) {
  // Determine the card's position in the 3-column grid (0 = Left, 1 = Middle, 2 = Right)
  const position = index % 3;
  
  let cornerClass = "";
  if (position === 0) {
    cornerClass = "lg:!rounded-br-[64px]"; // Leftmost card gets custom bottom-right
  } else if (position === 2) {
    cornerClass = "lg:!rounded-bl-[64px]"; // Rightmost card gets custom bottom-left
  }

  return (
    <GlassCard tone="light" className={`flex flex-col p-4 border border-white/90 h-full ${cornerClass}`}>
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
      
      <div className="mt-auto flex justify-center w-full">
        <Link to={`/everyday-law/${article.category}/${article.slug}`}>
          <Button variant="olive" className="!px-10 !h-10 !text-xs">Read More</Button>
        </Link>
      </div>
    </GlassCard>
  );
}