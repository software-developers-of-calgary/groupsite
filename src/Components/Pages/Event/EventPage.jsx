import React from "reactn";
import axios from "axios";
import { URL } from "../../../config";
import "antd/dist/antd.css";
import { withRouter } from "react-router-dom";
import Description from "../../Common/Description";
import Row from "antd/es/row";
import Col from "antd/es/col";
import TimeLoc from "./TimeLoc";
import UserList from "./UserList";
import ProjectList from "../Project/ProjectList";
import { Link } from "react-router-dom";
import { Modal, Button } from "antd";
import "./EventPage.css";

class EventPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsedSummary: true,
      error: null,
      isLoaded: false,
      list: [],
      keys: {},
      date: "",
      location: "",
      name: "",
      open: "",
      users: [],
      description: "",
      projects: [],
      isAddProjectModalVisible: false,
    };
  }

  componentDidMount() {
    const eventId = this.props.match.params.eventId;
    fetch(URL + `/events/${eventId}`)
      .then((res) => res.json())
      .then(
        ({ date, description, location, name, open, users, projects }) => {
          this.setState({
            isLoaded: true,
            date,
            description,
            location,
            users,
            name,
            open,
            eventProjects: projects
          });
        },
        (error) => {
          console.log({ error });
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );

    fetch(URL + "/projects")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({ projects: result.reverse() });
        },
        (error) => {
          this.setState({error});
        }
      )
  }

  registerUserForEvent(props) {
    const token = localStorage.getItem("serverApiToken");
    const eventId = props.match.params.eventId;
    axios
      .post(`${URL}/events/${eventId}/users`, "{}", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        this.setState({ users: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  switchCollapse = () => {
    this.setState({ isCollapsedSummary: !this.state.isCollapsedSummary });
  };

  showModal = () => {
    this.setState({ isAddProjectModalVisible: true });
  };

  handleOk = () => {
    console.log("handle ok", this);
    this.setState({ isAddProjectModalVisible: false });
  };

  handleCancel = () => {
    this.setState({ isAddProjectModalVisible: false });
  };

  associateProjectWithEvent = (projectId, eventId) => {
    const token = localStorage.getItem("serverApiToken");
    axios
      .post(
        URL + `/events/${eventId}/projects`,
        {
          projectId: projectId,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => {
        this.setState({ eventProjects: response.data });
        this.handleCancel();
      })
      .catch((error) => {
        console.log(error);
        this.handleCancel();
      });
  };

  render() {
    const eventId = this.props.match.params.eventId;
    if (!this.state.isLoaded) {
      return "loading"; // TODO create comp
    }
    if (this.state.error) {
      return "unexpected error"; // TODO create comp
    }
    // const isAddUserButtonEnabled = this.state.date
    return (
      <div>
        <br />
        <h2> {this.state.name} </h2>
        <Row>
          <Col span={7}>
            <TimeLoc date={this.state.date} location={this.state.location} />{" "}
            <br />
            <UserList
              disabled={!this.state.open}
              users={this.state.users}
              register={() => this.registerUserForEvent(this.props)}
            />
          </Col>
          <Col span={1}></Col>
          <Col span={15}>
            <Description
              data={this.state.description}
              collapsed={this.state.isCollapsedSummary}
              onChange={this.switchCollapse}
            />
          </Col>
          <Col span={1} />
        </Row>
        <div>
          <h2> Projects </h2>
          <Link to={`${eventId}/projects/new`}>
            <Button type="primary" disabled = {!this.global.user}>
              Add new project
            </Button>
          </Link>
          <Button
            type="primary"
            onClick={() => this.setState({ isAddProjectModalVisible: true })}
            disabled = {!this.global.user}
          >
            Add Existing Project
          </Button>
          <Modal
            title={"Add Project to " + this.state.name}
            visible={this.state.isAddProjectModalVisible}
            footer={[]}
            onCancel={this.handleCancel}
          >
            <div className="modal-container">
              {this.state.projects?.filter(project => !this.state.eventProjects.map(ep => ep.id).includes(project.id)).map((project) => (
                <div className="modal-project">
                  <Link
                    to={`/projects/${project.id}`}
                    target="_blank"
                    className="title"
                  >
                    {" "}
                    {project.name}
                  </Link>
                  <Button
                    className="modal-add-button"
                    onClick={() =>
                      this.associateProjectWithEvent(
                        project.id,
                        this.props.match.params.eventId
                      )
                    }
                  >
                    {" "}
                    Import
                  </Button>
                </div>
              ))}
            </div>
          </Modal>
          <ProjectList
            skipLoad
            projects={this.state.eventProjects}
            style={{ margin: "auto", marginTop: "10px", marginBorron: "10px" }}
          />
        </div>
      </div>
    );
  }
}
export default withRouter(EventPage);
