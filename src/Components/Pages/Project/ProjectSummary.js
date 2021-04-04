import React from "react";
import { useHistory } from "react-router-dom";
import TechStack from "../../Common/TechStack/TechStack";

const projectClicked = (history, projectId) =>
  history.push(`/projects/${projectId}`);

const ProjectSummary = (props) => {
  const project = props.props;
  const stack = project.selected_stack || "";
  let history = useHistory();

  return (
    <div
      onClick={() => projectClicked(history, project.id)}
      className={"project-summary"}
      style={props.style}
    >
      <h3 className={"centered-text"}>
        <b>{project.name}</b>
      </h3>
      <p> {project.description} </p>
      <TechStack techStackAsString={stack}></TechStack>
      <br />
    </div>
  );
};

export default ProjectSummary;
