import SectionTitle from '../../components/section-title/section-title.tsx';
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import { ArrowUpRight, Download, Mail } from 'lucide-react';
import zv from '@/assets/images/pollinate-presentation.webp';
import resume from '@/assets/docs/zenia-villa-resume.pdf';
import GitHubIcon from '@/components/icons/GitHubIcon.tsx';
import LinkedInIcon from '@/components/icons/LinkedInIcon.tsx';
import { useScrollFade } from '@/hooks/useScrollFade';

interface ExperienceData {
  id: string;
  timeframe: string;
  title: string;
  company: string;
  body: string[];
}

interface SocialLink {
  icon: React.ComponentType<{ width?: number; height?: number; className?: string }>;
  href: string;
  label: string;
  id: string;
}

const ABOUT_CONTENT = {
  intro: [
    "My name is Zenia (prounounced Zee-nee-uh). I'm a software engineer at Eluvio, with a focus on frontend.",
    "I'm pretty obsessed with the user experience, which I've focused on throughout my education and career. This healthy obsession has been the driving thread throughout my career. I've used this focus to tackle problems in wildly different fields, proving that great UX is universal:"
  ],
  highlights: [
    "My education in Apparel Merchandising & Management sparked my UX obsession. I learned the core flow of the in-store customer journey, studying how to optimize the retail environment and products to convert shoppers into customers.",
    "In Product Development for Interior Design (AMCT Design), I applied that skill by translating high-end textile concepts into simple, buildable carpet products, spearheading projects from initial design concept through development, production, and final installation.",
    "For the massively recognized Nature's Partner brand (Giumarra Companies), I managed key marketing channels—from producing major trade shows and designing retailer sales materials, to launching early consumer-focused campaigns--all to help keep the brand visible on nearly every major grocery shelf across the US and Canada.",
    "Today, in SaaS Enterprise-level Products (IBM & Eluvio), I bring this background to the frontend. As a software engineer, I'm the puzzle solver for gnarly tech (like cloud and blockchain), building intuitive interfaces from the most complex enterprise requirements."
  ],
  imageAlt: "Zenia Villa presenting"
};

const SOCIAL_LINKS: SocialLink[] = [
  {icon: GitHubIcon, href: "https://github.com/zeniavilla", label: "github.com/zeniavilla", id: "github-link"},
  {icon: LinkedInIcon, href: "https://www.linkedin.com/in/zeniavilla", label: "linkedin.com/in/zeniavilla", id: "linkedin-link"},
  {icon: Mail, href: "mailto:zavilla90@gmail.com", label: "zavilla90@gmail.com", id: "email-link"}
];

const EXPERIENCE_DATA: ExperienceData[] = [
  {
    id: "eluvio-experience",
    timeframe: '2021 - Present',
    title: 'Senior Software Engineer',
    company: 'Eluvio',
    body: [
      "Eluvio has been my initiation into the tech startup world, and it has been quite the learning curve (with just as much payoff). I have quickly learned what it means to completely own a product, building a few core applications from scratch. Since the team is lean, I have gained first-hand exposure to architectural design and have stepped into multiple roles for my own projects—from creating thoughtful designs to jumping in on manual testing and even driving them forward. More than anything, I've become more passionate about Product Engineering—developing for the user and their specific needs, rather than just focusing on the technical code requirements."
    ]
  },
  {
    id: "ibm-experience",
    timeframe: '2018 - 2021',
    title: 'Software Engineer',
    company: 'IBM Aspera',
    body: [
      "I joined the IBM Aspera team as it was in the beginning stages of Aspera on Cloud (AoC), a SaaS file transfer application. After doing some server-side work for web apps Faspex and Files, I had the opportunity to build features on the client-side and quickly joined the frontend development team. Throughout my time at Aspera, I've moved through the pipeline (pun intended) of fixing small bugs to implementing major features and being an active part of design + development discussions (I love accidental alliteration).",
      "I transitioned into working on Faspex, which I became the application lead for toward the end of my tenure. I was part of an organized effort to build new features that fully utilized the Carbon Design System. This involved more involvement in design reviews as well as fixing critical production bugs reported by customers."
    ],
  },
  {
    id: "transition-experience",
    timeframe: '2017',
    title: 'Transition',
    company: 'Learning web development',
    body: [
      "Coding has been a passion since high school, which resurfaced after I customized the client-side code for the AMCT Design website. While I enjoyed my previous roles, I felt ready for a new challenge. I decided to fully commit to a career change, pausing my work to dedicate seven months to intensive learning (8+ hours a day). I created a structured path using resources like Code School and Learn.co to master JavaScript, Ruby on Rails, and React. Thankfully it paid off; I transitioned into tech, moving to the Bay Area to join IBM."
    ],
  },
  {
    id: "marketing-experience",
    timeframe: '2012 - 2017',
    title: 'Marketing Coordinator & Manager',
    company: 'AMCT Design | Giumarra Companies',
    body: [
      "During this time, I took on various roles in different industries. Key highlights include producing major tradeshows for an internationally-recognized produce brand, driving social media strategy and content creation, building and managing a startup's website, and developing a solid background in sales. Each experience contributed to my creativity and product-minded thinking, which are skills I actively apply as a developer. Moreover, these years showed me how much I love working closely with people."
    ],
  },
];

