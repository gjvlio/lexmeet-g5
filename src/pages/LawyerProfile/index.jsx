import {
  jsx as _jsx,
  jsxs as _jsxs,
  Fragment as _Fragment,
} from "react/jsx-runtime";
import { useState } from "react";
import { cn } from "@/utils/cn.js";
import { LAWYERS, TABS, TOTAL_LAWYERS, PAGE_COUNT } from "./lawyers.js";

import LawyerModal from "./components/LawyerModal";
import orbImage from "@/assets/LawyersProfile/orb.png";
import searchIcon from "@/assets/LawyersProfile/search-icon.png";
import callIcon from "@/assets/LawyersProfile/call-icon.png";
import onlineToggle from "@/assets/LawyersProfile/online-toggle.png";
import offlineToggle from "@/assets/LawyersProfile/offline-toggle.png";
/*
 * Two layouts, one set of markup.
 *
 * Base (phone): each lawyer is a stacked card — a row that places its cells by
 * x-coordinate has no phone equivalent.
 *
 * `xl` and up: the 1440px Figma frames ("List of Lawyers / Ratings &
 * Feedback / Availability"), positioned to the pixel. Those offsets live in
 * breakpoint-prefixed arbitrary classes rather than inline styles, because an
 * inline style cannot be scoped to a breakpoint and would leak onto phones.
 */
/** Column anchors from the comp, relative to the card's left edge. */
const DESKTOP = {
  avatar: "xl:absolute xl:left-[32px] xl:top-1/2 xl:-translate-y-1/2",
  name: "xl:absolute xl:left-[113px] xl:top-1/2 xl:-translate-y-1/2 xl:whitespace-nowrap",
  position:
    "xl:absolute xl:left-[567px] xl:top-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2",
  /** The third column re-centres slightly per tab, as drawn. */
  action:
    "xl:absolute xl:left-[829px] xl:top-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2",
  ratings:
    "xl:absolute xl:left-[809px] xl:top-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2",
  availability:
    "xl:absolute xl:left-[825px] xl:top-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2",
  seeMore:
    "xl:absolute xl:left-[1019px] xl:top-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2",
};
/** Tab pills tile at 222px intervals from x=623 in the comp. */
const TAB_DESKTOP_POSITION = [
  "xl:left-[623px]",
  "xl:left-[845px]",
  "xl:left-[1067px]",
];
const COLUMN_HEADING_DESKTOP = [
  DESKTOP.action,
  DESKTOP.ratings,
  DESKTOP.availability,
];
export default function LawyerProfile() {
  const [activeTab, setActiveTab] = useState(0);
  const [page, setPage] = useState(1);
  /** Kerr owns the shared lawyer modal — see docs/PROGRESS.md. */
  const [openLawyer, setOpenLawyer] = useState(null);
  const handleSeeMore = (lawyer) => {
    setOpenLawyer(lawyer);
  };
  return _jsxs("section", {
    className: "relative overflow-hidden bg-parchment pb-8 pt-7",
    children: [
      _jsx(BackgroundOrb, { corner: "top-left", size: 720 }),
      _jsx(BackgroundOrb, { corner: "bottom-right", size: 900 }),
      _jsxs("div", {
        className:
          "relative mx-auto w-full max-w-[1440px] px-4 sm:px-6 xl:px-0",
        children: [
          _jsx(PageHeading, {}),
          _jsx(ControlsRow, {
            activeTab: activeTab,
            onTabChange: setActiveTab,
          }),
          _jsx(LawyerTable, { activeTab: activeTab, page: page, onSeeMore: handleSeeMore }),
          _jsx(Pagination, { page: page, onPageChange: setPage }),
          _jsx(ResultCount, { page: page }),
          _jsx(LawyerModal, {
            lawyer: openLawyer,
            isOpen: openLawyer !== null,
            onClose: () => setOpenLawyer(null),
            initialTab: activeTab,
          }),
        ],
      }),
    ],
  });
}
/**
 * Corner glow. Both are anchored past the section's corners so only the inner
 * arc shows and the fade runs toward the middle of the page — the seam is the
 * viewport edge itself, so there is no hard line anywhere on the page.
 *
 * Anchoring is by corner rather than by coordinate (the bottom-right one uses
 * right/bottom) so each stays welded to its corner at any viewport width.
 * `max-w-none` is required, or Tailwind's preflight squashes the image to the
 * container width.
 */
