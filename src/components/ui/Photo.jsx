import { jsx as _jsx } from "react/jsx-runtime";
import { PHOTOS } from "@/utils/images";
import { cn } from "@/utils/cn";
/**
 * Renders a real photo when available, otherwise a palette-tinted gradient
 * placeholder. Applies the signature asymmetric custom-corner frame + sage ring.
 */
export default function Photo({ name, alt, className, corner = "a" }) {
  const src = PHOTOS[name];
  const cornerClass =
    corner === "a"
      ? "rounded-tl-[48px] rounded-br-[48px] rounded-tr-[14px] rounded-bl-[14px]"
      : corner === "b"
        ? "rounded-tr-[48px] rounded-bl-[48px] rounded-tl-[14px] rounded-br-[14px]"
        : "rounded-2xl";
  return _jsx("div", {
    className: cn(
      "relative overflow-hidden ring-1 ring-sage/90",
      cornerClass,
      className,
    ),
    children: src
      ? _jsx("img", {
          src: src,
          alt: alt,
          className: "h-full w-full object-cover",
        })
      : _jsx("div", {
          role: "img",
          "aria-label": alt,
          className:
            "h-full w-full bg-gradient-to-br from-sage via-olive to-deep",
        }),
  });
}
