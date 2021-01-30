import React from "react";
import 'antd/dist/antd.css';
import { withRouter } from "react-router";
import Description from '../Common/Description'
import Row from 'antd/es/row';
import Col from 'antd/es/col';
// import { Image } from '@ant-design/icons'
import TimeLoc from "../Common/TimeLoc";

class ProjectPage extends React.Component {

  state = {
    isCollapsedSummary: true
  }

  switchCollapse = () => {
    this.setState({isCollapsedSummary: !this.state.isCollapsedSummary})
  }

  componentDidMount() {
  }

  render() {
    
    return (
      <div>
        <br/>
        <h2> Software Developers Of Calgary Hackhaton January</h2>
        <Row>
          <Col span={8}>
            <TimeLoc date={"2021-01-30"} location={"https://meet.google.com/kgs-gjaa-uzx"}/>
          </Col>
          <Col span={15} >
          <Description collapsed={this.state.isCollapsedSummary} onChange={this.switchCollapse} />
          </Col>
          <Col span={1} />
        </Row>


      </div>

    )
  }


}
  export default withRouter(ProjectPage);
