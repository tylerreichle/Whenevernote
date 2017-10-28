import React from 'react';

const Header = () => (
  <header>
    <div className="left-nav">
      <img
        src="https://res.cloudinary.com/dkuqs8yz1/image/upload/v1498685204/logo.png"
        alt="Whenevernote logo"
      />
      <h1>WHENEVERNOTE</h1>
    </div>

    <div className="header-nav-links">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/tylerreichle/Whenevernote"
      >Github</a>

      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/tyler-reichle-36b379130/"
      >LinkedIn</a>
    </div>
  </header>
);

export default Header;
