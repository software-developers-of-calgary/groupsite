import React from "react";
import { Link, withRouter } from "react-router-dom";
import logo from "../sdc_logo_bold.jpg";
import { useGlobal } from "../state";
import "antd/dist/antd.css";
import Menu from "antd/es/menu";
import Button from "antd/es/button";
import { fetchUser } from "../state/action";

const firstTwoLetters = (str) =>
  !str || str.length < 3 ? str : str.substring(0, 2);

function renderNavItem(name) {
  const target = `${name.toLowerCase()}`;
  return (
    <Menu.Item key={name.toLowerCase()} title={name}>
      <Link to={`/${target}`}> {name}</Link>
    </Menu.Item>
  );
}

function userBadge(authenticated, display_name) {
  const key = "userBadge";
  return (
    <Menu.Item key={key} title={key} style={{ float: "right" }}>
      {authenticated && (
        <Button type="primary" shape="circle">
          {firstTwoLetters(display_name)}
        </Button>
      )}
    </Menu.Item>
  );
}

function authButton(authenticated, onClick) {
  const key = authenticated ? "logout" : "login";
  const actionHolder = authenticated ? (
    <a onClick={onClick}> LogOut </a>
  ) : (
    <Link to="/login"> Login</Link>
  );

  return (
    <Menu.Item key={key} title={key} style={{ float: "right" }}>
      {actionHolder}
    </Menu.Item>
  );
}

const autoLogin = (authenticated, global, setGlobal) => {
  if (authenticated) {
    return;
  }
  const storedToken = localStorage.getItem("serverApiToken");
  if (!storedToken || global.loadUser) {
    return;
  }
  fetchUser(storedToken, global, setGlobal);
};

const Header = (props) => {
  const [global, setGlobal] = useGlobal();
  const authenticated = global.user;

  autoLogin(authenticated, global, setGlobal);
  var pages = props.pages;
  let navItems = [];
  for (var i = 0; i < pages.length; i++) {
    navItems.push(renderNavItem(pages[i]));
  }

  const onLogOut = () => {
    setGlobal({ ...global, user: null, token: null });
    localStorage.removeItem("serverApiToken");
  };

  return (
    <Menu
      selectedKeys={props.location.pathname.substring(1)}
      mode="horizontal"
      className={"header"}
    >
      <Menu.Item key="logo" title="logo">
        <Link to="/">
          {" "}
          <img src={logo} style={{ height: "45px" }} />
        </Link>
      </Menu.Item>
      {navItems}
      {authButton(authenticated, onLogOut)}
      {userBadge(authenticated, authenticated && global.user.display_name)}
    </Menu>
  );
};

export default withRouter(Header);