const SKILLS: {label: string, values: string[], id: string}[] = [
  {label: "Languages", values: ["JavaScript", "TypeScript", "HTML", "CSS"], id: "skill-languages"},
  {label: "Frameworks & Libraries", values: ["React", "Node.js", "MobX"], id: "skill-frameworks"},
  {label: "UI & Design Systems", values: ["Carbon Design System", "shadcn/ui", "Mantine", "Tailwind CSS"], id: "skill-ui-design-systems"},
  {label: "Tools & Platforms", values: ["Git", "Figma", "Storybook", "Webpack", "Vite"], id: "skill-tools"}
];

function Background() {
  const { ref, isVisible } = useScrollFade(0.1);

  return (
    <div
      ref={ref}
      className={`max-w-5xl mx-auto py-12 md:py-16 lg:py-20 border-b border-border dark:border-white/60 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <section>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-foreground mb-6 md:mb-8">
          Background
        </h2>
        <div className="space-y-4 md:space-y-6 text-foreground font-light text-base md:text-lg leading-relaxed max-w-4xl">
          {
            ABOUT_CONTENT.intro.map(item => (
              <p>{item}</p>
            ))
          }
          <div className="space-y-4 pl-6 border-l-2 border-border dark:border-white/60">
            {
              ABOUT_CONTENT.highlights.map(item => (
                <p>{item}</p>
              ))
            }
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
      className={`py-12 md:py-16 lg:py-20 border-b border-border dark:border-white/60 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <section>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-foreground mb-6 md:mb-8">
          Experience
        </h2>
        <div className="space-y-8 md:space-y-12">
          {
            EXPERIENCE_DATA.map(item => (
              <div key={item.id} className="space-y-4 border-l-2 border-border dark:border-white/60 pl-6">
                <div className="flex flex-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-normal text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xl text-muted-foreground font-light mb-2">
                      {item.company}
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground font-light">
                    {item.timeframe}
                  </span>
                </div>
                {
                  item.body.map((para, i) => (
                    <p className="text-foreground font-light text-lg leading-relaxed" key={`paragraph-${i}`}>{para}</p>
                  ))
                }
              </div>
            ))
          }
        </div>
      </section>
    </div>
  );
}

function SkillSet({label, tags}: {label: string, tags: string[]}) {
  return (
    <div>
      <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-normal">{label}</h3>
      <div className="w-full flex flex-wrap gap-2">
        {
          tags.map((tag, i) => (
            <Badge key={`${tag}-${i}`} variant="secondary" className="bg-muted">{tag}</Badge>
          ))
        }
      </div>
    </div>
  );
}

function Skills() {
  const { ref, isVisible } = useScrollFade(0.1);

  return (
    <div
      ref={ref}
      className={`py-12 md:py-16 lg:py-20 border-b border-border dark:border-white/60 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <section>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-foreground mb-6 md:mb-8">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {
            SKILLS.map(skill => (
              <SkillSet key={skill.id} label={skill.label} tags={skill.values} />
            ))
          }
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
          {
            SOCIAL_LINKS.map(link => (
              <a href={link.href} target="_blank" className="text-muted-foreground text-base md:text-lg font-light leading-5 hover:opacity-100 flex items-center gap-3 group w-fit hover:translate-x-3 transition:transform duration-300 ease-in-out">
                <link.icon height={22} width={22} className="text-muted-foreground" />
                {link.label}
                <ArrowUpRight className="text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:slide-in-from-start-translate-full duration-300 ease-in-out transition-transform" height={16} width={16} />
              </a>
            ))
          }
        </div>
      </section>
    </div>
  );
}

function Resume() {
  return (
    <div className="max-w-4xl mx-auto px-12 md:px-10 lg:px-12 pb-6 md:pb-8">
      <SectionTitle
        title="Resume"
        description="Frontend engineer with a unique journey through retail, product design, and marketing—bringing a decade of UX thinking to building intuitive web experiences."
        image={zv}
        imageAlt="Zenia Villa presenting"
        button={
          <Button asChild variant="outline" className="flex items-center gap-2 px-6 py-3 border border-border dark:border-white/30 rounded-lg hover:border-foreground hover:bg-muted transition-all text-foreground font-light group hover:scale-110 duration-300 ease-in-out">
            <a href={resume} download="zenia-villa-resume.pdf">
              Download PDF
              <Download />
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

export default Resume;
