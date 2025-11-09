import { Link } from 'react-router-dom';
type Props = { noTopPadding?: boolean; padXClass?: string }

const ServicesSection = ({ noTopPadding = false, padXClass = 'px-6 lg:px-12' }: Props) => {
  return (
    <section id="services" className={`section-anchor bg-primary-dark text-white ${noTopPadding ? 'pt-0 pb-20 md:pb-28' : 'py-20 md:py-28'}`}>
      <div className={`container mx-auto ${padXClass}`}>
        {/* Section Label */}
        <p className="text-center text-primary-gold font-poppins text-[16px] uppercase tracking-wide mb-6 mt-8 md:mt-0">
          Services
        </p>
        
        {/* Main Heading */}
        <h2 
          className="typo-section-heading text-primary-gold mb-16 max-w-[1200px] mx-0 text-left text-xl sm:text-3xl md:text-5xl leading-tight"
        >
          <span className="block">FROM NAILS TO SKINCARE,</span>
          <span className="block mt-2 md:mt-0">WE MAKE YOU GLOW INSIDE AND OUT.</span>
        </h2>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto justify-items-center mb-12">
          {[
            {
              title: 'LASER HAIR REMOVAL',
              tag: 'Women/Mens',
              url: '/laser.jpg',
            },
            {
              title: 'MANICURE',
              tag: 'Women/Mens',
              url: '/manicure.jpg',
            },
            {
              title: 'PEDICURE',
              tag: 'Women/Mens',
              url: '/pedicure.jpg',
            },
            {
              title: 'Brows/Lashes',
              tag: 'Women',
              url: '/bowsone.jpeg',
            },
            {
              title: 'PERMANENT MAKEUP',
              tag: 'Women',
              url: '/permanent.jpeg',
            },
            {
              title: 'Lash extensions',
              tag: 'Women/Mens',
              url: '/hdhd.jpg',
            },
            // {
            //   title: 'HAIR DRESSING',
            //   tag: 'Women/Mens',
            //   url: '/hair-dressing.jpg',
            // },
            // {
            //   title: 'MAKEUP',
            //   tag: 'Women',
            //   url: '/makeup.jpg',
            // },
            // {
            //   title: 'FACIALS',
            //   tag: 'Women/Mens',
            //   url: '/facials.jpg',
            // },
            // {
            //   title: 'MANICURE DELUXE',
            //   tag: 'Women/Mens',
            //   url: '/manicure.jpg',
            // },
            // {
            //   title: 'PEDICURE SPA',
            //   tag: 'Women/Mens',
            //   url: '/pedicure.jpg',
            // },
            // {
            //   title: 'LASER TOUCH-UP',
            //   tag: 'Women/Mens',
            //   url: '/laser.jpg',
            // },
          ].map((card, idx) => {
            const titleUpper = card.title.trim().toUpperCase();
            const href = titleUpper.includes('LASH')
              ? '/services/lash-extensions'
              : titleUpper.includes('MANICURE')
              ? '/services/manicure'
              : '/services';
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
              <Link to={href} className="w-full h-[320px] md:h-[380px] lg:h-[420px] overflow-hidden rounded-[20px] block">
                <img
                  src={card.url}
                  alt={card.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={() => {}}
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

        {/* View More Button */}
        <div className="flex justify-center mt-16">
            <Link
                       to="/services"
                       className="bg-primary-gold text-black px-8 md:px-12 py-3 md:py-4 rounded-lg font-bold hover:bg-opacity-90 transition uppercase tracking-wide text-[13px] md:text-[14px]"
                     >
                       VIEW MORE
                     </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
