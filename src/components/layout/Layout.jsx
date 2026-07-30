import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

/**
 * Shared page shell. Every route renders inside this via App.tsx's nested
 * route — pages never import Header/Footer themselves, so the active-nav
 * pill (driven by the current route in Header) stays correct everywhere.
 */
export default function Layout() {
  // activeModal: 'none' | 'login' | 'create-account'
  const [activeModal, setActiveModal] = useState("none");

  // Lock body scroll when Create Account modal is active
  useEffect(() => {
    if (activeModal === "create-account") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeModal]);

  return (
    <div className="min-h-screen overflow-x-clip bg-cream relative">
      <Header onOpenLogin={() => setActiveModal("login")} />

      <main className="relative z-10">
        <Outlet context={{ activeModal, setActiveModal }} />
      </main>

      <Footer />
    </div>
  );
}
