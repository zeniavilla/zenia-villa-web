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
  // "transfers-rework": {
  //   id: "transfers-rework",
  //   color: "green",
  //   title: "Transfers Re-work",
  //   tagline: "Redesigned core transfer architecture to eliminate polling and boost performance",
  //   technologies: ["React"],
  //   year: "2021",
  //   images: {preview: {source: transfers, alt: "Preview of Transfers Panel"}, all: [{source: transfers, caption: "Transfer panel", alt: "Full Transfer Panel"}]},
  //   role: "Lead Frontend Engineer",
  //   timeline: "",
  //   overview: "This project was a major cross-team effort meant to improve site performance and reliability in Aspera on Cloud. Transfers are the heart of our app, but since its initial implementation, we've relied on an old pattern of polling the node to constantly check for updates (like transfer progress and data metrics). I served as the Lead Frontend Developer through all planning and implementation phases, working closely with the Frontend Team Lead on architectural strategy.",
  //   challenge: "The core challenge was migrating away from the traditional polling pattern—which, while reliable, was a constant performance drain—without compromising the user's ability to see real-time, accurate transfer updates. This required significant synchronization across the entire stack, essentially rebuilding how we ingest and display critical, live data. We needed a new solution that maintained the high frequency of updates users expected while dramatically reducing the unnecessary network chatter caused by constant polling requests.",
  //   technicalApproach: "My technical effort was focused on leading the Frontend implementation for the new data ingestion method. This involved intense collaboration with Backend Developers to ensure the new data stream (the non-polling solution) was correctly structured and integrated with our UI components. I also worked closely with QA Engineers to thoroughly validate that the new system provided transfer status and data metrics with the same, or better, accuracy and reliability as the old polling system. The goal was a drop-in replacement that was entirely transparent to the user, offering better performance behind the scenes.",
  //   reflection: [
  //     "This project reinforced how crucial cross-team alignment is when tackling foundational architecture. Moving away from polling—a pattern that was essentially baked into the application's DNA—was a massive undertaking. Serving as the Frontend lead, I learned the importance of representing the UI's needs in those larger cross-team architecture discussions. The success of this transition, marked by improved site performance, validates that sometimes the biggest performance gains come from retiring old, inefficient architectural patterns at the core of the system."
  //   ]
  // },
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
    overview: "The goal here was to create a new, streamlined view in the File application, specifically for bookmarked folders. Our customers explicitly asked for this feature to create a much smoother workflow, moving beyond the minimal, deeply nested structure we offered at the time, e.g., Root > Marvel movies > Avengers universe > Captain Marvel. This feature helps users quickly jump to the folders they care about most, regardless of how they're structured in the file hierarchy.",
    challenge: "The biggest challenge was in getting all the file data efficiently without slowing down the user experience. File information was actually split between two places: basic data from the new AoC infrastructure endpoint, and the detailed data came from the existing Node API. We had to make sure we could fetch and display an initial view quickly, then update the details (like file name or size, which might have changed) without the user seeing the whole page freeze while waiting on the heavier Node API call.",
    technicalApproach: "The implementation depended on the Backend team creating a new API endpoint within the AoC infrastructure to provide only basic file data. On the client-side, we used that basic data to render the view immediately, adn then we made separate, asynchronous calls to the Node API to bring in the details. This async, two-step method made sure the DOM never got blocked, keeping the entire application feeling fast.",
    reflection: [
      "This project was a great example of how architecture directly impacts user experience. We learned that splitting the workload into a quick basic load followed by a detailed background update was the perfect way to deal with our dual data sources. The final 'Favorites' view was super responsive, addressed a customer pain point, and proved that thought async design really pays off in performance."
    ]
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
    overview: "This project was a direct response to a customer request for better security—specifically, the ability to use their own keys for server-side encryption. Since the architecture was pretty involved and cross a lot of team boundaries, my focus wasn't solely on the code. I spent a great deal of time as the main communication channel. The frontend forms and admin setting updates were manageable, which freed me up to handle that coordination.",
    challenge: "We hit a roadblock when we considered letting users create a Key Management Service (KMS) profile directly within the Node creation page. That specific pattern was completely new and didn't exist anywhere else in our applications. If we had moved forward, it would have meant creating a new POST call, adding error handling so users didn't lose all their form data, and forcing us to rethink how we build similar pages going forward. Ultimately, we decided it was too much effort for the scope of the project and didn't deliver enough value to justify the engineering cost.",
    technicalApproach: "I executed all the necessary frontend changes for the configuration forms. The real strategy was constantly partnering with the Designer and Tech Writer to navigate the ongoing design iterations. That collaboration was the core of the UI delivery. My most impactful decision was pushing back on the KMS profile creation feature; keeping that complex, non-standard workflow out of scope allowed us to stay focused and deliver the core encryption feature more efficiently and on time.",
    reflection: [
      "My biggest takeaway from this project was how crucial communication and scoping are in a multi-team environment. The code itself was fine, but my ability to stay in constant contact with the design and documentation teams was key. It also taught me a lesson in balancing features; it's important to challenge ideas if the amount of technical debt or effort they introduce far outweigh the immediate benefit. That focus kept the project clean and successful."
    ]
  }
};
