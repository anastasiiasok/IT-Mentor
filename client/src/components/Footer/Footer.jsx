import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerMentors}>
        <p className={styles.footerTitle}>Mentors</p>
        <Link to='/signup'>
          <p className={styles.footerA}>Sign In</p>
        </Link>
        <Link to='/signup'>
          <p className={styles.footerA}>Become Mentor</p>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
