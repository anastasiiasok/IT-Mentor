import { Modal } from '@material-ui/core';
import React from 'react';
import styles  from './SignIn.module.css';

const SignIn = ()=>{
  return(
    <div className={styles.container}>
      <input className={styles.field} placeholder="first name" type="text"/>
      <input className={styles.field} placeholder="last name" type="text"/>
      <input className={styles.field} placeholder="email" type="text"/>
      <div style={{height: "100px"}}></div>
      <input className={styles.field} placeholder="password" type="text"/>
      <input className={styles.field} placeholder="confirm password" type="text"/>
    </div>
  )
}







export default SignIn;