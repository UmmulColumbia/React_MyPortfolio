import React from 'react';

// The Footer component renders the footer with links to social media profiles
function Footer() {
  return (
    <footer>
      <p>Connect with me on:</p>
     
      <a href="https://github.com/UmmulColumbia?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub</a>
      <br /> {/* Line break to separate the links */}
      <a href="https://www.linkedin.com/in/ummulomukta/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </footer>
  );
}

export default Footer;
