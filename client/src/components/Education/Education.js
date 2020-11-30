import React from "react";
import { useSelector } from "react-redux";

function Education() {
  const { degree, institution } = useSelector(
    (state) => state.mentors[0].education[0]
  );

  return (
    <>
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
