import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Future pages:
      <Route path="/login" element={<Login />} />
      <Route path="/lawyers" element={<LawyerProfile />} />
      <Route path="/blogs" element={<LawBlogs />} />
      <Route path="/updates" element={<LawUpdates />} />
      */}
    </Routes>
  );
}
