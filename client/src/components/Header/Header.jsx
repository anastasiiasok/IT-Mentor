import React from "react";
import { Link } from "react-router-dom";
import HeaderLink from "../HeaderLink/HeaderLink";
import { useSelector } from "react-redux";
import User from "../User/User";

import styles from "./Header.module.css";

function Header() {
  const isAuth = useSelector((store) => store.isAuth);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link to="/">
          <div className={styles.logoName}>
            <span className={styles.it}>it</span>MENTOR
          </div>
        </Link>
      </div>
      {!isAuth && <HeaderLink />}
      {isAuth && <User />}
    </div>
  );
}

export default Header;
