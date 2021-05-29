import React, { Component } from "react";
import "./App.css";
import { Header, Footer } from "./Components";
import Login from "./Components/Pages/Login";
import Events from "./Components/Pages/Event/Events";
import ProjectPage from "./Components/Pages/Project/ProjectPage";
import Tutorial from "./Components/Pages/Tutorial";
import Home from "./Components/Pages/Home";
import Projects from "./Components/Pages/Project/Projects";
import EventPage from "./Components/Pages/Event/EventPage";
import CreateEventProject from "./Components/Pages/CreateEventProject";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function About() {
  return "";
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: ["Home", "Tutorial", "Events", "Projects", "Join us", "Contact"],
      page: "Home",
    };
  }

  handleClick(nextPage) {
    this.setState({
      page: nextPage,
    });
  }

  render() {
    return (
      <Router>
        <div className="content">
          <Header
            page={this.state.page}
            onClick={(i) => this.handleClick(i)}
            pages={this.state.pages}
          />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/events" component={Events} />
            <Route exact path={`/events/:eventId`} component={EventPage} />
            <Route
              path={`/events/:eventId/projects/new`}
              component={CreateEventProject}
            />
            <Route exact path="/tutorial" component={Tutorial} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/projects/" component={Projects} />
            <Route path={`/projects/:projectId`} component={ProjectPage} />
          </Switch>
          <Footer></Footer>
        </div>
      </Router>
    );
  }
}

export default App;
