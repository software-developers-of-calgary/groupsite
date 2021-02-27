import React from "react";
import axios from 'axios';
import { URL } from "../../config";
import { Button, Comment, Avatar, Tooltip, Input } from "antd";
import moment from "moment";
import 'antd/dist/antd.css';
import { withRouter } from "react-router";
import NewCommentForm from '../Common/NewCommentForm'
import TechStack from '../Common/TechStack/TechStack'
// import { Image } from '@ant-design/icons'

const { TextArea } = Input;

const firstTwoLetters = str => (!str || str.length < 3) ? str : str.substring(0, 2)

class ProjectPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resetCommentFormSwitch: false,
    };
  }

  componentDidMount() {
    const projectId = this.props.match.params.projectId;
    fetch(`${URL}/projects/${projectId}`)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            hasError: false,
            project: result.project[0],
            comments: result.comments,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            hasError: true,
            error,
          });
        }
      );
  }

  Comment = (comment) => (
    <Comment
      author={<a>{comment.display_name}</a>}
      avatar={
      //   comment.photo?           <Avatar
      //   src={<Image src={comment.photo} />}
      // /> :

        <Button type="text" shape="circle">
          {firstTwoLetters(comment.display_name)}
      </Button>
      }
      content={
        <p>
          {comment.comment}
        </p>
      }
      datetime={
        <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
          <span>{moment(comment.created_at).fromNow()}</span>
        </Tooltip>
      }
    >
    </Comment>
  );

  handleAddComment(formData, page) {
    const token = localStorage.getItem('serverApiToken')
    const projectId = page.props.match.params.projectId;
    page.setState({
      sendData: true
    })
    axios.post(
      `${URL}/projects/${projectId}/comments`,
      formData,
      { headers: { Authorization: `Bearer ${token}` } }
    )
    .then(response => {
      const data = response.data[0];
      const newItemList = [...page.state.comments, data]
      page.setState({
        comments: newItemList,
        sendData: false,
        resetCommentFormSwitch: !page.state.resetCommentFormSwitch
      })
    })
    .catch(error => {
      console.log(error);
      page.setState({
        sendData: false
      })
    })
  }

  render() {
    console.log("ProjectPage", this.props.match.params.projectId, this.state);
    if (!this.state.isLoaded) {
      return "Loading";
    }
    if (this.state.hasError) {
      return "Opps some error, pls reload the page";
    }
    console.log(this.state);
    const { project, comments } = this.state;
    return (
    
      <div style={{maxWidth: "1250px", margin: 'auto'}}>
        <div>
        <h1> {project.name} </h1>
        <span style={{display: 'block', width: '100%', textAlign: 'center'}}>{project.summary}</span>
        </div>

        <span> Created at</span>
        <span> {moment(project.created_at).format("YYYY/MM/DD")}</span>
        <TechStack className="right" techStackAsString={project.selected_stack}/>

        <div></div>
        <div>
          <h3>Description</h3>
          {project.description}
        </div>
        <div>
          <h3>Discussion</h3>
          <div>
            This is a place to ask your question, discover how many person is
            interested in this idea etc. This is the default message what is
            always (?) shown
          </div>
        </div>
        {comments.map(comment => this.Comment(comment))}
        <div style={{ maxWidth: "80%", margin: "auto" }}>
          <NewCommentForm
            onSubmit={this.handleAddComment}
            disabled={this.state.sendData}
            page={this}
            resetSwitch={this.state.resetCommentFormSwitch}
            />
        </div>
      </div>
    );
  }
}

export default withRouter(ProjectPage);
