import SectionTitle from '../../../components/section-title/section-title.tsx';
import { Badge } from '@/components/ui/badge.tsx';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS, colorClasses } from '@/data/projects';
import { useNavigate } from 'react-router';

interface ProjectSectionProps {
  id: string;
  color: string;
  title: string;
  image: string;
  year: string;
  description: string;
  technologies: string[];
}

function ProjectSection({
  id,
  color,
  title,
  image,
  year,
  description,
  technologies=[]
}: ProjectSectionProps) {
  const navigate = useNavigate();

  return (
    <article className="group">
      <button className={`w-full block cursor-pointer p-4 md:p-6 lg:p-8 rounded-2xl transition-all duration-300 text-left hover:bg-muted/50 ${colorClasses[color].background}`} onClick={() => navigate(id)}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 lg:gap-8">
          <div className="md:col-span-4">
            {image ? (
              <img src={image} alt={`Project ${title}`} className="rounded-xs w-full" loading="lazy" />
            ) : (
              <div className={`w-full h-[50px] ${colorClasses[color].background} rounded`} />
            )}
          </div>

          <div className="md:col-span-8 flex flex-col">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 md:gap-3 mb-2">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-foreground">{title}</h3>
                  <ArrowUpRight className={`text-muted-foreground ${colorClasses[color].icon}`} height={16} width={16} />
                </div>

                <div className="text-xs md:text-sm text-muted-foreground font-light">{year}</div>
              </div>
            </div>
            <p className="text-foreground font-light leading-relaxed mb-4 md:mb-6 flex-1 text-base md:text-lg">{description}</p>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {
                technologies.map(tech => (
                  <Badge key={tech} variant="outline" className="bg-background/50 text-xs md:text-sm">{tech}</Badge>
                ))
              }
            </div>
          </div>
        </div>
      </button>
    </article>
  );
}

function Projects() {
  return (
    <div className="max-w-4xl mx-auto px-12 md:px-10 lg:px-12 py-6 md:py-8">
      <SectionTitle title="Projects" description="A collection of work spanning my time at IBM and Eluvio." border />
      <section className="py-8 md:py-12 lg:py-16 space-y-12">
        {
          Object.keys(PROJECTS).map(projectId => {
            const project = PROJECTS[projectId];

            return (
              <ProjectSection
                key={projectId}
                id={projectId}
                color={project.color}
                title={project.title}
                image={project.images.preview.source}
                year={project.year}
                description={project.tagline}
                technologies={project.technologies}
              />
            )
          })
        }
      </section>
    </div>
  );
}

export default Projects;
