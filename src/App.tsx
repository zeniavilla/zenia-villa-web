import { lazy, Suspense, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigationType } from 'react-router';
import { ThemeProvider } from '@/components/theme-provider.tsx';
import { CursorSpotlight } from '@/components/cursor-spotlight/cursor-spotlight.tsx';
import TopNavigation from '@/components/top-navigation/top-navigation.tsx';
import Footer from '@/components/footer/footer.tsx';

// Disable browser scroll restoration globally — we manage it manually.
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

function ScrollToTop() {
  const location = useLocation();
  const navType = useNavigationType();
  const positions = useRef<Record<string, number>>({});

  useEffect(() => {
    if (navType === 'POP') {
      const y = positions.current[location.key] ?? 0;
      // setTimeout waits for the lazy-loaded page component to finish
      // rendering (rAF fires too early — before Suspense resolves).
      setTimeout(() => window.scrollTo(0, y), 0);
    } else {
      window.scrollTo(0, 0);
    }

    return () => {
      positions.current[location.key] = window.scrollY;
    };
  }, [location.key, navType]);

  return null;
}

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
          <ScrollToTop />
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
