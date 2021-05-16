import React from "react";
import ProjectForm from "./Project/NewProject";
import { associateProjectWithEvent } from "../../adapters/API/projects";
import { useHistory } from "react-router-dom";

export default function CreateEventProject(props) {
  const eventId = props.match.params.eventId;
  const history = useHistory();

  const onProjectCreated = (project) =>
    associateProjectWithEvent(project.id, eventId)
      .then((response) => {
        console.log(response)
        history.goBack();
      })
      .catch((error) => {
        console.log(error);
      });

  return (
    <div>
      <br />
      <ProjectForm
        handleProjectCreated={onProjectCreated}
        resetSwitch={() => {}}
      />
    </div>
  );
}
