import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "@/utils/cn.js";


/** Vertical stacked section label (SERVICES / PRACTICE) from the design. */
export default function SectionLabel({ text, className, tone = "ink" }) {
  return _jsx("span", {
    "aria-hidden": true,
    className: cn(
      "select-none font-display font-bold leading-[1.18] tracking-wide",
      "text-4xl [writing-mode:vertical-rl] [text-orientation:upright]",
      tone === "ink" ? "text-ink" : "text-cream",
      className,
    ),
    children: text,
  });
}
