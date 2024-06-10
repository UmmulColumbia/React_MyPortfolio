import React from 'react';
import githubLogo from '../assets/github_logo.jpg';
import linkedinLogo from '../assets/linkedinLogo.jpg';

// The Footer component renders the footer with links to social media profiles
function Footer() {
  return (
    <footer>
      <p>Connect with me on:</p>
     
      <a href="https://github.com/UmmulColumbia?tab=repositories" target="_blank" rel="noopener noreferrer">
      <img src={githubLogo} alt="GitHub" className="social-logo" />
        GitHub</a>
      <br /> {/* Line break to separate the links */}
      <a href="https://www.linkedin.com/in/ummulomukta/" target="_blank" rel="noopener noreferrer">
      <img src={linkedinLogo} alt="GitHub" className="social-logo" />
         LinkedIn</a>
    </footer>
  );
}

export default Footer;
