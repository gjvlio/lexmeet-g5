import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "@/utils/cn";
/** Soft blurred ambient orb placed behind section content. */
export default function Orb({ color = "sage", className, opacity = 0.4 }) {
  return _jsx("span", {
    "aria-hidden": true,
    className: cn("orb", color === "sage" ? "bg-sage" : "bg-olive", className),
    style: { opacity },
  });
}
