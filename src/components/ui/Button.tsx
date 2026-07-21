import { cn } from '@/utils/cn';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'olive' | 'cream' | 'glass';
  size?: 'md' | 'lg';
};

/**
 * Pill button in the LexMeet system.
 * - olive: gradient fill, cream text (primary action)
 * - cream: solid cream, ink text (hero CTA)
 * - glass: frosted, ink text (secondary / filters)
 */
export default function Button({
  variant = 'olive',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-full font-sans font-bold transition-transform active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-olive/60';
  const sizes = {
    md: 'px-6 h-11 text-sm',
    lg: 'px-8 h-[58px] text-[22px]',
  };
  const variants = {
    olive: 'bg-olive-pill text-cream shadow-pill hover:brightness-110',
    cream: 'bg-cream text-ink shadow-card hover:bg-white',
    glass: 'glass !bg-white/60 text-ink border-sage/90 hover:bg-white/80',
  };

  return (
    <button className={cn(base, sizes[size], variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
