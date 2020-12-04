import React from 'react';
import styles from './Account.module.css';
import { useSelector } from 'react-redux';
import Mentor from '../Mentor/Mentor';

function AccountStudent() {
  const id = useSelector((store) => store.likedMentors);
  const mentors = useSelector((store) =>
    store.mentors.filter((mentor) => id.filter((el) => el === mentor.id))
  );
  const [value, toggleValue] = React.useState(false);
  const onClickLikedMentors = () => {
    toggleValue(!value);
  };
  return (
    <div>
      {value && (
        <div>
          {mentors.map((mentor) => (
            <Mentor mentor={mentor} />
          ))}
        </div>
      )}
      <div className={styles.account}>
        <div>
          <div className={styles.nav}>
            <h1>Student's Name </h1>
            <h1 className={styles.schedule}>
              Schedule{' '}
              <img className={styles.calendar} src='calendar.png' width='160'></img>
            </h1>
            <br></br>
            <br></br>
            <div className={styles.logout}>
              <button
                onClick={onClickLikedMentors}
                className={styles.mentorsBtn}
              >
                Liked Mentors <i class='fas fa-user-friends'></i>
              </button>
              {/* <a className='btn white'>
                Liked Mentors <i class='fas fa-user-friends'></i>
              </a> */}
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className={styles.logout}>
          <a href='#'>
            Log Out
          </a>
        </div>
      </div>
    </div>
  );
}

export default AccountStudent;
