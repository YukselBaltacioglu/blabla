import React from 'react';
import styles from './ButtonBox.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { useHistory } from 'react-router-dom'; // React Router kullanıyorsanız

const ButtonBox = ({ icon, title, description, link }) => {
  const history = useHistory(); // React Router kullanıyorsanız

  const handleClick = () => {
    history.push(link); // Belirtilen linke yönlendirme yapılıyor
  };

  return (
    <div className={styles.box} onClick={handleClick}>
      <FontAwesomeIcon className={styles.icon} icon={icon} />
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p>{description}</p>
      </div>
  </div>
  );
};

export default ButtonBox;
