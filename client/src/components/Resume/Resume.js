import { useSelector } from "react-redux";
function Resume({resume}) {
  const { start, end } = resume[0].date;
  return (
    <div>
      <h3>Resume</h3>

      <p>
        {start} - {end}
      </p>
      <p>
        {resume[0].company} - {resume[0].position}
      </p>
    </div>
  );
}

export default Resume;
