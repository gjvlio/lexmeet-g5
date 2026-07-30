import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
/**
 * Shared page shell. Every route renders inside this via App.tsx's nested
 * route — pages never import Header/Footer themselves, so the active-nav
 * pill (driven by the current route in Header) stays correct everywhere.
 */
export default function Layout() {
  // `overflow-x-clip` stops stray wide elements from scrolling the page sideways
  // without creating a scroll container.
  return _jsxs("div", {
    className: "min-h-screen overflow-x-clip bg-cream",
    children: [
      _jsx(Header, {}),
      _jsx("main", { children: _jsx(Outlet, {}) }),
      _jsx(Footer, {}),
    ],
  });
}
