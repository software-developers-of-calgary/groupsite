import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Header, Footer } from "./Components";
import Login from "./Components/Pages/Login";
import Events from "./Components/Events";
import ProjectPage from "./Components/Pages/ProjectPage";
import Tutorial from "./Components/Tutorial/Tutorial";
import Home from "./Components/Home/Home";
import Projects from "./Components/Pages/Projects";
import EventPage from "./Components/Pages/EventPage";

import "./App.css";

const App = () => {
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
        <link rel="icon" type="image/png" href="favicon.ico" sizes="16x16" />
        <link rel="canonical" href="http://sdc.fyi" />
      </Helmet>
      <Header />
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/" component={Home} />
          <Route exact path="/events" component={Events} />
          <Route path={`/events/:eventId`} component={EventPage} />
          <Route exact path="/tutorial" component={Tutorial} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/projects/" component={Projects} />
          <Route path={`/projects/:projectId`} component={ProjectPage} />
        </Switch>
      </>
      <Footer />
    </Router>
  );
};

export default App;
