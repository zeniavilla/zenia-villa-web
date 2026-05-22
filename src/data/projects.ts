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
  'ingest-pipeline': {
    id: 'ingest-pipeline',
    color: 'green',
    category: 'work-eluvio',
    featured: false,
    title: 'Ingest Pipeline Optimization',
    tagline: 'Cut blockchain transaction costs 65% by refactoring from fragmented writes to a single-token session model',
    technologies: ['JavaScript', 'Node.js', 'Blockchain', 'Eluvio Content Fabric'],
    year: '2025',
    role: 'Lead Frontend Engineer',
    overview:
      "At Eluvio, media ingest is the critical path: assets can't be watched until they're fully committed to the Content Fabric. The original implementation was optimized for simplicity, not for scale. Every sub-task in the ingest pipeline — adding metadata, indexing the file, registering the asset — requested its own write token and waited for the blockchain fabric to finalize before proceeding. At a few uploads a day, this was manageable. At customer scale, it was unsustainable.",
    challenge:
      "The architecture was too chatty. Each write had its own confirmation round, creating stop-and-go latency throughout the pipeline. More critically, since every write operation on the blockchain fabric carries a gas cost, running 4–5 separate transactions per ingest file was economically unsound as we scaled. A customer ingesting 1,000 media assets monthly was paying roughly $30,000 in pure transaction overhead — most of it avoidable. The old model: 4 separate transactions × 100,000 gas each = 400,000 gas per ingest.",
    technicalApproach:
      "I refactored the ingest logic to operate under a single write token session. Instead of opening and committing multiple small transactions, the system now groups all operations — metadata writes, file indexing, asset registration — into a single batched payload committed once at finalization. I built state management to keep the write token active and valid across different background tasks, and added a cleanup process to handle failed jobs correctly and prevent orphaned data on the fabric. The write token opens once, does all its work, and commits when everything is ready. The new model: 1 transaction × 130,000 gas (batching adds a small overhead) = 130,000 gas per ingest.",
    reflection: [
      "The numbers made the case clearly: consolidating from 4 transactions to 1 reduced per-ingest gas by ~270,000 units — a 65–70% reduction. At standard gas prices and ETH at $2,500, that dropped the per-upload cost from approximately $30 to $9.75. For a customer ingesting 1,000 assets per month, that's the difference between $30,000 and $10,000 in monthly fees — roughly $240,000 in annual savings from a single refactor.",
      "This project reinforced that performance optimization at the infrastructure level has compounding effects. Faster finalization improved time-to-play for end users because the system no longer had to wait for multiple confirmation rounds. Reduced load on the network allowed the system to handle more concurrent uploads. The engineering effort was contained; the business impact was significant.",
    ],
  },
  'live-stream-profiles': {
    id: 'live-stream-profiles',
    color: 'orange',
    category: 'work-eluvio',
    featured: true,
    title: 'Live Stream Automation & Profile System',
    tagline: 'Reduced live event setup time from 2+ hours to 10 minutes with a reusable 3-layer profile architecture',
    technologies: ['JavaScript', 'Node.js', 'API Design', 'Eluvio Content Fabric', 'CLI Tools'],
    year: '2026',
    role: 'Lead Frontend Engineer',
    overview:
      "Large live events at Eluvio involve configuring dozens to hundreds of simultaneous streams — each requiring precise settings for A/V ladders, DRM types, TTLs, and reconnect timeouts. Before this project, every stream was configured manually from scratch. Setting up a major event with multiple live streams could take a single operator 2–3 hours of uninterrupted work, and a single misconfiguration could cause stream failure or a DRM security vulnerability.",
    challenge:
      "There was no source of truth for stream configurations. Without a reusable template system, consistency across 50+ concurrent streams was impossible to guarantee. Every setup was a bespoke, high-stakes manual process. Operators were spending hours on repetitive configuration work instead of focusing on running the event, and the risk of configuration drift increased with every deployment. The complexity made it nearly impossible to onboard non-engineers to stream management tasks.",
    technicalApproach:
      "I expanded the elv-client-js API surface to support a profile-based configuration system built around a 3-layer merge strategy: the stored profile template, stream-specific live state, and operator overrides are deep-merged in order, with each layer winning over the previous where it has a value. Profiles are stored as content-addressed metadata on a 'Site Object' — every change is versioned and immutable, giving live broadcast environments a built-in audit trail. I built lifecycle management that automatically opens write tokens on both stream and site objects when a profile is applied, performs the configuration merge, and stamps a profile_last_updated tag for tracking. A concurrency-limited worker pool handles bulk updates (10–15 concurrent writes), and a monitoring UI shows profile sync status across all streams with visual drift detection based on configuration hash comparison.",
    reflection: [
      "The 3-layer merge was the key architectural decision. A naive 'copy template' approach would have created configuration drift immediately — the moment a profile changed, all streams built from it would be stale. The merge relationship means profile updates propagate automatically on the next 'Apply' call while still allowing local exceptions (like a unique reconnect timeout for a specific encoder at a specific venue). It separates global standards from local exceptions, which is exactly what live broadcast operations need.",
      "The result was a 92% reduction in bulk event setup time — from 180 minutes to 10 minutes — and near-zero configuration errors. Operators moved from debugging JSON in a terminal during a live event to monitoring a dashboard with color-coded sync indicators. That shift in operational experience was the real win.",
      "Building for broadcast requires a 'measure twice, cut once' mindset. I added validation schemas for dry-run merge checks before any write token is finalized, an explicit --confirm flag for bulk CLI operations, and the configuration drift detection system. When you're managing 100 streams simultaneously during a live event, the cost of a silent error is too high to skip the guardrails.",
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
      "This site is a complete ground-up rebuild of my personal portfolio. The goal was to move beyond a static resume-on-a-page and build something that reflects how I actually work as an engineer in 2026—using the best tools available, thinking carefully about architecture, and being transparent about process. The stack is React + TypeScript + Tailwind CSS v4, with three hand-built Lit web components showcasing my familiarity with the web platform beyond any single framework.",
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
