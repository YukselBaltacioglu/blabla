import React from 'react';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.title}>
        <div className={styles.titleText}>Trademark Similarity</div>
        <p className={styles.subtitle}>Find similar trademarks in seconds</p>
        <p className={styles.description}>
          Use our AI-powered image recognition technology to instantly find similar trademarks.
          Just upload an image or use one of ours. It's fast, easy, and free.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;