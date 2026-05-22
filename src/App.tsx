import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router';
import { ThemeProvider } from '@/components/theme-provider.tsx';
import { CursorSpotlight } from '@/components/cursor-spotlight/cursor-spotlight.tsx';
import TopNavigation from '@/components/top-navigation/top-navigation.tsx';
import Footer from '@/components/footer/footer.tsx';

const Home = lazy(() => import('@/pages/home/home.tsx'));
const About = lazy(() => import('@/pages/about/about.tsx'));
const Work = lazy(() => import('@/pages/work/work.tsx'));
const WorkDetail = lazy(() => import('@/pages/work/work-detail.tsx'));
const BuiltWithAI = lazy(() => import('@/pages/built-with-ai/built-with-ai.tsx'));

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="zv-ui-theme">
      <Router>
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-background via-background to-muted/10">
          <CursorSpotlight />
          <TopNavigation />
          <main className="flex-grow">
            <Suspense fallback={null}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/work" element={<Work />} />
                <Route path="/work/:id" element={<WorkDetail />} />
                <Route path="/built-with-ai" element={<BuiltWithAI />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
