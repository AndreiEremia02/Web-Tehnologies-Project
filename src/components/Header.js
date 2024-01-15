import React from 'react';
import './Header.css';
import planitLogo from '../media/planitnow.png';
import profilePicture from '../media/profilepicture.webp';

function Header() {
  return (
    <header className="header">
      <img src={planitLogo} alt="Plan It Now Logo" className="logo" />
      <a href="#" className="profile-link">
        <img src={profilePicture} alt="Profile" className="profile-picture" />
      </a>
    </header>
  );
}

export default Header;
