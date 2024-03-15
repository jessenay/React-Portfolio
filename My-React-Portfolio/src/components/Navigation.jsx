// Navigation.jsx
import { Link, useLocation } from 'react-router-dom';
import React from 'react';

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-custom">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className={`nav-link ${currentPage === '/' ? 'active' : ''}`}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/AboutMe" className={`nav-link ${currentPage === '/AboutMe' ? 'active' : ''}`}>About Me</Link>
            </li>
            <li className="nav-item">
              <Link to="/Projects" className={`nav-link ${currentPage === '/Projects' ? 'active' : ''}`}>Projects</Link>
            </li>
            <li className="nav-item">
              <Link to="/Contact" className={`nav-link ${currentPage === '/Contact' ? 'active' : ''}`}>Contact</Link>
            </li>
            <li className="nav-item">
              <Link to="/Resume" className={`nav-link ${currentPage === '/Resume' ? 'active' : ''}`}>Resume</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavTabs;
