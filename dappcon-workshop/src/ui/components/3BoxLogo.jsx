import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/3Box.svg';
import '../styles/index.scss';

const BoxLogo = () => (
  <Link to='/'>
    <div className="logo">
      <img className="logo_png" src={Logo} alt="logo" />
      <h3>CHAT</h3>
    </div>
  </Link>
);

export default BoxLogo;
