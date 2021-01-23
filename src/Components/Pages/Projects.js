import React from "react";
import ProjectSummary from './ProjectSummary';
import ProjectForm from './NewProject'
import axios from 'axios';
import { URL } from "../../config";
import AddProjectButton from './Project/AddProjectButton'

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      showProjectForm :false,
      resetProjectFormSwitch: false,
      isLoaded: false,
      list: [],
      keys : {}
    };
  }

  handleAddProject(formData, projectsPage) {
    const token = localStorage.getItem('serverApiToken')
    const selected_stack = (formData.technologies || []).map(tech => tech.value)
    axios.post(URL+'/projects', {
      name: formData.name,
      description: formData.description,
      // difficulty_from : ,
      // difficulty_to : ,
      selected_stack,
      summary: formData.summary
      },
      { headers: { Authorization: `Bearer ${token}` } }
    )
    .then(response => {
      const data = response.data[0];
      const newItemList = [data].concat(projectsPage.state.items)
      projectsPage.setState({
        items: newItemList,
        resetProjectFormSwitch: !projectsPage.state.resetProjectFormSwitch,
        showProjectForm: false
      })
    })
    .catch(error => {
      console.log(error);
    })
  }

  componentDidMount() {
    fetch(URL + "/projects")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.reverse()
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  changeFormVisibility() {
    this.setState({display: !this.setState.display})
  }

  render() {
    const { error, isLoaded, items } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div style={{paddingBottom: '25px'}}>
          <ProjectForm
            onSubmit={this.handleAddProject}
            projectsPage={this}
            display={this.state.showProjectForm ? 'block' : 'none'}
            resetSwitch={this.state.resetProjectFormSwitch}
            />
          <AddProjectButton
            action={() => {this.setState({ showProjectForm: !this.state.showProjectForm })}}
            text={ this.state.showProjectForm ? 'Cancel' : 'Add new project' }
          >
          </AddProjectButton>
          <br/>
          <br/>
          { items.map(project => <ProjectSummary props={project} key={project.id} /> ) }
        </div>
      );
    }
  }
}

export default Projects;
