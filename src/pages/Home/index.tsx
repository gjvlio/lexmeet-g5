import Hero from './sections/Hero';
import Services from './sections/Services';
import Practice from './sections/Practice';
import LawUpdates from './sections/LawUpdates';
import EverydayLaw from './sections/EverydayLaw';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Practice />
      <LawUpdates />
      <EverydayLaw />
    </>
  );
}
