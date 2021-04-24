import React from "react";
import ProjectForm from "./NewProject";
import axios from "axios";
import { URL } from "../../../config";
import AddProjectButton from "./AddProjectButton";
import ProjectList from "./ProjectList";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      showProjectForm: false,
      resetProjectFormSwitch: false,
      isLoaded: false,
      list: [],
      keys: {},
    };
  }

  changeFormVisibility() {
    this.setState({ display: !this.setState.display });
  }

  getHandleProjectAdded() {
    const ref = this;
    const handleProjectCreated = (newProject) => {
      ref.setState({
        projects: [newProject, ...this.state.projects],
        showProjectForm: false,
      });
    };
    return handleProjectCreated;
  }

  render() {
    return (
      <div>
        <ProjectForm
          handleProjectCreated={this.getHandleProjectAdded()}
          projectsPage={this}
          display={this.state.showProjectForm ? "block" : "none"}
          resetSwitch={this.state.resetProjectFormSwitch}
        />
        <AddProjectButton
          action={() => {
            this.setState({ showProjectForm: !this.state.showProjectForm });
          }}
          text={this.state.showProjectForm ? "Cancel" : "Add new project"}
        />
        <br />
        <br />
        <ProjectList
          onProjectLoaded={(projects) => this.setState({ projects })}
          projects={this.state.projects}
        />
      </div>
    );
  }
}

export default Projects;
