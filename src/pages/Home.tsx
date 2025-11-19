import { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AcademyBanner from '../components/AcademyBanner';
import Trust from '../components/Trust';
import Reviews from '../components/Reviews';
import SEO from '../components/SEO';

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
    <>
      <SEO
        title="MK Nails & Beauty | Nails, Laser Hair Removal & Beauty Salon in Larnaca & Nicosia"
        description="MK Nails & Beauty salon in Larnaca and Nicosia, Cyprus offering manicure, pedicure, laser hair removal, facials, brows, lashes, permanent makeup and body slim treatments."
        canonicalUrl="https://mknailsandbeauty.com/"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'BeautySalon',
          name: 'MK Nails & Beauty',
          url: 'https://mknailsandbeauty.com/',
          image: 'https://mknailsandbeauty.com/logo.jpeg',
          telephone: '+35799958821',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '1 Ioannou Gladstonos, Shop 4, Panayioton Tower',
            addressLocality: 'Larnaca',
            addressCountry: 'CY',
            postalCode: '6023',
          },
          sameAs: [
            'https://www.facebook.com/share/1A3gbmnupo/?mibextid=wwXIfr',
            'https://www.instagram.com/mknails.and.beauty?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
          ],
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday'
              ],
              opens: '10:00',
              closes: '19:00'
            }
          ]
        }}
      />
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
        <Trust />
      </div>
      <div data-reveal data-delay=".35s">
        <Reviews />
      </div>
    </div>
    </>
  );
};

export default Home;
