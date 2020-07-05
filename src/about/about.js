import React from 'react';

import headshot from '../images/zv-headshot.jpg';

import './about.scss';
import Breadcrumb from '../breadcrumb/breadcrumb';

function About() {
  return (
    <div>
      <Breadcrumb title="About Me" color="blue"></Breadcrumb>
      <div className="about-container">
        <div className="box-container picture-bio">
          <div className="picture-wrapper">
            <img
              src={headshot}
              alt="Zenia Villa"
              title="Zenia Villa image"
            ></img>
          </div>
          <div className="box-item">
            <h2 className="handwritten-text">Oh, hey</h2>
            <div className="paragraph-item">
              My name is Zenia (prounounced Zeen-yuh). I&apos;m a software
              engineer at IBM Aspera, focusing on the frontend.
            </div>
            <div className="paragraph-item">
              My original plan was a career in the fashion industry and my
              artistic inclination led me to graphic design and event
              production. Those were a few of my key roles when I worked in
              Marketing for a few years after college. It was fine, but it
              wasn&apos;t for me.
            </div>
            <div className="paragraph-item">
              In 2017, I stopped working and started focusing on learning to
              code full-time. It was self-imposed long hours, frustrating
              debugging sessions, and many nights of dreaming about my code
              (actually, I think that&apos;s what they call a nightmare). I
              loved coding when I took my first Computer Science class in high
              and once I started again, I knew I was on the right track. Later
              that year, I got a job with IBM and have been there ever since.
            </div>
          </div>
        </div>
        <div className="box-container gray-background">
          <h2 className="box-item center">Get to know me a little better</h2>
          <div className="box-item flex-item">
            <h3>Some go-to jams</h3>
            <div className="handwritten-text">
              Landslide, Ojos Asi, Don&apos;t Speak, Dream On
            </div>
            <h3>TV theme song I always sing along to</h3>
            <div className="handwritten-text">
              Friends - I&apos;ll be there for you
            </div>
          </div>
          <div className="box-item flex-item">
            <h3>Eye-opening books</h3>
            <div className="handwritten-text">
              A New Earth and The Charisma Myth
            </div>
            <h3>On weekends I will be</h3>
            <div className="handwritten-text">
              Rock climbing, hiking, at a brewery with friends, having board
              game gatherings
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
