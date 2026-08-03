import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import LoginModal from "@/components/modals/LoginModal";
import CreateAccountModal from "@/components/modals/CreateAccountModal";

/**
 * Shared page shell. Every route renders inside this via App.tsx's nested
 * route - pages never import Header/Footer themselves, so the active-nav
 * pill (driven by the current route in Header) stays correct everywhere.
 */
export default function Layout() {
  // activeModal: 'none' | 'login' | 'create-account'
  const [activeModal, setActiveModal] = useState("none");
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  // Reset activeModal synchronously during render if location changed to prevent 1-frame portal flash
  const [prevLocationKey, setPrevLocationKey] = useState(location.key);
  if (prevLocationKey !== location.key) {
    setPrevLocationKey(location.key);
    setActiveModal("none");
  }

  // Lock body scroll when any modal portal is active on non-home pages
  useEffect(() => {
    if (!isHomePage && activeModal !== "none") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeModal, isHomePage]);

  // Handle global cross-page hash scrolling
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      let attempts = 0;
      const interval = setInterval(() => {
        const element = document.getElementById(id);
        if (element) {
          clearInterval(interval);
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 30);
        }
        attempts++;
        if (attempts > 30) { // Up to 1.5 seconds
          clearInterval(interval);
        }
      }, 50);
      return () => clearInterval(interval);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen overflow-x-clip bg-cream relative">
      <Header onOpenLogin={() => setActiveModal("login")} />

      {/* Main page view with smooth global route transition animation */}
      <main className="relative z-10 animate-page-fade-in" key={location.pathname}>
        <Outlet context={{ activeModal, setActiveModal }} />
      </main>

      {/* Render full-screen modal portal ONLY on non-home pages (Home page uses inline Hero section animation) */}
      {!isHomePage && (
        <>
          <LoginModal
            isOpen={activeModal === "login"}
            usePortal={true}
            onClose={() => setActiveModal("none")}
            onOpenCreateAccount={() => setActiveModal("create-account")}
          />
          <CreateAccountModal
            isOpen={activeModal === "create-account"}
            usePortal={true}
            onClose={() => setActiveModal("none")}
            onOpenLogin={() => setActiveModal("login")}
          />
        </>
      )}

      <Footer />
    </div>
  );
}