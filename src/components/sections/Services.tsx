import { Compass, Ruler, Calculator, Wrench, Search, Box } from 'lucide-react';
import type { ComponentType } from 'react';
import { services } from '@/data/services';
import SectionHeading from '@/components/ui/SectionHeading';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  compass: Compass,
  ruler: Ruler,
  calculator: Calculator,
  wrench: Wrench,
  search: Search,
  box: Box,
};

export default function Services() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="services" className="relative bg-graphite-950 py-24 lg:py-32">
      <div className="max-w-9xl mx-auto px-6 lg:px-12">
        <SectionHeading
          eyebrow="Компетенції"
          title="КОМПЕТЕНЦІЇ"
          className="mb-16 lg:mb-20"
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-graphite-300/10">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Compass;
            return (
              <div
                key={service.number}
                className={`group bg-graphite-950 p-8 lg:p-10 hover:bg-graphite-850 transition-colors duration-700 ease-expo reveal reveal-delay-${(index % 3) + 1} ${isVisible ? 'is-visible' : ''}`}
              >
                <div className="flex items-start justify-between mb-8">
                  <span className="text-xs font-bold tracking-wider text-graphite-400">
                    {service.number}
                  </span>
                  <Icon className="w-6 h-6 text-accent transition-transform duration-500 ease-expo group-hover:scale-110" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-white mb-4 uppercase">
                  {service.title}
                </h3>
                <p className="text-sm text-graphite-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
