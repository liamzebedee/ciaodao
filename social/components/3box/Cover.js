import React from 'react';

const Cover = ({ handleLogin, disableLogin }) => (
  <div className="coverPage">
        <button onClick={handleLogin} disabled={disableLogin}>
          Get Started
        </button>
  </div>
);

export default Cover