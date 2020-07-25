import React from 'react';

import Breadcrumb from '../breadcrumb/breadcrumb';
import './contact.scss';

import sanFrancisco from '../images/sf-fog.jpg';

function Contact() {
  return (
    <div>
      <Breadcrumb title="Contact" color="purple"></Breadcrumb>
      <div className="box-container contact-content">
        <div className="box-item flex-item">
          <div className="contact-box">
            <h2>Email</h2>
            zavilla90(at)gmail(dot)com
          </div>
          <div className="contact-box">
            <h2>Work/Social</h2>
            <span>
              <a
                className="link"
                href="https://www.linkedin.com/in/zeniavilla"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="link"
                href="https://github.com/zeniavilla"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </span>
          </div>
        </div>
        <div className="picture-wrapper flex-item">
          <img src={sanFrancisco} alt="SF bridge in fog" title="SF bridge" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
