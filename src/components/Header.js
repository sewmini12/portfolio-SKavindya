import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <h2>SKavindya</h2>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
