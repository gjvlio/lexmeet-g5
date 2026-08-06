import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Orb from "@/components/ui/Orb";
import missionImg from "@/assets/AUassets/MISSION.png";
import visionImg from "@/assets/AUassets/VISION.png";
import { MISSION_VISION_DATA } from "@/utils/services.js";


export default function MissionVision() {

  return _jsxs("section", {
    className: "relative flex w-full flex-col gap-10 lg:gap-14",
    children: [
      _jsx(Orb, {
        color: "olive",
        className:
          "-left-[150px] top-[30%] h-[260px] w-[260px] lg:h-[400px] lg:w-[400px]",
        opacity: 0.3,
      }),
      _jsxs("div", {
        className:
          "relative z-10 flex w-full flex-col items-start gap-6 rounded-[24px] bg-gradient-to-r from-olive to-forest p-6 text-cream shadow-card sm:p-10 md:p-14 lg:flex-row lg:items-center lg:gap-12",
        children: [
          _jsx("div", {
            className:
              "flex h-[96px] w-[96px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-olive to-forest shadow-[inset_0_2px_4px_rgba(255,255,255,0.2),0_8px_20px_rgba(0,0,0,0.4)] ring-1 ring-white/10 sm:h-[130px] sm:w-[130px]",
            children: _jsx("img", {
              src: missionImg,
              alt: "Mission",
              className:
                "h-[54px] w-[54px] object-contain drop-shadow-md sm:h-[70px] sm:w-[70px]",
            }),
          }),
          _jsxs("div", {
            className: "flex flex-1 flex-col text-left",
            children: [
              _jsx("h3", {
                className:
                  "font-sans text-[18px] font-bold text-cream/90 sm:text-[20px]",
                children: "Our mission",
              }),
              _jsx("h2", {
                className:
                  "mb-3 mt-1 font-display text-[30px] font-bold tracking-wide sm:mb-4 sm:text-[36px] lg:text-[40px]",
                children: "Why we Exist",
              }),
              _jsxs("div", {
                className:
                  "max-w-4xl space-y-4 font-sans text-[15px] leading-relaxed text-cream/90 sm:text-[17px]",
                children: [
                  _jsx("p", {
                    children:
                      "To provide accessible legal consultation services to clients who face distance, time, or mobility constraints.",
                  }),
                  _jsx("p", {
                    children:
                      "Using secure digital platforms, we handle scheduling, video consultations, and document exchange entirely online.",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      _jsxs("div", {
        className:
          "relative z-10 flex w-full flex-col-reverse items-start gap-6 rounded-[24px] bg-gradient-to-r from-white to-mist p-6 text-ink shadow-card sm:p-10 md:p-14 lg:flex-row lg:items-center lg:justify-between lg:gap-12",
        children: [
          _jsxs("div", {
            className: "flex flex-1 flex-col text-left",
            children: [
              _jsx("h3", {
                className:
                  "font-sans text-[18px] font-bold text-forest sm:text-[20px]",
                children: "Our vision",
              }),
              _jsx("h2", {
                className:
                  "mb-3 mt-1 font-display text-[30px] font-bold tracking-wide sm:mb-4 sm:text-[36px] lg:text-[40px]",
                children: "Built for Accessibility",
              }),
              _jsxs("div", {
                className:
                  "max-w-4xl space-y-4 font-sans text-[15px] leading-relaxed text-ink/80 sm:text-[17px]",
                children: [
                  _jsx("p", {
                    children:
                      "A legal consultation model built for OFWs, small business owners, homeowners association officers, and individual clients.",
                  }),
                  _jsx("p", {
                    children:
                      "One where licensed counsel is accessible without requiring an in person office visit, regardless of a client's location or working hours.",
                  }),
                ],
              }),
            ],
          }),
          _jsx("div", {
            className:
              "flex h-[96px] w-[96px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-white to-mist shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_8px_20px_rgba(0,0,0,0.15)] ring-1 ring-black/5 sm:h-[130px] sm:w-[130px]",
            children: _jsx("img", {
              src: visionImg,
              alt: "Vision",
              className:
                "h-[54px] w-[54px] object-contain drop-shadow-md sm:h-[70px] sm:w-[70px]",
            }),
          }),
        ],
      }),
    ],
  });
}
