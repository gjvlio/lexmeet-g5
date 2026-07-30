import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { NAV_ITEMS } from "@/utils/content";
import { cn } from "@/utils/cn";
import logo from "@/assets/header/header-logo.svg";
import profileIcon from "@/assets/header/header-profile-icon.svg";
import chevron from "@/assets/header/header-chevron.svg";
import divider from "@/assets/header/header-divider.png";
/** Desktop nav geometry, from the 1440px Figma frame. */
const NAV_ITEM_WIDTH = 180;
const NAV_ITEM_HEIGHT = 23;
const NAV_ITEM_Y = 166;
const NAV_ITEM_START_X = 90;
/** Selection pill — larger than the link's own box, centred on it. */
const PILL_WIDTH = 160;
const PILL_HEIGHT = 43;
/**
 * Site header. Two layouts rather than one fluid layout: below `xl` a compact
 * bar with a drawer, at `xl` and up the desktop comp positioned to the pixel.
 * The desktop half is `hidden xl:block`, so its absolute offsets never reach a
 * phone and the comp stays exact.
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname, hash } = useLocation();
  // Navigating from inside the drawer should close it.
  useEffect(() => setIsMenuOpen(false), [pathname, hash]);
  return _jsxs("header", {
    className: "relative z-30 w-full bg-parchment",
    children: [
      _jsx(MobileHeader, {
        isMenuOpen: isMenuOpen,
        onToggleMenu: () => setIsMenuOpen((open) => !open),
      }),
      _jsx(DesktopHeader, {}),
    ],
  });
}
/** Matches a nav href against the current location, hash links included. */
function useActiveMatcher() {
  const { pathname, hash } = useLocation();
  return (href) => {
    const [itemPath, itemHash] = href.split("#");
    return itemHash
      ? pathname === (itemPath || "/") && hash === `#${itemHash}`
      : pathname === href;
  };
}
/* ---------------------------------------------------------------- mobile -- */
function MobileHeader({ isMenuOpen, onToggleMenu }) {
  return _jsxs("div", {
    className: "xl:hidden",
    children: [
      _jsxs("div", {
        className: "flex h-[72px] items-center justify-between px-4 sm:px-6",
        children: [
          _jsx("button", {
            type: "button",
            onClick: onToggleMenu,
            "aria-label": "Menu",
            "aria-expanded": isMenuOpen,
            "aria-controls": "mobile-nav",
            className:
              "grid h-11 w-11 place-items-center rounded-lg text-carbon-black",
            children: _jsx(MenuIcon, { isOpen: isMenuOpen }),
          }),
          _jsxs("div", {
            className: "flex items-center gap-2",
            children: [
              _jsx("img", { src: logo, alt: "", className: "h-7 w-auto" }),
              _jsx("span", {
                className:
                  "font-display text-base font-medium tracking-[0.1em] text-carbon-black sm:text-xl",
                children: "RIZAL LAW OFFICE",
              }),
            ],
          }),
          _jsx("button", {
            type: "button",
            "aria-label": "Account",
            className: "grid h-11 w-11 place-items-center",
            children: _jsx("img", {
              src: profileIcon,
              alt: "",
              className: "h-9 w-9",
            }),
          }),
        ],
      }),
      isMenuOpen && _jsx(MobileNav, {}),
    ],
  });
}
function MenuIcon({ isOpen }) {
  return _jsx("svg", {
    viewBox: "0 0 24 24",
    className: "h-6 w-6",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    children: isOpen
      ? _jsx("path", { d: "M6 6l12 12M18 6L6 18", strokeLinecap: "round" })
      : _jsx("path", { d: "M4 7h16M4 12h16M4 17h16", strokeLinecap: "round" }),
  });
}
function MobileNav() {
  const isActive = useActiveMatcher();
  return _jsx("nav", {
    id: "mobile-nav",
    className: "border-t border-palm-leaf/40 px-4 pb-4 pt-2 sm:px-6",
    children: _jsx("ul", {
      className: "flex flex-col",
      children: NAV_ITEMS.map((item) =>
        _jsx(
          "li",
          {
            children: _jsx(NavLink, {
              to: item.href,
              className: cn(
                "block rounded-full px-4 py-3 font-sans text-[15px] font-medium transition-colors",
                isActive(item.href)
                  ? "bg-olive-leaf text-parchment"
                  : "text-carbon-black hover:bg-linen-olive",
              ),
              children: item.label,
            }),
          },
          item.label,
        ),
      ),
    }),
  });
}
/* --------------------------------------------------------------- desktop -- */
/** The 1440px comp, reproduced to the pixel. Hidden below `lg`. */
function DesktopHeader() {
  return _jsx("div", {
    className: "hidden h-[220px] xl:block",
    children: _jsxs("div", {
      className: "relative mx-auto h-full w-[1440px]",
      children: [
        _jsx("img", {
          src: logo,
          alt: "",
          className: "absolute left-1/2 top-[20px] h-9 w-auto -translate-x-1/2",
        }),
        _jsx("span", {
          className:
            "absolute left-1/2 top-[77px] -translate-x-1/2 whitespace-nowrap font-display text-[36px] font-medium tracking-[0.1em] text-carbon-black",
          children: "RIZAL LAW OFFICE",
        }),
        _jsxs("button", {
          type: "button",
          "aria-label": "Account",
          className:
            "absolute left-[1252px] top-[28px] flex h-[60px] items-center gap-3",
          children: [
            _jsx("img", {
              src: profileIcon,
              alt: "",
              className: "h-[50px] w-[50px]",
            }),
            _jsx("img", {
              src: chevron,
              alt: "",
              className: "h-[22px] w-[16px]",
            }),
          ],
        }),
        _jsx("img", {
          src: divider,
          alt: "",
          className: "absolute left-[90px] top-[144px] h-[3px] w-[1260px]",
        }),
        _jsx(DesktopNav, {}),
      ],
    }),
  });
}
function DesktopNav() {
  const isActive = useActiveMatcher();
  return _jsx("nav", {
    children: NAV_ITEMS.map((item, i) =>
      _jsxs(
        NavLink,
        {
          to: item.href,
          className: "absolute flex items-center justify-center",
          style: {
            left: NAV_ITEM_START_X + i * NAV_ITEM_WIDTH,
            top: NAV_ITEM_Y,
            width: NAV_ITEM_WIDTH,
            height: NAV_ITEM_HEIGHT,
          },
          children: [
            _jsx("span", {
              "aria-hidden": true,
              className: cn(
                "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full",
                isActive(item.href) && "bg-olive-leaf",
              ),
              style: { width: PILL_WIDTH, height: PILL_HEIGHT },
            }),
            _jsx("span", {
              className: cn(
                "relative font-sans text-[15px] font-medium",
                isActive(item.href) ? "text-parchment" : "text-carbon-black",
              ),
              children: item.label,
            }),
          ],
        },
        item.label,
      ),
    ),
  });
}
