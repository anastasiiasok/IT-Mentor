import React from "react";
import { useSelector } from "react-redux";

function Education() {
  const degree = useSelector((state) => state[0].education.degree);
  const institution = useSelector((state) => state[0].education.institution);
  return (
    <>
      <h3>Education</h3>

      <p>
        <span>{degree}</span>
      </p>
      <p>
        <span>{institution}</span>
      </p>
    </>
  );
}

export default Education;
