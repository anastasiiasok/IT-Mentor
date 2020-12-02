import React from 'react';
import './mentor.css';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  Redirect,
} from 'react-router-dom';

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

      <div className='main__container'>
        <div className='search__container'></div>
        <div className='card__container'>
          <div className='card__item'>
            <div className='card__img'>
              <img src='mentor_img.svg' alt='' />
            </div>
            <div className='card__info'>
              <div className='card__info__item'>
                <p>
                  {name} {surname}
                  <a className="likebutn">
                    <i class="far fa-thumbs-up"></i>{" "}
                  </a>
                </p>
              </div>
              <div className='card__info__item'>
                <p>
                  <i className='fas fa-map-marker-alt'></i> {city}, {country},
                  {timezone}
                </p>
              </div>
              <div className='card__info__item'>
                <p>
                  <i className='fas fa-suitcase'></i> {company} / {position}
                </p>
              </div>
              <div className='card__info__item'>
                <p>{summary}</p>
              </div>
              <div className='card__info__item'>
                <p>
                  {skills.map((skill) => (
                    <span>{skill} </span>
                  ))}
                </p>
              </div>
            </div>
            <div className='card__action'>
              <a href='https://www.w3schools.com' className='btn'>
                ${price} / hour
              </a>
              <a href='https://www.w3schools.com' className='btn white'>
                Schedule a call
              </a>


              <span className="btn yellow">
                <Link to={{ pathname: "/profile", state: { mentor } }}>
                  {" "}
                  More Details{" "}
                </Link>

              </span>

              <a href='https://www.w3schools.com' className='btn'>
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
