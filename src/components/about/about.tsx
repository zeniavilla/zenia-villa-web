import zv from '@/assets/images/pollinate-presentation.webp';
import SectionTitle from '../section-title/section-title';

function About() {
  return (
    <div id="about" className="max-w-4xl mx-auto px-4 py-8">
      <SectionTitle title="About me" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div>
          <img
            src={zv}
            alt="Zenia Villa presenting"
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Oh, hey</h2>
          <p className="text-gray-700">
            My name is Zenia (prounounced Zeen-yuh). I'm a software engineer at IBM Aspera, currently focusing on the frontend.
            I'm a fashion designer turned Marketer turned
            Developer. Web development has become my happy place and I'm
            always looking for the next challenge.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
