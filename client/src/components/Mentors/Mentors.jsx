
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Mentor from '../Mentor/Mentor';
import { Button } from '@material-ui/core';
import {addMentors} from '../../store/actions';
import SearchForm from '../SearchForm/SearchForm';

const Mentors = () => {
  const state = useSelector((store) => store.mentors);
  const dispatch = useDispatch();
  const handleClick = async () => {
    const repsonse = await fetch('http://localhost:3100/mentor?skills=React,Sass,Ubuntu')
    const mentors = await repsonse.json();// { [{}]} object with array of objects
    console.log(mentors);
    dispatch(addMentors(mentors));
  };
  return (
    <div>
      <SearchForm />
      {state.map((mentor) => (
        <Mentor mentor={mentor} />
      ))}
      <Button onClick={handleClick}>Add Mentors</Button>
    </div>
  );
};

export default Mentors;
