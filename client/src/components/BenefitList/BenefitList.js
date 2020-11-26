import BenefitItem from '../BenefitItem/BenefitItem';
import { useSelector } from 'react-redux';
function BenefitList() {
  const benefits = useSelector((state) => state[0].benefits);
  return (
    <div>
      <h3>BenefitList</h3>
      <ul>
        {benefits.map((benefit) => (
          <BenefitItem benefit={benefit} />
        ))}
      </ul>
    </div>
  );
}

export default BenefitList;
