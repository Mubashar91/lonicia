import { useEffect } from "react";

const Shops = () => {
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

  const locations = [
    {
      name: "MK NAILS & BEAUTY SALON – LARNACA",
      services: [
        {
          title: "Manicure | Pedicure:",
          items: ["-Japanese Manicure | Pedicure", "-Nails Extensions"],
        },
        {
          title: "Permanent makeup:",
          items: ["- Brows", "- Lips", "- Eyeliner"],
        },
        {
          title: "",
          items: [
            "Laser hair removal clinic",
            "Body slim treatments",
            "Facials",
          ],
        },
        {
          title: "",
          items: [
            "Lash Extensions",
            "Hairdressing",
          ],
        },
        {
          title: "",
          items: [
            "Brows | Lashes Lamination",
            "Makeup",
          ],
        },
      ],
      address: "MK Nails & Beauty 1 Ioannou GLADSTONOS SHOP 4",
      addressLine2: "PANAYIOTON TOWER 6023, Larnaca",
      hours: "Mon–Sat    10:00am–19:00pm",
      image: "/shopone.png",
      hasImage: true,
    },
    {
      name: "MK NAILS & BEAUTY SALON – NICOSIA",
      services: [
        {
          title: "",
          items: [
            "Permanent Makeup school",
            "Facial and Aesthetic clinic",
            "Body slim treatments",
          ],
        },
        {
          title: "Permanent makeup:",
          items: ["- Brows", "- Lips", "- Eyeliner"],
        },
        {
          title: "",
          items: [
            "Lash Extensions",
            "Brows | Lashes Lamination",
            "Makeup",
          ],
        },
      ],
      address: "",
      addressLine2: "",
      hours: "",
      comingSoon: true,
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <section className="bg-black py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="space-y-12">
            {locations.map((location, index) => (
              <div
                key={index}
                data-reveal
                data-delay={`${(index * 0.12).toFixed(2)}s`}
                className="bg-transparent border border-yellow-500 rounded-2xl overflow-hidden mx-auto w-full max-w-[1200px] h-auto lg:min-h-[360px]"
              >
                <div
                  className={`flex flex-col-reverse lg:flex-row h-full ${
                    index === 1 ? "lg:flex-row-reverse lg:gap-0" : "lg:gap-4"
                  }`}
                >
                  {/* Left Side - Content */}
                  <div className={`flex-1 px-4 md:px-6 ${index === 1 ? "lg:pr-0" : ""}`}>
                    {/* Prominent Heading */}
                    <h2
                      data-reveal
                      data-delay={`${(0.06 + index * 0.12).toFixed(2)}s`}
                      className="text-yellow-500 font-poppins text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight mb-4 uppercase tracking-wide py-3 text-left lg:whitespace-nowrap"
                    >
                      {location.name}
                    </h2>

                    <h3 className="text-yellow-500 font-poppins text-base md:text-[18px] font-semibold mb-4">
                      Services:
                    </h3>

                    {/* LARNACA: Custom Layout */}
                    {index === 0 ? (
                      <div className="space-y-4 mb-4">
                        {/* Row 1: Two titled groups */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                          {location.services.slice(0, 2).map((group, idx) => (
                            <div key={idx} className="space-y-0.5">
                              {group.title && (
                                <p className="text-yellow-500 font-poppins text-[16px] md:text-[17px] font-semibold">
                                  {group.title}
                                </p>
                              )}
                              {group.items.map((item, i) => (
                                <p
                                  key={i}
                                  data-reveal
                                  data-delay={`${(0.08 + idx * 0.06 + i * 0.03).toFixed(2)}s`}
                                  className="text-yellow-500 font-poppins text-[15px] md:text-[16px] leading-5"
                                >
                                  {item}
                                </p>
                              ))}
                            </div>
                          ))}
                        </div>

                        {/* Row 2: Top 3 items (left only) */}
                        <div className="space-y-0.5 mb-1">
                          {location.services[2].items.map((item, i) => (
                            <p
                              key={i}
                              data-reveal
                              data-delay={`${(0.2 + i * 0.04).toFixed(2)}s`}
                              className="text-yellow-500 font-poppins text-[15px] md:text-[16px] leading-5"
                            >
                              {item}
                            </p>
                          ))}
                        </div>

                        {/* Row 3: Bottom 2 rows — side by side, paired */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1">
                          <div className="space-y-0.5">
                            {location.services[3].items.map((item, i) => (
                              <p
                                key={i}
                                data-reveal
                                data-delay={`${(0.32 + i * 0.04).toFixed(2)}s`}
                                className="text-yellow-500 font-poppins text-[15px] md:text-[16px] leading-5"
                              >
                                {item}
                              </p>
                            ))}
                          </div>
                          <div className="space-y-0.5">
                            {location.services[4].items.map((item, i) => (
                              <p
                                key={i}
                                data-reveal
                                data-delay={`${(0.32 + i * 0.04).toFixed(2)}s`}
                                className="text-yellow-500 font-poppins text-[15px] md:text-[16px] leading-5"
                              >
                                {item}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* NICOSIA (index 1): Single column with looser spacing */
                      <div className="space-y-4 mb-5">
                        {location.services.map((group, idx) => (
                          <div key={idx} className="space-y-1">
                            {group.title && (
                              <p className="text-yellow-500 font-poppins text-[16px] md:text-[17px] font-semibold">
                                {group.title}
                              </p>
                            )}
                            {group.items.map((item, i) => (
                              <p
                                key={i}
                                data-reveal
                                data-delay={`${(0.06 + i * 0.04).toFixed(2)}s`}
                                className="text-yellow-500 font-poppins text-[15px] md:text-[16px] leading-6"
                              >
                                {item}
                              </p>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Address & Hours */}
                    {location.address && (
                      <div className="space-y-3 mt-6">
                        <div className="flex items-start gap-2">
                          <svg
                            className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          <div className="text-yellow-500 font-poppins text-[14px] leading-5">
                            <p>{location.address}</p>
                            <p>{location.addressLine2}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-2">
                          <svg
                            className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <p className="text-yellow-500 font-poppins text-[14px] leading-5">
                            {location.hours}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Side - Image or Coming Soon */}
                  <div className="flex-1 flex items-center ">
                    {location.hasImage ? (
                      <div
                        data-reveal
                        data-delay={`${(0.12 + index * 0.12).toFixed(2)}s`}
                        className={`w-full h-full min-h-[240px] lg:min-h-[360px] p-1.5 flex items-center ${index === 1 ? 'justify-start' : 'justify-center'} bg-black ${index === 1 ? 'lg:max-w-[420px]' : 'lg:max-w-[520px]'}`}
                      >
                        <img
                          src={location.image}
                          alt={location.name}
                          className={`w-full h-auto max-w-none object-contain rounded-2xl border border-yellow-500 bg-black ${index === 1 ? '' : 'lg:ml-auto'} max-h-[260px] md:max-h-[320px] lg:max-h-[420px]`}
                        />
                      </div>
                    ) : (
                      <div
                        data-reveal
                        data-delay={`${(0.12 + index * 0.12).toFixed(2)}s`}
                        className={`w-full h-full min-h-[240px] lg:min-h-[360px] p-1.5 flex items-center justify-center lg:justify-start bg-black ${index === 1 ? 'lg:max-w-[420px]' : 'lg:max-w-[520px]'}`}
                      >
                        <div className="relative w-full h-auto max-w-none bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-yellow-500 shadow-2xl overflow-hidden flex items-center justify-center">
                          {/* Spotlights */}
                          <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
                            <div className="absolute top-20 right-16 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                            <div className="absolute bottom-16 left-20 w-36 h-36 bg-white/10 rounded-full blur-3xl"></div>
                          </div>

                          {/* Beams */}
                          <div className="absolute inset-0">
                            <div className="absolute top-0 left-1/4 w-2 h-full bg-gradient-to-b from-white/20 to-transparent rotate-12 blur-sm"></div>
                            <div className="absolute top-0 right-1/3 w-2 h-full bg-gradient-to-b from-white/20 to-transparent -rotate-12 blur-sm"></div>
                          </div>

                          {/* Red Carpet */}
                          <div className="relative z-10 text-center py-12">
                            <div className="w-48 h-6 mx-auto mb-6 bg-gradient-to-b from-gray-200 to-gray-400 rounded-[50%] relative">
                              <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-300 rounded-[50%] scale-95"></div>
                            </div>
                            <h3
                              className="text-white font-bold text-5xl md:text-6xl tracking-widest mb-2"
                              style={{ textShadow: "0 0 30px rgba(255,255,255,0.6)" }}
                            >
                              COMING
                            </h3>
                            <h3
                              className="text-white font-bold text-5xl md:text-6xl tracking-widest"
                              style={{ textShadow: "0 0 30px rgba(255,255,255,0.6)" }}
                            >
                              SOON
                            </h3>
                            <div className="w-40 h-2 mx-auto mt-8 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
                            <div className="w-36 h-28 mx-auto mt-3 bg-gradient-to-b from-red-600 to-red-800 rounded-b-lg relative overflow-hidden">
                              <div className="absolute inset-0 flex flex-col justify-around py-2">
                                {[...Array(5)].map((_, i) => (
                                  <div key={i} className="w-full h-0.5 bg-red-700/50"></div>
                                ))}
                              </div>
                            </div>
                            <div className="w-36 h-4 mx-auto -mt-1 bg-gradient-to-b from-black/50 to-transparent blur-md"></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shops;