import { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AcademyBanner from '../components/AcademyBanner';
import Reviews from '../components/Reviews';

const Home = () => {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (els.length === 0) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.delay || '0s';
            el.style.transitionDelay = delay;
            el.classList.add('is-visible');
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <div data-reveal data-delay="0s">
        <HeroSection />
      </div>
      <div>
        <ServicesSection noTopPadding padXClass="px-6 md:px-10 lg:px-[90px]" />
      </div>
      <div data-reveal data-delay=".12s">
        <AcademyBanner />
      </div>
      <div data-reveal data-delay=".25s">
        <Reviews />
      </div>
    </div>
  );
};

export default Home;
