import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router'
import './index.css'

import TopNavigation from './components/top-navigation/top-navigation'
import About from './components/about/about'
import Contact from './components/contact/contact'
import Resume from './components/resume/resume'
import Projects from './components/projects/all/projects'
import Footer from './components/footer/footer'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
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
  </React.StrictMode>,
)
