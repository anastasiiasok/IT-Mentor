import { useSelector } from "react-redux";
import React from "react";

function Person({mentor}) {
  const {
    name,
    surname,
    city,
    country,
    timezone,
    email,
    summary,
  } = mentor;
  const { company, position } = mentor.resume;

  return (
    <>
      <h3>
        {name} {surname}
      </h3>
      <span>
        {city}, {country}
      </span>
      <br></br>

      <span>{timezone}</span>
      <p>
        {company} / {position}
      </p>

      <div>
        <p>{email}</p>
        <p>{summary}</p>
      </div>
      <div>
        <p> #skills</p>
      </div>
    </>
  );
}

export default Person;
