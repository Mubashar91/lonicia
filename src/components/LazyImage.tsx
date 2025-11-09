import React from 'react';

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  placeholderSrc?: string;
  shouldLoad?: boolean;
};

const TinyPlaceholder =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxMCAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IiMyMjIiLz48L3N2Zz4=';

export default function LazyImage({
  src,
  placeholderSrc = TinyPlaceholder,
  className,
  onLoad,
  shouldLoad = true,
  ...rest
}: Props) {
  const imgRef = React.useRef<HTMLImageElement | null>(null);
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    const el = imgRef.current;
    if (!el) return;

    if (!shouldLoad) return;

    if ('loading' in HTMLImageElement.prototype) {
      el.src = String(src || '');
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (el && src) el.src = String(src);
            io.disconnect();
          }
        });
      },
      { rootMargin: '200px' }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [src, shouldLoad]);

  return (
    <img
      ref={imgRef}
      src={placeholderSrc}
      className={className}
      onLoad={(e) => {
        if (!loaded && (e.currentTarget.currentSrc === placeholderSrc)) return;
        setLoaded(true);
        onLoad?.(e);
      }}
      {...rest}
    />
  );
}
