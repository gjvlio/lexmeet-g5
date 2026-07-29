import { forwardRef } from 'react';
import { cn } from '@/utils/cn';

type GlassCardProps = React.HTMLAttributes<HTMLDivElement> & {
  /** 'light' = frosted white (default), 'dark' = translucent dark for hero overlays */
  tone?: 'light' | 'dark';
  as?: keyof JSX.IntrinsicElements;
};

/**
 * Frosted glass container — the recurring surface across every LexMeet page.
 * Forwards its ref so wrappers (Modal) can focus or measure the surface.
 */
const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(function GlassCard(
  { tone = 'light', as = 'div', className, children, ...props },
  ref,
) {
  // Narrowed to 'div' so the props/ref types stay concrete — TS can't represent
  // the union of every intrinsic element's props once a ref is in play.
  const Tag = as as 'div';

  return (
    <Tag
      ref={ref}
      className={cn('rounded-3xl', tone === 'light' ? 'glass' : 'glass-dark shadow-card', className)}
      {...props}
    >
      {children}
    </Tag>
  );
});

export default GlassCard;
