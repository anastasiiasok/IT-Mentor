import React from 'react';
import styles from './Scroll.module.css';
import { useDispatch } from 'react-redux';
import { setScreen } from '../../store/actions';

const Scroll = ({ size }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.arrow}>
      <button onClick={() => dispatch(setScreen(size))} className={styles.arrowButton}>
        <img src='img/arrow.png' alt='arrow'></img>
      </button>
    </div>
  );
};

export default Scroll;
