import React, { Component } from "react";
import Highlight from "react-highlight";
import Row from "antd/es/row";
import Col from "antd/es/col";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import About from "./Tutorials/About.jsx";
import GettingStarted from "./Tutorials/GettingStarted";

import SideMenu from "../Common/SideMenu/SideMenu";
import SectionHeader from "../Common/SectionHeader/SectionHeader";

const { SubMenu } = Menu;

class Tutorial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: "about",
      isSideMenuVisible: false,
      current: "mail",
    };
  }

  setSideMenuVisibilityChanged = (visibility) => {
    this.setState({ isSideMenuVisible: visibility });
  };

  handleClick = (event) => {
    console.log(event);
    const target = event.key;
    if (this.state.navigation !== target) {
      window.history.replaceState(null, "Tutorials", `/tutorial/${target}`);
      this.setState({ navigation: event.key });
    }
  };

  render() {
    return (
      <Row className="row row-content">
        <Col span={4}>
          <Menu
            onClick={this.handleClick}
            style={{ width: 200 }}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
          >
            <Menu.Item key="about">About this page</Menu.Item>
            <SubMenu key="sub1" title="Getting started">
              <Menu.Item key="getting-started">Getting started</Menu.Item>
              <Menu.ItemGroup key="g1" title="Item 1">
                <Menu.Item key="1">Option 1</Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup key="g2" title="Item 2">
                <Menu.Item key="3">Option 3</Menu.Item>
                <Menu.Item key="4">Option 4</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <SubMenu
              key="sub2"
              icon={<AppstoreOutlined />}
              title="Navigation Two"
            >
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
              </SubMenu>
            </SubMenu>
            <SubMenu
              key="sub4"
              icon={<SettingOutlined />}
              title="Navigation Three"
            >
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </Menu>
        </Col>

        <Col span={this.state.isSideMenuVisible ? 24 : 18}>
          {this.state.navigation === "about" && <About />}
          {this.state.navigation === "getting-started" && <GettingStarted />}
        </Col>
      </Row>
    );
  }
}

export default Tutorial;
