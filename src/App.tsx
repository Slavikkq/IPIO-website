import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Home from '@/pages/Home';
import ProjectDetail from '@/pages/ProjectDetail';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-graphite-950">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/proekt/:slug" element={<ProjectDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
