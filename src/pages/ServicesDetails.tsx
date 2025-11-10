import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import ServiceGallery from '../components/ServiceGallery';
import ServiceInfoPreview from '../components/ServiceInfoPreview';
import { manicureDetails, manicureGallery, lashDetails, lashGallery, pedicureDetails, pedicureGallery, exploreServicesDefault } from '../data/services';

const ServicesDetails = () => {
  const location = useLocation();
  const path = location.pathname.toLowerCase();
  const isLash = path.includes('lash-extensions');
  const isPedicure = path.includes('pedicure');

  const serviceDetails = isLash ? lashDetails : isPedicure ? pedicureDetails : manicureDetails;

  const exploreServices = exploreServicesDefault;

  const galleryItems = isLash ? lashGallery : isPedicure ? pedicureGallery : manicureGallery;

  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="min-h-screen bg-black">
      <ServiceGallery items={galleryItems} activeIndex={activeIndex} onChange={setActiveIndex} />
      {/* Service Detail Section */}
      <ServiceInfoPreview details={serviceDetails} />

      {/* Explore More Services Section */}
      <section className="bg-black pb-12">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          {/* Section Heading */}
          <h2 className="text-primary-gold font-poppins text-[32px] md:text-[48px] lg:text-[64px] font-bold text-center mb-8 md:mb-12 uppercase tracking-wide">
            EXPLORE MORE SERVICES
          </h2>

          {/* Service Cards Grid */}
          <div className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 max-w-[1200px] mx-auto mb-8 md:mb-12 overflow-x-auto snap-x snap-mandatory scroll-smooth md:overflow-visible [scrollbar-width:none] [msOverflowStyle:none] [&::-webkit-scrollbar]:hidden">
            {exploreServices.map((service, idx) => {
              const title = service.title.trim().toUpperCase();
              const href = title === 'MANICURE' ? '/services/manicure' : title === 'LASH EXTENSIONS' ? '/services/lash-extensions' : title === 'PEDICURE' ? '/services/pedicure' : '/404';
              return (
                <div 
                  key={idx} 
                  className="snap-center shrink-0 w-[85%] md:w-full rounded-[20px] overflow-hidden flex flex-col max-w-[380px] mx-auto"
                  style={{
                    gap: '16px',
                    background: 'transparent'
                  }}
                >
                  {/* Service Image */}
                  <Link to={href} className="w-full h-[360px] md:h-[420px] overflow-hidden rounded-[20px] block">
                    <img 
                      src={service.url} 
                      alt={service.title} 
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const t = e.currentTarget as HTMLImageElement;
                        t.src = `/placeholder.jpg`;
                      }}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                    />
                  </Link>
                  
                  {/* Service Info */}
                  <div className="flex flex-col gap-2 px-2">
                    <h3 className="font-poppins text-[18px] md:text-[20px] font-semibold text-white uppercase tracking-wide">
                      {service.title}
                    </h3>
                    <p className="text:[13px] md:text-[14px] text-gray-400 font-poppins mb-2">{service.tag}</p>
                    <Link to={href} className="bg-primary-gold text-black text-[13px] md:text-[14px] font-bold px-5 md:px-6 py-2.5 md:py-3 rounded-lg hover:bg-opacity-90 transition uppercase tracking-wide w-full text-center">
                      LEARN MORE
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* View More Button */}
          <div className="flex justify-center mt-6 md:mt-8">
            <Link
              to="/services"
              className="bg-primary-gold text-black px-8 md:px-12 py-3 md:py-4 rounded-lg font-bold hover:bg-opacity-90 transition uppercase tracking-wide text-[13px] md:text-[14px]"
            >
              VIEW MORE
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesDetails;
