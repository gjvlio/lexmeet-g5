import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { HERO } from "@/utils/content";
import { PHOTOS } from "@/utils/images";
import Button from "@/components/ui/Button";
const SOCIAL_RAIL = ["f", "ig", "in", "yt"];
/** Hero band — full-bleed photo card with frosted copy panel + CTA + social rail. */
export default function Hero() {
  const hero = PHOTOS["hero"];
  return _jsx("section", {
    className:
      "relative bg-hero-fade px-4 pb-10 pt-8 sm:px-6 lg:pb-16 lg:pt-12",
    children: _jsx("div", {
      className: "relative mx-auto max-w-[1440px]",
      children: _jsxs("div", {
        className:
          "relative h-[560px] overflow-hidden rounded-tl-[40px] rounded-tr-[40px] rounded-bl-[40px] rounded-br-[80px] sm:h-[680px] lg:h-[820px] lg:rounded-br-[180px]",
        children: [
          hero
            ? _jsx("img", {
                src: hero,
                alt: "Law library",
                className: "h-full w-full object-cover",
              })
            : _jsx("div", {
                className:
                  "h-full w-full bg-gradient-to-br from-forest via-deep to-ink",
              }),
          _jsx("div", {
            className:
              "absolute inset-0 bg-gradient-to-b from-ink/25 to-ink/85",
          }),
          _jsxs("div", {
            className:
              "absolute inset-0 flex flex-col items-center overflow-y-auto px-4 pt-12 text-center sm:px-6 lg:pt-24",
            children: [
              _jsx("p", {
                className:
                  "font-display text-xs font-light tracking-[0.28em] text-cream sm:text-base sm:tracking-[0.36em] lg:text-[22px]",
                children: HERO.eyebrow,
              }),
              _jsx("h1", {
                className:
                  "mt-2 font-display text-[64px] font-bold leading-none text-white drop-shadow-[0_8px_32px_rgba(0,0,0,0.35)] sm:text-[96px] lg:text-[120px] xl:text-[170px]",
                children: HERO.headline,
              }),
              _jsx("div", {
                className:
                  "glass-dark mt-6 max-w-[560px] rounded-3xl bg-white/[0.12] p-5 text-center sm:p-7 lg:mt-8",
                children: _jsx("p", {
                  className:
                    "font-sans text-sm leading-relaxed text-cream sm:text-base lg:text-lg",
                  children: HERO.body,
                }),
              }),
              _jsx(Button, {
                variant: "cream",
                size: "lg",
                className: "mt-6 lg:mt-8",
                children: HERO.cta,
              }),
            ],
          }),
          _jsx("div", {
            className:
              "glass-dark absolute right-6 top-1/2 hidden -translate-y-1/2 flex-col gap-4 rounded-full bg-white/[0.12] p-3 md:flex",
            children: SOCIAL_RAIL.map((s) =>
              _jsx(
                "a",
                {
                  href: "#",
                  "aria-label": s,
                  className:
                    "grid h-10 w-10 place-items-center rounded-full bg-white/20 text-sm font-bold text-white",
                  children: s,
                },
                s,
              ),
            ),
          }),
        ],
      }),
    }),
  });
}
