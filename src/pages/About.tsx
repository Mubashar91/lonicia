// About.jsx
import { useEffect } from "react";

import Reviews from "../components/Reviews";

const About = () => {
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
    <div className="min-h-screen bg-black">
      {/* ── Hero ── */}
      <section className="py-3">
        <div className="container mx-auto px-3 lg:px-12 text-center">
          <h1 data-reveal data-delay="0s" className="text-white font-poppins text-5xl md:text-6xl font-bold mb-6 uppercase">
            ABOUT US
          </h1>
          <p data-reveal data-delay=".08s" className="hidden md:block text-white font-poppins text-lg md:text-xl  mx-auto">
            Experience the beauty you deserve — crafted with care, passion, and perfection.
          </p>
        </div>
      </section>

      {/* ── Founder ── */}
      <section className="py-3 ">
        <div className="container mx-auto px-3 lg:px-12 max-w-7xl">
          <div className="mb-12">
            <h2 data-reveal data-delay=".12s" className="text-[#D4AF37] font-poppins text-2xl font-semibold mb-4">Meet</h2>
            <h3 data-reveal data-delay=".18s" className="text-[#D4AF37] font-poppins  md:text-4xl font-bold mb-8">
              Maria Khudobliak  FOUNDER OF MK NAILS & BEAUTY
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* ── Image + Badge ── */}
            <div className="relative" data-reveal data-delay=".2s">
              <img
                src="/about.jpg"
                alt="Mariia Khudobliak"
                className="w-full rounded-lg shadow-xl object-cover"
              />

              <img
                src="/Button Add to cart.png"
                alt="Add to cart"
                className="absolute bottom-4 left-4 w-12 h-12 md:w-16 md:h-16"
              />

              <div
                className="absolute bottom-0 right-0 w-[120px] h-[70px] md:w-[180px] md:h-[100px] bg-[#D4AF37] 
                           rounded-tl-[50px] rounded-br-[50px] 
                           flex flex-col items-center justify-center 
                           text-white font-poppins leading-none
                           shadow-[0_8px_20px_rgba(0,0,0,0.3)]"
              >
                <span className="text-[30px] md:text-[44px] font-bold tracking-tighter">16+</span>
                <span className="text-[8px] md:text-[11px] uppercase tracking-[0.15em] mt-[-4px]">
                  Years Of Experience
                </span>
              </div>
            </div>

            {/* ── Text with Quotes ── */}
            <div className="relative">
              {/* Opening Quote */}
              <span
                className="hidden md:block text-[#D4AF37] text-[80px] leading-none font-serif absolute -top-6 -left-4 select-none"
                style={{ fontFamily: "Georgia, serif" }}
              >
                “
              </span>
              <span
                className="md:hidden text-[#D4AF37] text-[60px] leading-none font-serif absolute -top-4 -left-2 select-none"
                style={{ fontFamily: "Georgia, serif" }}
              >
                “
              </span>

              <div className="pl-0 pr-4 space-y-0">
                <p className="font-poppins font-normal text-[16px] md:text-[18px] leading-[32px] md:leading-[35px] text-white">
                  Hello, beautiful people! I'm Maria, the founder and creative director of MK Nails & Beauty - a glamorous beauty salon in the heart of Larnaca and Nicosia Cyprus.
                </p>

                <p className="font-poppins font-normal text-[16px] md:text-[18px] leading-[32px] md:leading-[35px] text-white">
                  Originally from Ukraine, I spent the last 16 years in the beauty industry while also completing my Master's Degree in MPharm. For the past 10 years, I provided NHS services and beauty treatments in London before moving to Cyprus with my wonderful family in July 2024.
                </p>

                <p className="font-poppins font-normal text-[16px] md:text-[18px] leading-[32px] md:leading-[35px] text-white">
                  At MK Nails & Beauty, we bring you the newest technologies of 2025, using only high-quality, tested products. I've created a space where you'll feel comfortable, confident, and excited to return!
                </p>
              </div>

              {/* Services List — Updated */}
              <div className="" data-reveal data-delay=".34s">
                <h4 className="text-white font-poppins text-lg md:text-xl font-bold mb-1 md:mb-2">
                  Our top services include
                </h4>
                <div className="grid grid-cols-1 gap-y-1">
                  <ul className="space-y-1 text-[#fffdf8] font-poppins text-[16px] md:text-[18px] leading-[28px] md:leading-[30px] list-none">
                    {[
                      'Laser Hair Removal with Ai technology - using triple laser technology (Alexandrite, Diode & Nd-Yag) for pain-free and permanent results on all skin & hair types.',
                      'CellGlide Spheresculpt - the latest body & face sculpting technology in Cyprus! Slim, lift & tone your body and smooth, firm, and rejuvenate your skin',
                      'Nails & Beauty Treatments - Manicures, Pedicures, Permanent Makeup, Lash Extensions, Brow Lamination, Hairdressing & more!'
                    ].map((t, i) => (
                      <li key={i} data-reveal data-delay={`${(0.06 + i * 0.06).toFixed(2)}s`} className="pl-0">{t}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <p data-reveal data-delay=".38s" className="font-poppins font-normal text-[16px] md:text-[18px] leading-[32px] md:leading-[35px] text-white mt-4 md:mt-5">
                Your beauty, confidence & comfort are my priority. I can't wait to welcome you to MK Nails & Beauty and share the best in beauty with you!
              </p>

              <p data-reveal data-delay=".44s" className="text-white font-poppins text-[16px] md:text-[18px] leading-[32px] md:leading-[35px] font-semibold mt-3 md:mt-4 flex items-center gap-2">
                Visit us in Larnaca and Nicosia! 
                <span className="text-[#D4AF37] text-[28px] md:text-[36px] leading-none ml-2">”</span>
              </p>
            </div>
          </div>
        </div>
      </section>

  
      <div data-reveal data-delay=".5s">
        <Reviews />
      </div>
    </div>
  );
};

export default About;