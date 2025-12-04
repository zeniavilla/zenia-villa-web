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
      <button className={`w-full block p-4 md:p-6 lg:p-8 rounded-2xl transition-all duration-300 text-left hover:bg-gray-50/50 ${colorClasses[color].background}`} onClick={() => navigate(id)}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 lg:gap-8">
          <div className="md:col-span-4">
            {image ? (
              <img src={image} alt={`Project ${title}`} className="rounded-xs w-full" />
            ) : (
              <div className={`w-full h-[50px] ${colorClasses[color].background} rounded`} />
            )}
          </div>

          <div className="md:col-span-8 flex flex-col">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 md:gap-3 mb-2">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-gray-900">{title}</h3>
                  <ArrowUpRight className={`text-gray-400 ${colorClasses[color].icon}`} height={16} width={16} />
                </div>

                <div className="text-xs md:text-sm text-gray-500 font-light">{year}</div>
              </div>
            </div>
            <p className="text-gray-700 font-light leading-relaxed mb-4 md:mb-6 flex-1 text-base md:text-lg">{description}</p>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {
                technologies.map(tech => (
                  <Badge key={tech} variant="outline" className="bg-white/50 text-xs md:text-sm">{tech}</Badge>
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
    <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-8">
      <SectionTitle title="Projects" description="A collection of work spanning my time at IBM and Eluvio." border />
      <section className="py-8 md:py-12 lg:py-16 space-y-6">
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
      {/*<ProjectDetails*/}
      {/*  title="Key management integration"*/}
      {/*  opportunity="To allow customers to bring their own keys for server-side encryption at rest, giving them more control over the security of their data."*/}
      {/*  projectRole={[*/}
      {/*    "Served as the only Frontend Developer throughout the project, from design feedback through implementation.",*/}
      {/*    "Collaborated with Backend Developers, Designers, Tech Writers, Project Managers, Product Managers, and QA Engineers."*/}
      {/*  ]}*/}
      {/*  summary={[*/}
      {/*    "The project was first introduced as a customer request. Given its elaborate architecture and the number of teams individuals, collaboration and communication were my biggest contributions. The Frontend code was rather straightforward, which included form and admin settings changes, but I was able to flex other muscles such as staying in constant contact with the Designer and Tech Writer assigned to the project, as there were many design iterations.",*/}
      {/*    "One design proposal that didn't make it to implementation was the option to create a Key Management Service profile within the form of a Node creation/update. This design pattern didn't exist anywhere else in the apps and would have involved extra work to create a POST call, handling errors so as not to destroy the user's filled out form, and rethinking other pages that might adopt this pattern. In the end, we decided if was too much of an effort for the project scope and not enough of an impact."*/}
      {/*  ]}*/}
      {/*  timeline="Early January 2020 - End of May 2020"*/}
      {/*  images={[*/}
      {/*    {source: byok1, caption: "View for creating a new KMS profile"},*/}
      {/*    {source: byok2, caption: "Add input option to connect KMS profile with new and existing nodes."}*/}
      {/*  ]}*/}
      {/*/>*/}
      {/*<ProjectDetails*/}
      {/*  title="Favorite files"*/}
      {/*  opportunity={`The views within the Files application are minimal. Folders and files are organized by Workspace, then the folder structure the user creates, however nested they choose. Example:*/}
      {/*  Root:*/}
      {/*    < Marvel movies*/}
      {/*      < Avengers universe*/}
      {/*        < Captain Marvel*/}
      {/*      < 2021 planned releases*/}
      {/*    < HBO Max*/}
      {/*      < Insecure*/}
      {/*  \nCustomers have requested a view to access their bookmarked folders, creating a smoother workflow for the user.`}*/}
      {/*  projectRole={[*/}
      {/*    "Served as the only Frontend Developer for the feature implementation.",*/}
      {/*    "Collaborated with Backend Developers, Designers, Tech Writers, and QA Engineers."*/}
      {/*  ]}*/}
      {/*  summary={[*/}
      {/*    "This involved the BE team creating an API endpoint within the AoC infrastructure that would contain basic data. That basic data would allow the UI to display an initial rendering, make calls to get file info from our Node API, and do a final render to display updated information (name and size may have changed, for example). It was important to make async calls to gather the more detailed file information from the Node so as not to block the DOM instead of combining both calls together."*/}
      {/*  ]}*/}
      {/*  timeline="Mid-February 2020 - early May 2020"*/}
      {/*  images={[*/}
      {/*    {source: favorites, caption: "Favorite file view"}*/}
      {/*  ]}*/}
      {/*/>*/}
      {/*<ProjectDetails*/}
      {/*  title="Transfers re-work"*/}
      {/*  opportunity=""*/}
      {/*  projectRole={[*/}
      {/*    "Served as the lead Frontend Developer throughout planning and implementation. The Frontend Team Lead also participated in cross-team architecture discussions.",*/}
      {/*    "Collaborated mostly with Backend Developers and QA Engineers."*/}
      {/*  ]}*/}
      {/*  summary={[*/}
      {/*    "Transfers are the heart of Aspera on Cloud. Since its initial implementation, we have been using the pattern of polling the node to get updated transfer information, such as the latest transfer status and data written/expected. In a cross-team effort to improve site performance and reliability, we decided to move away from polling. To any reader, I'd love to discuss this further if you'd like to know more but would rather not publish any other details."*/}
      {/*  ]}*/}
      {/*  timeline="Currently being developed and planned as this involves more backend work."*/}
      {/*  images={[*/}
      {/*    {source: transfers, caption: "Transfer panel"}*/}
      {/*  ]}*/}
      {/*/>*/}
    </div>
  );
}

export default Projects;
