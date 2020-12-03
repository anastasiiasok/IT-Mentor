import React from 'react';
import { Link } from 'react-router-dom';
const Tag = ({ value }) => {
  return (
    <span className='toRight'>
      <Link to='/mentors'>
        <span className='tag'>&#123; {value} &#125;</span>
      </Link>
    </span>
  );
};

export default Tag;
