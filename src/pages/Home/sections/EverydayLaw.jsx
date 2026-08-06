import { Link } from "react-router-dom";
import Button from "@/components/ui/Button";
import Orb from "@/components/ui/Orb";
import elJpg from "@/assets/homeAssets/EL.jpg";
import { ARTICLES } from "@/utils/articles";

export default function EverydayLaw() {
  // Dynamically fetch an existing Everyday Law article from the database
  const featuredArticle = ARTICLES.find(a => a.category === 'everyday-law');

  return (
    <section id="everyday" className="relative pt-2 pb-12 lg:pt-0 lg:pb-16">
      <Orb color="sage" className="-right-[150px] top-[10%] h-[400px] w-[400px] lg:h-[550px] lg:w-[550px]" opacity={0.3} />
      
      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-16">
        
        {/* Responsive layout with a clean gap on mobile and desktop */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left lg:pr-6">
            
            <h2 className="w-full text-left font-display text-4xl sm:text-5xl lg:text-[56px] font-bold text-carbon-black mb-3 lg:mb-4 tracking-tight [text-shadow:0_4px_12px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-transform duration-300 cursor-default">
              Everyday Law
            </h2>
            
            {/* Dynamically render the article's title */}
            <h3 className="font-display text-2xl sm:text-3xl lg:text-[34px] font-semibold text-carbon-black leading-snug mb-4 lg:mb-5">
              {featuredArticle?.title}
            </h3>
            
            {/* Dynamically render the article's body (clamped to 4 lines) */}
            <p className="font-sans text-sm sm:text-base lg:text-[17px] text-carbon-black/85 leading-relaxed mb-6 max-w-[600px] line-clamp-4 text-justify">
              {featuredArticle?.body}
            </p>

            {/* Injected the matching Author block here */}
            {featuredArticle && (
              <div className="flex items-center gap-3 mb-6 lg:mb-8">
                <img src={featuredArticle.author.avatar} alt={featuredArticle.author.name} className="w-10 h-10 rounded-full object-cover" />
                <div className="flex flex-col">
                  <span className="font-sans text-[14px] font-bold text-ink leading-tight">{featuredArticle.author.name}</span>
                  <span className="font-sans text-[12px] text-ink/70 mt-0.5">{featuredArticle.date} • {featuredArticle.readTime}</span>
                </div>
              </div>
            )}
            
            {/* Route directly to the specific article's page */}
            <div className="flex flex-wrap items-center gap-3">
              <Link to={`/everyday-law/${featuredArticle?.category}/${featuredArticle?.slug}`} className="outline-none">
                <Button variant="olive" className="!px-10 !h-12 !text-[13px] tracking-wide shadow-card">
                  Read more
                </Button>
              </Link>
              <Link to="/everyday-law/everyday-law" className="outline-none">
                <Button variant="glass" className="!px-8 !h-12 !text-[13px] tracking-wide shadow-card !border-[#3D4223] !text-[#3D4223] hover:!bg-[#3D4223] hover:!text-parchment">
                  View Everyday Law List
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            {/* Dynamic frame placeholder matching outline, dimensions, and corner radius of EL.png */}
            <div className="w-full max-w-[563px] aspect-[563/276] rounded-tl-[48px] rounded-br-[48px] rounded-tr-[16px] rounded-bl-[16px] md:rounded-tl-[96px] md:rounded-br-[96px] md:rounded-tr-[24px] md:rounded-bl-[24px] border-[1.5px] border-[#878C60] overflow-hidden shadow-xl">
              <img
                src={elJpg}
                alt="Everyday Law"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}