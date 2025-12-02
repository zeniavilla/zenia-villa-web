import TopNavigation from '@/components/top-navigation/top-navigation.tsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router';
import About from '@/pages/about/about.tsx';
import Contact from '@/pages/contact/contact.tsx';
import Resume from '@/components/resume/resume.tsx';
import Projects from '@/pages/projects/all/projects.tsx';
import Footer from '@/components/footer/footer.tsx';
import Home from '@/pages/home/home.tsx';

const App = () => {
  return (
    <Router>
      <TopNavigation />
      <div className="body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
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
