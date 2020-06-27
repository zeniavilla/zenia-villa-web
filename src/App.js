import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import TopNavigation from './top-navigation/top-navigation';
import Landing from './landing/landing';

function App() {
  return (
    <Router>
      <div>
        <TopNavigation></TopNavigation>
        <Landing></Landing>
      </div>
    </Router>
  );
}

export default App;
