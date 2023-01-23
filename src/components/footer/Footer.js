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
            <a href="//github.com/ChistyakovDanil">
              <img src={iconGitHub} alt="link" />
            </a>
          </li>
          <li className="social__item">
            <a href="//www.instagram.com/4istyakov_d/">
              <img src={iconInstargram} alt="link" />
            </a>
          </li>
          <li className="social__item">
            <a href="//www.linkedin.com/in/danil-chistyakov-3175b225b/">
              <img src={iconLinkedIn} alt="link" />
            </a>
          </li>
          <li className="social__item">
            <a href="//t.me/chistyaa">
              <img src={iconTelegram} alt="link" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
