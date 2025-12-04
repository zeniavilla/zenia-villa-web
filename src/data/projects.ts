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
  role?: string;
  opportunity?: string;
  summary?: string[];
  timeline?: string;
  year: string;
  images: {preview: {source: string; caption?: string}, all: { source: string; caption?: string }[]};
  technologies: string[];
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
    images: {preview: {source: transfers}, all: [{source: transfers, caption: "Transfer panel"}]}
  },
  "favorite-files": {
    id: "favorite-files",
    color: "blue",
    title: "Favorite Files",
    tagline: "Created folder bookmarking feature for quick access to frequently used files",
    technologies: ["React"],
    year: "2020",
    images: {preview: {source: favoritesPreview}, all: [{source: favorites, caption: "Favorite file view"}]}
  },
  "key-management": {
    id: "key-management",
    color: "violet",
    title: "Key Management Integration",
    tagline: "Built frontend for bring-your-own-key encryption integration",
    technologies: ["React", "Carbon Design System"],
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
        source: byok1Preview, caption: ""
      },
      all: [
        {source: byok1, caption: "View for creating a new KMS profile"},
        {source: byok2, caption: "Add input option to connect KMS profile with new and existing nodes."}
      ]
    }
  }
};
