import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import SignIn from '../SignIn/SignIn';

function Header() {
  return (
    <>
      <div className='header'>
        <Link to='/'>
          <div className='logoName'>
            <span className='it'>it</span>MENTOR
          </div>
        </Link>
      </div>
    </>
  );
}

export default Header;
