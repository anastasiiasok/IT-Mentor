import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Footer() {
  return (
    <>
      <footer>
        <div className='footer-mentors'>
          <p className='footer-title'>Mentors</p>
          <p className='footer-a'>
            <a className='#'>Sign In</a>
          </p>
          <p className='footer-a'>
            <a className='#'>Become Mentor</a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
