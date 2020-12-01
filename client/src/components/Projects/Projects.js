import React from "react";
import { useSelector } from "react-redux";

function Projects({projects}) {
  const project = projects.title;
  const body = projects.body;
  return (
    <>
      <div>
        <p>{project}</p>
        <p>Description: {body}</p>
      </div>
    </>
  );
}

export default Projects;
