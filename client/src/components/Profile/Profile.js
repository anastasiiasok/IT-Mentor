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

function Profile() {
  return (
    <div className="full">
      <h1 className="heading">Profile</h1>

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
            <SignIn />
            <div className="card__mentor__img">
              <img src="mentor_img.svg" alt="" />
            </div>
            <div className="free_test_session">
              <a href="">
                <Price />
              </a>
            </div>

            <a href="" className="btn yellow">
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
                <Person />
              </p>
            </div>

            <div className="card__info__mentor">
              <p className="bold">Can help with</p>

              <p>
                <BenefitList />
              </p>
            </div>
            <div className="card__info__mentor">
              <div className="grid-column-2-1fr">
                <div className="bold">Work experience</div>
                <div></div>
                <div>
                  <Resume />
                </div>
                <div></div>
                {/* <div>Содержание 5</div>
                <div>Содержание 6</div>
                <div>Содержание 7</div>
                <div>Содержание 8</div>
                <div>Содержание 9</div>
                <div>Содержание 10</div>
                <div>Содержание 11</div>
                <div>Содержание 12</div> */}
              </div>
            </div>
            <div className="card__info__mentor">
              <div className="bold">Projects</div>
              <div>
                <Projects />
              </div>

              {/* <div>Содержание 5</div>
              <div>Содержание 6</div>
              <div>Содержание 7</div>
              <div>Содержание 8</div> */}
            </div>
            <div className="card__info__mentor">
              <div className="grid-column-2-1fr">
                <div className="bold">Education</div>
                <div></div>

                <div>
                  <Education />
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
    </div>
  );
}

export default Profile;
