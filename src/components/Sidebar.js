import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; 
import profilePicture from '../kodaoriginal.JPG'; 

const Sidebar = () => {
    return (
      <div className="sidebar">
        <div className="profile">
          <img src={profilePicture} alt="Profile" className="profile-picture" />
          <h1>Ayrton Ramirez</h1>
          <p className="occupation">Student at Oulu University of Applied Sciences</p>
        </div>
      <div className="social-icons">
        <a href="https://github.com/AyrtonR" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/ayrton-ramirez-154a72204/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="mailto:ayrtonramirez2018@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
