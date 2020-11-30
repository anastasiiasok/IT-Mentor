import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import SignUp from '../SignUp/SignUp';
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
            <Link to='/signup'>Become Mentor</Link>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
