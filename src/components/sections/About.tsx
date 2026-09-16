import { aboutImage } from "@/data/projects";
import { companyInfo, stats } from "@/data/company";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function About() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative bg-graphite-950 py-24 lg:py-32">
      <div className="max-w-9xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
          <div className="lg:col-span-5">
            <div
              ref={ref}
              className={`reveal ${isVisible ? "is-visible" : ""}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-accent" />
                <span className="text-xs font-medium tracking-ultra-wide uppercase text-accent">
                  Про компанію
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-white text-balance">
                МИ СТВОРЮЄМО
                <br />
                ІНФРАСТРУКТУРУ,
                <br />
                ЯКА <span className="text-accent">ЗАЛИШАЄТЬСЯ.</span>
              </h2>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-end">
            <div
              className={`reveal reveal-delay-2 ${isVisible ? "is-visible" : ""}`}
            >
              <p className="text-lg lg:text-xl text-graphite-300 leading-relaxed">
                {companyInfo.description}
              </p>
            </div>
          </div>
        </div>

        {/* Large image */}
        <div
          className={`reveal ${isVisible ? "is-visible" : ""} image-zoom relative w-full h-[300px] md:h-[450px] lg:h-[550px] overflow-hidden mb-20`}
        >
          <img
            src={aboutImage}
            alt="Архітектурне фото інженерної споруди"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-graphite-950/20" />
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-graphite-300/10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-graphite-950 p-8 lg:p-10 reveal reveal-delay-${index + 1} ${isVisible ? "is-visible" : ""}`}
            >
              <div className="text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-3">
                {stat.value}
              </div>
              <div className="text-sm text-graphite-400 leading-relaxed">
                {stat.label}
              </div>
              {stat.isPlaceholder}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
