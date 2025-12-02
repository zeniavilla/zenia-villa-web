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
    <div className="max-w-4xl mx-auto px-4 py-8">
      <SectionTitle title="Zenia Villa" subtitle="Frontend Product Engineer" />
      <div className="flex flex-row gap-4">
        {
          socialLinks.map((link) => (
            <a
              href={link.href}
              target="_blank"
              key={link.id}
              className="rounded-full border border-gray-200 p-4 flex items-center justify-center hover:border-gray-400 hover:bg-gray-50 transition-all"
              aria-label={link.ariaLabel}
            >
              <link.icon width={18} height={18} className="text-gray-600" />
            </a>
          ))
        }
      </div>
    </div>
  );
};

export default Home;
