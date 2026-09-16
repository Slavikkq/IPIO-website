import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/data/projects';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface ProjectCardProps {
  project: Project;
  large?: boolean;
}

export default function ProjectCard({ project, large = false }: ProjectCardProps) {
  const { ref, isVisible } = useScrollReveal<HTMLAnchorElement>();

  return (
    <Link
      ref={ref as React.RefObject<HTMLAnchorElement>}
      to={`/proekt/${project.slug}`}
      className={`reveal ${isVisible ? 'is-visible' : ''} group relative block overflow-hidden ${
        large ? 'lg:col-span-2' : ''
      }`}
    >
      <div className={`image-zoom relative w-full overflow-hidden ${large ? 'h-[400px] lg:h-[600px]' : 'h-[300px] lg:h-[460px]'}`}>
        <img
          src={project.coverImage}
          alt={`${project.title} — ${project.category}`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite-950 via-graphite-950/30 to-transparent opacity-80 transition-opacity duration-500 ease-expo group-hover:opacity-90" />
        <div className="absolute inset-0 bg-graphite-950/0 transition-all duration-500 ease-expo group-hover:bg-graphite-950/10" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-medium tracking-ultra-wide uppercase text-accent">
            {project.category}
          </span>
          <span className="w-1 h-1 bg-graphite-300/40 rounded-full" />
          <span className="text-xs text-graphite-300">{project.year}</span>
        </div>
        <h3 className={`font-bold text-white tracking-tight mb-2 ${large ? 'text-2xl lg:text-3xl' : 'text-xl lg:text-2xl'}`}>
          {project.title}
        </h3>
        <p className="text-sm text-graphite-300 mb-4 line-clamp-2 max-w-md">
          {project.description}
        </p>
        <div className="flex items-center gap-2 text-sm font-medium tracking-wide uppercase text-graphite-200 group-hover:text-accent transition-colors duration-300">
          <span>Переглянути проєкт</span>
          <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  );
}
