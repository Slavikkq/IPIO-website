import { useState, useEffect, useCallback, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface LightboxProps {
  images: string[];
  startIndex: number;
  onClose: () => void;
}

export default function Lightbox({ images, startIndex, onClose }: LightboxProps) {
  const [index, setIndex] = useState(startIndex);
  const touchStartX = useRef<number | null>(null);

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [next, prev, onClose]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
    touchStartX.current = null;
  };

  return (
    <div
      className="fixed inset-0 z-[100] bg-graphite-950/95 backdrop-blur-md flex items-center justify-center"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <button
        className="absolute top-6 right-6 z-10 w-12 h-12 flex items-center justify-center text-white hover:text-accent transition-colors duration-300"
        onClick={onClose}
        aria-label="Закрити"
      >
        <X className="w-6 h-6" />
      </button>

      <button
        className="absolute left-4 lg:left-8 z-10 w-12 h-12 flex items-center justify-center text-white hover:text-accent transition-colors duration-300"
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        aria-label="Попереднє"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      <div
        className="max-w-[90vw] max-h-[85vh] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[index]}
          alt={`Фото ${index + 1}`}
          className="max-w-[90vw] max-h-[85vh] object-contain"
          style={{
            animation: 'fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
          }}
          key={index}
        />
      </div>

      <button
        className="absolute right-4 lg:right-8 z-10 w-12 h-12 flex items-center justify-center text-white hover:text-accent transition-colors duration-300"
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        aria-label="Наступне"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
        <span className="text-sm text-graphite-300 tabular-nums">
          {String(index + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
        </span>
      </div>
    </div>
  );
}

interface ProjectGalleryProps {
  images: string[];
}

export function ProjectGallery({ images }: ProjectGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 lg:gap-6 [&>*]:mb-4 lg:[&>*]:mb-6">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setLightboxIndex(index)}
            className="group relative w-full overflow-hidden break-inside-avoid block"
          >
            <img
              src={image}
              alt={`Фото ${index + 1}`}
              className="w-full h-auto transition-transform duration-700 ease-expo group-hover:scale-[1.03]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-graphite-950/0 group-hover:bg-graphite-950/30 transition-all duration-500 ease-expo flex items-center justify-center">
              <Maximize2 className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-expo" />
            </div>
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}
