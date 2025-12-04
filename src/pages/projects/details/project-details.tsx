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
    <div className="max-w-4xl mx-auto px-4 py-8">
      <NavLink className="flex flex-row items-center gap-2 text-gray-600 hover:text-gray-900 font-light" to="/projects">
        <ArrowLeft size={18} />
        <div>Back to Projects</div>
      </NavLink>
      {/* Hero Section */}
      <section className="py-16">
        <div className="mb-8">
          <div className="flex items-center gap-3 text-sm text-gray-500 mb-6 font-light">
            <span className="flex items-center gap-2">
              <Calendar size={16} />
              {project.year}
            </span>
            <span>·</span>
            <span className="flex items-center gap-2">
              <Clock size={16} />
              {project.timeline}
            </span>
            <span>·</span>
            <span>{project.role}</span>
          </div>

          <h1 className="text-6xl font-light text-gray-900 mb-4">
            {project.title}
          </h1>
          <p className="text-2xl text-gray-600 font-light">
            {project.tagline}
          </p>
        </div>

        {/* Technologies & Links */}
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600 font-light"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="max-w-5xl mx-auto px-8 mb-20">
        <div className="aspect-[16/9] rounded-2xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-gray-100 flex items-center justify-center">
          <span className="text-gray-400 font-light">Project Hero Image</span>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-3xl mx-auto px-8 mb-20">
        <div className="space-y-16">
          {sections.map((section, index) => (
            <section key={index}>
              <h2 className="text-3xl font-light text-gray-900 mb-6">
                {section.title}
              </h2>
              <p className="text-lg text-gray-700 font-light leading-relaxed">
                {section.content}
              </p>
            </section>
          ))}

          {/* Image Gallery */}
          <section>
            <h2 className="text-3xl font-light text-gray-900 mb-8">
              Interface Details
            </h2>
            <div className="space-y-8">
              {
                project.images.all.map(image => (
                  <>
                    <img src={image.source} alt={image.alt} className="mb-0 border border-gray-200" />
                    <span className="font-light text-sm">{image.caption}</span>
                  </>
                ))
              }
            </div>
          </section>

          {/* Reflection */}
          <section>
            <h2 className="text-3xl font-light text-gray-900 mb-6">
              Reflection
            </h2>
            {
              project.reflection.map((paragraph, i) => (
                <p key={i} className="text-lg text-gray-700 font-light leading-relaxed mb-4">
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
