import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>My Portfolio</h1>
      <Navigation />
    </header>
  );
};

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><a href="#about">About Me</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};