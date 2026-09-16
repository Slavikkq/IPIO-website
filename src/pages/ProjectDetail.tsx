import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, MapPin, Calendar, User, Tag, Briefcase, CircleDot } from 'lucide-react';
import { projects } from '@/data/projects';
import { ProjectGallery } from '@/components/projects/ProjectGallery';
import ProjectCard from '@/components/projects/ProjectCard';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const metadataIcons = {
  location: MapPin,
  year: Calendar,
  client: User,
  projectType: Tag,
  role: Briefcase,
  status: CircleDot,
};

const metadataLabels: Record<string, string> = {
  location: 'Локація',
  year: 'Рік',
  client: 'Замовник',
  projectType: 'Тип проєкту',
  role: 'Роль компанії',
  status: 'Статус',
};

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-graphite-950">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Проєкт не знайдено</h1>
          <Link to="/#projects" className="text-accent hover:text-accent-light transition-colors">
            Повернутися до проєктів
          </Link>
        </div>
      </div>
    );
  }

  const relatedProjects = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <article className="bg-graphite-950">
      {/* Hero image */}
      <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={project.coverImage}
            alt={`${project.title} — ${project.category}`}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-graphite-950/60 via-graphite-950/30 to-graphite-950" />
        </div>

        <div className="relative z-10 h-full max-w-9xl mx-auto px-6 lg:px-12 flex flex-col justify-end pb-12 lg:pb-16">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm text-graphite-300 hover:text-white transition-colors duration-300 mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Усі проєкти
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium tracking-ultra-wide uppercase text-accent">
              {project.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
            {project.title}
          </h1>
        </div>
      </div>

      {/* Metadata */}
      <div className="border-b border-graphite-300/10">
        <div className="max-w-9xl mx-auto px-6 lg:px-12 py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">
            {Object.entries(project.metadata).map(([key, value]) => {
              const Icon = metadataIcons[key as keyof typeof metadataIcons] || Tag;
              return (
                <div key={key}>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-4 h-4 text-accent" />
                    <span className="text-xs tracking-ultra-wide uppercase text-graphite-400">
                      {metadataLabels[key]}
                    </span>
                  </div>
                  <p className="text-sm text-white">{value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* About the project */}
      <section className="py-20 lg:py-28">
        <div className="max-w-9xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-accent" />
                <span className="text-xs font-medium tracking-ultra-wide uppercase text-accent">
                  Про проєкт
                </span>
              </div>
            </div>
            <div className="lg:col-span-8">
              <p className="text-xl lg:text-2xl text-white leading-relaxed font-light">
                {project.about}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 lg:py-16">
        <div className="max-w-9xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-12">
            <span className="w-8 h-px bg-accent" />
            <span className="text-xs font-medium tracking-ultra-wide uppercase text-accent">
              Галерея
            </span>
          </div>
          <ProjectGallery images={project.gallery} />
        </div>
      </section>

      {/* Technical information */}
      <section className="py-20 lg:py-28 border-t border-graphite-300/10">
        <div className="max-w-9xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-accent" />
                <span className="text-xs font-medium tracking-ultra-wide uppercase text-accent">
                  Технічна інформація
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
                Параметри
              </h2>
            </div>
            <div ref={ref} className="lg:col-span-8">
              <div className={`reveal ${isVisible ? 'is-visible' : ''}`}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-graphite-300/10">
                  {project.technical.map((item, index) => (
                    <div key={index} className="bg-graphite-950 p-6 lg:p-8">
                      <div className="text-xs tracking-ultra-wide uppercase text-graphite-400 mb-2">
                        {item.label}
                      </div>
                      <div className="text-lg text-white">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related projects */}
      <section className="py-20 lg:py-28 border-t border-graphite-300/10">
        <div className="max-w-9xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
              Інші проєкти
            </h2>
            <Link
              to="/#projects"
              className="group inline-flex items-center gap-2 text-sm font-medium tracking-wide uppercase text-graphite-200 hover:text-accent transition-colors duration-300"
            >
              <span>Усі проєкти</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            {relatedProjects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
