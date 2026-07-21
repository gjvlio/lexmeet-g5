import { cn } from '@/utils/cn';

type GlassCardProps = React.HTMLAttributes<HTMLDivElement> & {
  /** 'light' = frosted white (default), 'dark' = translucent dark for hero overlays */
  tone?: 'light' | 'dark';
  as?: keyof JSX.IntrinsicElements;
};

/**
 * Frosted glass container — the recurring surface across every LexMeet page.
 */
export default function GlassCard({
  tone = 'light',
  as: Tag = 'div',
  className,
  children,
  ...props
}: GlassCardProps) {
  return (
    // @ts-expect-error dynamic tag
    <Tag
      className={cn(
        'rounded-3xl',
        tone === 'light' ? 'glass' : 'glass-dark shadow-card',
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
