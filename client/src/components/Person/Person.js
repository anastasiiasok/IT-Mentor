import { useSelector } from "react-redux";
import React from "react";

function Person() {
  const name = useSelector((state) => state.name);
  const surname = useSelector((state) => state.surname);
  const city = useSelector((state) => state.city);
  const country = useSelector((state) => state.country);
  const timezone = useSelector((state) => state.timezone);
  const email = useSelector((state) => state.email);
  const company = useSelector((state) => state.resume[0].company);
  const position = useSelector((state) => state.resume[0].position);
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
