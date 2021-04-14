import React from "react";
import ProjectSummary from './ProjectSummary';
import { queryProjects } from "../../../adapters/API/projects"

class ProjectList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false
    };
  }


  componentDidMount() {
    if( this.props.skipLoad ) {
      this.setState({ isLoaded: true });
      return
    }
    queryProjects()
    .then(({ error, data }) => {
      this.setState({ isLoaded: true, error });
      this.props.onProjectLoaded(data.reverse())
    })
  }

  render() {
    const { error, isLoaded } = this.state;
    const { style = {}, projects = []} = this.props

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div style={{marginBottom: '25px'}}>
          {projects.map(project => <ProjectSummary style={style} props={project} key={project.id} /> )}
        </div>
      )
    }
  }
}

export default ProjectList;
