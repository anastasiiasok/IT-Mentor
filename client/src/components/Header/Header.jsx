import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Header() {
  return (
    <>
      <div className='header'>
        {/* <div className='logo-name'>
          <a href='#'>
            <span className='it'>it</span>MENTOR
          </a>
        </div> */}
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
