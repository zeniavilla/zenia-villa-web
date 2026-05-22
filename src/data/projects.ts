import byok1 from '@/assets/images/byok1.webp';
import byok2 from '@/assets/images/byok2.webp';
import byok1Preview from '@/assets/images/byok1-preview.png';
import favorites from '@/assets/images/favorites.webp';
import favoritesPreview from '@/assets/images/favorites-preview.png';

export type ProjectCategory = 'work-ibm' | 'work-eluvio' | 'personal' | 'meta';

export interface ProjectImage {
  source: string;
  caption?: string;
  alt: string;
}

export interface ProjectDataItem {
  id: string;
  color: string;
  category: ProjectCategory;
  featured: boolean;
  aiAssisted?: boolean;
  liveUrl?: string;
  githubUrl?: string;
  title: string;
  tagline: string;
  year: string;
  images?: { preview: ProjectImage; all: ProjectImage[] };
  technologies: string[];
  role?: string;
  timeline?: string;
  overview: string;
  challenge: string;
  technicalApproach: string;
  reflection: string[];
}

export type ProjectData = Record<string, ProjectDataItem>;

export const colorClasses: Record<string, { background: string; icon: string }> = {
  violet: { background: 'bg-gradient-to-r hover:from-violet-500/10 hover:to-purple-500/10', icon: 'group-hover:text-violet-600' },
  blue: { background: 'bg-gradient-to-r hover:from-blue-500/10 hover:to-cyan-500/10', icon: 'group-hover:text-cyan-600' },
  green: { background: 'bg-gradient-to-r hover:from-green-500/10 hover:to-emerald-500/10', icon: 'group-hover:text-green-600' },
  orange: { background: 'bg-gradient-to-r hover:from-orange-500/10 hover:to-amber-500/10', icon: 'group-hover:text-orange-600' },
  pink: { background: 'bg-gradient-to-r hover:from-pink-500/10 hover:to-rose-500/10', icon: 'group-hover:text-pink-600' },
  indigo: { background: 'bg-gradient-to-r hover:from-indigo-500/10 hover:to-violet-500/10', icon: 'group-hover:text-indigo-600' },
};

