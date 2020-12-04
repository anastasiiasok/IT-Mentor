import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const HeaderLink = () => {
  const mentor = useSelector((store) => store.activeMentor);
  const location = useLocation();
  return (
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
            state: { left: '200px', bottom: '100px', mentor, signin: true },
          }}
        >
          <i
            style={{ textDecoration: 'none', color: '#f3c049' }}
            class='fas fa-sign-in-alt'
          ></i>
        </Link>
      )}
      {!mentor.name && (
        <Link
          to={{
            pathname: '/signin',
            state: { left: '200px', bottom: '100px', signin: true },
          }}
        >
          <i
            style={{ textDecoration: 'none', color: '#f3c049' }}
            class='fas fa-sign-in-alt'
          ></i>
        </Link>
      )}
    </span>
  );
};

export default HeaderLink;
