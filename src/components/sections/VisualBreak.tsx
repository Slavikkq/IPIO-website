import { visualBreakImage } from '@/data/projects';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function VisualBreak() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={visualBreakImage}
          alt="Інфраструктурний об'єкт"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-graphite-950/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-graphite-950/40 via-transparent to-graphite-950/40" />
      </div>

      <div
        ref={ref}
        className={`relative z-10 h-full flex items-center justify-center ${isVisible ? 'is-visible' : ''} reveal`}
      >
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-white text-center px-6 text-balance">
          ТОЧНІСТЬ У КОЖНОМУ РІШЕННІ.
        </h2>
      </div>
    </section>
  );
}
