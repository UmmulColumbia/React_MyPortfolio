import React from 'react';
import Project from '../components/Project';

function Portfolio() {
  const projects = [
    {
      title: 'Project 1',
      image: 'path/to/image1.jpg',
      deployedLink: 'https://deployed-app1.com',
      repoLink: 'https://github.com/your-repo1'
    },
    // Add more projects here
  ];

  return (
    <div>
      <h2>Portfolio</h2>
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

export default Portfolio;
