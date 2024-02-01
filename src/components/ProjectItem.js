import React from "react";

function ProjectItem(props) {

  const project = props.project

  console.log(project.name)
  return (
    <div className="project-item">
      <h3>{project.name}</h3>
      <p>{project.about}</p>
      <div className="technologies">
        {project.technologies.map((technology) => {
          return (
            <span key={technology}>{technology}</span>
          )
        })}
      </div>
    </div>
  );
}

export default ProjectItem;
