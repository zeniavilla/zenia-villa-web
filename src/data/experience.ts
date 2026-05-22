export interface ExperienceItem {
  id: string;
  timeframe: string;
  title: string;
  company: string;
  isCurrent?: boolean;
  body: string[];
}

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'eluvio-experience',
    timeframe: '2021 – Present',
    title: 'Senior Software Engineer',
    company: 'Eluvio',
    isCurrent: true,
    body: [
      "Eluvio has been my initiation into the tech startup world, and it has been quite the learning curve (with just as much payoff). I have quickly learned what it means to completely own a product, building a few core applications from scratch. Since the team is lean, I have gained first-hand exposure to architectural design and have stepped into multiple roles for my own projects—from creating thoughtful designs to jumping in on manual testing and even driving them forward. More than anything, I've become more passionate about Product Engineering—developing for the user and their specific needs, rather than just focusing on the technical code requirements.",
    ],
  },
  {
    id: 'ibm-experience',
    timeframe: '2018 – 2021',
    title: 'Software Engineer',
    company: 'IBM Aspera',
    body: [
      "I joined the IBM Aspera team as it was in the beginning stages of Aspera on Cloud (AoC), a SaaS file transfer application. After doing some server-side work for web apps Faspex and Files, I had the opportunity to build features on the client-side and quickly joined the frontend development team. Throughout my time at Aspera, I've moved through the pipeline (pun intended) of fixing small bugs to implementing major features and being an active part of design + development discussions.",
      "I transitioned into working on Faspex, which I became the application lead for toward the end of my tenure. I was part of an organized effort to build new features that fully utilized the Carbon Design System. This involved more involvement in design reviews as well as fixing critical production bugs reported by customers.",
    ],
  },
  {
    id: 'transition-experience',
    timeframe: '2017',
    title: 'Transition',
    company: 'Learning web development',
    body: [
      "Coding has been a passion since high school, which resurfaced after I customized the client-side code for the AMCT Design website. While I enjoyed my previous roles, I felt ready for a new challenge. I decided to fully commit to a career change, pausing my work to dedicate seven months to intensive learning (8+ hours a day). I created a structured path using resources like Code School and Learn.co to master JavaScript, Ruby on Rails, and React. Thankfully it paid off; I transitioned into tech, moving to the Bay Area to join IBM.",
    ],
  },
  {
    id: 'marketing-experience',
    timeframe: '2012 – 2017',
    title: 'Marketing Coordinator & Manager',
    company: 'AMCT Design · Giumarra Companies',
    body: [
      "During this time, I took on various roles in different industries. Key highlights include producing major tradeshows for an internationally-recognized produce brand, driving social media strategy and content creation, building and managing a startup's website, and developing a solid background in sales. Each experience contributed to my creativity and product-minded thinking, which are skills I actively apply as a developer.",
    ],
  },
];

export const ABOUT_CONTENT = {
  intro: [
    "My name is Zenia (pronounced Zee-nee-uh). I'm a software engineer at Eluvio, with a focus on frontend.",
    "I'm pretty obsessed with the user experience, which I've focused on throughout my education and career. This healthy obsession has been the driving thread throughout my work. I've used this focus to tackle problems in wildly different fields, proving that great UX is universal:",
  ],
  highlights: [
    "My education in Apparel Merchandising & Management sparked my UX obsession. I learned the core flow of the in-store customer journey, studying how to optimize the retail environment and products to convert shoppers into customers.",
    "In Product Development for Interior Design (AMCT Design), I applied that skill by translating high-end textile concepts into simple, buildable carpet products, spearheading projects from initial design concept through development, production, and final installation.",
    "For the massively recognized Nature's Partner brand (Giumarra Companies), I managed key marketing channels—from producing major trade shows and designing retailer sales materials, to launching early consumer-focused campaigns—all to help keep the brand visible on nearly every major grocery shelf across the US and Canada.",
    "Today, in SaaS Enterprise-level Products (IBM & Eluvio), I bring this background to the frontend. As a software engineer, I'm the puzzle solver for gnarly tech (like cloud and blockchain), building intuitive interfaces from the most complex enterprise requirements.",
  ],
};
