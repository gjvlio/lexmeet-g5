import { cn } from '@/utils/cn';

type OrbProps = {
  color?: 'sage' | 'olive';
  className?: string;
  opacity?: number;
};

/** Soft blurred ambient orb placed behind section content. */
export default function Orb({ color = 'sage', className, opacity = 0.4 }: OrbProps) {
  return (
    <span
      aria-hidden
      className={cn('orb', color === 'sage' ? 'bg-sage' : 'bg-olive', className)}
      style={{ opacity }}
    />
  );
}
