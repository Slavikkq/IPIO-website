import { useScrollReveal } from '@/hooks/useScrollReveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${align === 'center' ? 'text-center mx-auto max-w-3xl' : ''} ${className}`}
    >
      {eyebrow && (
        <div className={`flex items-center gap-3 mb-6 ${align === 'center' ? 'justify-center' : ''}`}>
          <span className="w-8 h-px bg-accent" />
          <span className="text-xs font-medium tracking-ultra-wide uppercase text-accent">{eyebrow}</span>
        </div>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-white text-balance">
        {title} {highlight && <span className="text-accent">{highlight}</span>}
      </h2>
      {description && (
        <p className={`mt-6 text-lg text-graphite-300 leading-relaxed ${align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-xl'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
