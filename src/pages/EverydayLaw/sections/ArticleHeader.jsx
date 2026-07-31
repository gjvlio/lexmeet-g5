export default function ArticleHeader({ article }) {
  return (
    <div className="mt-8 mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4 glass !bg-white/60 border border-white/90 rounded-[40px] px-6 sm:px-8 py-4 shadow-sm">
      <div className="flex items-center gap-4">
        <img src={article.author.avatar} alt={article.author.name} className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover" />
        <div className="flex flex-col">
          <span className="font-sans text-[15px] sm:text-[17px] font-bold text-ink leading-tight">{article.author.name}</span>
          <span className="font-sans text-[13px] sm:text-[14px] text-ink/60 mt-0.5">{article.author.role}</span>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        {article.category === 'law-updates' ? (
          <>
            <span className="bg-olive px-4 py-2 rounded-full font-sans text-[11px] sm:text-[12px] font-semibold text-cream shadow-sm">Republic Act 11210</span>
            <span className="bg-olive px-4 py-2 rounded-full font-sans text-[11px] sm:text-[12px] font-semibold text-cream shadow-sm">Effective Date: 11 March 2019</span>
            <span className="bg-olive px-4 py-2 rounded-full font-sans text-[11px] sm:text-[12px] font-semibold text-cream shadow-sm">DOLE</span>
          </>
        ) : (
          <span className="bg-olive px-5 py-2 rounded-full font-sans text-[12px] sm:text-[13px] font-semibold text-cream shadow-sm">
            Date Posted : {article.date.replace(/, \d{4}/, " 2026")}
          </span>
        )}
      </div>
    </div>
  );
}