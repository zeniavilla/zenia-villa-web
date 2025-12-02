import zv from '@/assets/images/pollinate-presentation.webp';
import SectionTitle from '../../components/section-title/section-title.tsx';

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

function About() {
  return (
    <div id="about" className="max-w-4xl mx-auto px-4 py-8">
      <SectionTitle title="About me" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div>
          <img
            src={zv}
            alt={ABOUT_CONTENT.imageAlt}
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-medium">{ABOUT_CONTENT.greeting}</h2>
          {ABOUT_CONTENT.intro.map((paragraph, i) => (
            <p key={i} className="text-gray-700">{paragraph}</p>
          ))}
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-5">
            {ABOUT_CONTENT.highlights.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
