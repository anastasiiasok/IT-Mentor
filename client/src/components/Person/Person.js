import { useSelector } from "react-redux";
import React from "react";
import IconedName from '../IconedName/IconedName';


function Person({ mentor }) {
  const { name, surname, city, country, timezone, email, summary } = mentor;
  const { company, position } = mentor.resume[0];

  return (
    <>
      <IconedName name={name} surname={surname} liked={mentor.liked} id={mentor._id} />
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
