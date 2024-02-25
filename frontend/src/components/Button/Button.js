import React from 'react';
import './Button.css'

const button = ({ name, logo, brandName }) => (
  <button className="button ms-5">
    <div className="logo-container">
      <img src={logo} alt={brandName} className="logo" />
    </div>
    <div className="text-container">
      <span className="name">{name}</span>
      <span className="brand-name">{brandName}</span>
    </div>
  </button>
);



export default button;