import React from "react";
import { Link, withRouter } from "react-router-dom";
import logo from "../Logo3.1.png";
import { useGlobal } from "../state";
import "antd/dist/antd.css";
import Menu from "antd/es/menu";
import Button from "antd/es/button";

const firstTwoLetters = (str) =>
  !str || str.length < 3 ? str : str.substring(0, 2);

const Header = (props) => {
  const [global, setGlobal, user] = useGlobal();
  const authenticated = global.user;
  function renderNavItem(name) {
    const target = `${name.toLowerCase()}`;
    return (
      <Menu.Item key={name.toLowerCase()} title={name}>
        <Link to={`/${target}`}> {name}</Link>
      </Menu.Item>
    );
  }

  function authButton() {
    const key = authenticated ? "logout" : "login";
    const actionHolder = authenticated ? (
      <a
        onClick={() => {
          setGlobal({ ...global, user: null, token: null });
          localStorage.removeItem("serverApiToken");
        }}
      >
        {" "}
        LogOut{" "}
      </a>
    ) : (
      <Link to="/login"> Login</Link>
    );

    return (
      <Menu.Item key={key} title={key} style={{ float: "right" }}>
        {actionHolder}
      </Menu.Item>
    );
  }

  function userBadge() {
    const key = "userBadge";
    return (
      <Menu.Item key={key} title={key} style={{ float: "right" }}>
        {authenticated && (
          <Button type="primary" shape="circle">
            {firstTwoLetters(global.user.display_name)}
          </Button>
        )}
      </Menu.Item>
    );
  }
  var pages = props.pages;
  let navItems = [];
  for (var i = 0; i < pages.length; i++) {
    navItems.push(renderNavItem(pages[i]));
  }

  return (
    <Menu
      selectedKeys={props.location.pathname.substring(1)}
      mode="horizontal"
      className={"header"}
    >
      <Menu.Item key="logo" title="logo">
        <Link to="home">
          {" "}
          <img src={logo} style={{ height: "45px" }} />
        </Link>
      </Menu.Item>
      {navItems}
      {authButton()}
      {userBadge()}
    </Menu>
  );
};

export default withRouter(Header);
