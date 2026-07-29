import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import LawyerProfile from './pages/LawyerProfile';
import LawPractice from './pages/LawPractice';
import LawOffice from './pages/LawOffice';
import EverydayLaw from './pages/EverydayLaw';
import OurServices from './pages/OurServices';
import ContactUs from './pages/ContactUs';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/lawyer-profile" element={<LawyerProfile />} />
        <Route path="/law-practice" element={<LawPractice />} />
        <Route path="/law-office" element={<LawOffice />} />
        <Route path="/everyday-law" element={<EverydayLaw />} />
        <Route path="/our-services" element={<OurServices />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Route>
    </Routes>
  );
}
