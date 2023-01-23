import React from 'react';
import './styles.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__title">
          <strong>
            Hi, my name is <em>Danil</em>
          </strong>
          <br />a frontend developer
        </div>
        <div className="header__text">
          <p>with passion for learning and creating.</p>
        </div>
        <a download href="../../img/CV_DANIL_CHISTYAKOV.pdf" className="btn">
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Header;
