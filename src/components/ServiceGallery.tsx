import React from 'react';
import { useNavigate } from 'react-router-dom';

type GalleryItem =
  | { type: 'video'; src: string; poster: string }
  | { type: 'image'; src: string };

interface ServiceGalleryProps {
  items: readonly GalleryItem[];
  activeIndex: number;
  onChange: (index: number) => void;
}

const ServiceGallery: React.FC<ServiceGalleryProps> = ({ items, activeIndex, onChange }) => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const pauseOthers = (el: HTMLVideoElement) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const vids = container.querySelectorAll('video');
    vids.forEach((v) => {
      if (v !== el && !v.paused) {
        try { v.pause(); } catch {}
      }
    });
  };

  const handlePrevious = () => {
    const newIndex = activeIndex > 0 ? activeIndex - 1 : items.length - 1;
    onChange(newIndex);
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = activeIndex < items.length - 1 ? activeIndex + 1 : 0;
    onChange(newIndex);
    scrollToIndex(newIndex);
  };

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const items = container.children;
      if (items[index]) {
        items[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  };

  return (
    <section className="pt-6 md:pt-10 bg-black">
      <div className="container mx-auto px-4 md:px-6 lg:px-12 relative">
        {/* Navigation Buttons - Mobile Only - Top Right */}
        <div className="md:hidden flex justify-end gap-2 z-10 mb-4">
          <button
            onClick={handlePrevious}
            className="bg-[#D4AF37] text-black p-2.5 rounded-full shadow-lg hover:bg-[#c8a231] transition"
            aria-label="Previous image"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="bg-[#D4AF37] text-black p-2.5 rounded-full shadow-lg hover:bg-[#c8a231] transition"
            aria-label="Next image"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Top controls row */}
       

        {/* MOBILE: show ALL items in one horizontal scroller */}
        <div
          ref={scrollContainerRef}
          className="md:hidden flex gap-0 overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [msOverflowStyle:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((item, actualIndex) => (
            <div
              key={`m-${actualIndex}`}
              className={`${actualIndex === activeIndex ? 'ring-2 ring-blue-500' : 'ring-1 ring-black'} snap-start shrink-0 w-[calc(100vw-32px)] relative overflow-hidden rounded-none bg-black cursor-pointer`}
              onClick={() => onChange(actualIndex)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') onChange(actualIndex);
              }}
            >
              <div className="h-[68vh]"></div>
              {item.type === 'video' ? (
                <video
                  className="absolute inset-0 w-full h-full object-contain"
                  src={encodeURI(item.src)}
                  poster={encodeURI((item as Extract<GalleryItem, { type: 'video' }>).poster)}
                  muted
                  loop
                  autoPlay={actualIndex === activeIndex}
                  playsInline
                  preload={actualIndex === activeIndex ? 'auto' : 'metadata'}
                  onPlay={(e) => pauseOthers(e.currentTarget)}
                />
              ) : (
                <img
                  src={encodeURI(item.src)}
                  alt="Service work"
                  className="absolute inset-0 w-full h-full object-contain"
                  loading="lazy"
                  onError={(e) => {
                    const el = e.currentTarget as HTMLImageElement;
                    el.src = '/placeholder.jpg';
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* DESKTOP/TABLET (md+): preserve original sliced layout with '+more' */}
        <div className="hidden md:grid md:grid-cols-4 gap-1 overflow-visible">
          {items.slice(0, 1).map((item, idx) => (
            <div
              key={`tall-${idx}`}
              className={`${idx === activeIndex ? 'ring-2 ring-blue-500' : activeIndex === 0 ? 'ring-1 ring-black' : 'ring-1 ring-black'} relative overflow-hidden rounded-none bg-black cursor-pointer md:col-span-1 md:row-span-2`}
              onClick={() => onChange(0)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') onChange(0);
              }}
            >
              <div className="pb-[70%]"></div>
              {item.type === 'video' ? (
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  src={encodeURI(item.src)}
                  poster={encodeURI((item as Extract<GalleryItem, { type: 'video' }>).poster)}
                  muted
                  loop
                  autoPlay
                  playsInline
                  preload="auto"
                  onPlay={(e) => pauseOthers(e.currentTarget)}
                />
              ) : (
                <img
                  src={encodeURI(item.src)}
                  alt="Service work"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    const el = e.currentTarget as HTMLImageElement;
                    el.src = '/placeholder.jpg';
                  }}
                />
              )}
            </div>
          ))}

          {items.slice(1, 4).map((item, idx) => {
            const actualIndex = idx + 1;
            return (
              <div
                key={`small-${actualIndex}`}
                className={`${actualIndex === activeIndex ? 'ring-2 ring-blue-500' : 'ring-1 ring-black'} relative overflow-hidden rounded-none bg-black cursor-pointer`}
                onClick={() => onChange(actualIndex)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') onChange(actualIndex);
                }}
              >
                <div className="pb-[75%]"></div>
                {item.type === 'video' ? (
                  <video
                    className="absolute inset-0 w-full h-full object-cover"
                    src={encodeURI(item.src)}
                    poster={encodeURI((item as Extract<GalleryItem, { type: 'video' }>).poster)}
                    muted
                    loop
                    autoPlay
                    playsInline
                    preload="auto"
                    onPlay={(e) => pauseOthers(e.currentTarget)}
                  />
                ) : (
                  <img
                    src={encodeURI(item.src)}
                    alt="Service work"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      const el = e.currentTarget as HTMLImageElement;
                      el.src = '/placeholder.jpg';
                    }}
                  />
                )}
              </div>
            );
          })}

          {items.slice(4, 7).map((item, idx) => {
            const actualIndex = idx + 4;
            return (
              <div
                key={`small-${actualIndex}`}
                className={`${actualIndex === activeIndex ? 'ring-2 ring-blue-500' : 'ring-1 ring-black'} relative overflow-hidden rounded-none bg-black cursor-pointer`}
                onClick={() => onChange(actualIndex)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') onChange(actualIndex);
                }}
              >
                <div className="pb-[75%]"></div>
                {item.type === 'video' ? (
                  <video
                    className="absolute inset-0 w-full h-full object-cover"
                    src={encodeURI(item.src)}
                    poster={encodeURI((item as Extract<GalleryItem, { type: 'video' }>).poster)}
                    muted
                    loop
                    autoPlay
                    playsInline
                    preload="auto"
                    onPlay={(e) => pauseOthers(e.currentTarget)}
                  />
                ) : (
                  <img
                    src={encodeURI(item.src)}
                    alt="Service work"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      const el = e.currentTarget as HTMLImageElement;
                      el.src = '/placeholder.jpg';
                    }}
                  />
                )}
                {actualIndex === 6 && items.length > 7 && (
                  <button
                    type="button"
                    aria-label={`View ${items.length - 7} more`}
                    onClick={(e) => {
                      e.stopPropagation();
                      try {
                        sessionStorage.setItem('serviceGalleryItems', JSON.stringify(items));
                      } catch {}
                      navigate(`/gallery?start=7`);
                    }}
                    className="absolute inset-0 flex items-center justify-center bg-black/50 hover:bg-black/40 transition"
                  >
                    <span className="text-white text-sm md:text-base font-semibold px-3 py-1 rounded-full bg-black/60 border border-white/20">
                      +{items.length - 7} more
                    </span>
                  </button>
                )}
              </div>
            );
          })}
        </div>
        {/* (Extra items removed here; handled inside modal) */}
      </div>
    </section>
  );
};

export default ServiceGallery;