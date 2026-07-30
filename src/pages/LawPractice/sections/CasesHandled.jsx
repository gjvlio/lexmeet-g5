import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import Orb from "@/components/ui/Orb";
// Pointing to the new LPassets directory
import casesImg from "@/assets/LPassets/cases-handled.png";
const CASES = [
  "Annulment of Marriage or Declaration of Nullity of Marriage",
  "Actions for Specific Performance",
  "Contract Drafting and Other Commercial Documents",
  "Labor Standards Compliance and Illegal Dismissal Defense",
  // Add more items here to see the scrollbar in action!
  // 'Intellectual Property and Trademark Registration',
  // 'Corporate Retainer and Regulatory Compliance',
];
export default function CasesHandled() {
  return _jsxs("section", {
    className: "relative flex flex-col gap-10 lg:flex-row lg:items-end",
    children: [
      _jsx(Orb, {
        color: "olive",
        className:
          "-left-[200px] top-[10%] h-[280px] w-[280px] lg:h-[400px] lg:w-[400px]",
        opacity: 0.3,
      }),
      _jsx(Orb, {
        color: "sage",
        className:
          "-right-[100px] -top-[50px] h-[320px] w-[320px] lg:h-[500px] lg:w-[500px]",
        opacity: 0.35,
      }),
      _jsxs("div", {
        className: "relative z-10 flex-1 space-y-5 lg:space-y-6",
        children: [
          _jsx("h2", {
            className:
              "text-center font-display text-[32px] font-bold text-ink sm:text-[38px] lg:text-[44px]",
            children: "Cases Handled",
          }),
          _jsx("img", {
            src: casesImg,
            alt: "Cases Handled",
            className:
              "mx-auto h-[260px] w-full max-w-[420px] rounded-tl-[32px] rounded-br-[32px] rounded-tr-[14px] rounded-bl-[14px] object-cover shadow-glass ring-1 ring-sage/90 sm:h-[320px] lg:h-[380px]",
          }),
        ],
      }),
      _jsxs("div", {
        className: "relative z-10 flex flex-1 flex-col justify-center",
        children: [
          _jsx("div", {
            className:
              "flex flex-col gap-4 overflow-visible pr-0 lg:h-[350px] lg:overflow-y-auto lg:pr-4 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-white/40 [&::-webkit-scrollbar-track]:shadow-inner [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-forest [&::-webkit-scrollbar-thumb]:shadow-sm",
            children: CASES.map((caseName, i) =>
              _jsx(
                GlassCard,
                {
                  tone: "light",
                  className:
                    "flex min-h-[72px] shrink-0 items-center px-5 py-4 shadow-sm !rounded-2xl sm:px-6 lg:min-h-[76px]",
                  children: _jsx("p", {
                    className:
                      "font-sans text-[14px] leading-snug text-ink/90 sm:text-[15px]",
                    children: caseName,
                  }),
                },
                i,
              ),
            ),
          }),
          _jsx("div", {
            className: "mt-6 flex justify-center lg:justify-end lg:pr-4",
            children: _jsx(Button, {
              variant: "olive",
              size: "md",
              children: "See More",
            }),
          }),
        ],
      }),
    ],
  });
}
