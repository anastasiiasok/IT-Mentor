import React from "react";
import styles from "./Mentor.module.css";

import {
  Link,
} from "react-router-dom";
import IconedName from "../IconedName/IconedName";

function Mentor({ mentor }) {
  const {
    name,
    surname,
    city,
    country,
    timezone,
    resume,
    skills,
    price,
    summary,
  } = mentor;
  const { company, position } = resume[0];

  return (
    <div>
      <br></br>

      <div className={styles.main__container}>
        <div className={styles.search__container}></div>
        <div className={styles.card__container}>
          <div className={styles.card__item}>
            <div className={styles.card__img}>
              <img src="mentor_img.svg" alt="" />
            </div>
            <div className={styles.card__info}>
              <div className={styles.card__info__item}>
                <IconedName
                  name={name}
                  surname={surname}
                  liked={mentor.liked}
                  id={mentor._id}
                />
              </div>
              <div className={styles.card__info__item}>
                <p>
                  <i className="fas fa-map-marker-alt"></i> {city}, {country},
                  {timezone}
                </p>
              </div>
              <div className={styles.card__info__item}>
                <p>
                  <i className="fas fa-suitcase"></i> {company} / {position}
                </p>
              </div>
              <div className={styles.card__info__item}>
                <p>{summary}</p>
              </div>
              <div className={styles.card__info__item}>
                <p>
                  {skills.map((skill) => (
                    <span>{skill} </span>
                  ))}
                </p>
              </div>
            </div>
            <div className={styles.card__action}>
              <a href="#" className={styles.btn}>
                ${price} / hour
              </a>
              <a href="#" className={styles.btn_white}>
                Schedule a call
              </a>

              <span className={styles.btn_yellow}>
                <Link to={{ pathname: "/profile", state: { mentor } }}>
                  More Details
                </Link>
              </span>

              <a href="#" className={styles.btn}>
                Free test session
              </a>
              <div> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mentor;
