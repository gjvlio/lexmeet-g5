import { cn } from '@/utils/cn';

/** Vertical stacked section label (SERVICES / PRACTICE) from the design. */
export default function SectionLabel({
  text,
  className,
  tone = 'ink',
}: {
  text: string;
  className?: string;
  tone?: 'ink' | 'cream';
}) {
  return (
    <span
      aria-hidden
      className={cn(
        'select-none font-display font-bold leading-[1.18] tracking-wide',
        'text-4xl [writing-mode:vertical-rl] [text-orientation:upright]',
        tone === 'ink' ? 'text-ink' : 'text-cream',
        className,
      )}
    >
      {text}
    </span>
  );
}
