import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import CategoryGrid from "./sections/CategoryGrid";
import CasesHandled from "./sections/CasesHandled";
import ProvincesMap from "./sections/ProvincesMap";
import Awards from "./sections/Awards";
import NotableMembers from "./sections/NotableMembers";
export default function LawPractice() {
  return _jsx("div", {
    className:
      "relative min-h-screen overflow-hidden bg-practice-fade pt-8 pb-24",
    children: _jsxs("div", {
      className: "relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-16",
      children: [
        _jsxs("div", {
          className:
            "mb-12 flex flex-col gap-3 sm:mb-16 sm:flex-row sm:justify-center sm:gap-6",
          children: [
            _jsx("button", {
              className:
                "flex h-12 w-full items-center justify-center rounded-full bg-forest px-10 font-sans text-sm font-bold text-cream shadow-pill transition-transform active:scale-[0.98] sm:w-auto",
              children: "Law Practice",
            }),
            _jsx(Link, {
              to: "/our-services",
              className:
                "flex h-12 w-full items-center justify-center rounded-full border border-sage/50 bg-white/50 px-10 font-sans text-sm font-bold text-ink shadow-glass backdrop-blur-glass transition-colors hover:bg-white/80 active:scale-[0.98] sm:w-auto",
              children: "About Us",
            }),
          ],
        }),
        _jsxs("div", {
          className: "flex flex-col gap-12 lg:gap-16",
          children: [
            _jsx(CategoryGrid, {}),
            _jsx(CasesHandled, {}),
            _jsx(ProvincesMap, {}),
            _jsx(Awards, {}),
            _jsx(NotableMembers, {}),
          ],
        }),
      ],
    }),
  });
}
