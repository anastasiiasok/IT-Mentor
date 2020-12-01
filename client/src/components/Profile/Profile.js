import React from 'react';
import {useLocation} from 'react-router-dom';
import Education from "../Education/Education";
import Person from "../Person/Person";
import Projects from "../Projects/Projects";
import Price from "../Price/Price";
import Resume from "../Resume/Resume";
import BenefitList from "../BenefitList/BenefitList";
import SignIn from "../SignIn/SignIn";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  Redirect,
} from "react-router-dom";
import "./styles.css";
import Mentor from '../Mentor/Mentor';

function Profile() {
  const mentor = useLocation().state.mentor;
  const [visible, setVisibility] = React.useState(false);

  const handleClick = () => {
    setVisibility(!visible);
  };

  return (
    <div className="full">
      <div>
        <br></br>
      </div>

      <div className="container">
        <a href="" className="btn no-padding">
          <i className="fas fa-long-arrow-alt-left"></i>
          <span>
            <Link to="/mentors"> All mentors </Link>
          </span>
        </a>
        <div className="profile__grid__template">
          <div className="card__mentor">
            <SignIn visible={visible} setVisibility={setVisibility} />
            <div className="card__mentor__img">
              <img src="mentor_img.svg" alt="" />
            </div>
            <div className="free_test_session">
              <a href="">
                <Price price={mentor.price}/>
              </a>
            </div>

            <a onClick={handleClick} className="btn yellow">
              Schedule a free call
            </a>
            <div className="free_test_session">
              <a href=""> Free test session</a>
            </div>
            <br />
          </div>

          <div className="info__mentor__container">
            <div className="card__info__mentor">
              <p>
                <Person mentor={mentor}/>
              </p>
            </div>

            <div className="card__info__mentor">
              <p className="bold">Can help with</p>

              <p>
                <BenefitList benefits={mentor.benefits}/>
              </p>
            </div>
            <div className="card__info__mentor">
              <div className="grid-column-2-1fr">
                <div className="bold">Work experience</div>
                <div></div>
                <div>
                  <Resume resume={mentor.resume}/>
                </div>
                <div></div>
              </div>
            </div>
            <div className="card__info__mentor">
              <div className="bold">Projects</div>
              <div>
                <Projects projects={mentor.projects[0]}/>
              </div>
            </div>
            <div className="card__info__mentor">
              <div className="grid-column-2-1fr">
                <div className="bold">Education</div>
                <div></div>

                <div>
                  <Education education={mentor.education[0]}/>
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
