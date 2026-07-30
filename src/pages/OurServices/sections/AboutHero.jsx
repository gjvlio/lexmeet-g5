import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Orb from "@/components/ui/Orb";
import aboutusImg from "@/assets/AUassets/aboutus.png";
export default function AboutHero() {
  return _jsxs("section", {
    className: "relative flex flex-col gap-10 lg:flex-row lg:items-center",
    children: [
      _jsx(Orb, {
        color: "sage",
        className:
          "-left-[200px] top-0 h-[280px] w-[280px] lg:h-[450px] lg:w-[450px]",
        opacity: 0.3,
      }),
      _jsxs("div", {
        className:
          "relative z-10 w-full space-y-6 pr-0 lg:w-6/12 lg:space-y-8 lg:pr-4",
        children: [
          _jsxs("div", {
            className: "flex flex-col gap-2",
            children: [
              _jsx("h2", {
                className:
                  "font-display text-[18px] uppercase tracking-widest text-forest sm:text-[20px]",
                children: "About Us",
              }),
              _jsx("div", { className: "h-[1px] w-48 bg-sage/50" }),
            ],
          }),
          _jsxs("h1", {
            className:
              "font-display text-[34px] font-bold leading-tight text-ink sm:text-[40px] lg:text-[44px]",
            children: [
              "Legal Consultations ",
              _jsx("br", {}),
              "Conducted Online",
            ],
          }),
          _jsxs("div", {
            className:
              "space-y-5 font-sans text-[16px] leading-relaxed text-ink/80 sm:text-[18px]",
            children: [
              _jsx("p", {
                children:
                  "Rizal Law Office provides legal consultations through a secure online platform. Clients connect with Philippine Bar admitted lawyers using encrypted video, without visiting a physical office.",
              }),
              _jsx("p", {
                children:
                  "Services include online consultations, digital document preparation, and cloud based case management. These are available to clients regardless of location.",
              }),
            ],
          }),
        ],
      }),
      _jsx("div", {
        className: "relative z-10 flex w-full justify-end lg:w-7/12",
        children: _jsx("img", {
          src: aboutusImg,
          alt: "Legal Consultations Conducted Online",
          className:
            "h-[280px] w-full max-w-[920px] rounded-tl-[40px] rounded-br-[40px] rounded-tr-[24px] rounded-bl-[24px] object-contain sm:h-[380px] lg:h-[520px] lg:rounded-tl-[80px] lg:rounded-br-[80px]",
        }),
      }),
    ],
  });
}
