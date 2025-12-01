import TopNavigation from '@/components/top-navigation/top-navigation.tsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router';
import About from '@/components/about/about.tsx';
import Contact from '@/components/contact/contact.tsx';
import Resume from '@/components/resume/resume.tsx';
import Projects from '@/components/projects/all/projects.tsx';
import Footer from '@/components/footer/footer.tsx';

const App = () => {
  return (
    <Router>
      <TopNavigation />
      <div className="body">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
