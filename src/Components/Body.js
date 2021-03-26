import React from "react";
import Login from "./Pages/Login";
import Events from "./Events";
import Tutorial from "./Tutorial/Tutorial";
import Home from "./Home/Home";
import Projects from "./Pages/Projects";

class Body extends React.Component {
  render() {
    if (this.props.page === "Join us") {
      return <Login />;
    } else if (this.props.page === "Home") {
      return <Home onClick={(i) => this.props.onClick(i)}></Home>;
    } else if (this.props.page === "Events") {
      return <Events />;
    } else if (this.props.page === "Projects") {
      return <Projects />;
    } else if (this.props.page === "Tutorial") {
      return <Tutorial />;
    } else if (this.props.page === "Contact") {
      return <div></div>;
    } else {
      return <div>Hello this is the {this.props.page} page</div>;
    }
  }
}

export default Body;
