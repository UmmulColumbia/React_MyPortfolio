import React from 'react';
import NavTabs from './NavTabs';

// The Header component renders the site's header including the navigation tabs
function Header({ currentPage, handlePageChange }) {
  return (
    <header>
      <h1>My Portfolio</h1>
      {/* Render the NavTabs component, passing the currentPage and handlePageChange props */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
    </header>
  );
}

export default Header;
