import Price from '../Price/Price';
import Resume from '../Resume/Resume';
import BenefitList from '../BenefitList/BenefitList';

function Profile() {
  return (
    <div>
      <h1>Profile</h1>
      <Price />
      <BenefitList />
      <Resume />
    </div>
  );
}

export default Profile;
