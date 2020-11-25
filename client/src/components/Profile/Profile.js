
import Education from "../Education/Education";
import Person from "../Person/Person";
import Projects from "../Projects/Projects";
import Price from '../Price/Price';
import Resume from '../Resume/Resume';
import BenefitList from '../BenefitList/BenefitList';
function Profile() {
  return (
    <>
       <h1>Profile</h1>
      <Price />
      <BenefitList />
      <Resume />
      <Education />
      <Person />
      <Projects />
    </>

  );
}

export default Profile;
