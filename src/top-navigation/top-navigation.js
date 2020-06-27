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
    <header class="top-nav-wrap">
      {/* <nav className="top-nav"> */}
        <Link to="/">
          <img src={zvLogo} className="zv-logo" title="Zenia Villa logo"></img>
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
            <a href="https://www.linkedin.com/in/zeniavilla" target="_blank">
              <img src={linkedInLogo} className="social-logo" title="LinkedIn Logo" />
            </a>
          </li>
          <li className="top-nav-item">
            <a href="https://github.com/zeniavilla" target="_blank">
              <img src={gitHubLogo} className="social-logo" title="GitHub Logo" />
            </a>
          </li>
        </ul>
      {/* </nav> */}
    </header>
  )
}

export default TopNavigation;
