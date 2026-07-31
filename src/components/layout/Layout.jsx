import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import LoginModal from "@/components/modals/LoginModal";
import CreateAccountModal from "@/components/modals/CreateAccountModal";

/**
 * Shared page shell. Every route renders inside this via App.tsx's nested
 * route — pages never import Header/Footer themselves, so the active-nav
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

  return (
    <div className="min-h-screen overflow-x-clip bg-cream relative">
      <Header onOpenLogin={() => setActiveModal("login")} />

      <main className="relative z-10">
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
