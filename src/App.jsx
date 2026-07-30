import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import LawyerProfile from "./pages/LawyerProfile";
import LawPractice from "./pages/LawPractice";
import LawOffice from "./pages/LawOffice";
import EverydayLaw from "./pages/EverydayLaw";
import OurServices from "./pages/OurServices";
import ContactUs from "./pages/ContactUs";
export default function App() {
  return _jsx(Routes, {
    children: _jsxs(Route, {
      element: _jsx(Layout, {}),
      children: [
        _jsx(Route, { path: "/", element: _jsx(Home, {}) }),
        _jsx(Route, {
          path: "/lawyer-profile",
          element: _jsx(LawyerProfile, {}),
        }),
        _jsx(Route, { path: "/law-practice", element: _jsx(LawPractice, {}) }),
        _jsx(Route, { path: "/law-office", element: _jsx(LawOffice, {}) }),
        _jsx(Route, { path: "/everyday-law", element: _jsx(EverydayLaw, {}) }),
        _jsx(Route, { path: "/our-services", element: _jsx(OurServices, {}) }),
        _jsx(Route, { path: "/contact-us", element: _jsx(ContactUs, {}) }),
      ],
    }),
  });
}
