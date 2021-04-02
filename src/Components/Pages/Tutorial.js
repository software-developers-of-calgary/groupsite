import React, { Component } from "react";
import Highlight from "react-highlight";
import Row from "antd/es/row";
import Col from "antd/es/col";

import SideMenu from "../Common/SideMenu/SideMenu";
import SectionHeader from "../Common/SectionHeader/SectionHeader";

class Tutorial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSideMenuVisible: false,
    };
  }

  setSideMenuVisibilityChanged = (visibility) => {
    this.setState({ isSideMenuVisible: visibility });
  };

  render() {
    var dict = [
      ["Why to learn", "why"],
      ["What is React", "what"],
      ["Suggested materials", "tutorial"],
      ["Javascript XML ", "JSX"],
      ["React Components", "tutorial-component"],
    ];
    return (
      <Row className="row row-content">
        <SideMenu
          menuitem={dict}
          onHideChangeMenuState={this.setSideMenuVisibilityChanged}
        />
        <Col span={this.state.isSideMenuVisible ? 24 : 20}>
          <h1>Tutorial</h1>
          <br />
          <h2>
            {" "}
            If you are looking for a way to catch up to the group this might
            help you
          </h2>
          <br />
          <br />
          <div id="why">
            <h3>Why do we learn React.js?</h3>
            <div>
              Most of us aren't a front end developer. But we felt a need to
              learn a modern front end framework.
            </div>
          </div>
          <div>
            <h3 id="what"> What is React?</h3>
            React is a JavaScript UI library developed by Facebook. To learn
            more: <br />
            <a href="https://www.w3schools.com/whatis/whatis_react.asp">
              https://www.w3schools.com/whatis/whatis_react.asp{" "}
            </a>
          </div>
          <div id="tutorial">
            List of tutorials
            <ul>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://reactjs.org/tutorial/tutorial.html"
                >
                  'Official' React tutorial hands-on (Picking up terminology on
                  the way)
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.robinwieruch.de/javascript-fundamentals-react-requirements/#react-arrow-functions"
                >
                  A tutorial with more fundamentals, but without exercises
                </a>
              </li>
            </ul>
          </div>

          <h4>
            While we are happy to see you on any of our hackathons, there are a
            few things you should definitely know (from prev. experience /
            tutorials) to get the best out of our sessions.
          </h4>
          <br />
          <div id="JSX">
            <SectionHeader
              title="Javascript XML (JSX)"
              buttonText="Questions?"
            />
            {example(
              <div>
                &nbsp;&nbsp; It provides the ability to write JS code as an XML
                document, which will be translated into HTML before rendering it
                to the browser. In other words, it lets you refer React
                Components as HTML tags.
                <br />
                &nbsp;&nbsp;In this example, Foo is a class which extends
                React.Component. What is a React.Component? See the next
                entry... Note: &nbsp;{" "}
                <q>
                  Fundamentally, JSX just provides syntactic sugar for the
                  React.createElement(component, props, ...children) function.
                </q>
                <br />
                One more thing. When a function returns a JSX code snippet it
                should be enclosed into one parent tag.
              </div>,
              `class Foo extends React.Component {
  render(){
    return (<div>bar</div>)
  }
}
{/*....*/}
<div>
  <Foo/>
</div>`
            )}
          </div>

          <br />
          <div id="tutorial-component">
            {" "}
            <SectionHeader title="React Components" buttonText="Questions?" />
            {example(
              <div>
                A class which extends React.Component has a handful of useful
                features
                <ul>
                  <li>
                    A React component has a state, which can be set in the
                    cunstructor. Later on, you can modify a state of a component
                    by calling the this.setstate() function. Doing that will
                    (sooner or later) result of the rerendering of the
                    component. For more check out a &nbsp;
                    <a href="https://reactjs.org/docs/react-component.html#setstate">
                      useful article
                    </a>
                    .
                  </li>
                  <li>
                    The render method is the only mandatory method what you have
                    to implement. It is automatically called when your component
                    gets used. It should return the appropriate JSX code.
                  </li>
                  <li>
                    Other useful methods are&nbsp;
                    <a href="https://reactjs.org/docs/react-component.html#componentdidmount">
                      componentDidMount()
                    </a>
                    &nbsp;and&nbsp;
                    <a href="https://reactjs.org/docs/react-component.html#componentDidUpdate()">
                      componentDidUpdate()
                    </a>{" "}
                    &nbsp; but you do not have to know everything just to start
                    to learn...
                  </li>
                </ul>
              </div>,
              `class Foo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      someBool: true,
      prop: props.val,
      otherProp: proprs.otherVal
        };

  methodExample(){
    this.setState(
      {
        someBool : false
      }
    )
  }

  render(){
    return (<div>bar</div>)
  }
}

/*usage*/
<Foo val=specificVal otherVal={this.functionCall()}/>
`
            )}
          </div>

          <div id="tutorial-component2">
            <h4>Components and function</h4>
            <h5>In React you can create a lot of things</h5>
          </div>
        </Col>
      </Row>
    );
  }
}

function example(description, toHighlight) {
  return (
    <Row>
      <Col span={12}>{description}</Col>
      <Col span={12}>
        <Highlight language="javascript">{toHighlight}</Highlight>
      </Col>
    </Row>
  );
}
export default Tutorial;
