import { useState } from "react";
import { useParams } from "react-router-dom";
import { ARTICLE_CATEGORIES, ARTICLES } from "@/utils/articles";
import SearchBar from "./SearchBar";
import Breadcrumb from "./Breadcrumb";
import ArticleCardVertical from "./ArticleCardVertical";
import Pagination from "./Pagination";
import Orb from "@/components/ui/Orb";
import wideOfficeBanner from '@/assets/ELassets/wide_office_banner.png';
import wideUpdatesBanner from '@/assets/ELassets/wide_updates_banner.png';
import wideBlogsBanner from '@/assets/ELassets/wide_blogs_banner.png';


/** Article list for one category — serves all category listing routes with live search filtering. */
export default function ArticleList() {
  const { category } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const categoryName = ARTICLE_CATEGORIES[category] || "Everyday Law";

  const getBannerImage = () => {
    switch (category) {
      case 'law-updates':
        return wideUpdatesBanner;
      case 'law-blogs':
        return wideBlogsBanner;
      case 'everyday-law':
      default:
        return wideOfficeBanner;
    }
  };

  // Filter articles by category and live search query
  const allArticlesInCategory = ARTICLES.filter(a => {
    const matchesCategory = a.category === category;
    if (!matchesCategory) return false;
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      a.title.toLowerCase().includes(query) ||
      a.excerpt.toLowerCase().includes(query) ||
      a.author.name.toLowerCase().includes(query)
    );
  });

  // Pagination Logic: strictly 3 items per page
  const itemsPerPage = 3;
  const totalPages = Math.ceil(allArticlesInCategory.length / itemsPerPage) || 1;
  const displayedArticles = allArticlesInCategory.slice(
    (currentPage - 1) * itemsPerPage, 
    currentPage * itemsPerPage
  );

  return (
    <div className="relative w-full overflow-x-clip pb-20">
      {/* Background Orbs */}
      <Orb color="sage" className="-left-[200px] top-[10%] h-[500px] w-[500px]" opacity={0.35} />
      <Orb color="olive" className="-right-[150px] top-[40%] h-[600px] w-[600px]" opacity={0.25} />

      <section
        className="py-5 sm:py-6 px-4 text-center relative overflow-hidden z-10 shadow-[0_4px_16px_rgba(0,0,0,0.25)]"
        style={{
          backgroundColor: '#545a2f',
          backgroundImage: `linear-gradient(rgba(84, 90, 47, 0.85), rgba(84, 90, 47, 0.88)), url(${getBannerImage()})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <h1 
          className="font-display text-[26px] sm:text-[32px] text-cream uppercase tracking-wider font-bold"
          style={{ textShadow: '0 3px 8px rgba(0,0,0,0.45), 0 1px 3px rgba(0,0,0,0.3)' }}
        >
          {categoryName}
        </h1>
      </section>

      <section className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 pt-10">
        <p className="max-w-2xl mx-auto font-sans text-[15px] sm:text-[16px] text-ink/80 text-center mb-10">
          Practical perspectives from our lawyers on the cases, questions, and everyday legal problems Filipinos face.
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
          <Breadcrumb category={category} />
          <SearchBar 
            placeholder="Search articles..." 
            className="w-full sm:w-[320px]" 
            compact 
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>

        {/* Article Cards Grid */}
        {displayedArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedArticles.map((article, index) => (
              <ArticleCardVertical key={article.slug} article={article} index={index} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center text-ink/70 font-sans text-base">
            No articles found matching &quot;{searchQuery}&quot;.
          </div>
        )}

        {displayedArticles.length > 0 && (
          <Pagination 
            currentPage={currentPage} 
            totalPages={totalPages} 
            totalItems={allArticlesInCategory.length} 
            onPageChange={setCurrentPage}
          />
        )}
      </section>
    </div>
  );
}