import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Button from "@/components/ui/Button";
import Orb from "@/components/ui/Orb";
// Importing the specific map fragments from LPassets
import phMap from "@/assets/LPassets/PH.png";
import luzonMap from "@/assets/LPassets/luzon.png";
import visayasMap from "@/assets/LPassets/visayas.png";
import mindanaoMap from "@/assets/LPassets/mindanao.png";
const PROVINCES_LEFT = [
  "Cavite",
  "Batangas",
  "Cebu",
  "Negros Occidental",
  "Pampanga",
];
const PROVINCES_RIGHT = [
  "Bulacan",
  "Pangasinan",
  "Rizal",
  "Laguna",
  "Camarines Sur",
];
export default function ProvincesMap() {
  return _jsxs("section", {
    className: "relative flex flex-col gap-12 lg:flex-row lg:gap-20",
    children: [
      _jsx(Orb, {
        color: "olive",
        className:
          "-left-[100px] top-[20%] h-[300px] w-[300px] lg:h-[450px] lg:w-[450px]",
        opacity: 0.3,
      }),
      _jsx(Orb, {
        color: "sage",
        className:
          "-right-[200px] top-[10%] h-[320px] w-[320px] lg:h-[500px] lg:w-[500px]",
        opacity: 0.4,
      }),
      _jsxs("div", {
        className: "relative z-10 flex flex-1 flex-col items-center",
        children: [
          _jsx("h2", {
            className:
              "mb-6 font-display text-3xl font-bold text-ink sm:mb-8 sm:text-4xl",
            children: "Provinces",
          }),
          _jsxs("div", {
            className:
              "flex w-full max-w-md flex-col gap-4 sm:flex-row sm:justify-between",
            children: [
              _jsx("div", {
                className: "flex flex-1 flex-col gap-4",
                children: PROVINCES_LEFT.map((prov) =>
                  _jsx(
                    "div",
                    {
                      className:
                        "flex min-h-12 items-center justify-center rounded-2xl bg-gradient-to-br from-olive to-forest px-4 py-3 text-center font-sans text-sm text-cream shadow-pill",
                      children: prov,
                    },
                    prov,
                  ),
                ),
              }),
              _jsx("div", {
                className: "flex flex-1 flex-col gap-4",
                children: PROVINCES_RIGHT.map((prov) =>
                  _jsx(
                    "div",
                    {
                      className:
                        "flex min-h-12 items-center justify-center rounded-2xl bg-forest px-4 py-3 text-center font-sans text-sm text-cream shadow-pill",
                      children: prov,
                    },
                    prov,
                  ),
                ),
              }),
            ],
          }),
          _jsx(Button, {
            variant: "olive",
            className: "mt-10 h-10 px-8 text-sm",
            children: "See More",
          }),
        ],
      }),
      _jsxs("div", {
        className: "relative z-10 flex flex-1 flex-col items-center",
        children: [
          _jsx("h2", {
            className:
              "mb-6 font-display text-3xl font-bold text-ink sm:mb-8 sm:text-4xl",
            children: "Location of Practice",
          }),
          _jsxs("div", {
            className:
              "relative flex w-full max-w-[500px] flex-col items-center gap-8 pt-2 lg:flex-row lg:items-start lg:justify-between lg:gap-12",
            children: [
              _jsxs("div", {
                className: "relative flex flex-col items-center gap-4",
                children: [
                  _jsx("img", {
                    src: phMap,
                    alt: "Nationwide",
                    className:
                      "h-[260px] w-auto object-contain drop-shadow-md sm:h-[320px] lg:h-[360px]",
                  }),
                  _jsx("span", {
                    className: "font-sans text-[16px] text-ink sm:text-[17px]",
                    children: "Nationwide",
                  }),
                ],
              }),
              _jsxs("div", {
                className:
                  "flex w-full max-w-[200px] flex-col justify-between gap-6 lg:h-[360px]",
                children: [
                  _jsxs("div", {
                    className: "relative self-end",
                    children: [
                      _jsx("img", {
                        src: luzonMap,
                        alt: "Luzon",
                        className:
                          "h-[120px] w-auto object-contain drop-shadow-md sm:h-[140px]",
                      }),
                      _jsx("span", {
                        className:
                          "absolute -bottom-4 right-0 font-sans text-base text-ink",
                        children: "Luzon",
                      }),
                    ],
                  }),
                  _jsxs("div", {
                    className: "relative self-start pt-2",
                    children: [
                      _jsx("img", {
                        src: visayasMap,
                        alt: "Visayas",
                        className:
                          "h-[90px] w-auto object-contain drop-shadow-md sm:h-[100px]",
                      }),
                      _jsx("span", {
                        className:
                          "absolute -bottom-5 left-2 font-sans text-base text-ink",
                        children: "Visayas",
                      }),
                    ],
                  }),
                  _jsxs("div", {
                    className: "relative self-end pt-2",
                    children: [
                      _jsx("img", {
                        src: mindanaoMap,
                        alt: "Mindanao",
                        className:
                          "h-[100px] w-auto object-contain drop-shadow-md sm:h-[110px]",
                      }),
                      _jsx("span", {
                        className:
                          "absolute -bottom-4 right-4 font-sans text-base text-ink",
                        children: "Mindanao",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
