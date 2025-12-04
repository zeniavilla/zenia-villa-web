import SectionTitle from '@/components/section-title/section-title.tsx';
import GitHubIcon from '@/components/icons/GitHubIcon.tsx';
import LinkedInIcon from '@/components/icons/LinkedInIcon.tsx';
import { Mail } from 'lucide-react';

const Home = () => {
  const socialLinks = [
    {icon: GitHubIcon, href: "https://github.com/zeniavilla", label: "github.com/zeniavilla", id: "github-link", ariaLabel: "GitHub"},
    {icon: LinkedInIcon, href: "https://www.linkedin.com/in/zeniavilla", label: "linkedin.com/in/zeniavilla", id: "linkedin-link", ariaLabel: "LinkedIn"},
    {icon: Mail, href: "mailto:zavilla90@gmail.com", label: "zavilla90@gmail.com", id: "email-link", ariaLabel: "Email"},
  ];

  return (
    <div className="max-w-4xl mx-auto px-12 md:px-10 lg:px-12 py-8">
      <div className="mb-16">
        <SectionTitle title="Zenia Villa" subtitle="Frontend Product Engineer" size="7xl" />

        {/* Contact Links */}
        <div className="flex flex-row gap-4">
          {
            socialLinks.map((link) => (
              <a
                href={link.href}
                target="_blank"
                key={link.id}
                className="rounded-full border border-border dark:border-white/30 p-4 flex items-center justify-center hover:border-foreground hover:bg-muted transition-all"
                aria-label={link.ariaLabel}
              >
                <link.icon width={18} height={18} className="text-foreground" />
              </a>
            ))
          }
        </div>
      </div>

      <div className="max-w-3xl mb-24">
        <p className="text-2xl mb-2">Oh, hey</p>
        <p className="text-xl text-foreground leading-relaxed font-light">I build digital experiences with a focus on clean code and intuitive interfaces. Currently working at <b>Eluvio</b>, previously at <b>IBM Aspera</b>.</p>
      </div>
    </div>
  );
};

export default Home;
