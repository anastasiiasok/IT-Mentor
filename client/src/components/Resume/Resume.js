import { useSelector } from 'react-redux';
function Resume() {
  const resume = useSelector((state) => state[0].resume);

  const start = resume[0].date.start;
  const end = resume[0].date.end;
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
