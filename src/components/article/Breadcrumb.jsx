import { Link } from "react-router-dom";
import { ARTICLE_CATEGORIES } from "@/utils/articles";

const CATEGORY_LIST_NAMES = {
  'everyday-law': 'Everyday Law List',
  'law-updates': 'Law Updates List',
  'law-blogs': 'Law Blogs List',
};

export default function Breadcrumb({ category, title }) {
  const categoryListName = CATEGORY_LIST_NAMES[category] || `${ARTICLE_CATEGORIES[category] || "Everyday Law"} List`;

  return (
    <nav className="font-sans text-xs text-ink/80 flex items-center gap-2 font-medium overflow-hidden">
      <Link to="/" className="font-bold text-ink hover:underline">Home</Link>
      <span>/</span>
      
      <Link to="/everyday-law" className="font-bold text-ink hover:underline">
        Everyday Law
      </Link>
      
      {category && (
        <>
          <span>/</span>
          {title ? (
            <Link to={`/everyday-law/${category}`} className="font-bold text-ink hover:underline">
              {categoryListName}
            </Link>
          ) : (
            <span className="font-bold text-ink">{categoryListName}</span>
          )}
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