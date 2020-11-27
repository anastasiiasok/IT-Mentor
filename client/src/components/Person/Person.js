import { useSelector } from "react-redux";
import React from "react";

function Person() {
  const { name, surname, city, country, timezone, email } = useSelector(
    (state) => state.mentors[0]
  );
  const { company, position } = useSelector(
    (state) => state.mentors[0].resume[0]
  );

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
        <p>
          Люблю работать с данными и находить в них интересные закономерности
        </p>
      </div>
      <div>
        <p> #skills</p>
      </div>
    </>
  );
}

export default Person;
