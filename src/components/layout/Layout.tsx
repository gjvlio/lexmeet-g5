import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

/**
 * Shared page shell. Every route renders inside this via App.tsx's nested
 * route — pages never import Header/Footer themselves, so the active-nav
 * pill (driven by the current route in Header) stays correct everywhere.
 */
export default function Layout() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
