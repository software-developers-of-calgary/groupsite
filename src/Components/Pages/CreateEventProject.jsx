import React from "react";
import ProjectForm from "./Project/NewProject";
import associateProjectWithEvent from "./Event/associateProjectWithEvent";
import { useHistory } from "react-router-dom";

export default function CreateEventProject(props) {
  const history = useHistory();
  const onProjectCreated = (project) =>
    associateProjectWithEvent(project.id, props.eventId)
      .then((response) => {
        //this.setState({ projects: response.data });
        history.goBack();
      })
      .catch((error) => {
        console.log(error);
      });

  console.log("rendering CreateEventProject");
  return (
    <div>
      <br />
      <ProjectForm
        handleProjectCreated={onProjectCreated}
        projectsPage={null}
        display={null}
        resetSwitch={null}
      />
    </div>
  );
}