function BackgroundOrb({ corner, size }) {
  /**
   * Glow centres relative to their corner. The asset fades to zero at ~47% of
   * its width, so the top-left centre sits that far down from the section top:
   * any higher and the header seam clips the glow while it is still visible,
   * leaving a hard line. The bottom-right one needs no such clearance — the
   * dark footer starts immediately below it.
   */
  const centre =
    corner === "top-left" ? { x: 80, y: size * 0.48 } : { x: 0, y: 253 };
  const offset = { x: centre.x - size / 2, y: centre.y - size / 2 };
  return _jsx("img", {
    src: orbImage,
    alt: "",
    "aria-hidden": true,
    className: "pointer-events-none absolute max-w-none",
    style: {
      width: size,
      height: size,
      ...(corner === "top-left"
        ? { left: offset.x, top: offset.y }
        : { right: offset.x, bottom: offset.y }),
    },
  });
}
function PageHeading() {
  return _jsxs(_Fragment, {
    children: [
      _jsx("h1", {
        className:
          "text-center font-display text-3xl font-bold leading-tight text-carbon-black sm:text-4xl lg:text-[48px] lg:leading-none",
        children: "Lawyers Profile",
      }),
      _jsx("p", {
        className:
          "mx-auto mt-4 max-w-[712px] text-center font-sans text-sm leading-relaxed text-charcoal-brown lg:mt-5 lg:text-[15px] lg:leading-[22px]",
        children:
          "Meet the attorneys behind our platform. Compare practice areas, ratings, and live availability, then book a secure online consultation in minutes.",
      }),
    ],
  });
}
/**
 * Stacked on a phone. At `xl` the wrapper becomes the positioning context and
 * the tab group is dropped from layout with `xl:contents`, so each pill can be
 * absolutely placed at its comp offset.
 */
