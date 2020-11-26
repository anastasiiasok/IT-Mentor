import React from "react";
// import { useSelector } from "react-redux";

function Mentor({mentor}) {
  // const name = useSelector((state) => state[0].name);
  // const surname = useSelector((state) => state[0].surname);
  // const city = useSelector((state) => state[0].city);
  // const country = useSelector((state) => state[0].country);
  // const timezone = useSelector((state) => state[0].timezone);
  // const company = useSelector((state) => state[0].resume[0].company);
  // const position = useSelector((state) => state[0].resume[0].position);

  const {name, surname, city, country, timezone,resume} = mentor;
  const {company, position} = resume[0];
  return (
    <div className="album py-5 bg-light">
      {/* <Container>
        <Row>
          <Card className="mb-4 box-shadow">
            <CardBody> */}
      <p>All Mentors are here</p>
      <h1>
        {name} {surname}
      </h1>
      <span>
        {city}, {country}
      </span>
      <br></br>
      <span>{timezone}</span>
      <p>
        {company} / {position}
      </p>
    </div>
  );
}

export default Mentor;
