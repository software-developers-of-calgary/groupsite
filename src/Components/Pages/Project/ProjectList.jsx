import React from "react";
import ProjectSummary from '../ProjectSummary';
import { URL } from "../../../config";

class ProjectList extends React.Component {
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


  componentDidMount() {
    fetch(URL + "/projects")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({ isLoaded: true });
          this.props.onProjectLoaded(result.reverse())
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded } = this.state;
    const { projects = []} = this.props
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return projects.map(project => <ProjectSummary props={project} key={project.id} /> )
    }
  }
}

export default ProjectList;
