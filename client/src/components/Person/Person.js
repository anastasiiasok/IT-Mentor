import { useSelector } from "react-redux";
import React from "react";

function Person({ mentor }) {
  const { name, surname, city, country, timezone, email, summary } = mentor;
  const { company, position } = mentor.resume[0];

  return (
    <>
      <h3>
        {name} {surname} <i class="far fa-thumbs-up"></i>
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
