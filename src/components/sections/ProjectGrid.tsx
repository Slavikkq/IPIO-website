import { projects } from '@/data/projects';
import ProjectCard from '@/components/projects/ProjectCard';
import SectionHeading from '@/components/ui/SectionHeading';

export default function ProjectGrid() {
  const featured = projects.filter((p) => p.featured);
  const regular = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative bg-graphite-900 py-24 lg:py-32">
      <div className="max-w-9xl mx-auto px-6 lg:px-12">
        <SectionHeading
          eyebrow="Портфоліо"
          title="ОБ'ЄКТИ, ЯКІ"
          highlight="ГОВОРЯТЬ ЗА НАС."
          className="mb-16 lg:mb-20"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} large />
          ))}
          {regular.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
