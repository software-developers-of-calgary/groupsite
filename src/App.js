import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Header, Footer, Body } from "./Components";
import Login from "./Components/Pages/Login";
import Events from "./Components/Events";
import ProjectPage from "./Components/Pages/ProjectPage";
import Tutorial from "./Components/Pages/Tutorial";
import Home from "./Components/Pages/Home";
import Projects from "./Components/Pages/Projects";
import EventPage from "./Components/Pages/EventPage";

import "./App.css";

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
        <Helmet>
          <title>Software Developers of Calgary</title>
          <meta
            name="description"
            content="The perfect place for developers of all levels to aggregate and level up their skills or help others to do so."
          />
          <meta
            name="keywords"
            content="calgary, software developers, software projects, hackathons"
          />
        </Helmet>
        <div className="content">
          <Header
            page={this.state.page}
            onClick={(i) => this.handleClick(i)}
            pages={this.state.pages}
          />
          <div style={{ marginLeft: "10px", minHeight: "calc(100vh - 110px)" }}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/events" component={Events} />
              <Route path={`/events/:eventId`} component={EventPage} />
              <Route exact path="/tutorial" component={Tutorial} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/projects/" component={Projects} />
              <Route path={`/projects/:projectId`} component={ProjectPage} />
            </Switch>
          </div>
          <Footer></Footer>
        </div>
      </Router>
    );
  }
}

export default App;
