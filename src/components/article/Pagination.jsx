import Button from "@/components/ui/Button";

export default function Pagination({ currentPage, totalPages, totalItems }) {
  return (
    <div className="mt-14 flex flex-col items-center gap-4">
      <div className="flex items-center gap-3">
        <Button variant="glass" className="!w-10 !h-10 !p-0 !rounded-full text-lg">&lsaquo;</Button>
        <Button variant="olive" className="!w-10 !h-10 !p-0 !rounded-full font-bold">1</Button>
        <Button variant="glass" className="!w-10 !h-10 !p-0 !rounded-full font-bold">2</Button>
        <Button variant="glass" className="!w-10 !h-10 !p-0 !rounded-full font-bold">3</Button>
        <span className="font-sans text-ink/50 px-1 font-bold">...</span>
        <Button variant="glass" className="!w-10 !h-10 !p-0 !rounded-full font-bold">8</Button>
        <Button variant="glass" className="!w-10 !h-10 !p-0 !rounded-full text-lg">&rsaquo;</Button>
      </div>
      <p className="font-sans text-[11px] font-medium text-ink/60">
        Showing 1-6 of {totalItems} articles
      </p>
    </div>
  );
}