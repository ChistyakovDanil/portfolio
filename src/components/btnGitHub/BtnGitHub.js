import React from 'react';
import './styles.css';

import icon from '../../img/gitHub-black.svg';
import { NavLink } from 'react-router-dom';

const BtnGitHub = ({ link }) => {
  return (
    <NavLink to={link} target="_blank" className="btn-outline">
      <img src={icon} alt="" />
      GitHub repo
    </NavLink>
  );
};

export default BtnGitHub;
