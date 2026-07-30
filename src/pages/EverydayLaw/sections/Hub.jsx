import { Link } from "react-router-dom";
import { EVERYDAY_LAW_ARTICLES } from "../data";
import Orb from "@/components/ui/Orb";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import ArticleCardHorizontal from "./ArticleCardHorizontal";
import FeaturedBlogCard from "./FeaturedBlogCard";
import SearchBar from "./SearchBar";

export default function Hub() {
  const latestEverydayLaw = EVERYDAY_LAW_ARTICLES.find(a => a.slug === 'online-startup-msme-registration');
  const latestLawUpdates = EVERYDAY_LAW_ARTICLES.find(a => a.slug === 'expanded-maternity-leave-now-in-effect');
  const latestLawBlogs = EVERYDAY_LAW_ARTICLES.find(a => a.slug === 'can-your-employer-really-withhold-your-final-pay');
  const featuredBlog = EVERYDAY_LAW_ARTICLES.find(a => a.slug === 'e-commerce-data-protection');

  return (
    <div className="relative w-full">
      <Orb color="sage" className="-left-[200px] top-[10%] h-[500px] w-[500px]" opacity={0.35} />
      <Orb color="olive" className="-right-[150px] top-[40%] h-[600px] w-[600px]" opacity={0.25} />

      {/* Hero Band */}
      <section className="bg-olive py-8 px-4 text-center">
        <h1 className="font-display text-[32px] sm:text-[40px] text-cream uppercase tracking-wide font-bold">
          EVERYDAY LAW
        </h1>
      </section>

      {/* Main Content */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-16">
        <p className="max-w-2xl mx-auto font-sans text-[15px] sm:text-[16px] text-ink/80 text-center mb-8">
          Practical perspectives from our lawyers on the cases, questions, and everyday legal problems Filipinos face.
        </p>

        <div className="flex justify-center mb-8">
          <SearchBar placeholder="Search articles..." className="w-full max-w-xl" />
        </div>

        {/* Popular Topics */}
        <div className="glass inline-flex flex-wrap items-center gap-3 mb-10 rounded-full px-6 py-2.5">
          <SectionLabel 
            text="Popular Topics" 
            tone="ink" 
            className="!text-[15px] !tracking-normal ![writing-mode:horizontal-tb] ![text-orientation:mixed] mr-1" 
          />
          {['Human Rights', 'Family Law', 'Marriage', 'Annulment'].map((topic) => (
            <button key={topic} className="px-4 py-1.5 rounded-full bg-forest text-cream font-sans text-xs font-semibold shadow-sm hover:brightness-110 transition-all">
              {topic}
            </button>
          ))}
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Left Column: Stacked Cards (Narrower) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {latestEverydayLaw && <ArticleCardHorizontal article={latestEverydayLaw} />}
            {latestLawUpdates && <ArticleCardHorizontal article={latestLawUpdates} />}
            {latestLawBlogs && <ArticleCardHorizontal article={latestLawBlogs} />}
          </div>

          {/* Right Column: Featured & CTA (Wider) */}
          <div className="lg:col-span-7 flex flex-col gap-6 h-full">
            {featuredBlog && <FeaturedBlogCard article={featuredBlog} />}
            
            {/* Need Legal Help CTA - Added flex-1 to auto-stretch and align with the bottom of the left column */}
            <GlassCard tone="light" className="py-14 px-10 sm:px-12 text-center flex flex-col items-center justify-center gap-5 border border-white/90 flex-1">
              <h3 className="font-display text-[36px] sm:text-[42px] font-bold text-ink">Need legal help?</h3>
              <p className="font-sans text-[16px] sm:text-[18px] text-ink/80 leading-relaxed mb-4 max-w-md">
                Talk to a lawyer for legal advice on your specific concern. Get clear next steps before taking action
              </p>
              <Button variant="olive" className="!h-14 !px-12 !text-[16px]">
                Talk to a Lawyer
              </Button>
            </GlassCard>
          </div>

        </div>

        {/* Editorial Standard */}
        <div className="mt-24 text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink mb-3">Editorial Standard</h2>
          <p className="font-sans text-[16px] text-ink/80">
            Articles are reviewed for legal accuracy and updated as laws and jurisprudence change.
          </p>
        </div>
      </section>
    </div>
  );
}