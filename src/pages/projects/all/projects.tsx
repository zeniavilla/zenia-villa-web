import SectionTitle from '../../../components/section-title/section-title.tsx';
import byok1 from '@/assets/images/byok1.webp';
import byok2 from '@/assets/images/byok2.webp';
import favorites from '@/assets/images/favorites.webp';
import transfers from '@/assets/images/transfers.webp';
import ProjectDetails from '../details/project.tsx';
import { Badge } from '@/components/ui/badge.tsx';
import { ArrowUpRight } from 'lucide-react';

interface ProjectSectionProps {
  color: string;
  title: string;
  image: string;
  year: string;
  description: string;
  technologies: string[];
}

interface ProjectDataProps {
  color: string;
  title: string;
  tagline: string;
  role: string;
  opportunity: string;
  summary: string[];
  timeline: string;
  year: string;
  images: {preview: {source: string; caption?: string}, all: { source: string; caption?: string }[]};
  technologies: string[];
}

const colorClasses: Record<string, { background: string, icon: string }> = {
  violet: {background: 'bg-gradient-to-r hover:from-violet-500/10 hover:to-purple-500/10', icon: "group-hover:text-violet-600"},
  // blue: 'bg-gradient-to-r from-blue-500/5 to-cyan-500/5 hover:from-blue-500/10 hover:to-cyan-500/10',
  // green: 'bg-gradient-to-r from-green-500/5 to-emerald-500/5 hover:from-green-500/10 hover:to-emerald-500/10',
  // orange: 'bg-gradient-to-r from-orange-500/5 to-amber-500/5 hover:from-orange-500/10 hover:to-amber-500/10',
  // pink: 'bg-gradient-to-r from-pink-500/5 to-rose-500/5 hover:from-pink-500/10 hover:to-rose-500/10',
};

const PROJECTS: ProjectDataProps[] = [
  {
    color: "violet",
    title: "Key Management Integration",
    tagline: "Built frontend for bring-your-own-key encryption integration",
    role: "Lead Frontend Engineer",
    opportunity: "To allow customers to bring their own keys for server-side encryption at rest, giving them more control over the security of their data.",
    summary: [
      "The project was first introduced as a customer request. Given its elaborate architecture and the number of teams individuals, collaboration and communication were my biggest contributions. The Frontend code was rather straightforward, which included form and admin settings changes, but I was able to flex other muscles such as staying in constant contact with the Designer and Tech Writer assigned to the project, as there were many design iterations.",
      "One design proposal that didn't make it to implementation was the option to create a Key Management Service profile within the form of a Node creation/update. This design pattern didn't exist anywhere else in the apps and would have involved extra work to create a POST call, handling errors so as not to destroy the user's filled out form, and rethinking other pages that might adopt this pattern. In the end, we decided if was too much of an effort for the project scope and not enough of an impact."
    ],
    timeline: "Early January 2020 - End of May 2020",
    year: "2020",
    images: {
      preview: {
        source: "", caption: ""
      },
      all: [
        {source: byok1, caption: "View for creating a new KMS profile"},
        {source: byok2, caption: "Add input option to connect KMS profile with new and existing nodes."}
      ]
    },
    technologies: ["React", "Carbon Design System"],
  }
];

