import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './Header.module.css';

function Header() {
  const mentor = useSelector((store) => store.activeMentor);
  const location = useLocation();
  return (
    <>
      <div className={styles.header}>
        <Link to='/'>
          <div className={styles.logoName}>
            <span className={styles.it}>it</span>MENTOR
          </div>
        </Link>

        <span
          style={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'grey',
          }}
        >
          {mentor.name && (
            <Link
              to={{
                pathname: `${location.pathname}/signin`,
                state: { left: '200px', bottom: '100px', mentor , signin: true},
              }}
            >
              <i class='fas fa-sign-in-alt'></i>
            </Link>
          )}
          {!mentor.name && (
            <Link
              to={{
                pathname: '/signin',
                state: { left: '200px', bottom: '100px' , signin: true},
              }}
            >
              <i class='fas fa-sign-in-alt'></i>
            </Link>
          )}
        </span>
      </div>
    </>
  );
}

export default Header;
