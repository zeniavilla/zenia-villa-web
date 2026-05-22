import { PROJECTS } from '@/data/projects.ts';
import { useParams, useNavigate } from 'react-router';
import { ArrowLeft, Calendar, Clock, ExternalLink, Github } from 'lucide-react';
import { useScrollFade } from '@/hooks/useScrollFade.ts';
import { ZvSkillChip } from '@/web-components/react/ZvSkillChip';
import { Badge } from '@/components/ui/badge';

export default function WorkDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const heroFade = useScrollFade(0.1);
  const contentFade = useScrollFade(0.05);

  const goBack = () => navigate(-1);

  if (!id || !PROJECTS[id]) {
    return (
      <div className="max-w-4xl mx-auto px-8 md:px-10 lg:px-12 py-16 text-center">
        <p className="text-muted-foreground font-light">Project not found.</p>
        <button onClick={goBack} className="text-sm text-muted-foreground hover:text-foreground mt-4 inline-block">
          ← Back to Work
        </button>
      </div>
    );
  }

  const project = PROJECTS[id];

  const sections = [
    { title: 'Overview', content: project.overview },
    { title: 'The Challenge', content: project.challenge },
    { title: 'Technical Approach', content: project.technicalApproach },
  ];

  return (
    <div className="max-w-4xl mx-auto px-8 md:px-10 lg:px-12 py-6 md:py-8">
      <button
        onClick={goBack}
        className="flex flex-row items-center gap-2 text-muted-foreground hover:text-foreground font-light text-sm md:text-base hover:-translate-x-2 transition-transform duration-300 ease-in-out w-fit"
      >
        <ArrowLeft size={16} />
        <span>Back to Work</span>
      </button>

      {/* Hero */}
      <section
        ref={heroFade.ref}
        className={`py-8 md:py-12 lg:py-16 transition-all duration-1000 ${heroFade.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="mb-6 md:mb-8">
          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-2 md:gap-3 text-xs md:text-sm text-muted-foreground mb-4 md:mb-6 font-light">
            <span className="flex items-center gap-1.5 font-mono">
              <Calendar size={13} />
              {project.year}
            </span>
            {project.timeline && (
              <>
                <span>·</span>
                <span className="flex items-center gap-1.5 font-mono">
                  <Clock size={13} />
                  {project.timeline}
                </span>
              </>
            )}
            {project.role && (
              <>
                <span>·</span>
                <span className="font-light">{project.role}</span>
              </>
            )}
            {project.aiAssisted && (
              <>
                <span>·</span>
                <ZvSkillChip label="AI-assisted" variant="ai" />
              </>
            )}
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-6xl font-light text-foreground mb-3 md:mb-4">
            {project.title}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-light">
            {project.tagline}
          </p>
        </div>

        {/* Technologies & external links */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map(tech => (
              <Badge key={tech} variant="outline" className="text-xs md:text-sm font-light">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
              >
                <ExternalLink size={14} /> Live
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github size={14} /> Code
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article
        ref={contentFade.ref}
        className={`max-w-3xl mb-12 md:mb-16 lg:mb-20 transition-all duration-1000 ${contentFade.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
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
          {project.images && project.images.all.length > 0 && (
            <section>
              <h2 className="text-2xl md:text-3xl font-light text-foreground mb-6 md:mb-8">
                Interface Details
              </h2>
              <div className="space-y-6 md:space-y-8">
                {project.images.all.map((image, i) => (
                  <div key={i}>
                    <img
                      src={image.source}
                      alt={image.alt}
                      className="mb-2 border border-border rounded-sm w-full"
                      loading="lazy"
                    />
                    {image.caption && (
                      <span className="font-light text-sm text-muted-foreground">
                        {image.caption}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Reflection */}
          <section>
            <h2 className="text-2xl md:text-3xl font-light text-foreground mb-4 md:mb-6">
              Reflection
            </h2>
            {project.reflection.map((paragraph, i) => (
              <p
                key={i}
                className="text-base md:text-lg text-foreground font-light leading-relaxed mb-3 md:mb-4"
              >
                {paragraph}
              </p>
            ))}
          </section>
        </div>
      </article>
    </div>
  );
}
