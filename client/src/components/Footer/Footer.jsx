import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import SignUp from '../SignUp/SignUp';
function Footer() {
  return (
    <>
      <footer>
        <div className='footerMentors'>
          <p className='footerTitle'>Mentors</p>
          <p className='footerA'>
            <a className='#'>Sign In</a>
          </p>
          <p className='footerA'>
            <Link to='/signup'>Become Mentor</Link>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
