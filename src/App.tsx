import TopNavigation from '@/components/top-navigation/top-navigation.tsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router';
import Resume from '@/pages/resume/resume.tsx';
import Projects from '@/pages/projects/all/projects.tsx';
import Footer from '@/components/footer/footer.tsx';
import Home from '@/pages/home/home.tsx';
import ProjectDetails from '@/pages/projects/details/project-details.tsx';
import { ThemeProvider } from '@/components/theme-provider.tsx';

const App = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="zv-ui-theme">
      <Router>
        <div className="min-h-screen flex flex-col">
          <TopNavigation />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetails />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
