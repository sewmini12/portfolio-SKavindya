import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate developer with experience in creating modern web applications.
              I love turning ideas into reality through code and design.
            </p>
            <div className="skills">
              <h3>programming languages</h3>
              <ul>
                <li>React.js</li>
                <li>JavaScript</li>
                <li>HTML/CSS</li>
                <li>Node.js</li>
                <li>Git</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
