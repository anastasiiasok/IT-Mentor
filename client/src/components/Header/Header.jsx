import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './style.css';

function Header() {
  const mentor = useSelector((store) => store.activeMentor);
  const location = useLocation();
  return (
    <>
      <div className='header'>
        <Link to='/'>
          <div className='logoName'>
            <span className='it'>it</span>MENTOR
          </div>
        </Link>
      </div>
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
              state: { left: '200px', bottom: '100px', mentor },
            }}
          >
            <i class='fas fa-sign-in-alt'></i>
          </Link>
        )}
        {!mentor.name && (
          <Link
            to={{
              pathname: '/signin',
              state: { left: '200px', bottom: '100px' },
            }}
          >
            <i class='fas fa-sign-in-alt'></i>
          </Link>
        )}
      </span>
    </>
  );
}

export default Header;
