import React from 'react';
import styles from './Image.module.css';

const Image = ({src , height , weight}) => {
  return (
    <img
      src={src}
      alt="brand"
      height={height}
      weight={weight}
      className={styles.image}
    />
  );
};

export default Image;