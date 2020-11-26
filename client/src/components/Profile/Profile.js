
import Education from '../Education/Education';
import Person from '../Person/Person';
import Projects from '../Projects/Projects';
import Price from '../Price/Price';
import Resume from '../Resume/Resume';
import BenefitList from '../BenefitList/BenefitList';
import './styles.css';
function Profile() {
  return (
    <div className='full'>
      <h1 className='heading'>Profile</h1>
      <div className='full-info'>
        <Price />
        <BenefitList />
        <Resume />
        <Education />
        <Person />
        <Projects />
      </div>
    </div>

  );
}

export default Profile;
