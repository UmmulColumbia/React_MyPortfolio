import React from 'react';

// The Footer component renders the footer with links to social media profiles
function Footer() {
  return (
    <footer>
      <p>Connect with me on:</p>
      {/* GitHub link */}
      <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">GitHub</a>
      {/* LinkedIn link */}
      <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </footer>
  );
}

export default Footer;
