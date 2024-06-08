import React from 'react';
import './Home.css'; // Import CSS for styling
import selfImage from '../assets/selfImage.jpg'; // Import the image

function About() {
  return (
    <div className="about-container">
      <h2>Ummul Mukta</h2>
      <div className="image-and-text">
        <img src={selfImage} alt="Your Name" />
        <div className="text-container">
          <h3>About Me</h3>
          <p>Experienced Senior Quality Assurance Engineer with a demonstrated history of working various industries including finance, media and telecommunications. Skilled in building custom Test Automation Framework using Selenium WebDriver, Cucumber, TestNG, Page Factory, Maven, and Jenkins. A team player, detail oriented, and fast learner when comes to deliver quality softwares.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
