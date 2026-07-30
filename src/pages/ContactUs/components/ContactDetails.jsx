import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CONTACT } from "@/utils/content";
import FooterLogo from "@/components/ui/FooterLogo";
/** Circular olive badge holding one of the contact icons. */
function IconBadge({ children }) {
  return _jsx("span", {
    className:
      "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-olive-leaf text-parchment shadow-pill",
    children: children,
  });
}
function PinIcon() {
  return _jsx("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    className: "h-5 w-5",
    "aria-hidden": true,
    children: _jsxs("g", {
      stroke: "currentColor",
      strokeWidth: "1.7",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        _jsx("path", {
          d: "M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z",
        }),
        _jsx("circle", { cx: "12", cy: "10", r: "2.5" }),
      ],
    }),
  });
}
function PhoneIcon() {
  return _jsx("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    className: "h-5 w-5",
    "aria-hidden": true,
    children: _jsx("path", {
      d: "M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3a1.5 1.5 0 0 1-1.6 1.5C11.6 19.9 4.1 12.4 3.5 5.1A1.5 1.5 0 0 1 5 3.5h1.5Z",
      stroke: "currentColor",
      strokeWidth: "1.7",
      strokeLinejoin: "round",
    }),
  });
}
function MailIcon() {
  return _jsx("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    className: "h-5 w-5",
    "aria-hidden": true,
    children: _jsxs("g", {
      stroke: "currentColor",
      strokeWidth: "1.7",
      strokeLinejoin: "round",
      children: [
        _jsx("rect", {
          x: "3",
          y: "5.5",
          width: "18",
          height: "13",
          rx: "2.5",
        }),
        _jsx("path", { d: "m3.8 7 8.2 6 8.2-6", strokeLinecap: "round" }),
      ],
    }),
  });
}
/** Left column of the Contact Us page — office details pulled from content.ts. */
export default function ContactDetails() {
  return _jsxs("div", {
    children: [
      _jsxs("div", {
        className: "flex flex-col items-center text-center text-dark-khaki",
        children: [
          _jsx(FooterLogo, { className: "h-9 w-[49px]" }),
          _jsx("p", {
            className:
              "mt-2 whitespace-nowrap font-display text-[22px] font-medium tracking-[0.1em]",
            children: "RIZAL LAW OFFICE",
          }),
        ],
      }),
      _jsx("h1", {
        className: "mt-10 font-display text-4xl font-bold text-carbon-black",
        children: "Contact Us",
      }),
      _jsx("p", {
        className: "mt-4 font-sans text-[15px] leading-relaxed text-dark-khaki",
        children:
          "We\u2019d love to hear from you! Whether you have a question, need a quote, or want to learn more about our services, feel free to get in touch. Send us a message using the form or contact us through our phone number or email.",
      }),
      _jsxs("dl", {
        className: "mt-10 space-y-7",
        children: [
          _jsxs("div", {
            className: "flex gap-4",
            children: [
              _jsx(IconBadge, { children: _jsx(PinIcon, {}) }),
              _jsxs("div", {
                children: [
                  _jsx("dt", {
                    className:
                      "font-sans text-xs font-bold tracking-[0.14em] text-carbon-black",
                    children: "ADDRESS",
                  }),
                  _jsx("dd", {
                    className:
                      "mt-1 font-sans text-sm leading-relaxed text-dark-khaki",
                    children: CONTACT.address.map((line) =>
                      _jsx(
                        "span",
                        { className: "block", children: line },
                        line,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          }),
          _jsxs("div", {
            className: "flex gap-4",
            children: [
              _jsx(IconBadge, { children: _jsx(PhoneIcon, {}) }),
              _jsxs("div", {
                children: [
                  _jsx("dt", {
                    className:
                      "font-sans text-xs font-bold tracking-[0.14em] text-carbon-black",
                    children: "CONTACT NUMBER",
                  }),
                  _jsx("dd", {
                    className: "mt-1 font-sans text-sm text-dark-khaki",
                    children: _jsx("a", {
                      href: `tel:${CONTACT.tel.replace(/[^\d+]/g, "")}`,
                      className: "hover:underline",
                      children: CONTACT.tel,
                    }),
                  }),
                ],
              }),
            ],
          }),
          _jsxs("div", {
            className: "flex gap-4",
            children: [
              _jsx(IconBadge, { children: _jsx(MailIcon, {}) }),
              _jsxs("div", {
                children: [
                  _jsx("dt", {
                    className:
                      "font-sans text-xs font-bold tracking-[0.14em] text-carbon-black",
                    children: "EMAIL",
                  }),
                  _jsx("dd", {
                    className: "mt-1 font-sans text-sm text-dark-khaki",
                    children: _jsx("a", {
                      href: `mailto:${CONTACT.email}`,
                      className: "hover:underline",
                      children: CONTACT.email,
                    }),
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
