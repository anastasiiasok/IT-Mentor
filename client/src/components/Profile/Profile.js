import React from 'react';
import { useDispatch } from 'react-redux';
import Education from '../Education/Education';
import Person from '../Person/Person';
import Projects from '../Projects/Projects';
import Price from '../Price/Price';
import Resume from '../Resume/Resume';
import BenefitList from '../BenefitList/BenefitList';
import { activeMentor } from '../../store/actions';
import { Link, useLocation } from 'react-router-dom';
import styles from './Profile.module.css';

function Profile() {
  const dispatch = useDispatch();
  const mentor = useLocation().state.mentor;
  const location = useLocation();
  React.useEffect(() => dispatch(activeMentor(mentor)));
  return (
    <div className={styles.full}>
      <div>
        <br></br>
      </div>

      <div className={styles.container}>
        <span className={styles.btn_no_padding}>
          <Link to='/mentors' />
          <i className='fas fa-long-arrow-alt-left'></i>
          <span className={styles.allMentors}>
            <Link to='/mentors'>
              <span className={styles.allText}>All Mentors</span>
            </Link>
          </span>
        </span>
        <div className={styles.profile__grid__template}>
          <div className={styles.card__mentor}>
            {/* <SignIn visible={visible} setVisibility={setVisibility} /> */}
            <div className={styles.card__mentor__img}>
              <img src='mentor_img.svg' alt='' />
            </div>
            <div className={styles.free_test_session}>
              <a href=''>
                <Price price={mentor.price} />
              </a>
            </div>
            <Link
              to={{
                pathname: `${location.pathname}/signin`,
                state: { mentor, left: '200px', bottom: '100px' },
              }}
            >
              <a className={styles.btn_yellow}>Schedule a free call</a>{' '}
            </Link>
            <div className={styles.free_test_session}>
              <a href=''> Free test session</a>
            </div>
            <br />
          </div>

          <div className={styles.info__mentor__container}>
            <div className={styles.card__info__mentor}>
              <p>
                <Person mentor={mentor} />
              </p>
            </div>

            <div className={styles.card__info__mentor}>
              <p className={styles.bold}>Can help with</p>

              <p>
                <BenefitList benefits={mentor.benefits} />
              </p>
            </div>
            <div className={styles.card__info__mentor}>
              <div className={styles.grid_column_2_1fr}>
                <div className={styles.bold}>Work experience</div>
                <div></div>
                <div>
                  <Resume resume={mentor.resume} />
                </div>
                <div></div>
              </div>
            </div>
            <div className={styles.card__info__mentor}>
              <div className={styles.bold}>Projects</div>
              <div>
                <Projects projects={mentor.projects[0]} />
              </div>
            </div>
            <div className={styles.card__info__mentor}>
              <div className={styles.grid_column_2_1fr}>
                <div className={styles.bold}>Education</div>
                <div></div>

                <div>
                  <Education education={mentor.education[0]} />
                </div>
                {/* <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  provident cupiditate porro deleniti, iste esse?
                </div>
                <div>Содержание 5</div>
                <div>Содержание 6</div>
                <div>Содержание 7</div>
                <div>Содержание 8</div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <br></br>
      <br></br>
    </div>
  );
}

export default Profile;
