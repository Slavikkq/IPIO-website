import { useEffect } from 'react';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import ProjectGrid from '@/components/sections/ProjectGrid';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import VisualBreak from '@/components/sections/VisualBreak';
import Contact from '@/components/sections/Contact';

export default function Home() {
  useEffect(() => {
    if (window.location.hash) {
      const el = document.getElementById(window.location.hash.substring(1));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, []);

  return (
    <>
      <Hero />
      <About />
      <ProjectGrid />
      <Services />
      <Process />
      <VisualBreak />
      <Contact />
    </>
  );
}
