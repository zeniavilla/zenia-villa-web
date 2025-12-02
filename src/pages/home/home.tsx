import SectionTitle from '@/components/section-title/section-title.tsx';
import GitHubIcon from '@/components/icons/GitHubIcon.tsx';
import LinkedInIcon from '@/components/icons/LinkedInIcon.tsx';
import { Mail } from 'lucide-react';

const Home = () => {
  const socialLinks = [
    {icon: GitHubIcon, href: "https://github.com/zeniavilla", label: "github.com/zeniavilla", id: "github-link"},
    {icon: LinkedInIcon, href: "https://www.linkedin.com/in/zeniavilla", label: "linkedin.com/in/zeniavilla", id: "linkedin-link"},
    {icon: Mail, href: "mailto:zavilla90@gmail.com", label: "zavilla90@gmail.com", id: "email-link"}
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <SectionTitle title="Zenia Villa" subtitle="Frontend Product Engineer" />
      <div className="flex flex-row gap-3">
        {
          socialLinks.map((link) => (
            <div key={link.id} className="rounded-full border-gray-200 border-2 p-4">
              <link.icon />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Home;
