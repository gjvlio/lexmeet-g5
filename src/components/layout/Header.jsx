import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { NAV_ITEMS } from "@/utils/content";
import { cn } from "@/utils/cn";

import logo from "@/assets/header/header-logo.svg";
import profileIcon from "@/assets/header/header-profile-icon.svg";
import chevron from "@/assets/header/header-chevron.svg";
import divider from "@/assets/header/header-divider.png";
import ProfileDropdown from "./ProfileDropdown";

/** Desktop nav geometry, compact scale with subtle top padding above navlinks. */
const NAV_ITEM_WIDTH = 180;
const NAV_ITEM_HEIGHT = 22;
const NAV_ITEM_Y = 118;
const NAV_ITEM_START_X = 90;
/** Selection pill — larger than the link's own box, centred on it. */
const PILL_WIDTH = 156;
const PILL_HEIGHT = 38;

/**
 * Site header with smooth desktop sliding nav selection pill & mobile collapsible drawer.
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
    if (itemHash) {
      return pathname === (itemPath || "/") && hash === `#${itemHash}`;
    }
    if (href === "/law-practice") {
      return (pathname === "/law-practice" || pathname === "/our-services") && !hash;
    }
    return pathname === href && !hash;
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
      <div className="flex h-[64px] items-center justify-between px-4 sm:px-6">
        <button
          type="button"
          onClick={onToggleMenu}
          aria-label="Menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          className="grid h-10 w-10 place-items-center rounded-lg text-carbon-black hover:bg-carbon-black/5 transition-colors cursor-pointer"
        >
          <MenuIcon isOpen={isMenuOpen} />
        </button>

        <div className="flex items-center gap-2">
          <img src={logo} alt="" className="h-6 w-auto" />
          <span className="font-display text-base font-medium tracking-[0.1em] text-carbon-black sm:text-lg">
            RIZAL LAW OFFICE
          </span>
        </div>

        <div className="relative">
          <button
            type="button"
            aria-label="Account"
            aria-expanded={isProfileOpen}
            onClick={onToggleProfile}
            className="grid h-10 w-10 place-items-center rounded-full hover:bg-carbon-black/5 active:bg-carbon-black/10 transition-colors focus:outline-none cursor-pointer"
          >
            <img src={profileIcon} alt="" className="h-8 w-8" />
          </button>
          <ProfileDropdown
            isOpen={isProfileOpen}
            onClose={onCloseProfile}
            onOpenLogin={onOpenLogin}
            className="absolute right-0 top-full mt-2 z-50"
          />
        </div>
      </div>

      {/* Smooth Collapsible Mobile Nav Drawer */}
      <MobileNav isOpen={isMenuOpen} onClose={() => onToggleMenu(false)} />
    </div>
  );
}

