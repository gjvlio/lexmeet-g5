import { Routes, Route } from "react-router-dom";
import Hub from "./sections/Hub";
import ArticleList from "@/components/article/ArticleList";
import ArticleDetail from "@/components/article/ArticleDetail";

export default function EverydayLaw() {
  return (
    <div className="relative min-h-screen bg-parchment pb-24">
      <Routes>
        <Route path="/" element={<Hub />} />
        <Route path=":category" element={<ArticleList />} />
        <Route path=":category/:slug" element={<ArticleDetail />} />
      </Routes>
    </div>
  );
}