import React from 'react';
import { useHistory } from 'react-router-dom'; // React Router kullanıyorsanız

const ButtonBox = ({ icon, title, description, link }) => {
  const history = useHistory(); // React Router kullanıyorsanız

  const handleClick = () => {
    history.push(link); // Belirtilen linke yönlendirme yapılıyor
  };

  return (
    <div className="box">
      <div className="icon">{icon}</div>
      <div className="content">
        <h2>{title}</h2>
        <p>{description}</p>
        <button onClick={handleClick}>Yönlendir</button>
      </div>
    </div>
  );
};

export default ButtonBox;
