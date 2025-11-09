// src/components/HeroSection.tsx
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-black text-white">
        <div className="container h-auto lg:h-[115vh] mx-auto pl-0 pr-6 md:px-10 lg:px-[90px] pt-0 md:pt-6 pb-2 md:pb-16 lg:pt-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start lg:items-center h-full">

            {/* LEFT: TEXT & BUTTONS */}
            <div className="z-10 flex flex-col justify-start md:justify-center h-auto lg:h-auto pl-4 lg:pl-[70px]">
              <h1 className="mt-0 md:mt-[60px] lg:mt-[120px] mb-6 md:mb-10 text-center lg:text-left">
                <div
                  className="text-5xl md:text-7xl lg:text-8xl mb-3 text-white"
                  style={{ fontFamily: "'Dancing Script', cursive" }}
                >
                  Perfect <span className="italic text-yellow-500">nails</span>
                </div>
                <div
                  className="text-5xl md:text-7xl lg:text-8xl"
                  style={{ fontFamily: "'Dancing Script', cursive" }}
                >
                  <span className="italic text-yellow-500">Timeless </span>
                  <span className="italic text-white">beauty</span>
                </div>
              </h1>

              <p
                className="hidden mb-8 md:mb-12 max-w-xl text-lg leading-relaxed text-white lg:text-xl"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Expert nail and beauty services to make you feel confident, elegant, and beautiful.
              </p>

              <p
                className="mb-6 md:mb-12 max-w-xl text-sm sm:text-base md:text-lg lg:text-xl leading-snug md:leading-relaxed text-white block"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Indulge in the art of self-care with our expert nail and beauty services — where every
                detail is perfected to make you feel confident, elegant, and effortlessly beautiful.
              </p>

              <div className="flex flex-row flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
                {['LARNACA', 'NICOSIA'].map((city) => (
                  <Link
                    key={city}
                    to="/contact"
                    className={`rounded-md border border-black/20 bg-gradient-to-b from-yellow-400 to-amber-500 px-4 py-3 text-sm tracking-normal font-bold uppercase text-black shadow-sm transition duration-300 whitespace-nowrap sm:px-8 sm:py-4 sm:text-base sm:tracking-wide transform hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98] hover:shadow-md hover:from-amber-400 hover:to-yellow-500 hover:saturate-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black`}
                  >
                    BOOK NOW {city}
                  </Link>
                ))}
              </div>
            </div>

            {/* RIGHT: GIRL + YOUR IMAGES ONLY */}
            <div className="hidden lg:block relative h-[600px] md:h-[720px] lg:h-full min-h-[600px] overflow-hidden">

              {/* GIRL – FULL BLEED */}
              <img
                src="/hero/girl.png"
                alt="Beauty model"
                className="absolute inset-0 w-full h-full object-cover object-top"
                style={{ zIndex: 2 }}
                loading="eager"
              />

              {/* CREAM ARCH (top) – your cremic.png */}
              <img
                src="/hero/cremic.png"
                alt="Cream arch"
                className="absolute object-contain animate-float-slow"
                style={{
                  width: '244px',
                  height: '504px',
                  top: '-80px',
                  left: '164px',
                  zIndex: 1,
                }}
                loading="lazy"
                decoding="async"
              />

              {/* YELLOW ARCH (bottom) – your yelow.png */}
              <img
                src="/hero/yelow.png"
                alt="Yellow arch"
                className="absolute object-contain animate-float-slower delay-1500"
                style={{
                  width: '288px',
                  height: '370px',
                  bottom: '0',
                  right: '24px',
                  zIndex: 1,
                  top: '290px',
                  left: '360px'
                }}
                loading="lazy"
                decoding="async"
              />

              {/* FLOWER – your Group.png */}
              <img
                src="/hero/Group.png"
                alt="Flower"
                className="absolute animate-float-slow delay-2500"
                style={{
                  width: '132px',
                  height: '132px',
                  top: '12px',
                  right: '4px',
                  zIndex: 3,
                }}
                loading="lazy"
                decoding="async"
              />

              {/* SCROLL INDICATOR */}
              <div
                className="absolute bottom-6 left-[70px] flex flex-col items-center gap-2"
                style={{ zIndex: 4 }}
              >
                <a
                  href="#services"
                  aria-label="Scroll to services"
                  className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white pt-2 cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <div className="h-3 w-1 animate-bounce rounded-full bg-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GOOGLE FONTS */}
      <link
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Poppins:wght@300;400;600&display=swap"
        rel="stylesheet"
      />
    </>
  );
};

export default HeroSection;