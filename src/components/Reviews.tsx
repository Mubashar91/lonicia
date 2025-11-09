// src/components/Reviews.tsx
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { testimonials } from '../data/testimonials';

const Reviews = () => {
  const videoRef = useRef<HTMLDivElement>(null);
  const reviewRef = useRef<HTMLDivElement>(null);
  const [modalReview, setModalReview] = useState<any>(null);
  const videoEls = useRef<Array<HTMLVideoElement | null>>([]);
  const [playingMap, setPlayingMap] = useState<Record<number, boolean>>({});
  const [videoInView, setVideoInView] = useState<Record<number, boolean>>({});

  const preview = (text: string) =>
    text.length > 130
      ? text.slice(0, 130).split(' ').slice(0, -1).join(' ') + '…'
      : text;

  const scroll = (dir: number, isVideo = false) => {
    const el = isVideo ? videoRef.current : reviewRef.current;
    if (!el) return;
    const card = el.querySelector('[data-card]') as HTMLElement;
    if (!card) return;
    const width = window.innerWidth;
    const gap = width >= 1024 ? 24 : width >= 768 ? 16 : 0;
    const cardsToShow = width >= 1024 ? 3 : width >= 768 ? 2 : 1;
    const step = (card.offsetWidth + gap) * cardsToShow;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  const videos = [
    "/video/WhatsApp Video 2025-10-28 at 12.09.15 AM.mp4",
    "/video/WhatsApp Video 2025-11-08 at 2.38.21 PM.mp4",
    "/video/WhatsApp Video 2025-11-08 at 2.39.24 PM.mp4",
    "/video/WhatsApp Video 2025-11-08 at 2.40.27 PM.mp4",
    "/video/WhatsApp Video 2025-11-08 at 2.41.30 PM.mp4",
    "/video/WhatsApp Video 2025-11-08 at 2.41.43 PM.mp4",
  ];

  // Lock scroll when modal open
  useEffect(() => {
    if (modalReview) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [modalReview]);

  // Defer video loading until card is in view
  useEffect(() => {
    const container = videoRef.current;
    if (!container) return;
    const cards = Array.from(container.querySelectorAll<HTMLElement>('[data-vid-index]'));
    if (cards.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        setVideoInView((prev) => {
          const next = { ...prev };
          entries.forEach((entry) => {
            const idx = Number((entry.target as HTMLElement).dataset.vidIndex);
            if (!Number.isNaN(idx)) next[idx] = entry.isIntersecting;
          });
          return next;
        });
      },
      { root: container, threshold: 0.4 }
    );

    cards.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Ensure only visible videos play; pause others
  useEffect(() => {
    videoEls.current.forEach((v, i) => {
      if (!v) return;
      if (videoInView[i]) {
        try { v.play(); } catch {}
      } else {
        if (!v.paused) {
          try { v.pause(); } catch {}
        }
      }
    });
  }, [videoInView]);

  return (
    <>
    <section className="py-16 bg-black text-white">
      <div className="mx-auto px-4 md:px-8 lg:px-16 xl:px-[150px] max-w-screen-2xl">

        {/* Header */}
        <p className="text-center text-gray-400 text-xs uppercase tracking-widest mb-3">
          Reviews
        </p>
        <h2 className="text-center text-primary-gold font-poppins text-4xl md:text-5xl font-light mb-14">
          See the Process, Hear the Praise
        </h2>

        {/* VIDEO SLIDER */}
        <div className="mb-20">
          <div className="flex justify-end mb-8">
            <div className="flex gap-3">
              <button
                onClick={() => scroll(-1, true)}
                className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/25 transition shadow-lg"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={() => scroll(1, true)}
                className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/25 transition shadow-lg"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          <div
            ref={videoRef}
            className="flex gap-0 md:gap-4 lg:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            style={{ scrollPadding: '24px' }}
          >
            {videos.map((src, i) => (
              <div
                key={i}
                data-card
                data-vid-index={i}
                className="snap-center shrink-0 w-[calc(100vw-32px)] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                  <div className="relative">
                    <video
                      ref={(el) => (videoEls.current[i] = el)}
                      src={encodeURI(src)}
                      muted
                      loop
                      playsInline
                      autoPlay={!!videoInView[i]}
                      preload={videoInView[i] ? 'auto' : 'metadata'}
                      className="w-full h-96 md:h-[520px] object-cover"
                      onPlay={() => setPlayingMap((p) => ({ ...p, [i]: true }))}
                      onPause={() => setPlayingMap((p) => ({ ...p, [i]: false }))}
                      onEnded={() => setPlayingMap((p) => ({ ...p, [i]: false }))}
                    />
                    {!playingMap[i] && (
                      <button
                        type="button"
                        aria-label="Play video"
                        onClick={() => {
                          const el = videoEls.current[i];
                          if (el) el.play();
                        }}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition"
                      >
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2">
                          <path d="M8 5v14l11-7-11-7z" fill="#1A1A1A" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* REVIEW SLIDER */}
        <div>
          <div className="flex justify-end mb-8">
            <div className="flex gap-3">
              <button
                onClick={() => scroll(-1)}
                className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/25 transition shadow-lg"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={() => scroll(1)}
                className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/25 transition shadow-lg"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          <div
            ref={reviewRef}
            className="flex gap-0 md:gap-4 lg:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            style={{ scrollPadding: '24px' }}
          >
            {testimonials.map((t) => (
              <div
                key={t.id}
                data-card
                className="snap-center shrink-0 w-[calc(100vw-32px)] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                {/* SAME HEIGHT CARD */}
                <div
                  className="bg-gradient-to-b from-white to-gray-50 rounded-2xl p-7 shadow-2xl border border-gray-200 flex flex-col justify-between"
                  style={{ height: '340px' }}
                >
                  <div>
                    <div className="text-center mb-4">
                      <h3 className="font-poppins font-bold text-xl text-gray-900 tracking-tight">
                        {t.name}
                      </h3>
                      {t.meta && (
                        <p className="text-sm text-gray-500 mt-1 font-medium">
                          {t.meta.split('•').pop()?.trim()}
                        </p>
                      )}
                    </div>

                    <div className="flex justify-center gap-1.5 mb-5">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          fill={i < t.rating ? '#D4AF37' : 'none'}
                          stroke="#D4AF37"
                          strokeWidth="2"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>

                    <p className="text-gray-800 text-sm leading-relaxed text-center font-medium italic line-clamp-5">
                      "{preview(t.testimonial)}"
                    </p>
                  </div>

                  {/* READ MORE BUTTON */}
                  {t.testimonial.length > 130 && (
                    <div className="mt-4 text-center">
                      <button
                        onClick={() => setModalReview(t)}
                        className="text-primary-gold font-bold text-sm underline underline-offset-4 hover:no-underline transition"
                      >
                        Read more
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* POP-UP MODAL - FULL REVIEW - Rendered via portal to body */}
    {modalReview &&
      createPortal(
        (
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={() => setModalReview(null)}
            style={{ margin: 0 }}
          >
            <div
              className="bg-white rounded-3xl p-8 md:p-12 max-w-2xl w-full shadow-3xl relative max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
              style={{ transform: 'none' }}
            >
              {/* Close Button */}
              <button
                onClick={() => setModalReview(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Content */}
              <div className="text-center space-y-6">
                <div>
                  <h3 className="font-poppins font-bold text-2xl md:text-3xl text-gray-900">
                    {modalReview.name}
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm md:text-base">
                    {modalReview.meta?.split('•').pop()?.trim()}
                  </p>
                </div>

                <div className="flex justify-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill={i < modalReview.rating ? '#D4AF37' : 'none'}
                      stroke="#D4AF37"
                      strokeWidth="2"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
                  <p className="text-gray-800 text-base md:text-lg leading-relaxed italic">
                    "{modalReview.testimonial}"
                  </p>
                </div>

                <button
                  onClick={() => setModalReview(null)}
                  className="bg-primary-gold text-black font-bold px-8 py-3 rounded-full hover:scale-105 transition shadow-lg"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        ),
        document.body
      )}
    </>
  );
};

export default Reviews;