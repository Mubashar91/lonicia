import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LazyImage from '../components/LazyImage';

const Services = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [nextToLoad, setNextToLoad] = useState(0);

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

  useEffect(() => {
    const apply = () => setIsMobile(window.innerWidth < 768);
    apply();
    window.addEventListener('resize', apply);
    return () => window.removeEventListener('resize', apply);
  }, []);
  return (
    <div className="min-h-screen bg-black">
      <section className="bg-black text-white pt-0 pb-20 md:pb-28">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Section Label */}
          <p data-reveal data-delay="0s" className="text-left md:text-center text-primary-gold font-poppins text-[16px] uppercase tracking-wide mb-6">
            Services
          </p>
          
          {/* Main Heading */}
          <h2 data-reveal data-delay=".06s"
            className="font-poppins font-medium text-[20px] sm:text-[28px] md:text-[48px] lg:text-[59px] leading-tight text-left md:text-center text-primary-gold mb-16 uppercase max-w-[1200px] mx-0 md:mx-auto"
            style={{ letterSpacing: '0%' }}
          >
            FROM NAILS TO SKINCARE, WE MAKE YOU GLOW INSIDE AND OUT.
          </h2>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto justify-items-center">
            {[
              {
                title: 'LASER HAIR REMOVAL',
                tag: 'Women/Mens',
                url: '/laser-hair-removel111.jpeg',
              },
              {
                title: 'MANICURE',
                tag: 'Women/Mens',
                url: '/manicure.jpeg',
              },
              {
                title: 'PEDICURE',
                tag: 'Women/Mens',
                url: '/pedicure.jpeg',
              },
              {
                title: 'BROWS/LASHES',
                tag: 'Women/Mens',
                url: '/bowsone.jpeg',
              },
              {
                title: 'PERMANENT MAKEUP',
                tag: 'Women',
                url: '/permanent-makeup/WhatsApp Image 2025-11-11 at 1.29.38 AM.jpeg',
              },
              {
                title: 'LASH EXTENSIONS',
                tag: 'Women',
                url: 'hdhd.jpg',
              },
              {
                title: 'BODY SLIM TREATMENT',
                tag: 'Women/Mens',
                url: '/boday slim=-treatment.jpg',
              },
              {
                title: 'FACIALS',
                tag: 'Women/Mens',
                url: '/hair-dressing.jpg',
              },
              {
                title: 'HAIR DRESSING',
                tag: 'Women/Mens',
                url: '/facials.jpg',
              },
              {
                title: 'MAKEUP',
                tag: 'Women',
                url: '/makeup.jpg',
              },
              {
                title: 'AESTHETICS',
                tag: 'Women/Mens',
                url: '/asthetic.jpeg',
              },
            ].map((card, idx) => {
              const title = card.title.trim().toUpperCase();
              const href = title === 'MANICURE'
                ? '/services/manicure'
                : title === 'LASH EXTENSIONS'
                ? '/services/lash-extensions'
                : title === 'PEDICURE'
                ? '/services/pedicure'
                : title.includes('LASER')
                ? '/services/laser-hair-removal'
                : title.includes('BROWS') || title.includes('LASHES')
                ? '/services/brows-lashes'
                : title === 'PERMANENT MAKEUP'
                ? '/services/permanent-makeup'
                : title === 'MAKEUP'
                ? '/services/makeup'
                : title === 'BODY SLIM TREATMENT'
                ? '/services/body-slim-treatment'
                : title === 'HAIR DRESSING'
                ? '/services/hair-dressing'
                : title === 'FACIALS'
                ? '/services/facials'
                : title === 'AESTHETICS'
                ? '/services/aesthetics'
                : '/404';
              return (
              <div 
                key={idx}
                data-reveal
                data-delay={`${(((idx % 3) * 0.08) + (Math.floor(idx / 3) * 0.18)).toFixed(2)}s`}
                className="group rounded-[20px] overflow-hidden flex flex-col w-full max-w-[380px] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(0,0,0,0.35)]"
                style={{
                  gap: '16px',
                  background: 'transparent'
                }}
              >
                {/* Service Image */}
                <Link to={href} className="w-full h-[450px] sm:h-[420px] md:h-[420px] overflow-hidden rounded-[20px] block">
                  <LazyImage
                    src={encodeURI(card.url)}
                    alt={card.title}
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    width={800}
                    height={600}
                    referrerPolicy="no-referrer"
                    shouldLoad={!isMobile || idx <= nextToLoad}
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.src = '/placeholder.jpg';
                    }}
                    onLoad={() => {
                      if (isMobile) {
                        setNextToLoad((n) => (idx === n ? n + 1 : n));
                      }
                    }}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>
                
                {/* Service Info */}
                <div className="flex flex-col gap-2 px-2">
                  <h3 className="font-poppins text-[20px] font-semibold text-white uppercase tracking-wide">
                    {card.title}
                  </h3>
                  <p className="text-[14px] text-gray-400 font-poppins mb-2">{card.tag}</p>
                  <Link to={href} className="bg-primary-gold text-black text-[14px] font-bold px-6 py-3 rounded-lg hover:bg-opacity-90 transition uppercase tracking-wide w-full text-center transform duration-200 hover:scale-[1.02]">
                    LEARN MORE
                  </Link>
                </div>
              </div>
            );})}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

