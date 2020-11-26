import React from "react";
import { useSelector, useDispatch} from "react-redux";
import Mentor from '../Mentor/Mentor';
import {Button} from '@material-ui/core';
import addMentors from '../../store/actions';

const Mentors = ()=>{
  const state = useSelector((store)=>store);
  const dispatch = useDispatch();

  const handleClick = ()=> {
    console.log(state);
    const mentors = [...state];
    dispatch(addMentors(mentors));
  }
  return (
    <div>
      {state.map((mentor)=><Mentor mentor={mentor}/>)}
      <Button onClick={handleClick}>Add Mentors</Button>
    </div>
  )
}







export default Mentors;