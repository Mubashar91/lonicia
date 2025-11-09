const AcademyBanner = () => {
  return (
    <section className="bg-[#2B2B2B] text-white h-[320px] md:h-[360px] lg:h-[300px] relative overflow-hidden flex items-center">
      <div className="w-full px-0">
        <div className="w-full text-center relative flex flex-col items-center gap-4 md:gap-6">
          {/* Top Label */}
          <p className="text-primary-gold text-[12px] md:text-[14px] uppercase tracking-wider mb-3">
            be part of MK NAILS & BEAUTY
          </p>

          {/* Left Decorative Flower */}
          <div className="absolute left-[10%] md:left-[12%] lg:left-[8%] top-1/2 -translate-y-1/2 w-36 h-36 md:w-48 md:h-48 lg:w-64 lg:h-64 opacity-50 block">
            <img src="/Group (1).png" alt="Decorative flower left" className="w-full h-full " />
          </div>

          {/* Right Decorative Flower */}
          <div className="absolute right-[10%] md:right-[12%] lg:right-[8%] top-1/2 -translate-y-1/2 w-36 h-36 md:w-48 md:h-48 lg:w-64 lg:h-64 opacity-50 block">
            <img src="/Group (2).png" alt="Decorative flower right" className="w-full h-full " />
          </div>

          {/* Main Heading */}
          <h2 className="typo-academy-quote text-primary-gold max-w-[990px] ">
            "EMPOWERING FUTURE ARTISTS WITH REAL SALON EXPERIENCE AND EXPERT MENTORSHIP."
          </h2>

          {/* CTA Button */}
          <a
            href="/contact"
            className="inline-block bg-primary-gold text-black px-10 py-3 rounded-lg font-bold hover:bg-opacity-90 transition uppercase tracking-wide text-[14px]"
          >
            JOIN US TODAY
          </a>
        </div>
      </div>
    </section>
  );
};

export default AcademyBanner;

