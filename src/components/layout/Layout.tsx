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
    /* `overflow-x-clip` rather than `hidden`: it stops a stray wide element
       from scrolling the page sideways without creating a scroll container,
       so `position: sticky` still works inside. */
    <div className="min-h-screen overflow-x-clip bg-cream">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
