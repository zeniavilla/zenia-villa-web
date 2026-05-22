import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '@/App.tsx';

// Register Lit web components
import './web-components/zv-skill-chip';
import './web-components/zv-terminal';
import './web-components/zv-timeline-entry';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
