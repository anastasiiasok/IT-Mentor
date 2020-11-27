import React from "react";
// import { useSelector } from "react-redux";

function Mentor({mentor}) {
  
  const {name, surname, city, country, timezone,resume, skills, price} = mentor;
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
      <br></br>
      <span>{price}</span>
      <p>{skills.map((skill)=><span> {skill} </span>)}</p>
      <p>
        {company} / {position}
      </p>
    </div>
  );
}

export default Mentor;
