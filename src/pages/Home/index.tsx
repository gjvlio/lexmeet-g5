import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Practice from './sections/Practice';
import LawUpdates from './sections/LawUpdates';
import EverydayLaw from './sections/EverydayLaw';

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main>
        <Hero />
        <Services />
        <Practice />
        <LawUpdates />
        <EverydayLaw />
      </main>
      <Footer />
    </div>
  );
}
