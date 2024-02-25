import React from 'react';
import Search from './Search.css';

const search = ({ name }) => (
  <button className="button2">
    <div className="text-container">
      <span className="name2">{name}</span>

    </div>
  </button>
);



export default search;