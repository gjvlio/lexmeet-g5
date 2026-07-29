import { NavLink, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '@/utils/content';
import logo from '@/assets/header/header-logo.svg';
import profileIcon from '@/assets/header/header-profile-icon.svg';
import chevron from '@/assets/header/header-chevron.svg';
import divider from '@/assets/header/header-divider.png';

/** Distance between adjacent nav links' left edge — links tile edge to edge. */
const NAV_ITEM_WIDTH = 180;
const NAV_ITEM_HEIGHT = 23;
const NAV_ITEM_Y = 166;
const NAV_ITEM_START_X = 90;

/** Selection pill — larger than the link's own box, centered on it. */
const PILL_WIDTH = 160;
const PILL_HEIGHT = 43;

/**
 * Top navigation. Pixel positions below match the Figma spec exactly
 * (1440px-wide frame, 220px tall) rather than being flex-derived, so the
 * header only renders correctly at that width — a responsive pass is
 * tracked separately in docs/PROGRESS.md.
 */
export default function Header() {
  return (
    <header className="relative z-30 h-[220px] w-full bg-parchment">
      <div className="relative mx-auto h-full w-[1440px]">
        <Logo />
        <AccountButton />
        <img
          src={divider}
          alt=""
          className="absolute left-[90px] top-[144px] h-[3px] w-[1260px]"
        />
        <NavRow />
      </div>
    </header>
  );
}

function Logo() {
  return (
    <>
      <img
        src={logo}
        alt=""
        className="absolute left-1/2 top-[20px] h-9 w-auto -translate-x-1/2"
      />
      <span className="absolute left-1/2 top-[77px] -translate-x-1/2 whitespace-nowrap font-display text-[36px] font-medium tracking-[0.1em] text-carbon-black">
        RIZAL LAW OFFICE
      </span>
    </>
  );
}

function AccountButton() {
  return (
    <button
      type="button"
      aria-label="Account"
      className="absolute left-[1252px] top-[28px] flex h-[60px] items-center gap-3"
    >
      <img src={profileIcon} alt="" className="h-[50px] w-[50px]" />
      <img src={chevron} alt="" className="h-[22px] w-[16px]" />
    </button>
  );
}

/** Primary navigation links, positioned per-item at HEADER's exact X spec. */
function NavRow() {
  const { pathname, hash } = useLocation();

  return (
    <nav>
      {NAV_ITEMS.map((item, i) => {
        const x = NAV_ITEM_START_X + i * NAV_ITEM_WIDTH;
        const [itemPath, itemHash] = item.href.split('#');
        const isActive = itemHash
          ? pathname === (itemPath || '/') && hash === `#${itemHash}`
          : pathname === item.href;

        return (
          <NavLink
            key={item.label}
            to={item.href}
            className="absolute flex items-center justify-center"
            style={{
              left: x,
              top: NAV_ITEM_Y,
              width: NAV_ITEM_WIDTH,
              height: NAV_ITEM_HEIGHT,
            }}
          >
            <span
              aria-hidden
              className={
                'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full' +
                (isActive ? ' bg-olive-leaf' : '')
              }
              style={{ width: PILL_WIDTH, height: PILL_HEIGHT }}
            />
            <span
              className={
                'relative font-sans text-[15px] font-medium' +
                (isActive ? ' text-parchment' : ' text-carbon-black')
              }
            >
              {item.label}
            </span>
          </NavLink>
        );
      })}
    </nav>
  );
}
