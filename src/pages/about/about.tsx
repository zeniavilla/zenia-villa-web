import { ArrowUpRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionTitle from '@/components/section-title/section-title.tsx';
import { ZvSkillChip } from '@/web-components/react/ZvSkillChip';
import { ZvTimelineEntry } from '@/web-components/react/ZvTimelineEntry';
import { useScrollFade } from '@/hooks/useScrollFade';
import { EXPERIENCE_DATA, ABOUT_CONTENT } from '@/data/experience';
import { SKILLS, SKILL_GROUPS } from '@/data/skills';
import GitHubIcon from '@/components/icons/GitHubIcon.tsx';
import LinkedInIcon from '@/components/icons/LinkedInIcon.tsx';
import { Mail } from 'lucide-react';
import zv from '@/assets/images/pollinate-presentation.webp';
import resume from '@/assets/docs/zenia-villa-resume.pdf';

const SOCIAL_LINKS = [
  { icon: GitHubIcon, href: 'https://github.com/zeniavilla', label: 'github.com/zeniavilla' },
  { icon: LinkedInIcon, href: 'https://www.linkedin.com/in/zeniavilla', label: 'linkedin.com/in/zeniavilla' },
  { icon: Mail, href: 'mailto:zavilla90@gmail.com', label: 'zavilla90@gmail.com' },
];

function Background() {
  const { ref, isVisible } = useScrollFade(0.1);
  return (
    <div
      ref={ref}
      className={`py-12 md:py-16 lg:py-20 border-b border-border transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <section>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-foreground mb-6 md:mb-8">
          How I got here
        </h2>
        <div className="space-y-4 md:space-y-6 text-foreground font-light text-base md:text-lg leading-relaxed max-w-4xl">
          {ABOUT_CONTENT.intro.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
          <div className="space-y-4 pl-6 border-l-2 border-border">
            {ABOUT_CONTENT.highlights.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Experience() {
  const { ref, isVisible } = useScrollFade(0.1);
  return (
    <div
      ref={ref}
      className={`py-12 md:py-16 lg:py-20 border-b border-border transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <section>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-foreground mb-10 md:mb-12">
          Experience
        </h2>
        <div>
          {EXPERIENCE_DATA.map(item => (
            <ZvTimelineEntry
              key={item.id}
              date={item.timeframe}
              title={item.title}
              company={item.company}
              isCurrent={item.isCurrent}
            >
              {item.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </ZvTimelineEntry>
          ))}
        </div>
      </section>
    </div>
  );
}

function Skills() {
  const { ref, isVisible } = useScrollFade(0.1);
  return (
    <div
      ref={ref}
      className={`py-12 md:py-16 lg:py-20 border-b border-border transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <section>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-foreground mb-6 md:mb-8">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {SKILL_GROUPS.map(group => {
            const groupSkills = SKILLS.filter(s => s.category === group.category);
            return (
              <div key={group.category}>
                <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {groupSkills.map(skill => (
                    <ZvSkillChip
                      key={skill.label}
                      label={skill.label}
                      variant={skill.category === 'ai' ? 'ai' : 'primary'}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

function GetInTouch() {
  const { ref, isVisible } = useScrollFade(0.1);
  return (
    <div
      ref={ref}
      className={`py-12 md:py-16 lg:py-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <section>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-foreground mb-6 md:mb-8">
          Get in Touch
        </h2>
        <div className="flex flex-col gap-4 md:gap-6 mt-6 md:mt-8">
          {SOCIAL_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground text-base md:text-lg font-light leading-5 flex items-center gap-3 group w-fit hover:translate-x-3 transition-transform duration-300 ease-in-out hover:text-foreground"
            >
              <link.icon height={22} width={22} className="text-muted-foreground group-hover:text-foreground transition-colors" />
              {link.label}
              <ArrowUpRight
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                height={16}
                width={16}
              />
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-8 md:px-10 lg:px-12 pb-6 md:pb-8">
      <SectionTitle
        title="About"
        description="Frontend engineer with a unique journey through retail, product design, and marketing—bringing a decade of UX thinking to building intuitive web experiences."
        image={zv}
        imageAlt="Zenia Villa presenting"
        button={
          <Button
            asChild
            variant="outline"
            className="flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:border-foreground hover:bg-muted transition-all text-foreground font-light group hover:scale-110 duration-300 ease-in-out"
          >
            <a href={resume} download="zenia-villa-resume.pdf">
              Download PDF
              <Download size={16} />
            </a>
          </Button>
        }
        border
      />

      <Background />
      <Experience />
      <Skills />
      <GetInTouch />
    </div>
  );
}
