import { Link } from "react-router-dom";
import Button from "@/components/ui/Button";
import Orb from "@/components/ui/Orb";
import elImg from "@/assets/homeAssets/EL.png";
import { ARTICLES } from "@/utils/articles";

export default function EverydayLaw() {
  // Dynamically fetch an existing Everyday Law article from the database
  const featuredArticle = ARTICLES.find(a => a.category === 'everyday-law');

  return (
    <section id="everyday" className="relative pt-2 pb-12 lg:pt-0 lg:pb-16">
      <Orb color="sage" className="-right-[150px] top-[10%] h-[400px] w-[400px] lg:h-[550px] lg:w-[550px]" opacity={0.3} />
      
      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-16">
        
        {/* No gap while stacked — spacing under the image is set by the
            image's own negative margin, so it scales with the artwork. */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-0 lg:gap-12">
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left lg:pr-6">
            
            <h2 className="w-full text-left font-display text-4xl sm:text-5xl lg:text-[56px] font-bold text-carbon-black mb-3 lg:mb-4 tracking-tight">
              Everyday Law
            </h2>
            
            {/* Dynamically render the article's title */}
            <h3 className="font-display text-2xl sm:text-3xl lg:text-[34px] font-bold text-carbon-black leading-snug mb-4 lg:mb-5">
              {featuredArticle?.title}
            </h3>
            
            {/* Dynamically render the article's excerpt */}
            <p className="font-sans text-sm sm:text-base lg:text-[17px] text-carbon-black/85 leading-relaxed mb-6 max-w-[600px]">
              {featuredArticle?.excerpt}
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
            <Link to={`/everyday-law/${featuredArticle?.category}/${featuredArticle?.slug}`} className="outline-none">
              <Button variant="olive" className="!px-10 !h-12 !text-[13px] tracking-wide shadow-card">
                Read more
              </Button>
            </Link>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            {/* Wrapper matches the image's own width so the negative margin
                below resolves against it rather than the column. */}
            <div className="w-full max-w-[500px] lg:max-w-[600px]">
              <img
                src={elImg}
                alt="Everyday Law"
                /* Same shadow padding as LU.png — 23px on a 570px-wide
                   source, so 4%. col-reverse puts the image above the text
                   on mobile, so it's the bottom edge that needs pulling up;
                   6% clears the padding and sits the heading on the fade. */
                className="w-full h-auto object-contain -mb-[6%] lg:mb-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}