function ControlsRow({ activeTab, onTabChange }) {
  return _jsxs("div", {
    className:
      "mt-8 flex flex-col gap-3 xl:relative xl:mt-[46px] xl:block xl:h-[50px]",
    children: [
      _jsx(SearchField, {}),
      _jsx("div", {
        className: "grid grid-cols-1 gap-2 sm:grid-cols-3 xl:contents",
        children: TABS.map((tab, i) =>
          _jsx(
            "button",
            {
              type: "button",
              onClick: () => onTabChange(i),
              className: cn(
                "h-[50px] rounded-full font-sans text-sm transition-colors xl:absolute xl:top-0 xl:w-[200px] lg:text-[16px]",
                TAB_DESKTOP_POSITION[i],
                i === activeTab
                  ? "bg-olive-pill font-semibold text-parchment shadow-pill"
                  : "border border-palm-leaf/90 bg-white/60 text-carbon-black backdrop-blur-glass hover:bg-white/80",
              ),
              children: tab.label,
            },
            tab.label,
          ),
        ),
      }),
    ],
  });
}
function SearchField() {
  return _jsxs("div", {
    className:
      "flex h-[50px] w-full items-center gap-[15px] rounded-full border border-palm-leaf/90 bg-white/45 pl-[10px] backdrop-blur-glass xl:absolute xl:left-[145px] xl:top-0 xl:w-[420px]",
    children: [
      _jsx("img", {
        src: searchIcon,
        alt: "",
        className: "h-[30px] w-[30px] shrink-0",
      }),
      _jsx("input", {
        type: "search",
        placeholder: "Search a lawyer...",
        "aria-label": "Search a lawyer",
        className:
          "h-full min-w-0 flex-1 bg-transparent pr-6 font-sans text-[15px] text-carbon-black placeholder:text-carbon-black/45 focus:outline-none",
      }),
    ],
  });
}
function LawyerTable({ activeTab, page, onSeeMore }) {
  const startIndex = (page - 1) * 8;
  const paginatedLawyers = LAWYERS.slice(startIndex, startIndex + 8);

  return (
    /*
     * Frosted panel, same treatment as the search field, so the orb reads
     * through its left side as in the design. The fill is a light neutral at
     * 60% rather than plain white: solving the reference card against both
     * its backdrops (plain page vs. over the orb) gives rgba(237,238,236,.6),
     * and pure white can only lighten, never desaturate.
     */
    _jsxs("div", {
      className:
        "relative mt-6 overflow-hidden rounded-3xl border border-white/90 bg-[rgba(237,238,236,0.6)] shadow-glass backdrop-blur-glass xl:ml-[146px] xl:mt-[30px] xl:h-[726px] xl:w-[1150px]",
      children: [
        _jsx(ColumnHeaders, { activeTab: activeTab }),
        paginatedLawyers.map((lawyer, i) =>
          _jsx(
            LawyerRow,
            {
              lawyer: lawyer,
              activeTab: activeTab,
              isLast: i === paginatedLawyers.length - 1,
              onSeeMore: onSeeMore,
            },
            lawyer.name,
          ),
        ),
      ],
    })
  );
}
/** Column labels only mean anything once the rows are a table — xl only. */
function ColumnHeaders({ activeTab }) {
  const label =
    "font-sans text-[11px] font-semibold uppercase tracking-[0.09em] text-olive-leaf xl:bottom-[10px]";
  return _jsxs("div", {
    className: "relative hidden xl:block xl:h-[46px]",
    children: [
      _jsx("span", {
        className: cn(label, "xl:absolute xl:left-[32px]"),
        children: "Lawyer",
      }),
      _jsx("span", {
        className: cn(label, "xl:absolute xl:left-[567px] xl:-translate-x-1/2"),
        children: "Position",
      }),
      _jsx("span", {
        key: activeTab,
        className: cn(
          label,
          "xl:absolute xl:-translate-x-1/2 animate-fade-in",
          COLUMN_HEADING_DESKTOP[activeTab],
        ),
        children: TABS[activeTab].column,
      }),
      _jsx(Rule, { className: "bg-[#C0C3A8]" }),
    ],
  });
}
/** Hairline between rows — full-bleed on a phone, inset from the card at `xl`. */
function Rule({ className }) {
  return _jsx("span", {
    "aria-hidden": true,
    className: cn(
      "absolute bottom-0 left-4 right-4 h-px xl:left-[32px] xl:right-[29px]",
      className,
    ),
  });
}
function LawyerRow({ lawyer, activeTab, isLast, onSeeMore }) {
  return _jsxs("div", {
    className:
      "relative flex flex-col gap-3 px-4 py-4 xl:block xl:h-[85px] xl:px-0 xl:py-0",
    children: [
      _jsxs("div", {
        className: "flex items-center gap-3",
        children: [
          _jsx(Avatar, { lawyer: lawyer }),
          _jsxs("div", {
            className: "min-w-0",
            children: [
              _jsx("p", {
                className: cn(
                  "font-sans text-sm font-bold text-carbon-black xl:text-[18px]",
                  DESKTOP.name,
                ),
                children: lawyer.name,
              }),
              _jsx("p", {
                className: cn(
                  "font-sans text-[12px] text-carbon-black/70 xl:whitespace-nowrap xl:text-[14px]",
                  DESKTOP.position,
                ),
                children: lawyer.position,
              }),
            ],
          }),
        ],
      }),
      _jsxs("div", {
        className: "flex items-center justify-between gap-3",
        children: [
          _jsxs("div", {
            key: activeTab,
            className: "animate-fade-in flex items-center xl:contents",
            children: [
              activeTab === 0 && _jsx(CallButton, {}),
              activeTab === 1 && _jsx(RatingCell, { rating: lawyer.rating }),
              activeTab === 2 &&
                _jsx(AvailabilityPill, { available: lawyer.available }),
            ],
          }),
          _jsx(SeeMoreButton, { onClick: () => onSeeMore(lawyer) }),
        ],
      }),
      !isLast && _jsx(Rule, { className: "bg-[#D2D4C2]" }),
    ],
  });
}
function Avatar({ lawyer }) {
  return _jsxs("span", {
    className: cn("relative block h-[60px] w-[60px] shrink-0", DESKTOP.avatar),
    children: [
      _jsx("img", {
        src: lawyer.photo,
        alt: "",
        className:
          "h-[60px] w-[60px] rounded-full object-cover ring-1 ring-dark-khaki",
      }),
      _jsx("img", {
        src: lawyer.online ? onlineToggle : offlineToggle,
        alt: lawyer.online ? "Online" : "Offline",
        className: "absolute bottom-[3px] right-[8px] h-[12px] w-[12px]",
      }),
    ],
  });
}
function CallButton() {
  return _jsxs("button", {
    type: "button",
    className: cn(
      "flex h-[40px] w-[107px] items-center justify-center gap-[9px] rounded-full border border-palm-leaf/90 bg-white/60 font-sans text-[13px] font-semibold text-olive-leaf backdrop-blur-glass transition-colors hover:bg-white/80",
      DESKTOP.action,
    ),
    children: [
      _jsx("img", { src: callIcon, alt: "", className: "h-[20px] w-[20px]" }),
      "Call",
    ],
  });
}
/** Five stars (14px, 7px apart) then the numeric score, as drawn. */
function RatingCell({ rating }) {
  return _jsxs("span", {
    className: cn("flex items-center gap-[11px]", DESKTOP.ratings),
    children: [
      _jsx("span", {
        className: "flex gap-[7px]",
        children: Array.from({ length: 5 }, (_, i) =>
          _jsx(Star, { filled: i < Math.round(rating) }, i),
        ),
      }),
      _jsx("span", {
        className:
          "font-sans text-base font-semibold text-carbon-black lg:text-[18px]",
        children: rating.toFixed(1),
      }),
    ],
  });
}
function Star({ filled }) {
  return _jsx("svg", {
    viewBox: "0 0 14 13",
    "aria-hidden": true,
    className: cn(
      "h-[13px] w-[14px]",
      filled ? "text-olive-leaf" : "text-palm-leaf/40",
    ),
    children: _jsx("path", {
      d: "M7 0l2.163 4.382 4.837.703-3.5 3.411.826 4.817L7 11.04l-4.326 2.273.826-4.817L0 5.085l4.837-.703L7 0z",
      fill: "currentColor",
    }),
  });
}
function AvailabilityPill({ available }) {
  return _jsx("span", {
    className: cn(
      "grid h-[40px] w-[120px] place-items-center rounded-full border font-sans text-[13px] font-semibold text-carbon-black",
      available
        ? "border-palm-leaf/80 bg-linen-olive/80"
        : "border-palm-leaf/90 bg-white/70 backdrop-blur-glass",
      DESKTOP.availability,
    ),
    children: available ? "Available" : "Not Available",
  });
}
function SeeMoreButton({ onClick }) {
  return _jsx("button", {
    type: "button",
    onClick: onClick,
    className: cn(
      "h-[40px] w-[120px] shrink-0 rounded-full bg-olive-pill font-sans text-[13px] font-semibold text-parchment shadow-pill transition-[filter] hover:brightness-110",
      DESKTOP.seeMore,
    ),
    children: "See More",
  });
}
function Pagination({ page, onPageChange }) {
  const base =
    "grid h-[40px] w-[40px] place-items-center rounded-full font-sans text-[14px] transition-colors";
  const outline =
    "border border-palm-leaf/90 bg-white/60 text-carbon-black backdrop-blur-glass hover:bg-white/80";
  return _jsxs("nav", {
    "aria-label": "Pagination",
    className: "mt-8 flex justify-center gap-2 lg:mt-10 lg:gap-[13px]",
    children: [
      _jsx("button", {
        type: "button",
        "aria-label": "Previous page",
        disabled: page === 1,
        onClick: () => onPageChange(page - 1),
        className: cn(base, outline, "disabled:opacity-45"),
        children: "\u2039",
      }),
      Array.from({ length: PAGE_COUNT }, (_, i) => i + 1).map((n) =>
        _jsx(
          "button",
          {
            type: "button",
            "aria-current": n === page ? "page" : undefined,
            onClick: () => onPageChange(n),
            className: cn(
              base,
              n === page
                ? "bg-olive-pill font-semibold text-parchment shadow-pill"
                : outline,
            ),
            children: n,
          },
          n,
        ),
      ),
      _jsx("button", {
        type: "button",
        "aria-label": "Next page",
        disabled: page === PAGE_COUNT,
        onClick: () => onPageChange(page + 1),
        className: cn(base, outline, "disabled:opacity-45"),
        children: "\u203A",
      }),
    ],
  });
}
function ResultCount({ page }) {
  const startIndex = (page - 1) * 8;
  const endIndex = Math.min(startIndex + 8, TOTAL_LAWYERS);
  return _jsxs("p", {
    className:
      "mt-[11px] text-center font-sans text-[13px] leading-[18px] text-carbon-black/60",
    children: ["Showing ", startIndex + 1, "-", endIndex, " of ", TOTAL_LAWYERS, " Lawyers"],
  });
}