export const PROJECTS: ProjectData = {
  'favorite-files': {
    id: 'favorite-files',
    color: 'blue',
    category: 'work-ibm',
    featured: true,
    title: 'Favorite Files',
    tagline: 'Created folder bookmarking feature for quick access to frequently used files',
    technologies: ['React', 'Carbon Design System'],
    year: '2020',
    images: {
      preview: { source: favoritesPreview, alt: 'Preview of Favorites Feature' },
      all: [{ source: favorites, caption: 'Favorite file view', alt: 'Full Favorite File View' }],
    },
    role: 'Lead Frontend Engineer',
    timeline: '3 Months',
    overview:
      "The goal here was to create a new, streamlined view in the File application, specifically for bookmarked folders. Our customers explicitly asked for this feature to create a much smoother workflow, moving beyond the minimal, deeply nested structure we offered at the time, e.g., Root > Marvel movies > Avengers universe > Captain Marvel. This feature helps users quickly jump to the folders they care about most, regardless of how they're structured in the file hierarchy.",
    challenge:
      "The biggest challenge was in getting all the file data efficiently without slowing down the user experience. File information was actually split between two places: basic data from the new AoC infrastructure endpoint, and the detailed data came from the existing Node API. We had to make sure we could fetch and display an initial view quickly, then update the details (like file name or size, which might have changed) without the user seeing the whole page freeze while waiting on the heavier Node API call.",
    technicalApproach:
      "The implementation depended on the Backend team creating a new API endpoint within the AoC infrastructure to provide only basic file data. On the client-side, we used that basic data to render the view immediately, and then we made separate, asynchronous calls to the Node API to bring in the details. This async, two-step method made sure the DOM never got blocked, keeping the entire application feeling fast.",
    reflection: [
      "This project was a great example of how architecture directly impacts user experience. We learned that splitting the workload into a quick basic load followed by a detailed background update was the perfect way to deal with our dual data sources. The final 'Favorites' view was super responsive, addressed a customer pain point, and proved that thoughtful async design really pays off in performance.",
    ],
  },
  'key-management': {
    id: 'key-management',
    color: 'violet',
    category: 'work-ibm',
    featured: true,
    title: 'Key Management Integration',
    tagline: 'Built frontend for bring-your-own-key encryption integration',
    technologies: ['React', 'Carbon Design System'],
    year: '2020',
    images: {
      preview: { source: byok1Preview, alt: 'Preview of Key Management Integration' },
      all: [
        { source: byok1, caption: 'View for creating a new KMS profile', alt: 'New KMS Profile View' },
        { source: byok2, caption: 'Add input option to connect KMS profile with new and existing nodes.', alt: 'KMS Profile Input Option' },
      ],
    },
    role: 'Lead Frontend Engineer',
    timeline: '5 Months',
    overview:
      "This project was a direct response to a customer request for better security—specifically, the ability to use their own keys for server-side encryption. Since the architecture was pretty involved and crossed a lot of team boundaries, my focus wasn't solely on the code. I spent a great deal of time as the main communication channel. The frontend forms and admin setting updates were manageable, which freed me up to handle that coordination.",
    challenge:
      "We hit a roadblock when we considered letting users create a Key Management Service (KMS) profile directly within the Node creation page. That specific pattern was completely new and didn't exist anywhere else in our applications. If we had moved forward, it would have meant creating a new POST call, adding error handling so users didn't lose all their form data, and forcing us to rethink how we build similar pages going forward. Ultimately, we decided it was too much effort for the scope of the project and didn't deliver enough value to justify the engineering cost.",
    technicalApproach:
      "I executed all the necessary frontend changes for the configuration forms. The real strategy was constantly partnering with the Designer and Tech Writer to navigate the ongoing design iterations. That collaboration was the core of the UI delivery. My most impactful decision was pushing back on the KMS profile creation feature; keeping that complex, non-standard workflow out of scope allowed us to stay focused and deliver the core encryption feature more efficiently and on time.",
    reflection: [
      "My biggest takeaway from this project was how crucial communication and scoping are in a multi-team environment. The code itself was fine, but my ability to stay in constant contact with the design and documentation teams was key. It also taught me a lesson in balancing features; it's important to challenge ideas if the amount of technical debt or effort they introduce far outweigh the immediate benefit. That focus kept the project clean and successful.",
    ],
  },
  'zenia-villa-web': {
    id: 'zenia-villa-web',
    color: 'indigo',
    category: 'meta',
    featured: true,
    aiAssisted: true,
    liveUrl: 'https://zeniavilla.com',
    githubUrl: 'https://github.com/zeniavilla/zenia-villa-web',
    title: 'This Portfolio',
    tagline: 'Rebuilt from scratch with React, Lit web components, and Claude as a collaborator',
    technologies: ['React', 'TypeScript', 'Lit', 'Tailwind CSS', 'Claude'],
    year: '2025',
    role: 'Engineer & Designer',
    timeline: 'Ongoing',
    overview:
      "This site is a complete ground-up rebuild of my personal portfolio. The goal was to move beyond a static resume-on-a-page and build something that reflects how I actually work as an engineer in 2025—using the best tools available, thinking carefully about architecture, and being transparent about process. The stack is React + TypeScript + Tailwind CSS v4, with three hand-built Lit web components showcasing my familiarity with the web platform beyond any single framework.",
    challenge:
      "The interesting design challenge was figuring out how to honestly represent AI-assisted development without it feeling like a crutch or a footnote. There's a real temptation to either over-claim or under-claim. The actual truth is more interesting: Claude was the planning partner, TypeScript compiler, and rubber duck—but every design decision, every content choice, and every judgment call was mine. The site needed to embody that nuance.",
    technicalApproach:
      "The architecture was planned collaboratively in a design session with Claude before writing a single line of code. The three Lit web components—a skill chip, a terminal typer, and a timeline entry—were chosen because they're the cleanest demonstration of why web components exist: self-contained, shadow-DOM-encapsulated, and framework-agnostic. They use CSS custom properties to read theme tokens from the host document, so dark/light mode just works. React wraps each one for clean JSX usage and event bridging.",
    reflection: [
      "The meta-level insight from building this is that AI-assisted development is genuinely different from the hype on both sides. It didn't write the site; it helped me think through the site faster and with more rigor. The planning session that produced the architecture document is evidence of that—I came in with a vague idea and left with a specific, defensible plan.",
      "The 'vibe coded' framing, while catchy, sells the process short. A better frame: I used Claude the way a senior engineer uses a tech lead—as a sounding board who knows a lot, can generate options quickly, but ultimately defers to your judgment on what matters.",
    ],
  },
};
