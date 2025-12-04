import byok1 from '@/assets/images/byok1.webp';
import byok2 from '@/assets/images/byok2.webp';
import byok1Preview from '@/assets/images/byok1-preview.png';
import favorites from '@/assets/images/favorites.webp';
import favoritesPreview from '@/assets/images/favorites-preview.png';
import transfers from '@/assets/images/transfers.webp';

export interface ProjectDataItem {
  id: string;
  color: string;
  title: string;
  tagline: string;
  year: string;
  images: {preview: {source: string; caption?: string, alt: string;}, all: {source: string; caption?: string, alt: string;}[]};
  technologies: string[];
  role?: string;
  timeline?: string;
  overview: string;
  challenge: string;
  technicalApproach: string;
  reflection: string[];
}

export type ProjectData = Record<string, ProjectDataItem>;

export const colorClasses: Record<string, { background: string, icon: string }> = {
  violet: {background: 'bg-gradient-to-r hover:from-violet-500/10 hover:to-purple-500/10', icon: "group-hover:text-violet-600"},
  blue: {background: 'bg-gradient-to-r hover:from-blue-500/10 hover:to-cyan-500/10', icon: "group-hover:text-cyan-600"},
  green: {background: 'bg-gradient-to-r hover:from-green-500/10 hover:to-emerald-500/10', icon: 'group-hover:text-green-600'},
  orange: {background: 'bg-gradient-to-r hover:from-orange-500/10 hover:to-amber-500/10', icon: 'group-hover:text-orange-600'},
  pink: {background: 'bg-gradient-to-r hover:from-pink-500/10 hover:to-rose-500/10', icon: 'group-hover:text-pink-600'},
};

export const PROJECTS: ProjectData = {
  "transfers-rework": {
    id: "transfers-rework",
    color: "green",
    title: "Transfers Re-work",
    tagline: "Redesigned core transfer architecture to eliminate polling and boost performance",
    technologies: ["React"],
    year: "2021",
    images: {preview: {source: transfers, alt: "Preview of Transfers Panel"}, all: [{source: transfers, caption: "Transfer panel", alt: "Full Transfer Panel"}]},
    role: "Lead Frontend Engineer",
    timeline: "",
    overview: "Transfers are the heart of Aspera on Cloud. Since its initial implementation, we have been using the pattern of polling the node to get updated transfer information, such as the latest transfer status and data written/expected. In a cross-team effort to improve site performance and reliability, we decided to move away from polling. To any reader, I'd love to discuss this further if you'd like to know more but would rather not publish any other details.",
    challenge: "",
    technicalApproach: "",
    reflection: [""]
  },
  "favorite-files": {
    id: "favorite-files",
    color: "blue",
    title: "Favorite Files",
    tagline: "Created folder bookmarking feature for quick access to frequently used files",
    technologies: ["React"],
    year: "2020",
    images: {preview: {source: favoritesPreview, alt: "Preview of Favorites Feature"}, all: [{source: favorites, caption: "Favorite file view", alt: "Full Favorite File View"}]},
    role: "Lead Frontend Engineer",
    timeline: "3 Months",
    overview: "This involved the BE team creating an API endpoint within the AoC infrastructure that would contain basic data. That basic data would allow the UI to display an initial rendering, make calls to get file info from our Node API, and do a final render to display updated information (name and size may have changed, for example). It was important to make async calls to gather the more detailed file information from the Node so as not to block the DOM instead of combining both calls together.",
    challenge: `The views within the Files application are minimal. Folders and files are organized by Workspace, then the folder structure the user creates, however nested they choose. Example:
      Root:
        < Marvel movies
          < Avengers universe
            < Captain Marvel
          < 2021 planned releases
        < HBO Max
          < Insecure
      Customers have requested a view to access their bookmarked folders, creating a smoother workflow for the user.`,
    technicalApproach: "",
    reflection: [""]
  },
  "key-management": {
    id: "key-management",
    color: "violet",
    title: "Key Management Integration",
    tagline: "Built frontend for bring-your-own-key encryption integration",
    technologies: ["React", "Carbon Design System"],
    year: "2020",
    images: {
      preview: {
        source: byok1Preview, caption: "", alt: "Preview of Key Management Integration"
      },
      all: [
        {source: byok1, caption: "View for creating a new KMS profile", alt: "New KMS Profile View"},
        {source: byok2, caption: "Add input option to connect KMS profile with new and existing nodes.", alt: "KMS Profile Input Option"}
      ]
    },
    role: "Lead Frontend Engineer",
    timeline: "5 Months",
    overview:
      "The project was first introduced as a customer request. Given its elaborate architecture and the number of teams individuals, collaboration and communication were my biggest contributions. The Frontend code was rather straightforward, which included form and admin settings changes, but I was able to flex other muscles such as staying in constant contact with the Designer and Tech Writer assigned to the project, as there were many design iterations. One design proposal that didn't make it to implementation was the option to create a Key Management Service profile within the form of a Node creation/update. This design pattern didn't exist anywhere else in the apps and would have involved extra work to create a POST call, handling errors so as not to destroy the user's filled out form, and rethinking other pages that might adopt this pattern. In the end, we decided if was too much of an effort for the project scope and not enough of an impact.",
    challenge: "",
    technicalApproach: "",
    reflection: [""]
  }
};
