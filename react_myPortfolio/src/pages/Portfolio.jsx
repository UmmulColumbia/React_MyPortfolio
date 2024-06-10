import React from 'react';
import Project from '../components/Project';
import social_network_Image from '../assets/social_network_Image.jpg'; 

function Portfolio() {
  const projects = [
    {
      title: 'CryptoInsights',
      image: 'https://github.com/UmmulColumbia/CryptoInsights/assets/156148729/a243c869-1943-4a51-bb52-88c48b4113db',
      deployedLink: 'https://ummulcolumbia.github.io/CryptoInsights/',
      repoLink: 'https://github.com/UmmulColumbia/CryptoInsights'
    },
    {
      title: 'Social Network Mongo',
      image: social_network_Image,
      deployedLink: 'https://drive.google.com/file/d/1NDuTMgflKUiL6mAoROhBqYpMqJ63ub6X/view',
      repoLink: 'https://github.com/UmmulColumbia/Social_Network_Mongo'
    },
    {
      title: 'TimePlanningPro',
      image: 'https://github.com/UmmulColumbia/TimePlanningPro/assets/156148729/a2e22119-1239-4a03-abe5-04bd400c73a9',
      deployedLink: 'https://ummulcolumbia.github.io/TimePlanningPro/',
      repoLink: 'https://github.com/UmmulColumbia/TimePlanningPro'
    },
    {
      title: 'TechTalesStudio',
      image: 'https://github.com/UmmulColumbia/TechTalesCMSStudio/assets/156148729/b442c88e-fb4d-4613-b9c0-3f01e293a395',
      deployedLink: 'https://techtalescmsstudio-1.onrender.com',
      repoLink: 'https://github.com/UmmulColumbia/TechTalesCMSStudio'
    },
  ];

  return (
    <div>
      <h2>Portfolio</h2>
      <div className="projects-container">
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          image={project.image}
          deployedLink={project.deployedLink}
          repoLink={project.repoLink}
        />
      ))}
       </div>
    </div>
  );
}

export default Portfolio;
