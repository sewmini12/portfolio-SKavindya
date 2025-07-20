import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 SKavindya. All rights reserved.</p>
        <div className="social-links">
          <a href="#" aria-label="LinkedIn">LinkedIn</a>
          <a href="#" aria-label="GitHub">GitHub</a>
          <a href="#" aria-label="Email">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
