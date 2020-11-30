import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Header() {
  return (
    <>
      <div className='header'>
        <Link to='/'>
          <div className='logo-name'>
            <span className='it'>it</span>MENTOR
          </div>
        </Link>
      </div>
    </>
  );
}

export default Header;
