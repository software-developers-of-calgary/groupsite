import React, { Component } from "react";
import ProjectForm from "./NewProject";
import axios from "axios";
import { URL } from "../../config";
import AddProjectButton from "./AddProjectButton";
import ProjectList from "./ProjectList";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      showProjectForm: false,
      resetProjectFormSwitch: false,
      projects: [],
    };
  }

  handleAddProject(formData, projectsPage) {
    const token = localStorage.getItem("serverApiToken");
    const selected_stack = (formData.technologies || []).map(
      (tech) => tech.value
    );
    axios
      .post(
        URL + "/projects",
        {
          name: formData.name,
          description: formData.description,
          selected_stack,
          summary: formData.summary,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => {
        const data = response.data[0];
        const newItemList = [data].concat(projectsPage.state.projects);
        projectsPage.setState({
          projects: newItemList,
          resetProjectFormSwitch: !projectsPage.state.resetProjectFormSwitch,
          showProjectForm: false,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  changeFormVisibility() {
    this.setState({ display: !this.setState.display });
  }

  render() {
    return (
      <div className="wrapper">
        <ProjectForm
          onSubmit={this.handleAddProject}
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
        <ProjectList
          onProjectLoaded={(projects) => this.setState({ projects })}
          projects={this.state.projects}
        />
      </div>
    );
  }
}

export default Projects;
