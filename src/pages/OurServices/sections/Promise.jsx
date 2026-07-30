import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Orb from "@/components/ui/Orb";
const AREAS = [
  "Annulment of marriage",
  "Support",
  "Debt problem",
  "Investments",
  "Business",
  "Estate",
  "Conjugal property",
  "Real estate transactions",
];
export default function PromiseSection() {
  return _jsxs("section", {
    className: "relative mx-auto max-w-5xl text-ink",
    children: [
      _jsx(Orb, {
        color: "sage",
        className:
          "-right-[200px] top-0 h-[280px] w-[280px] lg:h-[450px] lg:w-[450px]",
        opacity: 0.35,
      }),
      _jsxs("div", {
        className: "relative z-10",
        children: [
          _jsx("h3", {
            className:
              "font-sans text-[16px] font-bold text-forest sm:text-[18px]",
            children: "Our promise",
          }),
          _jsx("h2", {
            className:
              "mb-5 font-display text-[32px] font-bold sm:mb-6 sm:text-[40px] lg:text-[44px]",
            children: "What Can You Expect",
          }),
          _jsxs("div", {
            className:
              "space-y-5 font-sans text-[16px] leading-relaxed text-ink/80 sm:space-y-6 sm:text-[18px]",
            children: [
              _jsx("p", {
                children:
                  "Clients may choose a lawyer based on disclosed practice areas, admission history, and availability.",
              }),
              _jsx("p", {
                children:
                  "Consultations are conducted through an encrypted video platform designed for confidential legal discussions, and are available outside standard office hours, subject to individual lawyer availability.",
              }),
              _jsx("p", {
                children:
                  "Booking involves selecting a lawyer, choosing a time slot, and confirming the applicable rate before the session is scheduled. Relevant documents may be uploaded ahead of time through the platform, stored using encrypted file storage.",
              }),
              _jsx("p", {
                className: "pt-2 font-medium text-ink",
                children: "Areas we handle include the following:",
              }),
            ],
          }),
          _jsx("div", {
            className: "mt-6 flex flex-wrap gap-3 sm:gap-4",
            children: AREAS.map((area) =>
              _jsxs(
                "div",
                {
                  className:
                    "flex items-center gap-2.5 rounded-full bg-mist/60 px-4 py-2 font-sans text-[14px] font-bold text-forest shadow-sm ring-1 ring-sage/20 sm:px-5 sm:text-[15px]",
                  children: [
                    _jsx("div", {
                      className:
                        "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-forest",
                      children: _jsx("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "3",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        className: "h-3 w-3 text-forest",
                        children: _jsx("polyline", {
                          points: "20 6 9 17 4 12",
                        }),
                      }),
                    }),
                    area,
                  ],
                },
                area,
              ),
            ),
          }),
        ],
      }),
    ],
  });
}
