import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Button from "@/components/ui/Button";
import Orb from "@/components/ui/Orb";
// Importing the exact image names provided from the LPassets folder
import familyImg from "@/assets/LPassets/family.png";
import laborImg from "@/assets/LPassets/briefcase.png";
import civilImg from "@/assets/LPassets/rights.png";
import immigrationImg from "@/assets/LPassets/passport.png";
import criminalImg from "@/assets/LPassets/cuffs.png";
import commercialImg from "@/assets/LPassets/comm.png";
import taxationImg from "@/assets/LPassets/tax.png";
import specialImg from "@/assets/LPassets/hammer.png";
const CATEGORIES = [
  { title: "Family Law", image: familyImg },
  { title: "Labor Law", image: laborImg },
  { title: "Civil Law", image: civilImg },
  { title: "Immigration Law", image: immigrationImg },
  { title: "Criminal Law", image: criminalImg },
  { title: "Commercial Law", image: commercialImg },
  { title: "Taxation Law", image: taxationImg },
  { title: "Special Services", image: specialImg },
];
export default function CategoryGrid() {
  return _jsxs("section", {
    className: "relative mx-auto w-full",
    children: [
      _jsx(Orb, {
        color: "sage",
        className:
          "-left-[150px] top-[100px] h-[320px] w-[320px] lg:h-[450px] lg:w-[450px]",
        opacity: 0.4,
      }),
      _jsx("div", {
        className:
          "relative z-10 mx-auto max-w-[1000px] overflow-hidden rounded-tl-[48px] rounded-br-[48px] rounded-tr-[20px] rounded-bl-[20px] bg-gradient-to-br from-olive to-forest py-10 shadow-card sm:rounded-tl-[80px] sm:rounded-br-[80px] sm:py-12",
        children: _jsx("div", {
          className: "mx-auto px-4 sm:px-6 lg:px-10",
          children: _jsx("div", {
            className:
              "grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-12",
            children: CATEGORIES.map((cat) =>
              _jsxs(
                "div",
                {
                  className: "flex flex-col items-center text-center",
                  children: [
                    _jsx("img", {
                      src: cat.image,
                      alt: cat.title,
                      className:
                        "h-[100px] w-[100px] object-contain drop-shadow-md sm:h-[130px] sm:w-[130px]",
                    }),
                    _jsx("h3", {
                      className:
                        "mb-4 mt-4 font-display text-[20px] font-bold text-cream sm:mt-5 sm:text-[24px]",
                      children: cat.title,
                    }),
                    _jsx(Button, {
                      variant: "cream",
                      className:
                        "h-10 px-7 text-[13px] font-bold tracking-wide shadow-sm !bg-mist hover:!bg-mist/80 sm:px-8 sm:text-[14px]",
                      children: "Learn More",
                    }),
                  ],
                },
                cat.title,
              ),
            ),
          }),
        }),
      }),
    ],
  });
}
