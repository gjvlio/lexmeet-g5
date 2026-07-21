/** Simple scales-of-justice mark used in the header/footer logo lockup. */
export default function ScalesIcon({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 8v30" />
        <path d="M14 14h20" />
        <circle cx="24" cy="10" r="2.4" fill="currentColor" stroke="none" />
        <path d="M14 14 8 26h12L14 14Z" />
        <path d="M34 14 28 26h12L34 14Z" />
        <path d="M8 26a6 4 0 0 0 12 0" />
        <path d="M28 26a6 4 0 0 0 12 0" />
        <path d="M17 40h14" />
      </g>
    </svg>
  );
}
