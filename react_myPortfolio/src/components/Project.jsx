import React from 'react';

// The Project component renders an individual project with a title, image, and links
function Project({ title, image, deployedLink, repoLink }) {
  return (
    <div className="project">
      {/* Render the project title */}
      <h3>{title}</h3>
      {/* Render the project image */}
      <img src={image} alt={title} />
      <div>
        {/* Link to the deployed application */}
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">Deployed Application</a>
        {/* Link to the GitHub repository */}
        <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
      </div>
    </div>
  );
}

export default Project;
