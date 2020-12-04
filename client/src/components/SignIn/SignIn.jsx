import React from "react";
import styles from "./SignIn.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { changeAuth } from "../../store/actions";

const SignIn = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const left = useLocation().state.left;
  const bottom = useLocation().state.bottom;
  const signin = useLocation().state.signin;
  const init = {
    firstName: "",
    lastName: "",
    contacts: "",
    password: "",
    confirm: "",
  };
  const [form, updateForm] = React.useState(init);
  const [error, setError] = React.useState(false);
  const mentors = useSelector((store) => store.likedMentors);
  const handleClick = () => {
    history.goBack();
  };
  const handleSubmit = async () => {
    if (form.password !== "") {
      // ACHTUNG !!! COMMENT NEXT LINE BEFORE BUILD!!
      const res = await fetch("http://localhost:3100/user/auth/local", {
        // <<<<<<<<<<<<<<<<<< DON'T TOUCH THIS >>>>>>>>>
        // ACHTUNG !!! UNCOMMENT NEXT LINE BEFORE BUILD!!!!
        // const res = await fetch('https://servertestmentor.herokuapp.com/user/auth/local', {

        // <<<<<<<<<<<<<<<<<< DON'T TOUCH THIS >>>>>>>>>
        method: "POST",
        // DO NOT USE MODE NO-CORS !!!
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...form, mentors }),
      });
      const data = await res.json();
      console.log(data);
      if (data === "auth failed") {
        updateForm({
          ...form,
          password: "wrong email or password",
          contacts: "",
        });
        setError(true);
      } else {
        updateForm(init);
        dispatch(changeAuth());
        history.push("/account");
      }
    } else {
      updateForm(init);
    }
  };

  const handleChange = (e) => {
    if (error) {
      setError(false);
      updateForm(init);
    } else {
      updateForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleGoogle = async () => {
    // ACHTUNG !!! COMMENT NEXT LINE BEFORE BUILD!!
    const res = await fetch("http://localhost:3100/user/auth/google", {
      // <<<<<<<<<<<<<<<<<< DON'T TOUCH THIS >>>>>>>>>

      // ACHTUNG !!! UNCOMMENT NEXT LINE BEFORE BUILD!!!!
      //  const res = await fetch('https://servertestmentor.herokuapp.com/user/auth/google', {

      // <<<<<<<<<<<<<<<<<< DON'T TOUCH THIS >>>>>>>>>

      method: "GET",
      mode: "no-cors",
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <i onClick={handleClick} className="fas fa-times"></i>
      </div>
      {!signin && (
        <input
          onChange={handleChange}
          value={form.firstName}
          name="firstName"
          placeholder="first name"
          type="text"
        />
      )}
      {!signin && (
        <input
          onChange={handleChange}
          value={form.lastName}
          name="lastName"
          placeholder="last name"
          type="text"
        />
      )}
      <input
        onChange={handleChange}
        value={form.contacts}
        name="contacts"
        placeholder="email"
        type="text"
      />
      {!signin && <div style={{ height: "100px" }}></div>}
      <input
        style={{ color: error ? "red" : "rgba(88, 150, 139, 1)" }}
        onChange={handleChange}
        value={form.password}
        name="password"
        placeholder="password"
        type="text"
      />
      {!signin && (
        <input
          onChange={handleChange}
          value={form.confirm}
          name="confirm"
          placeholder="confirm password"
          type="text"
        />
      )}
      <div className={styles.button_container}>
        <button onClick={handleSubmit}>Submit</button>
        <button
          style={{ backgroundColor: "rgba(243, 192, 73, 1)" }}
          onClick={handleGoogle}
        >
          Sign In with Google
        </button>
      </div>
    </div>
  );
};

export default SignIn;
