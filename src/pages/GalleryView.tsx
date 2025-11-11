import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

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
      <div className="rounded-none md:rounded-2xl overflow-hidden bg-black border border-white/20 w-full max-w-[95vw] md:max-w-[85vw] h-[70vh] md:h-[80vh] flex items-center justify-center relative">
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
          <TransformWrapper
            initialScale={1}
            minScale={1}
            maxScale={4}
            doubleClick={{ mode: 'toggle', step: 0.7 }}
            wheel={{ step: 0.1 }}
            pinch={{ step: 5 }}
            panning={{ velocityDisabled: true }}
          >
            {({ zoomIn, zoomOut, resetTransform, instance }) => (
              <>
                <TransformComponent
                  wrapperClass="w-full h-full"
                  contentClass="w-full h-full flex items-center justify-center"
                >
                  <img
                    src={encodeURI(item.src)}
                    alt={`Media ${index + 1}`}
                    className="max-w-full max-h-full object-contain select-none"
                    loading="lazy"
                    draggable={false}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAwIiBoZWlnaHQ9IjcwMCIgdmlld0JveD0iMCAwIDcwMCA3MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI3MDAiIGhlaWdodD0iNzAwIiBmaWxsPSIjMjIyIi8+CjxwYXRoIGQ9Ik00MjAgMzUwTDI4MCA0OTBNNDIwIDM1MEwyODAgMjEwTTQyMCAzNTBINDkwTTQyMCAzNTBIMzUwIiBzdHJva2U9IiM2NjYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxjaXJjbGUgY3g9IjQyMCIgY3k9IjM1MCIgcj0iNzAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzY2NiIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjwvc3ZnPgo=';
                    }}
                  />
                </TransformComponent>
                {instance.transformState.scale > 1 && (
                  <div className="absolute top-4 right-4 flex gap-2 z-10">
                    <button
                      onClick={() => zoomIn()}
                      className="w-10 h-10 rounded-full bg-black/70 hover:bg-black/90 text-white border border-white/30 flex items-center justify-center transition-all shadow-lg"
                      aria-label="Zoom in"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                    <button
                      onClick={() => zoomOut()}
                      className="w-10 h-10 rounded-full bg-black/70 hover:bg-black/90 text-white border border-white/30 flex items-center justify-center transition-all shadow-lg"
                      aria-label="Zoom out"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    </button>
                    <button
                      onClick={() => resetTransform()}
                      className="w-10 h-10 rounded-full bg-black/70 hover:bg-black/90 text-white border border-white/30 flex items-center justify-center transition-all shadow-lg"
                      aria-label="Reset zoom"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </button>
                  </div>
                )}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm border border-white/30 shadow-lg">
                  {instance.transformState.scale > 1 ? `${Math.round(instance.transformState.scale * 100)}% zoom` : 'Double-tap or pinch to zoom'}
                </div>
              </>
            )}
          </TransformWrapper>
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