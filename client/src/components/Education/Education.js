import React from "react";
import { useSelector } from "react-redux";

function Education({education}) {
  const { degree, institution } = education;

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
