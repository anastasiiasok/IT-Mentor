import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Mentor from '../Mentor/Mentor';

import { addMentors } from '../../store/actions';
import SearchForm from '../SearchForm/SearchForm';
import './mentors.css';

const Mentors = () => {
  const state = useSelector((store) => store.mentors);

  return (
    <div className='main'>
      <div>
        <SearchForm />
        {state.map((mentor) => (
          <Mentor mentor={mentor} />
        ))}
      </div>
      <div className='arrow'>
        <button className='arrowButton'>
          <img src='img/arrow.png' alt='arrow'></img>
        </button>
      </div>
      <br></br>
      <br></br>
    </div>
  );
};

export default Mentors;
