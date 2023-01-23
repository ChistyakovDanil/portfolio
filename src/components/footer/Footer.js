import React from 'react';

import './styles.css';

import iconTelegram from '../../img/telegram.png';
import iconInstargram from '../../img/instagram.svg';
import iconLinkedIn from '../../img/linkedIn.svg';
import iconGitHub from '../../img/gitHub.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <ul className="social">
          <li className="social__item">
            <a href="#!">
              <img src={iconGitHub} alt="link" />
            </a>
          </li>
          <li className="social__item">
            <a href="#!">
              <img src={iconInstargram} alt="link" />
            </a>
          </li>
          <li className="social__item">
            <a href="#!">
              <img src={iconLinkedIn} alt="link" />
            </a>
          </li>
          <li className="social__item">
            <a href="#!">
              <img src={iconTelegram} alt="link" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
