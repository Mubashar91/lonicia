import { useEffect, useState } from 'react';

const Trust = () => {
  const images = [
    {
      src: '/new/6d7e43a8-0605-4424-be10-d92c17943ed4.jpeg',
      alt: 'Cyprus Trust Award certificate',
      showBadge: true,
    },
    {
      src: '/new/718b8f1f-b4ea-4b89-b740-c1fd61741de2.jpeg',
      alt: 'Cyprus Trust Award celebration at the salon',
      showBadge: false,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-advance images every 3 seconds
  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden py-16 md:py-20 bg-black text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
      >
        <div className="absolute -right-32 top-0 h-72 w-72 rounded-full bg-primary-gold/20 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-primary-gold/10 blur-3xl" />
      </div>

      <div className="relative mx-auto px-4 md:px-8 lg:px-16 xl:px-[150px] max-w-screen-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] gap-10 xl:gap-14 items-center">

          {/* TEXT SECTION */}
          <div className="space-y-6 md:space-y-7">
            <div>
              <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1 text-[10px] md:text-xs uppercase tracking-[0.25em] text-gray-300">
                Cyprus • Trust Award
              </span>
            </div>

            <div className="space-y-4 md:space-y-5">
              <h2 className="text-primary-gold font-poppins text-3xl md:text-4xl lg:text-[44px] font-light leading-tight">
                Cyprus Trust Award
              </h2>

              <div className="space-y-3 hidden lg:block">
                <p className="text-sm md:text-base text-gray-200 leading-relaxed max-w-xl">
                  A heartfelt thank you to our wonderful clients and our incredible team for their dedication
                  and trust. It is with great pride that we announce our very first achievement — the Cyprus Trust Award 🏆.
                </p>
                <p className="text-sm md:text-base text-gray-200 leading-relaxed max-w-xl">
                  Being recognized as one of the best beauty salons in Cyprus is an honour that inspires us to
                  continue delivering exceptional service, high-quality care, and unforgettable beauty experiences.
                </p>
              </div>
            </div>

            <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg">
              <div className="rounded-2xl border border-white/15 bg-white/5 px-5 py-4 flex flex-col gap-1 shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
                <span className="text-[11px] md:text-xs uppercase tracking-[0.18em] text-gray-400">Recognition</span>
                <span className="text-sm md:text-base font-medium text-white">
                  Awarded among the top beauty salons in Cyprus.
                </span>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/5 px-5 py-4 flex flex-col gap-1">
                <span className="text-[11px] md:text-xs uppercase tracking-[0.18em] text-gray-400">Built on trust</span>
                <span className="text-sm md:text-base font-medium text-white">
                  Powered by loyal clients and an exceptional team.
                </span>
              </div>
            </div>
          </div>

          {/* IMAGES SIDE */}
          <div className="relative w-full max-w-xl mx-auto">
            <div className="pointer-events-none absolute -inset-6 rounded-[32px] bg-primary-gold/15 blur-3xl" aria-hidden="true" />

            {/* MOBILE SLIDER - CONTROLS REMOVED */}
            <div className="relative lg:hidden">
              <div className="mb-3 flex items-center justify-end gap-3">
                <div className="flex items-center gap-1.5 mr-1">
                  {images.map((_, i) => (
                    <span
                      key={i}
                      className={`h-1.5 w-4 rounded-full ${i === activeIndex ? 'bg-primary-gold' : 'bg-white/30'}`}
                    />
                  ))}
                </div>
              </div>

              <div className="group relative rounded-3xl border border-white/25 bg-gradient-to-b from-white/15 to-white/0 shadow-[0_32px_80px_rgba(0,0,0,0.85)] overflow-hidden max-h-[460px]">
                <img
                  src={images[activeIndex].src}
                  alt={images[activeIndex].alt}
                  className="w-full h-auto object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  loading="lazy"
                />

                {images[activeIndex].showBadge && (
                  <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4">
                    <div className="inline-flex items-center gap-2 rounded-full bg-black/70 px-3 py-1.5 border border-white/20 backdrop-blur-sm">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary-gold text-xs font-semibold text-black">
                        🏆
                      </span>
                      <div className="flex flex-col leading-tight">
                        <span className="text-[9px] uppercase tracking-[0.18em] text-gray-300">Awarded</span>
                        <span className="text-[11px] font-medium text-white">Cyprus Trust Award</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* DESKTOP IMAGES */}
            <div className="relative hidden lg:grid grid-cols-2 gap-6">
              <div className="group rounded-3xl border border-white/25 bg-gradient-to-b from-white/15 to-white/0 shadow-[0_32px_80px_rgba(0,0,0,0.85)] overflow-hidden transition-transform duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_40px_90px_rgba(0,0,0,0.9)]">
                <img
                  src={images[0].src}
                  alt={images[0].alt}
                  className="w-full h-[320px] xl:h-[360px] object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  loading="lazy"
                />

                <div className="absolute bottom-4 left-4">
                  <div className="inline-flex items-center gap-2 rounded-full bg-black/70 px-4 py-2 border border-white/20 backdrop-blur-sm">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary-gold text-xs font-semibold text-black">
                      🏆
                    </span>
                    <div className="flex flex-col leading-tight">
                      <span className="text-[10px] uppercase tracking-[0.18em] text-gray-300">Awarded</span>
                      <span className="text-xs font-medium text-white">Cyprus Trust Award</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group rounded-3xl border border-white/20 bg-black/70 shadow-[0_28px_70px_rgba(0,0,0,0.9)] overflow-hidden transition-transform duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_36px_88px_rgba(0,0,0,0.95)]">
                <img
                  src={images[1].src}
                  alt={images[1].alt}
                  className="w-full h-[320px] xl:h-[360px] object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE TEXT */}
        <div className="mt-8 space-y-3 lg:hidden">
          <p className="text-sm text-gray-200 leading-relaxed">
            A heartfelt thank you to our wonderful clients and our incredible team for their dedication and trust.
          </p>
          <p className="text-sm text-gray-200 leading-relaxed">
            Being recognized as one of the best beauty salons in Cyprus inspires us to continue delivering exceptional service.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Trust;
