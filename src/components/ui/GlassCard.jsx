import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "@/utils/cn";
/**
 * Frosted glass container — the recurring surface across every LexMeet page.
 * Forwards its ref so wrappers (Modal) can focus or measure the surface.
 */
const GlassCard = forwardRef(function GlassCard(
  { tone = "light", as = "div", className, children, ...props },
  ref,
) {
  // Narrowed to 'div' so the props/ref types stay concrete — TS can't represent
  // the union of every intrinsic element's props once a ref is in play.
  const Tag = as;
  return _jsx(Tag, {
    ref: ref,
    className: cn(
      "rounded-3xl",
      tone === "light" ? "glass" : "glass-dark shadow-card",
      className,
    ),
    ...props,
    children: children,
  });
});
export default GlassCard;
