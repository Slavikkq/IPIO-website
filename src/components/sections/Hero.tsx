import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { heroImage } from '@/data/projects';
import { useParallax } from '@/hooks/useScrollReveal';

export default function Hero() {
  const parallaxRef = useParallax<HTMLDivElement>(0.4);

  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
      {/* Background image with parallax */}
      <div className="absolute inset-0 z-0">
        <div ref={parallaxRef} className="parallax-bg absolute inset-0 scale-110">
          <img
            src={heroImage}
            alt="Інженерна споруда — міст"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-graphite-950/70 via-graphite-950/40 to-graphite-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-graphite-950/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-9xl mx-auto px-6 lg:px-12 flex flex-col justify-end pb-24 lg:pb-32">
        <div className="max-w-4xl">
          <div
            className="hero-text-line mb-6 flex items-center gap-3"
            style={{ animationDelay: '0.2s' }}
          >
            <span className="w-12 h-px bg-accent" />
            <span className="text-sm font-medium tracking-ultra-wide uppercase text-accent">
              Проєктування та реалізація інженерних споруд
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] tracking-tight text-white">
            <span className="hero-text-line block" style={{ animationDelay: '0.3s' }}>
              ІНЖЕНЕРІЯ,
            </span>
            <span className="hero-text-line block" style={{ animationDelay: '0.45s' }}>
              ЩО ПОЄДНУЄ.
            </span>
          </h1>

          <p
            className="hero-text-line mt-8 text-lg md:text-xl text-graphite-200 max-w-2xl leading-relaxed"
            style={{ animationDelay: '0.6s' }}
          >
            ІППО — архітектурна та інженерна компанія, що працює з мостовими та
            інфраструктурними проєктами.
          </p>

          <div
            className="hero-text-line mt-10 flex flex-col sm:flex-row gap-4"
            style={{ animationDelay: '0.75s' }}
          >
            <Link
              to="/#projects"
              className="group inline-flex items-center justify-center gap-3 bg-accent text-graphite-950 hover:bg-accent-light px-8 py-4 text-sm font-medium tracking-wide uppercase transition-all duration-500 ease-expo"
            >
              <span>Переглянути проєкти</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-500 ease-expo group-hover:translate-x-1" />
            </Link>
            <Link
              to="/#contact"
              className="group inline-flex items-center justify-center gap-3 border border-graphite-300/30 text-white hover:border-accent hover:text-accent px-8 py-4 text-sm font-medium tracking-wide uppercase transition-all duration-500 ease-expo"
            >
              <span>Зв'язатися з нами</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[10px] tracking-ultra-wide uppercase text-graphite-300/60">
          Прокрутіть
        </span>
        <div className="flex flex-col items-center">
          <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent animate-scroll-indicator" />
          <ArrowDown className="w-3 h-3 text-accent/60 -mt-1" />
        </div>
      </div>
    </section>
  );
}
