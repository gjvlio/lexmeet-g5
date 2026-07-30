import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { NAV_ITEMS } from "@/utils/content";
import { cn } from "@/utils/cn";
import logo from "@/assets/header/header-logo.svg";
import profileIcon from "@/assets/header/header-profile-icon.svg";
import chevron from "@/assets/header/header-chevron.svg";
import divider from "@/assets/header/header-divider.png";
import ProfileDropdown from "./ProfileDropdown";

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
export default function Header({ onOpenLogin }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { pathname, hash } = useLocation();
  const headerRef = useRef(null);

  // Navigating should close open menus
  useEffect(() => {
    setIsMenuOpen(false);
    setIsProfileOpen(false);
  }, [pathname, hash]);

  // Click outside and Escape key handling for profile dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    }
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsProfileOpen(false);
      }
    }
    if (isProfileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isProfileOpen]);

  return (
    <header ref={headerRef} className="relative z-30 w-full bg-parchment">
      <MobileHeader
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen((open) => !open)}
        isProfileOpen={isProfileOpen}
        onToggleProfile={() => setIsProfileOpen((open) => !open)}
        onCloseProfile={() => setIsProfileOpen(false)}
        onOpenLogin={onOpenLogin}
      />
      <DesktopHeader
        isProfileOpen={isProfileOpen}
        onToggleProfile={() => setIsProfileOpen((open) => !open)}
        onCloseProfile={() => setIsProfileOpen(false)}
        onOpenLogin={onOpenLogin}
      />
    </header>
  );
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
function MobileHeader({
  isMenuOpen,
  onToggleMenu,
  isProfileOpen,
  onToggleProfile,
  onCloseProfile,
  onOpenLogin,
}) {
  return (
    <div className="xl:hidden relative">
      <div className="flex h-[72px] items-center justify-between px-4 sm:px-6">
        <button
          type="button"
          onClick={onToggleMenu}
          aria-label="Menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          className="grid h-11 w-11 place-items-center rounded-lg text-carbon-black hover:bg-carbon-black/5 transition-colors"
        >
          <MenuIcon isOpen={isMenuOpen} />
        </button>
        <div className="flex items-center gap-2">
          <img src={logo} alt="" className="h-7 w-auto" />
          <span className="font-display text-base font-medium tracking-[0.1em] text-carbon-black sm:text-xl">
            RIZAL LAW OFFICE
          </span>
        </div>
        <div className="relative">
          <button
            type="button"
            aria-label="Account"
            aria-expanded={isProfileOpen}
            onClick={onToggleProfile}
            className="grid h-11 w-11 place-items-center rounded-full hover:bg-carbon-black/5 active:bg-carbon-black/10 transition-colors focus:outline-none"
          >
            <img src={profileIcon} alt="" className="h-9 w-9" />
          </button>
          <ProfileDropdown
            isOpen={isProfileOpen}
            onClose={onCloseProfile}
            onOpenLogin={onOpenLogin}
            className="absolute right-0 top-full mt-2 z-50"
          />
        </div>
      </div>
      {isMenuOpen && <MobileNav />}
    </div>
  );
}

function MenuIcon({ isOpen }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      {isOpen ? (
        <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
      )}
    </svg>
  );
}

function MobileNav() {
  const isActive = useActiveMatcher();
  return (
    <nav
      id="mobile-nav"
      className="border-t border-palm-leaf/40 px-4 pb-4 pt-2 sm:px-6"
    >
      <ul className="flex flex-col">
        {NAV_ITEMS.map((item) => (
          <li key={item.label}>
            <NavLink
              to={item.href}
              className={cn(
                "block rounded-full px-4 py-3 font-sans text-[15px] font-medium transition-colors",
                isActive(item.href)
                  ? "bg-olive-leaf text-parchment"
                  : "text-carbon-black hover:bg-linen-olive"
              )}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/* --------------------------------------------------------------- desktop -- */
/** The 1440px comp, reproduced to the pixel. Hidden below `lg`. */
function DesktopHeader({
  isProfileOpen,
  onToggleProfile,
  onCloseProfile,
  onOpenLogin,
}) {
  return (
    <div className="hidden h-[220px] xl:block">
      <div className="relative mx-auto h-full w-[1440px]">
        <img
          src={logo}
          alt=""
          className="absolute left-1/2 top-[20px] h-9 w-auto -translate-x-1/2"
        />
        <span className="absolute left-1/2 top-[77px] -translate-x-1/2 whitespace-nowrap font-display text-[36px] font-medium tracking-[0.1em] text-carbon-black">
          RIZAL LAW OFFICE
        </span>

        {/* Profile Button + Dropdown Container */}
        <div className="absolute right-[90px] top-[28px] z-50 flex flex-col items-end">
          <button
            type="button"
            aria-label="Account"
            aria-expanded={isProfileOpen}
            onClick={onToggleProfile}
            className="flex h-[60px] items-center gap-3 cursor-pointer group focus:outline-none"
          >
            <img src={profileIcon} alt="" className="h-[50px] w-[50px]" />
            <img
              src={chevron}
              alt=""
              className={cn(
                "h-[22px] w-[16px] transition-transform duration-200",
                isProfileOpen && "rotate-180"
              )}
            />
          </button>
          <div className="relative mt-1">
            <ProfileDropdown
              isOpen={isProfileOpen}
              onClose={onCloseProfile}
              onOpenLogin={onOpenLogin}
              className="absolute right-0 top-0 z-50"
            />
          </div>
        </div>

        <img
          src={divider}
          alt=""
          className="absolute left-[90px] top-[144px] h-[3px] w-[1260px]"
        />
        <DesktopNav />
      </div>
    </div>
  );
}

function DesktopNav() {
  const isActive = useActiveMatcher();
  return (
    <nav>
      {NAV_ITEMS.map((item, i) => (
        <NavLink
          key={item.label}
          to={item.href}
          className="absolute flex items-center justify-center"
          style={{
            left: NAV_ITEM_START_X + i * NAV_ITEM_WIDTH,
            top: NAV_ITEM_Y,
            width: NAV_ITEM_WIDTH,
            height: NAV_ITEM_HEIGHT,
          }}
        >
          <span
            aria-hidden={true}
            className={cn(
              "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full",
              isActive(item.href) && "bg-olive-leaf"
            )}
            style={{ width: PILL_WIDTH, height: PILL_HEIGHT }}
          />
          <span
            className={cn(
              "relative font-sans text-[15px] font-medium",
              isActive(item.href) ? "text-parchment" : "text-carbon-black"
            )}
          >
            {item.label}
          </span>
        </NavLink>
      ))}
    </nav>
  );
}
