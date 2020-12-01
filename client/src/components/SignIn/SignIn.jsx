import React from 'react';
import styles from './SignIn.module.css'

const SignIn = ({visible, setVisibility})=>{
  const handleSubmit = ()=>{
    setVisibility(false);
  };

  const handleGoogle = async ()=>{
    const res= await fetch('http://localhost:3100/user/auth/google', {
      method: "GET",
      mode: 'no-cors',
    });
    const data = await res.json();
    console.log(data);
  };

  return(
    <div className={styles.container} style={{visibility: visible ? "visible" : "hidden"}}>
      <input placeholder="first name" type="text"/>
      <input  placeholder="last name" type="text"/>
      <input  placeholder="email" type="text"/>
      <div style={{height: "100px"}}></div>
      <input   placeholder="password" type="text"/>
      <input  placeholder="confirm password" type="text"/>
      <div className={styles.button_container}>
        <button  onClick={handleSubmit}>Submit</button>
        <button  style={{backgroundColor: "rgba(243, 192, 73, 1)"}} onClick={handleGoogle}>Sign In with Google</button>
      </div>
    </div>
  )
}

export default SignIn;
