import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="text-center my-icon">
      <a href="https://github.com/jessenay" target="_blank" rel="noopener noreferrer">
        <FaGithub size="2em" style={{ color: 'rgb(214, 207, 180)' }} />
      </a>
      <a href="https://linkedin.com/in/yourusername" className="mx-3" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size="2em" style={{ color: 'rgb(214, 207, 180)' }} />
      </a>
      <a href="mailto:jessenay26@gmail.com">
        <FaEnvelope size="2em" style={{ color: 'rgb(214, 207, 180)' }} />
      </a>
    </footer>
  );
}

export default Footer;

