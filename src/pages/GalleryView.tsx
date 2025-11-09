import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export type GalleryItem =
  | { type: 'video'; src: string; poster: string }
  | { type: 'image'; src: string };

const GalleryView: React.FC = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const start = parseInt(params.get('start') || '0', 10);

  const items: GalleryItem[] = React.useMemo(() => {
    try {
      const raw = sessionStorage.getItem('serviceGalleryItems');
      if (!raw) return [];
      return JSON.parse(raw);
    } catch {
      return [];
    }
  }, []);

  const scrollerRef = React.useRef<HTMLDivElement>(null);

  const pauseOthers = (el: HTMLVideoElement) => {
    const container = scrollerRef.current;
    if (!container) return;
    const vids = container.querySelectorAll('video');
    vids.forEach((v) => {
      if (v !== el && !v.paused) {
        try {
          v.pause();
        } catch {}
      }
    });
  };

  const [index, setIndex] = React.useState<number>(
    isNaN(start)
      ? 0
      : Math.max(0, Math.min(start, Math.max(0, items.length - 1)))
  );

  React.useEffect(() => {
    const el = scrollerRef.current;
    if (!el || items.length === 0) return;
    
    const child = el.children[index] as HTMLElement | undefined;
    if (child) {
      try {
        child.scrollIntoView({
          behavior: 'instant' as ScrollBehavior,
          inline: 'center',
          block: 'nearest',
        });
      } catch (error) {
        console.warn('Scroll into view failed:', error);
      }
    }
  }, [index, items.length]);

  const stepTo = (dir: number) => {
    if (items.length === 0) return;
    const next = (index + dir + items.length) % items.length;
    setIndex(next);
    const el = scrollerRef.current;
    if (!el) return;
    const child = el.children[next] as HTMLElement | undefined;
    if (child) {
      try {
        child.scrollIntoView({
          behavior: 'smooth',
          inline: 'center',
          block: 'nearest',
        });
      } catch (error) {
        console.warn('Smooth scroll failed:', error);
      }
    }
  };

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        stepTo(-1);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        stepTo(1);
      } else if (e.key === 'Escape') {
        navigate(-1);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [index, items.length]);

  const MediaContainer: React.FC<{ item: GalleryItem; index: number }> = ({ item, index }) => (
    <div className="snap-center shrink-0 w-screen flex justify-center items-center p-2 md:p-4">
      <div className="rounded-none md:rounded-2xl overflow-hidden bg-black border border-white/20 w-full max-w-[420px] h-[70vh] md:h-[80vh] max-h-[460px] md:max-h-[500px] flex items-center justify-center">
        {item.type === 'video' ? (
          <video
            src={encodeURI(item.src)}
            poster={encodeURI(item.poster)}
            controls
            className="w-full h-full object-contain"
            onPlay={(e) => pauseOthers(e.currentTarget)}
            preload="metadata"
            playsInline
          />
        ) : (
          <img
            src={encodeURI(item.src)}
            alt={`Media ${index + 1}`}
            className="w-full h-full object-contain"
            loading="lazy"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAwIiBoZWlnaHQ9IjcwMCIgdmlld0JveD0iMCAwIDcwMCA3MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI3MDAiIGhlaWdodD0iNzAwIiBmaWxsPSIjMjIyIi8+CjxwYXRoIGQ9Ik00MjAgMzUwTDI4MCA0OTBNNDIwIDM1MEwyODAgMjEwTTQyMCAzNTBINDkwTTQyMCAzNTBIMzUwIiBzdHJva2U9IiM2NjYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxjaXJjbGUgY3g9IjQyMCIgY3k9IjM1MCIgcj0iNzAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzY2NiIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjwvc3ZnPgo=';
            }}
          />
        )}
      </div>
    </div>
  );

  if (items.length === 0) {
    return (
      <section className="min-h-[80vh] bg-black text-white py-6 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl text-gray-400 mb-4">No media items found</h2>
          <button
            onClick={() => navigate(-1)}
            className="h-10 px-4 rounded-full bg-[#D4AF37] text-black font-semibold border border-black/20 hover:brightness-95"
          >
            Go Back
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-[90vh] bg-black text-white py-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4 md:mb-6">
          <div className="flex items-center gap-2 md:gap-4">
            <h1 className="text-primary-gold text-xl sm:text-2xl md:text-3xl font-semibold">
              All Media
            </h1>
            <span className="text-sm md:text-base text-gray-400">
              {index + 1} of {items.length}
            </span>
          </div>
          
          {/* Next/Previous buttons moved to the right side */}
          <div className="flex gap-2 md:gap-3">
            <button
              aria-label="Previous"
              onClick={() => stepTo(-1)}
              disabled={items.length <= 1}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/15 hover:bg-white/25 disabled:opacity-30 disabled:cursor-not-allowed text-white border border-white/20 flex items-center justify-center transition-all duration-200"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              aria-label="Next"
              onClick={() => stepTo(1)}
              disabled={items.length <= 1}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/15 hover:bg-white/25 disabled:opacity-30 disabled:cursor-not-allowed text-white border border-white/20 flex items-center justify-center transition-all duration-200"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
            <button
              onClick={() => navigate(-1)}
              className="h-10 md:h-12 px-4 md:px-6 rounded-full bg-[#D4AF37] text-black font-semibold border border-black/20 hover:brightness-95 transition-all duration-200 text-sm md:text-base"
            >
              Close
            </button>
          </div>
        </div>

        {/* Removed the separate controls section and bubble indicators */}

        <div className="-mx-4 md:-mx-6 lg:-mx-12">
          <div
            ref={scrollerRef}
            className="flex gap-0 overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            onScroll={(e) => {
              const container = e.currentTarget;
              const scrollLeft = container.scrollLeft;
              const itemWidth = container.clientWidth;
              const newIndex = Math.round(scrollLeft / itemWidth);
              if (newIndex !== index && newIndex >= 0 && newIndex < items.length) {
                setIndex(newIndex);
              }
            }}
          >
            {items.map((item, i) => (
              <MediaContainer key={i} item={item} index={i} />
            ))}
          </div>
        </div>

        {/* Removed mobile bubble indicators */}
      </div>
    </section>
  );
};

export default GalleryView;