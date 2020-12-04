import React from 'react';
import styles from './Account.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Mentor from '../Mentor/Mentor';
import { changeAuth, setUser } from '../../store/actions';

function AccountStudent() {
  const history = useHistory();
  const dispatch = useDispatch();
  const id = useSelector((store) => store.likedMentors);
  const [mentors, setMentors] = React.useState([]);
  const userName = useSelector((store) => store.user.firstName);
  // const storeMentors = useSelector((store) => store.mentors);
  // const mentors = storeMentors.filter(
  //   (mentor) => id.filter((el) => el === mentor._id).length === 1
  // );
  const [value, toggleValue] = React.useState(false);
  React.useEffect(() => {
    const getData = async () => {
      //COMMENT NEXT LINE BEFORE BUILD
      const res = await fetch('http://localhost:3100/mentor/init', {
        //UNCOMMENT NEXT LINE BEFORE BUILD
        // const res = await fetch('https://servertestmentor.herokuapp.com/mentor/init', {

        method: 'POST',
        // DO NOT USE MODE NO-CORS !!!
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });
      const data = await res.json();
      console.log('MENTORss', data);
      setMentors(data);
    };
    getData();
  }, [value]);

  const onClickLikedMentors = () => {
    toggleValue(!value);
  };
  const onClickLogout = async () => {
    // !!!!ACHTUNG!!!! COMMENT NEXT LINE BEFORE BUILD

    const res = await fetch('http://localhost:3100/user/logout');

    //!!!!ACHTUNG UNCOMMENT NEXT LINE BEFORE BUILD

    // const res = await fetch(
    //   'https://servertestmentor.herokuapp.com/user/logout'
    // );

    // !!!DONT TOUCH BELOW

    const result = await res.json();
    console.log('result logout', result);
    dispatch(changeAuth(false));
    dispatch(setUser({}));
    history.push('/');
  };
  return (
    <>
      {value &&
        mentors.map((mentor) => (
          <Mentor styles={{ float: 'right' }} mentor={mentor} />
        ))}
      <div className={styles.account}>
        <div className={styles.nav}>
          <h1 className={styles.schedule}>{userName}'s schedule</h1>

          <img className={styles.calendar} src='calendar.png' width='160'></img>
        </div>

        <div className={styles.mentorsBtn}>
          <button onClick={onClickLikedMentors} className={styles.mentorsBtn}>
            Liked Mentors <i class='fas fa-user-friends'></i>
          </button>
        </div>

        <div className={styles.logout}>
          <span onClick={onClickLogout}>Log Out</span>
        </div>
      </div>
    </>
  );
}

export default AccountStudent;
