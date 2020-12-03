import React from 'react';
import styles from './SignIn.module.css'
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

const SignIn = ({visible, setVisibility})=>{
  const history = useHistory();
  const init = {firstName: '', lastName: '', contacts: '', password: '', confirm: ''};
  const [form, updateForm] = React.useState(init);
  const mentors = useSelector((store)=>store.likedMentors);

  const handleSubmit = async ()=>{
    if (form.password !== '') {

    // ACHTUNG !!! COMMENT NEXT LINE BEFORE BUILD!!
    const res = await fetch('http://localhost:3100/user/auth/local', {
  // <<<<<<<<<<<<<<<<<< DON'T TOUCH THIS >>>>>>>>>
    // ACHTUNG !!! UNCOMMENT NEXT LINE BEFORE BUILD!!!!
    // const res = await fetch('https://servertestmentor.herokuapp.com/user/auth/local', {

    // <<<<<<<<<<<<<<<<<< DON'T TOUCH THIS >>>>>>>>>
      method: "POST",
      // DO NOT USE MODE NO-CORS !!!
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({...form, mentors}),
    });
    const data = await res.json();
    console.log(data);
    updateForm(init);
    setVisibility(false);
    history.push("/account");
  } else {
    updateForm(init);
    setVisibility(false);
  }
  };

  const handleChange = (e) => {
    updateForm({...form, [e.target.name]: e.target.value});
  };

  const handleGoogle = async ()=>{

    // ACHTUNG !!! COMMENT NEXT LINE BEFORE BUILD!!
    const res = await fetch('http://localhost:3100/user/auth/google', {
 // <<<<<<<<<<<<<<<<<< DON'T TOUCH THIS >>>>>>>>>

     // ACHTUNG !!! UNCOMMENT NEXT LINE BEFORE BUILD!!!!
    //  const res = await fetch('https://servertestmentor.herokuapp.com/user/auth/google', {

     // <<<<<<<<<<<<<<<<<< DON'T TOUCH THIS >>>>>>>>>
     
      method: "GET",
      mode: 'no-cors',
    });
    const data = await res.json();
    console.log(data);
  };

  return(
    <div className={styles.container} style={{visibility: visible ? "visible" : "hidden"}}>
      <input onChange={handleChange} value={form.firstName} name="firstName" placeholder="first name" type="text"/>
      <input  onChange={handleChange} value={form.lastName} name="lastName" placeholder="last name" type="text"/>
      <input  onChange={handleChange} value={form.contacts} name="contacts" placeholder="email" type="text"/>
      <div style={{height: "100px"}}></div>
      <input   onChange={handleChange} value={form.password} name="password" placeholder="password" type="text"/>
      <input  onChange={handleChange} value={form.confirm} name="confirm" placeholder="confirm password" type="text"/>
      <div className={styles.button_container}>
        <button  onClick={handleSubmit}>Submit</button>
        <button  style={{backgroundColor: "rgba(243, 192, 73, 1)"}} onClick={handleGoogle}>Sign In with Google</button>
      </div>
    </div>
  )
}

export default SignIn;
