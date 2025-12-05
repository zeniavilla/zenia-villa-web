import { PROJECTS } from '@/data/projects.ts';
import { NavLink, useParams } from 'react-router';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

function ProjectDetails() {
  const { id } = useParams<{id: string}>();

  if(!id) {
    return null;
  }

  const project = PROJECTS[id];

  const sections = [
    {title: "Overview", content: project.overview},
    {title: "The Challenge", content: project.challenge},
    {title: "Technical Approach", content: project.technicalApproach},
  ];

  return (
    <div className="max-w-4xl mx-auto px-12 md:px-10 lg:px-12 py-6 md:py-8">
      <NavLink className="flex flex-row items-center gap-2 text-muted-foreground hover:text-foreground font-light text-sm md:text-base" to="/projects">
        <ArrowLeft size={18} />
        <div>Back to Projects</div>
      </NavLink>
      {/* Hero Section */}
      <section className="py-8 md:py-12 lg:py-16">
        <div className="mb-6 md:mb-8">
          <div className="flex flex-wrap items-center gap-2 md:gap-3 text-xs md:text-sm text-muted-foreground mb-4 md:mb-6 font-light">
            <span className="flex items-center gap-2">
              <Calendar size={14} className="md:w-4 md:h-4" />
              {project.year}
            </span>
            <span>·</span>
            <span className="flex items-center gap-2">
              <Clock size={14} className="md:w-4 md:h-4" />
              {project.timeline}
            </span>
            <span>·</span>
            <span>{project.role}</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-6xl font-light text-foreground mb-3 md:mb-4">
            {project.title}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-light">
            {project.tagline}
          </p>
        </div>

        {/* Technologies & Links */}
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground font-light"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8 mb-12 md:mb-16 lg:mb-20">
        <div className="space-y-10 md:space-y-12 lg:space-y-16">
          {sections.map((section, index) => (
            <section key={index}>
              <h2 className="text-2xl md:text-3xl font-light text-foreground mb-4 md:mb-6">
                {section.title}
              </h2>
              <p className="text-base md:text-lg text-foreground font-light leading-relaxed">
                {section.content}
              </p>
            </section>
          ))}

          {/* Image Gallery */}
          <section>
            <h2 className="text-2xl md:text-3xl font-light text-foreground mb-6 md:mb-8">
              Interface Details
            </h2>
            <div className="space-y-6 md:space-y-8">
              {
                project.images.all.map(image => (
                  <>
                    <img src={image.source} alt={image.alt} className="mb-0 border border-border" />
                    <span className="font-light text-sm">{image.caption}</span>
                  </>
                ))
              }
            </div>
          </section>

          {/* Reflection */}
          <section>
            <h2 className="text-2xl md:text-3xl font-light text-foreground mb-4 md:mb-6">
              Reflection
            </h2>
            {
              project.reflection.map((paragraph, i) => (
                <p key={i} className="text-base md:text-lg text-foreground font-light leading-relaxed mb-3 md:mb-4">
                  {paragraph}
                </p>
              ))
            }
          </section>
        </div>
      </article>
    </div>
  );
}

export default ProjectDetails;
