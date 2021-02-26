import React from "react";
import axios from 'axios';
import { URL } from "../../config";
import 'antd/dist/antd.css';
import { withRouter } from "react-router-dom";
import Description from '../Common/Description'
import Row from 'antd/es/row';
import Col from 'antd/es/col';
import TimeLoc from "../Common/TimeLoc";
import UserList from "../Common/UserList";
import ProjectList from "./Project/ProjectList";

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
      open: '',
      users: [],
      description: ''
    };
  }

  componentDidMount() {
    const eventId = this.props.match.params.eventId;
    fetch(URL + `/events/${eventId}`)
      .then(res => res.json())
      .then(
        ({date, description, location, name, open, users }) => {
          this.setState({
            isLoaded: true,
            date,
            description,
            location,
            users,
            name,
            open
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

  registerUserForEvent(props) {
    const token = localStorage.getItem('serverApiToken')
    const eventId = props.match.params.eventId;
    axios.post(
      `${URL}/events/${eventId}/users`,
      '{}',
      { headers: { Authorization: `Bearer ${token}` } }
    )
    .then(response => {
      this.setState({users: response.data })
    })
    .catch(error => {
      console.log(error);
    })
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
    // const isAddUserButtonEnabled = this.state.date
    return (
      <div>
        <br/>
        <h2> {this.state.name} </h2>
        <Row>
          <Col span={7}>
            <TimeLoc date={this.state.date} location={this.state.location}/> <br/>
            <UserList disabled={!this.state.open } users={this.state.users} register={() => this.registerUserForEvent(this.props)}/>
          </Col>
          <Col span={1}>
          </Col>
          <Col span={15} >
          <Description data={this.state.description} collapsed={this.state.isCollapsedSummary} onChange={this.switchCollapse} />
          </Col>
          <Col span={1} />
        </Row>
          <div>
            <h2> Projects </h2>
            <ProjectList onProjectLoaded={projects => this.setState({projects})} projects={this.state.projects} style={{margin: 'auto', marginTop: '10px', marginBorron: '10px' }}/>
          </div>
      </div>
    )
  }

}
  export default withRouter(EventPage);
