import React from "react";
import { useSelector } from "react-redux";

function Projects() {
  const projects = useSelector((state) => state.mentors[0].projects[0].title);
  const body = useSelector((state) => state.mentors[0].projects[0].body);
  return (
    <>
      <h3>Projects</h3>
      <div>
        <p>{projects}</p>
        <p>Description: {body}</p>
      </div>
    </>
  );
}

export default Projects;