function MenuIcon({ isOpen }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 transition-transform duration-200"
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

function MobileNav({ isOpen, onClose }) {
  const isActive = useActiveMatcher();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleHashClick = (e, href) => {
    const [itemPath, itemHash] = href.split("#");
    
    // Smooth scroll to top when clicking the active link of the current page
    if (!itemHash && pathname === href) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (hash) {
        navigate(href);
      }
      if (onClose) onClose();
      return;
    }

    if (itemHash && pathname === (itemPath || "/")) {
      e.preventDefault();
      const element = document.getElementById(itemHash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        navigate(href);
        if (onClose) onClose();
      }
    } else if (onClose) {
      onClose();
    }
  };

  return (
    <div
      id="mobile-nav"
      className={cn(
        "grid transition-all duration-200 ease-out border-t border-palm-leaf/30 overflow-hidden",
        isOpen ? "grid-rows-[1fr] opacity-100 py-3" : "grid-rows-[0fr] opacity-0 py-0 border-t-0"
      )}
    >
      <div className="overflow-hidden px-4 sm:px-6">
        <ul className="flex flex-col gap-1">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);
            return (
              <li key={item.label}>
                <NavLink
                  to={item.href}
                  onClick={(e) => handleHashClick(e, item.href)}
                  className={cn(
                    "block rounded-full px-5 py-2.5 font-sans text-[15px] font-medium transition-all duration-200",
                    active
                      ? "bg-olive-leaf text-parchment shadow-md font-semibold"
                      : "text-carbon-black hover:bg-linen-olive/60"
                  )}
                >
                  {item.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

/* --------------------------------------------------------------- desktop -- */
/** Desktop Header with compact h-[160px] height & snappy sliding green selection pill. */
function DesktopHeader({
  isProfileOpen,
  onToggleProfile,
  onCloseProfile,
  onOpenLogin,
}) {
  return (
    <div className="hidden h-[160px] xl:block">
      <div className="relative mx-auto h-full w-[1440px]">
        <img
          src={logo}
          alt=""
          className="absolute left-1/2 top-[14px] h-7 w-auto -translate-x-1/2"
        />
        <span className="absolute left-1/2 top-[48px] -translate-x-1/2 whitespace-nowrap font-display text-[26px] font-medium tracking-[0.1em] text-carbon-black">
          RIZAL LAW OFFICE
        </span>

        {/* Profile Button + Dropdown Container */}
        <div className="absolute right-[90px] top-[18px] z-50 flex flex-col items-end">
          <button
            type="button"
            aria-label="Account"
            aria-expanded={isProfileOpen}
            onClick={onToggleProfile}
            className="flex h-[44px] items-center gap-2.5 cursor-pointer group focus:outline-none"
          >
            <img src={profileIcon} alt="" className="h-[38px] w-[38px]" />
            <img
              src={chevron}
              alt=""
              className={cn(
                "h-[18px] w-[14px] transition-transform duration-200",
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
          className="absolute left-[90px] top-[96px] h-[2px] w-[1260px]"
        />

        <DesktopNav />
      </div>
    </div>
  );
}

function DesktopNav() {
  const isActive = useActiveMatcher();
  const activeIndex = NAV_ITEMS.findIndex((item) => isActive(item.href));
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  const handleHashClick = (e, href) => {
    const [itemPath, itemHash] = href.split("#");
    
    // Smooth scroll to top when clicking the active link of the current page
    if (!itemHash && pathname === href) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (hash) {
        navigate(href);
      }
      return;
    }

    if (itemHash && pathname === (itemPath || "/")) {
      e.preventDefault();
      const element = document.getElementById(itemHash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        navigate(href);
      }
    }
  };

  return (
    <nav className="relative z-10">
      {/* Lightweight Snappy Sliding Green Selection Pill */}
      {activeIndex >= 0 && (
        <span
          aria-hidden={true}
          className="absolute rounded-full bg-olive-leaf shadow-pill transition-all duration-200 ease-out pointer-events-none z-0"
          style={{
            left: NAV_ITEM_START_X + activeIndex * NAV_ITEM_WIDTH + (NAV_ITEM_WIDTH - PILL_WIDTH) / 2,
            top: NAV_ITEM_Y + (NAV_ITEM_HEIGHT - PILL_HEIGHT) / 2,
            width: PILL_WIDTH,
            height: PILL_HEIGHT,
          }}
        />
      )}

      {/* Nav Link Items */}
      {NAV_ITEMS.map((item, i) => {
        const active = isActive(item.href);
        return (
          <NavLink
            key={item.label}
            to={item.href}
            onClick={(e) => handleHashClick(e, item.href)}
            className="absolute flex items-center justify-center z-10"
            style={{
              left: NAV_ITEM_START_X + i * NAV_ITEM_WIDTH,
              top: NAV_ITEM_Y,
              width: NAV_ITEM_WIDTH,
              height: NAV_ITEM_HEIGHT,
            }}
          >
            <span
              className={cn(
                "relative font-sans text-[15px] font-medium transition-colors duration-200",
                active ? "text-parchment font-semibold" : "text-carbon-black hover:text-olive-leaf"
              )}
            >
              {item.label}
            </span>
          </NavLink>
        );
      })}
    </nav>
  );
}