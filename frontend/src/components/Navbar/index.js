import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome ,faGear, faXmark,faCircleQuestion} from '@fortawesome/free-solid-svg-icons';

import styles from './styles.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Trademark Similarity</div>
      <ul className={styles.navItems}>
        <li className={styles.navItem}>
          <a href="#" className={styles.navItemIcons}>
            <FontAwesomeIcon icon={faHome} />
            <span>Home</span>
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#" className={styles.navItemIcons}>
            <FontAwesomeIcon icon={faGear} />
            <span>Settings</span>
          </a>
        </li>
        <li className={styles.navItem}>
            <a href="#" className={styles.navItemIcons}>
            <FontAwesomeIcon icon={faXmark} />
            <span>Exit</span>
          </a>
        </li>
        <div className={styles.spacer}></div>
        <li className={styles.navItem}>
          <button className={styles.navButton}>New search</button>
        </li>
        <li className={styles.navItem}>
            <a href="#" className={styles.navItemIcons}>
                <FontAwesomeIcon icon={faCircleQuestion} />
                <span>Help & Docs</span>
            </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;