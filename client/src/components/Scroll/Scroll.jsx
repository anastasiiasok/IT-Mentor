import React from 'react';
import '../Mentors/mentors.css';
import { useDispatch } from 'react-redux';
import {setScreen} from '../../store/actions';

const Scroll = ({size}) => {
  const dispatch = useDispatch();
  return (
    <div className='arrow'>
    <button onClick={()=>dispatch(setScreen(size))} className='arrowButton'>
      <img src='img/arrow.png' alt='arrow'></img>
    </button>
  </div>
  )
}




export default Scroll;