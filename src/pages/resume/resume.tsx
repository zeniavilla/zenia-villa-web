import SectionTitle from '../../components/section-title/section-title.tsx';
import {Button} from "@/components/ui/button";
import { Download } from 'lucide-react';
import zv from '@/assets/images/pollinate-presentation.webp';
import resume from '@/assets/docs/zenia-villa-resume.pdf';

interface ResumeData {
  timeframe: string;
  title: string;
  company: string;
  body: string[];
}

const ABOUT_CONTENT = {
  greeting: "Oh, hey",
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

const resumeData: ResumeData[] = [
  {
    timeframe: '2018 - Present',
    title: 'Software Engineer I && II',
    company: 'IBM Aspera',
    body: [
      "I joined the IBM Aspera team as it was in the beginning stages of Aspera on Cloud (AoC), a SaaS file transfer application. After doing some server-side work for web apps Faspex and Files, I had the opportunity to build features on the client-side and quickly joined the front-end development team. Throughout my time at Aspera, I've moved through the pipeline (pun intended) of fixing small bugs to implementing major features and being an active part of design-development discussions (I love accidental alliteration).",
      "Recently, the front-end team has expanded into working on Faspex, which involves building new features that fully utilize the Carbon Design System. In a typical week, I'll work in tandem with members of the design, back-end, devtest, and/or microcopy teams. From time to time, I fix critical bugs that may come up in production. I also stay actively involved in design reviews."
    ],
  },
  {
    timeframe: '2017',
    title: 'Transition',
    company: 'Learning web development',
    body: [
      "Coding had been on my mind since I took a Computer Science class in high school. After creating the website for AMCT Design using Joomla and customizing the client-side code, I took a few online classes and kept wondering if I could make it a career. My career had taken me down a path that left me feeling unchallenged. With the support of my family, I stopped working and started to learn how to code in JavaScript. I paid for various types of memberships including Code School and Learn.co and found some strucutre to learn JS, Ruby on Rails, and React. It was 8+ days five days a week for seven months and then applying aggressively. I ended up moving to the Bay area after accepting a role at IBM and it ended up being the best opportunity."
    ],
  },
  {
    timeframe: '2012 - 2017',
    title: 'Marketing Coordinator & Manager',
    company: 'AMCT Design | Giumarra Companies',
    body: [
      "During this time, I took on various roles in different industries. The highlights include producing tradeshows for an internationally-recognized produce brand, social media strategy and content, creating and managing a startup's website, and sales. A lot of the creativity and being product-minded has carried over into my work as a developer. Moreover, these years helped me realize my love of and talent for working closely with people."
    ],
  },
];

function Resume() {
  return (
    <div className="max-w-4xl mx-auto pb-8">
      <SectionTitle
        title="Resume"
        description="Frontend engineer with a unique journey through retail, product design, and marketing—bringing a decade of UX thinking to building intuitive web experiences."
        image={zv}
        imageAlt="Zenia Villa presenting"
        button={
          <Button asChild variant="outline" className="flex items-center gap-2 px-6 py-3 border border-gray-200 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all text-gray-900 font-light group">
            <a href={resume} download="zenia-villa-resume.pdf">
              Download PDF
              <Download />
            </a>
          </Button>
        }
        border
      />

      {/* Background */}
      <div className="max-w-5xl mx-auto px-8 py-16">
        <section className="mb-24">
          <h2 className="text-4xl font-light text-gray-900 mb-8">
            Background
          </h2>
          <div className="space-y-6 text-gray-700 font-light text-lg leading-relaxed max-w-4xl">
            {
              ABOUT_CONTENT.intro.map(item => (
                <p>{item}</p>
              ))
            }
            <div className="space-y-4 pl-6 border-l-2 border-gray-200">
              {
                ABOUT_CONTENT.highlights.map(item => (
                  <p>{item}</p>
                ))
              }
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Resume;
