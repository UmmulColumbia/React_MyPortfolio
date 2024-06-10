import React from 'react';
import Project from './Project'; // Import the Project component
import projects from '../data/projectsData'; // Import the projects data
import './Projects.css'; // Import CSS for styling

function Projects() {
  return (
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
  );
}

export default Projects;
