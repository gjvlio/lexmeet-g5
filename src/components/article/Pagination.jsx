import Button from "@/components/ui/Button";

export default function Pagination({ currentPage = 1, totalPages = 1, totalItems = 0, onPageChange }) {
  const itemsPerPage = 3;
  const startItem = totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="mt-14 flex flex-col items-center gap-4">
      <div className="flex items-center gap-2 sm:gap-3">
        <Button
          variant="glass"
          disabled={currentPage <= 1}
          onClick={() => onPageChange && onPageChange(Math.max(1, currentPage - 1))}
          className={`!w-10 !h-10 !p-0 !rounded-full text-lg ${
            currentPage <= 1 ? "opacity-40 cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          &lsaquo;
        </Button>

        {pages.map((page) => (
          <Button
            key={page}
            variant={page === currentPage ? "olive" : "glass"}
            onClick={() => onPageChange && onPageChange(page)}
            className="!w-10 !h-10 !p-0 !rounded-full font-bold cursor-pointer"
          >
            {page}
          </Button>
        ))}

        <Button
          variant="glass"
          disabled={currentPage >= totalPages}
          onClick={() => onPageChange && onPageChange(Math.min(totalPages, currentPage + 1))}
          className={`!w-10 !h-10 !p-0 !rounded-full text-lg ${
            currentPage >= totalPages ? "opacity-40 cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          &rsaquo;
        </Button>
      </div>
      <p className="font-sans text-[11px] font-medium text-ink/60">
        Showing {startItem}-{endItem} of {totalItems} {totalItems === 1 ? "article" : "articles"}
      </p>
    </div>
  );
}