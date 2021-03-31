import React, { Component } from "react";

export default class AddProject extends React.Component {
  state = { error: undefined };

  handleAddProject = (e) => {
    e.preventDefault();
    const project = e.target.elements.project.value.trim();
    const error = this.props.handleAddProject(project);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.project.value = "";
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddProject}>
          <input type="text" name="project"></input>
          <button className="button">!!!Add Project</button>
        </form>
      </div>
    );
  }
}
