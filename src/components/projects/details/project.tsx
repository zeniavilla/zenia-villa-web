interface ImageSection {
  source: string;
  caption: string;
  altText?: string;
}

interface ProjectDetailsProps {
  title: string;
  opportunity: string;
  projectRole: string[];
  images: ImageSection[];
  summary: string[];
  timeline: string;
}

function ProjectDetails({ title, opportunity, projectRole, images, summary, timeline }: ProjectDetailsProps) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Opportunity</h3>
        <p className="text-gray-700 whitespace-pre-line">{opportunity}</p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Role</h3>
        {projectRole.map((paragraph, i) => (
          <p key={i} className="text-gray-700 mb-2">{paragraph}</p>
        ))}
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Summary</h3>
        {summary.map((paragraph, i) => (
          <p key={i} className="text-gray-700 mb-2">{paragraph}</p>
        ))}
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Timeline</h3>
        <p className="text-gray-700">{timeline}</p>
      </div>

      {images.map((section, i) => (
        <div key={i} className="mb-6">
          <img
            className="w-full rounded-lg shadow-md mb-2"
            src={section.source}
            alt={section.altText || section.caption}
          />
          <p className="text-sm text-gray-600 italic">{section.caption}</p>
        </div>
      ))}
    </section>
  );
}

export default ProjectDetails;
