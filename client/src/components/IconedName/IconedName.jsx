import React from 'react';
import {useDispatch} from 'react-redux';
import {toggleLike} from '../../store/actions';
import '../Mentor/mentor.css';

const IconedName = ({liked, id, name, surname})=>{
const dispatch = useDispatch();
  return (
  <p>
  {name} {surname}
  <a className="likebutn">
   {!liked && <i onClick={()=>dispatch(toggleLike(id))} class="far fa-thumbs-up"></i>}
   {liked && <i onClick={()=>dispatch(toggleLike(id))} class="fas fa-thumbs-up"></i>}
  </a>
</p>
  )
}

export default IconedName;