import React from "react";
import ProjectForm from "./NewProject";
import AddProjectButton from "./AddProjectButton";
import ProjectList from "./ProjectList";
import { createProject } from "../../../adapters/API/projects"

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      showProjectForm: false,
      resetProjectFormSwitch: false,
      list: []
    };
  }

  handleAddProject(formData, projectsPage) {
    const selected_stack = (formData.technologies || []).map( (tech) => tech.value );
    createProject(
      {
        name: formData.name,
        description: formData.description,
        selected_stack,
        summary: formData.summary,
      }
    ).then(({ error, data }) => {
      const newItemList = [data[0]].concat(projectsPage.state.projects);
      console.log(newItemList)
      projectsPage.setState({
        projects: newItemList,
        resetProjectFormSwitch: !projectsPage.state.resetProjectFormSwitch,
        showProjectForm: false,
      });
    })
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
