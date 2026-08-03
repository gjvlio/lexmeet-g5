// src/components/ui/Button.jsx

/**
 * Pill button in the LexMeet system.
 * - olive: gradient fill, cream text (primary action)
 * - cream: solid cream, ink text (hero CTA)
 * - glass: frosted, ink text (secondary / filters)
 */
export default function Button({
  variant = "olive",
  size = "md",
  className = "",
  children,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-full font-sans font-bold transition-all duration-300 ease-out active:scale-95 hover:scale-105 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-olive-leaf/60 btn-glow-pulse cursor-pointer";

  const sizes = {
    md: "px-5 h-11 text-sm lg:px-6",
    lg: "px-6 h-12 text-base sm:h-14 sm:text-lg lg:px-8 lg:h-[58px] lg:text-[22px]",
  };

  const variants = {
    olive: "bg-olive-pill text-cream shadow-pill hover:brightness-110",
    cream: "bg-cream text-ink shadow-card hover:bg-white",
    glass: "glass !bg-white/60 text-ink border-sage/90 hover:bg-white/80",
  };

  const combinedClasses = [base, sizes[size], variants[variant], className]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={combinedClasses}
      {...props}
    >
      {children}
    </button>
  );
}