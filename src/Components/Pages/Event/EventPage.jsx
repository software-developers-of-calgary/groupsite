import React from "react";
import axios from 'axios';
import { URL } from "../../../config";
import 'antd/dist/antd.css';
import { withRouter } from "react-router-dom";
import Description from '../../Common/Description'
import Row from 'antd/es/row';
import Col from 'antd/es/col';
import TimeLoc from "./TimeLoc";
import UserList from "./UserList";
import ProjectList from "../Project/ProjectList";
import { Link } from "react-router-dom";
import { Modal, Button } from 'antd';

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
      description: '',
      isAddProjectModalVisible: false
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

  showModal = () => {
    this.setState({setIsModalVisible: true})
  };

  handleOk = () => {
    console.log('handle ok')
    this.setState({setIsModalVisible: false})
  };

  handleCancel = () => {
    this.setState({setIsModalVisible: false})
  };

  render() {
    const eventId = this.props.match.params.eventId;
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
            <Link to={`${eventId}/projects/new`}> Add new project</Link>
            <button>Add existing project</button>
            <Button type="primary" onClick={() => this.setState({isAddProjectModalVisible: true})}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" visible={this.state.isAddProjectModalVisible} onOk={() => this.handleOk()} onCancel={() => this.handleCancel()}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
            <ProjectList onProjectLoaded={projects => this.setState({projects})} projects={this.state.projects} style={{margin: 'auto', marginTop: '10px', marginBorron: '10px' }}/>
          </div>
      </div>
    )
  }

}
  export default withRouter(EventPage);
