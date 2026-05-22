import { Link } from 'react-router';
import { ArrowUpRight, Mail } from 'lucide-react';
import { ZvTerminal } from '@/web-components/react/ZvTerminal';
import { ZvSkillChip } from '@/web-components/react/ZvSkillChip';
import { SKILLS } from '@/data/skills';
import { PROJECTS } from '@/data/projects';
import GitHubIcon from '@/components/icons/GitHubIcon.tsx';
import LinkedInIcon from '@/components/icons/LinkedInIcon.tsx';

const HERO_STRINGS = [
  'Senior Software Engineer',
  'AI-era builder',
  'Frontend specialist',
  'Vibe coder',
];

const SOCIAL_LINKS = [
  { icon: GitHubIcon, href: 'https://github.com/zeniavilla', label: 'GitHub' },
  { icon: LinkedInIcon, href: 'https://www.linkedin.com/in/zeniavilla', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:zavilla90@gmail.com', label: 'Email' },
];

export default function Home() {
  const featuredProjects = Object.values(PROJECTS).filter(p => p.featured);
  const featuredSkills = SKILLS.filter(s => s.featured);

  return (
    <div>
      {/* Hero */}
      <section className="min-h-[80vh] flex flex-col justify-center px-8 md:px-10 lg:px-12 py-16 max-w-5xl mx-auto">
        <div className="space-y-6">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Software Engineer
          </p>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-foreground tracking-tight">
            Zenia Villa
          </h1>
          <div className="text-xl md:text-2xl lg:text-3xl font-light text-muted-foreground min-h-[2rem]">
            <ZvTerminal strings={HERO_STRINGS} speed={65} loop />
          </div>
          <div className="flex flex-wrap gap-3 pt-4">
            {SOCIAL_LINKS.map(link => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-foreground hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-200 font-light text-sm"
                aria-label={link.label}
              >
                <link.icon width={16} height={16} />
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="px-8 md:px-10 lg:px-12 py-16 max-w-5xl mx-auto border-t border-border">
        <div className="flex items-center justify-between mb-10">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Featured Work
          </p>
          <Link
            to="/work"
            className="text-sm font-light text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
          >
            All projects <ArrowUpRight size={14} />
          </Link>
        </div>
        <div>
          {featuredProjects.map(project => (
            <Link
              key={project.id}
              to={`/work/${project.id}`}
              className="group flex items-center justify-between py-5 border-b border-border last:border-b-0 hover:pl-4 transition-all duration-300 ease-in-out gap-4"
            >
              <div className="flex items-center gap-4 min-w-0">
                <span className="font-mono text-xs text-muted-foreground shrink-0">
                  {project.year}
                </span>
                <span className="font-light text-foreground truncate">{project.title}</span>
                {project.aiAssisted && (
                  <span className="hidden sm:block shrink-0">
                    <ZvSkillChip label="AI-assisted" variant="ai" />
                  </span>
                )}
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="hidden md:block text-sm text-muted-foreground font-light">
                  {project.tagline}
                </span>
                <ArrowUpRight
                  size={16}
                  className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Skills Snapshot */}
      <section className="px-8 md:px-10 lg:px-12 py-16 max-w-5xl mx-auto border-t border-border">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-8">
          Currently working with
        </p>
        <div className="flex flex-wrap gap-2">
          {featuredSkills.map(skill => (
            <ZvSkillChip
              key={skill.label}
              label={skill.label}
              variant={skill.category === 'ai' ? 'ai' : 'primary'}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
