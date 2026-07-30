import { Routes, Route } from "react-router-dom";
import Hub from "./sections/Hub";
import CategoryList from "./sections/CategoryList";
import ArticleDetail from "./sections/ArticleDetail";

export default function EverydayLaw() {
  return (
    <div className="relative min-h-screen bg-parchment pb-24">
      <Routes>
        <Route path="/" element={<Hub />} />
        <Route path=":category" element={<CategoryList />} />
        <Route path=":category/:slug" element={<ArticleDetail />} />
      </Routes>
    </div>
  );
}