import React from 'react';

// Stylesheets
import './App.scss';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="home">
      <div className="home-content">
        <div className="title-page-header">Zenia Villa</div>
        <div className="title-page-header animated">Front-end Developer</div>
        <Link className="ghost-button" to="/about-me">Learn more about me</Link>
      </div>
    </div>
  );
}

export default App;
