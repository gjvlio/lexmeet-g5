import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/** Simple scales-of-justice mark used in the header/footer logo lockup. */
export default function ScalesIcon({ className = "h-8 w-8" }) {
  return _jsx("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    className: className,
    "aria-hidden": true,
    children: _jsxs("g", {
      stroke: "currentColor",
      strokeWidth: "1.6",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        _jsx("path", { d: "M24 8v30" }),
        _jsx("path", { d: "M14 14h20" }),
        _jsx("circle", {
          cx: "24",
          cy: "10",
          r: "2.4",
          fill: "currentColor",
          stroke: "none",
        }),
        _jsx("path", { d: "M14 14 8 26h12L14 14Z" }),
        _jsx("path", { d: "M34 14 28 26h12L34 14Z" }),
        _jsx("path", { d: "M8 26a6 4 0 0 0 12 0" }),
        _jsx("path", { d: "M28 26a6 4 0 0 0 12 0" }),
        _jsx("path", { d: "M17 40h14" }),
      ],
    }),
  });
}
