import { Link } from "react-router-dom";
import { ARTICLE_CATEGORIES } from "@/utils/articles";

export default function Breadcrumb({ category, title }) {
  const categoryName = ARTICLE_CATEGORIES[category];
  
  // Dynamic routing: If we are on an "everyday-law" article detail page, 
  // "Everyday Law" links to the Category List. Otherwise, it links to the Hub.
  const everydayLawLink = (category === 'everyday-law' && title) 
    ? "/everyday-law/everyday-law" 
    : "/everyday-law";

  // We omit the middle category segment only if the category is 'everyday-law' 
  // to avoid "Home / Everyday Law / Everyday Law / Title"
  const showCategory = category && category !== 'everyday-law';

  return (
    <nav className="font-sans text-xs text-ink/80 flex items-center gap-2 font-medium overflow-hidden">
      <Link to="/" className="font-bold text-ink hover:underline">Home</Link>
      <span>/</span>
      
      {/* Dynamic Link applied here */}
      <Link to={everydayLawLink} className="font-bold text-ink hover:underline">
        Everyday Law
      </Link>
      
      {showCategory && (
        <>
          <span>/</span>
          <Link to={`/everyday-law/${category}`} className="font-bold text-ink hover:underline">
            {categoryName}
          </Link>
        </>
      )}
      
      {title && (
        <>
          <span>/</span>
          <span className="truncate text-ink/60">{title}</span>
        </>
      )}
    </nav>
  );
}