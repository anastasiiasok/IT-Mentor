import React from 'react';
import { useHistory } from 'react-router-dom';

const User = () => {
  const history = useHistory();
  return (
    <span
      style={{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'grey',
      }}
    >
      <i onClick={() => history.push('/account')} class='fas fa-user-alt'></i>
      {/* <img onClick={() => history.push('/account')} src='img/personal.png' /> */}
    </span>
  );
};

export default User;
