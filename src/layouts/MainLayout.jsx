import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

let activeScrollAnimation = null;

function smoothScrollTo(targetY) {
  if (activeScrollAnimation) cancelAnimationFrame(activeScrollAnimation);

  const startY = window.scrollY;
  const distance = targetY - startY;
  const duration = Math.min(450, Math.max(200, Math.abs(distance) * 0.3));
  const startTime = performance.now();

  const step = (now) => {
    const progress = Math.min((now - startTime) / duration, 1);
    window.scrollTo(0, startY + distance * easeOutCubic(progress));

    if (progress < 1) {
      activeScrollAnimation = requestAnimationFrame(step);
    } else {
      activeScrollAnimation = null;
    }
  };

  activeScrollAnimation = requestAnimationFrame(step);
}

export default function MainLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleAnchorClick = (event) => {
      const anchor = event.target.closest?.('a[href^="#"]');
      if (!anchor) return;

      const hash = anchor.getAttribute('href');
      if (!hash || hash === '#') return;

      const target = document.querySelector(hash);
      if (!target) return;

      event.preventDefault();

      const header = document.querySelector('header');
      const headerHeight = header?.getBoundingClientRect().height ?? 0;
      const targetY = target.getBoundingClientRect().top + window.scrollY - headerHeight;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (prefersReducedMotion) {
        if (activeScrollAnimation) cancelAnimationFrame(activeScrollAnimation);
        window.scrollTo(0, targetY);
      } else {
        smoothScrollTo(targetY);
      }

      history.pushState(null, '', hash);
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-brand-dark text-brand-cream selection:bg-brand-gold selection:text-brand-dark">
      <Header onToggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </main>

      <Footer />
    </div>
  );
}