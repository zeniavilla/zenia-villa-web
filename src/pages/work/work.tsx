import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge.tsx';
import SectionTitle from '@/components/section-title/section-title.tsx';
import { ZvSkillChip } from '@/web-components/react/ZvSkillChip';
import { PROJECTS, colorClasses, type ProjectCategory } from '@/data/projects';

type FilterOption = 'all' | ProjectCategory;

const FILTER_OPTIONS: { label: string; value: FilterOption }[] = [
  { label: 'All', value: 'all' },
  { label: 'IBM', value: 'work-ibm' },
  { label: 'Eluvio', value: 'work-eluvio' },
  { label: 'Personal', value: 'personal' },
  { label: 'Self', value: 'meta' },
];

interface ProjectCardProps {
  id: string;
  color: string;
  title: string;
  image?: string;
  year: string;
  description: string;
  technologies: string[];
  aiAssisted?: boolean;
}

function ProjectCard({
  id,
  color,
  title,
  image,
  year,
  description,
  technologies,
  aiAssisted,
}: ProjectCardProps) {
  const navigate = useNavigate();

  return (
    <article className="group">
      <button
        className={`w-full block cursor-pointer p-4 md:p-6 lg:p-8 rounded-2xl transition-all duration-300 text-left hover:bg-muted/50 hover:-translate-y-1 hover:shadow-lg ${colorClasses[color]?.background ?? ''}`}
        onClick={() => navigate(id)}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 lg:gap-8">
          <div className="md:col-span-4">
            {image ? (
              <img
                src={image}
                alt={`Preview of ${title}`}
                className="rounded-sm w-full"
                loading="lazy"
              />
            ) : (
              <div
                className={`w-full h-[80px] rounded-sm flex items-center justify-center ${colorClasses[color]?.background ?? 'bg-muted'}`}
              >
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                  {year}
                </span>
              </div>
            )}
          </div>

          <div className="md:col-span-8 flex flex-col">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 md:gap-3 mb-2 flex-wrap">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-foreground">
                    {title}
                  </h3>
                  <ArrowUpRight
                    className={`text-muted-foreground ${colorClasses[color]?.icon ?? ''}`}
                    height={16}
                    width={16}
                  />
                  {aiAssisted && <ZvSkillChip label="AI-assisted" variant="ai" />}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground font-mono">{year}</div>
              </div>
            </div>
            <p className="text-foreground font-light leading-relaxed mb-4 md:mb-6 flex-1 text-base md:text-lg">
              {description}
            </p>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {technologies.map(tech => (
                <Badge key={tech} variant="outline" className="bg-background/50 text-xs md:text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </button>
    </article>
  );
}

export default function Work() {
  const [activeFilter, setActiveFilter] = useState<FilterOption>('all');

  const filteredProjects = Object.values(PROJECTS).filter(
    p => activeFilter === 'all' || p.category === activeFilter
  );

  // Only show filter tabs that actually have projects
  const availableFilters = FILTER_OPTIONS.filter(
    opt =>
      opt.value === 'all' ||
      Object.values(PROJECTS).some(p => p.category === opt.value)
  );

  return (
    <div className="max-w-4xl mx-auto px-8 md:px-10 lg:px-12 py-6 md:py-8">
      <SectionTitle
        title="Work"
        description="A collection of projects spanning my time at IBM, Eluvio, and beyond."
        border
      />

      {/* Filter */}
      <div className="flex flex-wrap gap-2 pt-8 pb-2">
        {availableFilters.map(opt => (
          <button
            key={opt.value}
            onClick={() => setActiveFilter(opt.value)}
            className={`px-4 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-200 border ${
              activeFilter === opt.value
                ? 'border-foreground bg-foreground text-background'
                : 'border-border text-muted-foreground hover:border-foreground hover:text-foreground'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      <section className="py-8 md:py-12 lg:py-16 space-y-10">
        {filteredProjects.map(project => (
          <ProjectCard
            key={project.id}
            id={project.id}
            color={project.color}
            title={project.title}
            image={project.images?.preview.source}
            year={project.year}
            description={project.tagline}
            technologies={project.technologies}
            aiAssisted={project.aiAssisted}
          />
        ))}
        {filteredProjects.length === 0 && (
          <p className="text-muted-foreground font-light py-8">
            No projects in this category yet.
          </p>
        )}
      </section>
    </div>
  );
}
