import React from "react";
import axios from 'axios';
import { URL } from "../../config";
import 'antd/dist/antd.css';
import { withRouter } from "react-router-dom";
import Description from '../Common/Description'
import Row from 'antd/es/row';
import Col from 'antd/es/col';
// import { Image } from '@ant-design/icons'
import TimeLoc from "../Common/TimeLoc";
import UserList from "../Common/UserList";
import ProjectList from "../Event/ProjectList";

class EventPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isCollapsedSummary: true,
      error: null,
      isLoaded: false,
      list: [],
      keys : {},
      date: '',
      location: '',
      name: '',
      description: ''
    };
  }

  componentDidMount() {
    const eventId = this.props.match.params.eventId;
    fetch(URL + `/events/${eventId}`)
      .then(res => res.json())
      .then(
        ({date, description, location, name}) => {
          this.setState({
            isLoaded: true,
            date,
            description,
            location,
            name
          });
        },
        (error) => {
          console.log({error})
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  switchCollapse = () => {
    this.setState({isCollapsedSummary: !this.state.isCollapsedSummary})
  }

  render() {
    if (!this.state.isLoaded) {
      return 'loading' // TODO create comp
    }
    if (this.state.error) {
      return 'unexpected error' // TODO create comp
    }
    return (
      <div>
        <br/>
        <h2> {this.state.name} </h2>
        <Row>
          <Col span={7}>
            <TimeLoc date={this.state.date} location={this.state.location}/>
            <UserList />
          </Col>
          <Col span={1}>
          </Col>
          <Col span={15} >
          <Description data={this.state.description} collapsed={this.state.isCollapsedSummary} onChange={this.switchCollapse} />
          </Col>
          <Col span={1} />
        </Row>
          <div>
            <ProjectList />
          </div>
      </div>
    )
  }

}
  export default withRouter(EventPage);
