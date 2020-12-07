import React from 'react';
import {useDispatch} from 'react-redux';
import {toggleLike} from '../../store/actions';
import styles from './Iconed.module.css';

const IconedName = ({mentor})=>{
  const [value, setValue] = React.useState(mentor.liked);
  const handleClick = (id) => {
    setValue(!value);
    dispatch(toggleLike(mentor._id));
  }
const dispatch = useDispatch();
  return (
  <p>
  {mentor.name} {mentor.surname}
  <a className={styles.likebutn}>
   {!value && <i onClick={()=>handleClick(mentor._id)} class="far fa-thumbs-up"></i>}
   {value && <i onClick={()=>handleClick(mentor._id)} class="fas fa-thumbs-up"></i>}
  </a>
</p>
  )
}

export default IconedName;