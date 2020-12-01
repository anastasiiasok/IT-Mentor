import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer'>
      <div className='footerMentors'>
        <p className='footerTitle'>Mentors</p>
        <Link to='/signup'>
          <p className='footerA'>Sign In</p>
        </Link>
        <Link to='/signup'>
          <p className='footerA'>Become Mentor</p>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
