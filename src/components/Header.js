import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about-me">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
