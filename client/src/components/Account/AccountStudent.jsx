import React from "react";
import styles from "./Account.module.css";
import { useSelector } from "react-redux";
import Mentor from "../Mentor/Mentor";

function AccountStudent() {
  const id = useSelector((store) => store.likedMentors);
  const storeMentors = useSelector((store) => store.mentors);
  const mentors = storeMentors.filter(
    (mentor) => id.filter((el) => el === mentor._id).length === 1
  );

  const [value, toggleValue] = React.useState(false);
  const onClickLikedMentors = () => {
    toggleValue(!value);
  };
  return (
    <>
      {value && mentors.map((mentor) => <Mentor mentor={mentor} />)}
      <div className={styles.account}>
        {/* <h1>Student's Name </h1> */}
        <div className={styles.schedule}>
          <h1>Schedule </h1>
          <img className={styles.calendar} src="calendar.png" width="50" />
        </div>

        <div className={styles.logout}>
          <button onClick={onClickLikedMentors} className={styles.mentorsBtn}>
            Liked Mentors <i class="fas fa-user-friends"></i>
          </button>
        </div>

        <div className={styles.logout}>
          <a href="#">Log Out</a>
        </div>
      </div>
    </>
  );
}

export default AccountStudent;
