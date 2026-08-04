import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import LawyerProfile from "./pages/LawyerProfile";
import LawPractice from "./pages/LawPractice";
import LawOffice from "./pages/LawOffice";
import EverydayLaw from "./pages/EverydayLaw";
import OurServices from "./pages/OurServices";
import ContactUs from "./pages/ContactUs";

// Dynamic photo frames & featured JPGs
import elJpg from "@/assets/homeAssets/EL.jpg";
import luJpg from "@/assets/homeAssets/LU.jpg";
import casesJpg from "@/assets/LPassets/cases-handled.jpg";

// Roster lawyers photos (from LawyersProfile)
import attyAnna from '@/assets/LawyersProfile/Atty. Anna Photo.png';
import attyAnthony from '@/assets/LawyersProfile/Atty. Anthony Photo.png';
import attyAntonette from '@/assets/LawyersProfile/Atty. Antonette Photo.png';
import attyEdward from '@/assets/LawyersProfile/Atty. Edward Photo.png';
import attyJoseph from '@/assets/LawyersProfile/Atty. Joseph Photo.png';
import attyJean from '@/assets/LawyersProfile/Atty. Jean Photo.png';
import attySilvers from '@/assets/LawyersProfile/Atty. Silvers Photo.png';
import attyKalix from '@/assets/LawyersProfile/Atty. Kalix Photo.png';

const ASSETS_TO_PRELOAD = [
  elJpg,
  luJpg,
  casesJpg,
  attyAnna,
  attyAnthony,
  attyAntonette,
  attyEdward,
  attyJoseph,
  attyJean,
  attySilvers,
  attyKalix
];

export default function App() {
  // Preload critical graphical assets on initial app mounting for lag-free loads
  useEffect(() => {
    ASSETS_TO_PRELOAD.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);
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
        _jsx(Route, { path: "/everyday-law/*", element: _jsx(EverydayLaw, {}) }),
        _jsx(Route, { path: "/our-services", element: _jsx(OurServices, {}) }),
        _jsx(Route, { path: "/contact-us", element: _jsx(ContactUs, {}) }),
      ],
    }),
  });
}
