import React from "react";
import "./Home.css";

import logo from "../../images/sdc_logo_bold.jpg";

class Home extends React.Component {
  render() {
    return (
      <div className="home-wrapper home-background">
        <img src={logo} className="title-image" />
        <div className="home-content">
          <h2> Welcome </h2>
          <p>
            <i>
              I was recently at a meetup in another city where a bunch of
              current/new Software Developers would get together and work on
              projects, or walk through tutorials together. It was useful. When
              one person didn't know something, often someone else did. It was
              just a helpful way to learn and grow as a software developer.{" "}
              <br></br>Simon - January 26, 2019
            </i>
          </p>
          <p>
            I wanted to get this started as a regular thing in Calgary, where
            people can come and work on their own projects, or band together
            with others to put together something cool. Or just come and learn a
            new language or framework.
          </p>
          <p>
            That was two years ago. We are now an organization of software
            developers growing as quickly as we are able. But primarily we host
            monthly "mini-hackathons" where we spend a day coding in groups,
            then towards the end of the day we share what we've learned!
            <br />
            Simon - January 25.2021
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
