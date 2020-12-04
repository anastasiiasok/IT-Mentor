import React from "react";
import { useHistory } from "react-router-dom";
import styles from "../HeaderLink/HeaderLink.module.css";

const User = () => {
  const history = useHistory();
  return (
    <span className={styles.signinbutton}>
      <i onClick={() => history.push("/account")} class="fas fa-user-alt"></i>
      {/* <img onClick={() => history.push('/account')} src='img/personal.png' /> */}
    </span>
  );
};

export default User;
