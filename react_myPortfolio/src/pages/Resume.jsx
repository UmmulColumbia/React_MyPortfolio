import React from 'react';
import './Resume.css';
import resume from '../assets/Resume_UmmulMukta.docx'; 

function Resume() {
  return (
    <div className='resume'>
      <h2>Resume</h2>
      <a href={resume} download>Download Resume</a>
      <h3>Proficiencies</h3>
      <ul>
        <li>JavaScript (ES6+)</li>
        <li>React and Redux</li>
        <li>Node.js and Express</li>
        <li>HTML5 and CSS3</li>
        <li>RESTful APIs</li>
        <li>GraphQL</li>
        <li>MongoDB and Mongoose</li>
        <li>SQL and Sequelize</li>
        <li>Version Control (Git & GitHub)</li>
        <li>Responsive Web Design</li>
        <li>CI/CD Pipelines (Jenkins, GitHub Actions)</li>
        <li>Agile Methodologies</li>
      </ul>
    </div>
  );
}

export default Resume;
