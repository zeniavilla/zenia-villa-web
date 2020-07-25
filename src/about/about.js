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
              engineer at IBM Aspera, currently focusing on the frontend.
            </div>
            <div className="paragraph-item">
              I&apos;m an aspiring fashion designer turned Marketer turned
              Developer. Web development has become my happy place and I&apos;m
              always looking for the next challenge.
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
            <h3>Some favorite books</h3>
            <div className="handwritten-text">
              A New Earth and The Charisma Myth
            </div>
            <h3>On weekends, you&apos;ll find me</h3>
            <div className="handwritten-text">
              Rock climbing, trail running, drinking hoppy beers at a brewery
              with friends, having board game gatherings
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
