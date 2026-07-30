import { Link } from "react-router-dom";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";

export default function FeaturedBlogCard({ article }) {
  return (
    <GlassCard tone="light" className="flex flex-col p-6 sm:p-8 border border-white/90">
      <div className="w-full h-[280px] sm:h-[340px] shrink-0 mb-6">
        <img src={article.image} alt={article.title} className="w-full h-full rounded-2xl object-cover ring-1 ring-sage/90" />
      </div>
      
      <div className="flex justify-between items-center mb-5">
        <div className="flex items-center gap-4">
          <img src={article.author.avatar} alt={article.author.name} className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover" />
          <div className="flex flex-col">
            <span className="font-sans text-[15px] sm:text-[17px] font-bold text-ink leading-none">{article.author.name}</span>
            <span className="font-sans text-[13px] sm:text-[14px] text-ink/60 mt-1">{article.author.role}</span>
          </div>
        </div>
        <span className="bg-forest px-6 py-2 rounded-full font-sans text-[12px] sm:text-[13px] font-bold text-cream shadow-sm">
          Latest Blog
        </span>
      </div>
      
      <h3 className="font-display text-[32px] sm:text-[40px] font-bold text-ink leading-tight mb-4 mt-2">
        {article.title}
      </h3>
      <p className="font-sans text-[15px] sm:text-[16px] text-ink/70 mb-5 font-bold">
        {article.date} | {article.readTime}
      </p>
      <p className="font-sans text-[16px] sm:text-[17px] text-ink/80 mb-10 leading-relaxed">
        {article.excerpt}
      </p>
      
      <div className="mt-auto flex justify-center">
        <Link to={`/everyday-law/${article.category}/${article.slug}`}>
          <Button variant="olive" className="!px-14 !h-14 !text-[16px]">Read more</Button>
        </Link>
      </div>
    </GlassCard>
  );
}