import React from 'react';

import BoxLogo from '../components/3BoxLogo';
import Face from '../../assets/3BoxFace.svg';
import '../styles/index.scss';

const Cover = ({ handleLogin, disableLogin }) => (
  <div className="coverPage">
    <section className="coverPage_hero">
      <img src={Face} alt="face" />
    </section>
    <section className="coverPage_ui">
      <div className="coverPage_ui_wrapper">
        <div className="coverPage_ui_wrapper_logo">
          <BoxLogo />
        </div>
        <p className="coverPage_ui_wrapper_line">Where topics come alive</p>
        <button onClick={handleLogin} disabled={disableLogin}>
          Get Started
        </button>
        <p className="coverPage_ui_wrapper_tech">powered by 3Box</p>
      </div>
    </section>
  </div>
);

export default Cover;
