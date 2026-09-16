import { processSteps } from '@/data/services';
import SectionHeading from '@/components/ui/SectionHeading';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Process() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative bg-graphite-900 py-24 lg:py-32">
      <div className="max-w-9xl mx-auto px-6 lg:px-12">
        <SectionHeading
          eyebrow="Підхід"
          title="ВІД ІДЕЇ ДО"
          highlight="РЕАЛІЗАЦІЇ."
          className="mb-16 lg:mb-20"
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-graphite-300/10">
          {processSteps.map((step, index) => (
            <div
              key={step.number}
              className={`group bg-graphite-900 p-8 lg:p-10 hover:bg-graphite-850 transition-colors duration-700 ease-expo reveal reveal-delay-${Math.min(index + 1, 5)} ${isVisible ? 'is-visible' : ''}`}
            >
              <div className="flex flex-col">
                <span className="text-5xl lg:text-6xl font-extrabold text-graphite-600 group-hover:text-accent transition-colors duration-500 ease-expo mb-6 tracking-tight">
                  {step.number}
                </span>
                <h3 className="text-lg font-bold tracking-tight text-white mb-4 uppercase">
                  {step.title}
                </h3>
                <p className="text-sm text-graphite-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
