
import React from "react";
import { useSelector} from "react-redux";
import Mentor from "../Mentor/Mentor";
import { SCREEN_SIZE } from '../../store/types'
import SearchForm from "../SearchForm/SearchForm";
import Scroll from "../Scroll/Scroll"
import styles from "./Mentors.module.css";


const Mentors = () => {
  const [mentors, setMentors] = React.useState([]);
  const size = useSelector((store)=>store.screen)
  // const mentors = useSelector((store) => store.mentors);
  const state = mentors.filter((el,i)=> i < size);
  const length = mentors.length;
  const searchMentors = (mentors) => {
    setMentors(mentors);
  };

  return (
    <div className={styles.main}>
      <div>
        <SearchForm func={searchMentors}/>
        {state.map((mentor) => (
          <Mentor mentor={mentor} />
        ))}
      </div>
     {(size < length) && <Scroll size={size + SCREEN_SIZE}/>}
      <br></br>
      <br></br>
    </div>
  );
};

export default Mentors;
