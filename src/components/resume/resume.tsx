import React from 'react';
import SectionTitle from '../section-title/section-title';
import pdf from '../../docs/zv-resume.pdf';

interface ResumeData {
  timeframe: string;
  title: string;
  company: string;
  body: string[];
}

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
    <div className="max-w-4xl mx-auto px-4 py-8">
      <SectionTitle title="Resume" />
      <a
        href={pdf}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mb-8 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 no-underline"
      >
        Download CV
      </a>
      {resumeData.map(data => (
        <div key={data.timeframe} className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold mb-1">{data.timeframe}</h3>
          <p className="text-sm uppercase text-gray-600 mb-1">{data.title}</p>
          <p className="text-sm uppercase text-gray-600 mb-4">{data.company}</p>
          {data.body.map((paragraph, index) => (
            <p key={index} className="text-sm text-gray-700 mb-3">
              {paragraph}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Resume;
