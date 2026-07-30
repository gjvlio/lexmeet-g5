import { useParams } from "react-router-dom";
import { EVERYDAY_LAW_CATEGORIES, EVERYDAY_LAW_ARTICLES } from "../data";
import SearchBar from "./SearchBar";
import Breadcrumb from "./Breadcrumb";
import ArticleCardVertical from "./ArticleCardVertical";
import Pagination from "./Pagination";

export default function CategoryList() {
  const { category } = useParams();
  const categoryName = EVERYDAY_LAW_CATEGORIES[category] || "Everyday Law";
  const articles = EVERYDAY_LAW_ARTICLES.filter(a => a.category === category);

  return (
    <div className="relative w-full pb-16">
      {/* Hero Band - Slimmer, title only */}
      <section className="bg-olive py-8 px-4 text-center">
        <h1 className="font-display text-[32px] sm:text-[40px] text-cream uppercase tracking-wide font-bold">
          {categoryName}
        </h1>
      </section>

      <section className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 pt-10">
        {/* Subtitle moved here */}
        <p className="max-w-2xl mx-auto font-sans text-[15px] sm:text-[16px] text-ink/80 text-center mb-10">
          Practical perspectives from our lawyers on the cases, questions, and everyday legal problems Filipinos face.
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
          <Breadcrumb category={category} />
          <SearchBar placeholder="Search articles..." className="w-full sm:w-[320px]" compact />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCardVertical key={article.slug} article={article} />
          ))}
        </div>

        <Pagination currentPage={1} totalPages={8} totalItems={47} />
      </section>
    </div>
  );
}