import React from 'react';
import { Link } from 'react-router-dom';

// Stylesheets
import './top-navigation.scss';

// Images
import zvLogo from '../zv-logo.png';
import linkedInLogo from '../images/linkedin-logo.png';
import gitHubLogo from '../images/github-logo.png';

function TopNavigation() {
  return (
    <header className="top-nav-wrap">
      <Link to="/">
        <img src={zvLogo} className="zv-logo" title="Zenia Villa logo" alt="logo"></img>
      </Link>
      <ul className="top-nav-links">
        <li className="top-nav-item">
          <Link to="/about-me">About Me</Link>
        </li>
        <li className="top-nav-item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <ul className="top-nav-social">
        <li className="top-nav-item">
          <a href="https://www.linkedin.com/in/zeniavilla" target="_blank" rel="noreferrer">
            <img
              src={linkedInLogo}
              className="social-logo"
              title="LinkedIn Logo" alt="linkedIn-logo"
            />
          </a>
        </li>
        <li className="top-nav-item">
          <a href="https://github.com/zeniavilla" target="_blank" rel="noreferrer">
            <img src={gitHubLogo} className="social-logo" title="GitHub Logo" alt="gitHub-logo" />
          </a>
        </li>
      </ul>
    </header>
  );
}

export default TopNavigation;
