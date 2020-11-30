import BenefitItem from "../BenefitItem/BenefitItem";
import { useSelector } from "react-redux";
function BenefitList() {
  const benefits = useSelector((state) => state.mentors[0].benefits);
  return (
    <div>
      {/* <h3>BenefitList</h3> */}

      {benefits.map((benefit) => (
        <BenefitItem benefit={benefit} />
      ))}
    </div>
  );
}

export default BenefitList;
