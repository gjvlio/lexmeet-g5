import { useState } from "react";
import { useParams } from "react-router-dom";
import { EVERYDAY_LAW_CATEGORIES, EVERYDAY_LAW_ARTICLES } from "../data";
import SearchBar from "./SearchBar";
import Breadcrumb from "./Breadcrumb";
import ArticleCardVertical from "./ArticleCardVertical";
import Pagination from "./Pagination";
import Orb from "@/components/ui/Orb";

export default function CategoryList() {
  const { category } = useParams();
  const [currentPage, setCurrentPage] = useState(1);

  const categoryName = EVERYDAY_LAW_CATEGORIES[category] || "Everyday Law";
  const allArticlesInCategory = EVERYDAY_LAW_ARTICLES.filter(a => a.category === category);

  // Pagination Logic: strictly 3 items per page
  const itemsPerPage = 3;
  const totalPages = Math.ceil(allArticlesInCategory.length / itemsPerPage) || 1;
  const displayedArticles = allArticlesInCategory.slice(
    (currentPage - 1) * itemsPerPage, 
    currentPage * itemsPerPage
  );

  return (
    <div className="relative w-full pb-16">
      {/* Background Orbs */}
      <Orb color="sage" className="-left-[200px] top-[10%] h-[500px] w-[500px]" opacity={0.35} />
      <Orb color="olive" className="-right-[150px] top-[40%] h-[600px] w-[600px]" opacity={0.25} />

      <section className="bg-olive py-8 px-4 text-center relative z-10">
        <h1 className="font-display text-[32px] sm:text-[40px] text-cream uppercase tracking-wide font-bold">
          {categoryName}
        </h1>
      </section>

      <section className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 pt-10">
        <p className="max-w-2xl mx-auto font-sans text-[15px] sm:text-[16px] text-ink/80 text-center mb-10">
          Practical perspectives from our lawyers on the cases, questions, and everyday legal problems Filipinos face.
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
          <Breadcrumb category={category} />
          <SearchBar placeholder="Search articles..." className="w-full sm:w-[320px]" compact />
        </div>

        {/* Mapped over the sliced 'displayedArticles' and passing the index */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedArticles.map((article, index) => (
            <ArticleCardVertical key={article.slug} article={article} index={index} />
          ))}
        </div>

        <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          totalItems={allArticlesInCategory.length} 
          onPageChange={setCurrentPage}
        />
      </section>
    </div>
  );
}