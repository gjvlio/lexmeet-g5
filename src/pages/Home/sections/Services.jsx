import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SERVICES } from "@/utils/content";
import { PHOTOS } from "@/utils/images";
import SectionLabel from "@/components/ui/SectionLabel";
import Orb from "@/components/ui/Orb";
import { cn } from "@/utils/cn";
/** SERVICES band — olive glass cards with pop-out cut-out photos. */
export default function Services() {
  return _jsxs("section", {
    id: "services",
    className: "relative overflow-hidden bg-services-fade py-14 lg:py-24",
    children: [
      _jsx(Orb, {
        color: "sage",
        className: "left-[-140px] top-[70px] h-[480px] w-[480px]",
        opacity: 0.55,
      }),
      _jsx(Orb, {
        color: "olive",
        className: "right-[-120px] top-[220px] h-[560px] w-[560px]",
        opacity: 0.35,
      }),
      _jsxs("div", {
        className:
          "relative mx-auto flex max-w-[1440px] gap-8 px-4 sm:px-6 lg:px-16",
        children: [
          _jsx(SectionLabel, {
            text: "SERVICES",
            className: "mt-16 hidden lg:block",
          }),
          _jsx("div", {
            className:
              "grid flex-1 grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2",
            children: SERVICES.map((s, i) => {
              const photo = PHOTOS[`service-${s.key}`];
              const cornerBig =
                i % 2 === 0 ? "rounded-br-[100px]" : "rounded-bl-[100px]";
              return _jsxs(
                "article",
                {
                  className: cn(
                    "relative flex flex-col gap-5 overflow-visible rounded-3xl border border-white/28 bg-service-card p-6 shadow-card sm:flex-row lg:min-h-[300px] lg:p-8 lg:pl-6",
                    cornerBig,
                  ),
                  children: [
                    _jsx("div", {
                      className:
                        "relative h-[180px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[300px] sm:w-[140px] lg:-mt-12 lg:w-[170px]",
                      children: photo
                        ? _jsx("img", {
                            src: photo,
                            alt: s.title,
                            className: "h-full w-full object-cover",
                          })
                        : _jsx("div", {
                            className:
                              "h-full w-full bg-gradient-to-b from-sage/70 to-olive",
                          }),
                    }),
                    _jsxs("div", {
                      className: "lg:pt-4",
                      children: [
                        _jsx("h3", {
                          className:
                            "font-display text-2xl font-bold text-cream lg:text-3xl",
                          children: s.title,
                        }),
                        _jsx("p", {
                          className:
                            "mt-3 font-sans text-sm leading-relaxed text-cream/90 lg:text-[15px]",
                          children: s.body,
                        }),
                      ],
                    }),
                  ],
                },
                s.key,
              );
            }),
          }),
        ],
      }),
    ],
  });
}
