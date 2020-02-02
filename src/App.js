import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import TopNavigation from './top-navigation/top-navigation';

function App() {
  return (
    <Router>
      <div>
        <TopNavigation></TopNavigation>
        <div className="main">
        </div>
      </div>
    </Router>
  );
}

export default App;