function ProjectSection({
  color,
  title,
  image,
  year,
  description,
  technologies=[]
}: ProjectSectionProps) {
  return (
    <article className="group">
      <button className={`w-full block p-8 rounded-2xl transition-all duration-300 text-left hover:bg-gray-50/50 ${colorClasses[color].background}`}>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-4">
            {image ? (
              <img src={image} alt={`Project ${title}`} />
            ) : (
              <div className={`w-full h-[50px] ${colorClasses[color].background} rounded`} />
            )}
          </div>

          <div className="col-span-8 flex flex-col">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-3xl font-light text-gray-900">{title}</h3>
                  <ArrowUpRight className={`text-gray-400 ${colorClasses[color].icon}`} height={20} width={20} />
                </div>

                <div className="text-sm text-gray-500 font-light">{year}</div>
              </div>
            </div>
            <p className="text-gray-700 font-light leading-relaxed mb-6 flex-1 text-lg">{description}</p>
            <div className="flex flex-wrap gap-3">
              {
                technologies.map(tech => (
                  <Badge variant="outline" className="bg-white/50">{tech}</Badge>
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
    <div className="max-w-4xl mx-auto px-4 py-8">
      <SectionTitle title="Projects" description="A collection of work spanning my time at IBM and Eluvio." border />
      <section className="py-16">
        {
          PROJECTS.map(project => (
            <ProjectSection
              color={project.color}
              title={project.title}
              image={project.images.preview.source}
              year={project.year}
              description={project.tagline}
              technologies={project.technologies}
            />
          ))
        }
      </section>
      <ProjectDetails
        title="Key management integration"
        opportunity="To allow customers to bring their own keys for server-side encryption at rest, giving them more control over the security of their data."
        projectRole={[
          "Served as the only Frontend Developer throughout the project, from design feedback through implementation.",
          "Collaborated with Backend Developers, Designers, Tech Writers, Project Managers, Product Managers, and QA Engineers."
        ]}
        summary={[
          "The project was first introduced as a customer request. Given its elaborate architecture and the number of teams individuals, collaboration and communication were my biggest contributions. The Frontend code was rather straightforward, which included form and admin settings changes, but I was able to flex other muscles such as staying in constant contact with the Designer and Tech Writer assigned to the project, as there were many design iterations.",
          "One design proposal that didn't make it to implementation was the option to create a Key Management Service profile within the form of a Node creation/update. This design pattern didn't exist anywhere else in the apps and would have involved extra work to create a POST call, handling errors so as not to destroy the user's filled out form, and rethinking other pages that might adopt this pattern. In the end, we decided if was too much of an effort for the project scope and not enough of an impact."
        ]}
        timeline="Early January 2020 - End of May 2020"
        images={[
          {source: byok1, caption: "View for creating a new KMS profile"},
          {source: byok2, caption: "Add input option to connect KMS profile with new and existing nodes."}
        ]}
      />
      <ProjectDetails
        title="Favorite files"
        opportunity={`The views within the Files application are minimal. Folders and files are organized by Workspace, then the folder structure the user creates, however nested they choose. Example:
        Root:
          < Marvel movies
            < Avengers universe
              < Captain Marvel
            < 2021 planned releases
          < HBO Max
            < Insecure
        \nCustomers have requested a view to access their bookmarked folders, creating a smoother workflow for the user.`}
        projectRole={[
          "Served as the only Frontend Developer for the feature implementation.",
          "Collaborated with Backend Developers, Designers, Tech Writers, and QA Engineers."
        ]}
        summary={[
          "This involved the BE team creating an API endpoint within the AoC infrastructure that would contain basic data. That basic data would allow the UI to display an initial rendering, make calls to get file info from our Node API, and do a final render to display updated information (name and size may have changed, for example). It was important to make async calls to gather the more detailed file information from the Node so as not to block the DOM instead of combining both calls together."
        ]}
        timeline="Mid-February 2020 - early May 2020"
        images={[
          {source: favorites, caption: "Favorite file view"}
        ]}
      />
      <ProjectDetails
        title="Transfers re-work"
        opportunity=""
        projectRole={[
          "Served as the lead Frontend Developer throughout planning and implementation. The Frontend Team Lead also participated in cross-team architecture discussions.",
          "Collaborated mostly with Backend Developers and QA Engineers."
        ]}
        summary={[
          "Transfers are the heart of Aspera on Cloud. Since its initial implementation, we have been using the pattern of polling the node to get updated transfer information, such as the latest transfer status and data written/expected. In a cross-team effort to improve site performance and reliability, we decided to move away from polling. To any reader, I'd love to discuss this further if you'd like to know more but would rather not publish any other details."
        ]}
        timeline="Currently being developed and planned as this involves more backend work."
        images={[
          {source: transfers, caption: "Transfer panel"}
        ]}
      />
    </div>
  );
}

export default Projects;
