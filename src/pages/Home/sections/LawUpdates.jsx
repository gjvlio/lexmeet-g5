import { Link } from "react-router-dom";
import Button from "@/components/ui/Button";
import Orb from "@/components/ui/Orb";
import luImg from "@/assets/homeAssets/LU.png";
import { ARTICLES } from "@/utils/articles";

export default function LawUpdates() {
  // Dynamically fetch an existing Law Updates article from the database
  const featuredArticle = ARTICLES.find(a => a.category === 'law-updates');

  return (
    <section id="updates" className="relative pt-4 pb-8 lg:pt-6 lg:pb-12">
      <Orb color="olive" className="-left-[150px] top-[20%] h-[400px] w-[400px] lg:h-[600px] lg:w-[600px]" opacity={0.25} />
      
      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-16">
        
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <img 
              src={luImg} 
              alt="Law Updates" 
              className="w-full max-w-[500px] lg:max-w-[600px] h-auto object-contain" 
            />
          </div>
          
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left lg:pl-6">
            
            {/* Left-aligned on mobile, Right-aligned on desktop for responsiveness */}
            <h2 className="w-full text-left lg:text-right font-display text-4xl sm:text-5xl lg:text-[56px] font-bold text-carbon-black mb-4 tracking-tight">
              Law Updates
            </h2>
            
            {/* Dynamically render the article's title */}
            <h3 className="font-display text-2xl sm:text-3xl lg:text-[34px] font-bold text-carbon-black leading-snug mb-5">
              {featuredArticle?.title}
            </h3>
            
            {/* Dynamically render the article's excerpt */}
            <p className="font-sans text-sm sm:text-base lg:text-[17px] text-carbon-black/85 leading-relaxed mb-6 max-w-[600px]">
              {featuredArticle?.excerpt}
            </p>

            {/* Dynamically render the Author block matching the exact format */}
            {featuredArticle && (
              <div className="flex items-center gap-3 mb-8">
                <img src={featuredArticle.author.avatar} alt={featuredArticle.author.name} className="w-10 h-10 rounded-full object-cover" />
                <div className="flex flex-col">
                  <span className="font-sans text-[14px] font-bold text-ink leading-tight">{featuredArticle.author.name}</span>
                  <span className="font-sans text-[12px] text-ink/70 mt-0.5">{featuredArticle.date} • {featuredArticle.readTime}</span>
                </div>
              </div>
            )}

            {/* Route directly to the specific article's page */}
            <Link to={`/everyday-law/${featuredArticle?.category}/${featuredArticle?.slug}`} className="outline-none">
              <Button variant="olive" className="!px-10 !h-12 !text-[13px] tracking-wide shadow-card">
                Read more
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}