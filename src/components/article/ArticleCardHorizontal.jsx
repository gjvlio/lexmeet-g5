import { Link } from "react-router-dom";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";

const CATEGORY_META = {
  'law-updates': {
    title: 'Law Updates',
    description: 'Stay informed about the latest legal developments, policy changes, and official announcements.'
  },
  'everyday-law': {
    title: 'Everyday Law',
    description: 'Understand common legal matters that affect your daily life through simple and easy-to-read guides.'
  },
  'law-blogs': {
    title: 'Lawyers Blog',
    description: 'Read insights, practical advice, and perspectives from legal professionals on various legal topics.'
  }
};

export default function ArticleCardHorizontal({ article }) {
  const categoryKey = article?.category || 'everyday-law';
  const meta = CATEGORY_META[categoryKey] || {
    title: 'Everyday Law',
    description: 'Understand common legal matters that affect your daily life through simple and easy-to-read guides.'
  };

  const categoryListUrl = `/everyday-law/${categoryKey}`;

  return (
    <GlassCard tone="light" className="flex flex-col p-5 gap-0 border border-white/90 hover-lift">
      {/* Clickable Image Thumbnail -> Category List */}
      <Link to={categoryListUrl} className="w-full h-[150px] shrink-0 mb-4 block group">
        <img 
          src={article?.image} 
          alt={meta.title} 
          className="w-full h-full rounded-2xl object-cover ring-1 ring-sage/90 group-hover:opacity-95 transition-opacity" 
        />
      </Link>
      
      <div className="flex flex-col">
        {/* Title Link -> Category List */}
        <Link to={categoryListUrl}>
          <h3 className="font-display text-[18px] sm:text-[20px] font-bold text-ink leading-tight mb-2 mt-1 line-clamp-2 hover:text-forest transition-colors">
            {meta.title}
          </h3>
        </Link>
        
        {/* Description */}
        <p className="font-sans text-[12px] sm:text-[13px] text-ink/80 line-clamp-3 mb-5 leading-relaxed">
          {meta.description}
        </p>
        
        {/* Original Olive Button -> Category List */}
        <div className="mt-auto flex justify-center">
          <Link to={categoryListUrl}>
            <Button variant="olive" className="!h-9 !px-8 !text-[12px] !font-bold flex items-center gap-1">
              <span>View All</span>
              <span className="text-[13px] leading-none">&rarr;</span>
            </Button>
          </Link>
        </div>
      </div>
    </GlassCard>
  );
}