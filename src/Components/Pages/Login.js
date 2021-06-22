import React, { useState } from "react";
import { Redirect } from "react-router";
import githubIcon from "../../images/GitHub.png";
import { githubAuthUrl } from "../../config";
import qs from "query-string";
import { useGlobal } from "../../state";
import { session, fetchUser } from "../../state/action";

const getCodeFromQuery = () => {
  console.log("Inside getCodeFromQuery");
  const queryValues = qs.parse(window.location.search);
  console.log("About to return: ");
  console.log(queryValues);
  return queryValues.code;
};

const Login = () => {
  const [loadingSpinner, setLoadingSpinner] = useState(false);
  const [global, setGlobal] = useGlobal();
  debugger;
  const { loadUser } = global;

  if (global.user) {
    return <Redirect to="/projects" />;
  }
  const storedToken = localStorage.getItem("serverApiToken");
  const oneTimeCode = getCodeFromQuery();

  if (storedToken && !loadUser) {
    fetchUser(storedToken, global, setGlobal);
    return (
      <div>
        <button type="primary" loading={"loading"}>
          Loading
        </button>
      </div>
    );
  } else if (oneTimeCode && !loadingSpinner) {
    setLoadingSpinner(true);
    session(oneTimeCode, global, setGlobal);
    return <Redirect to="/login" />;
  }

  if (loadingSpinner) {
    return (
      <div>
        <button type="primary" loading={"loading"}>
          Loading
        </button>
      </div>
    );
  }
  return (
    <main id="login-page">
      <h2>Sofware Developers of Calgary</h2>
      <p>A GitHub account is required to login</p>
      <div
        style={{
          height: "40px",
          lineHeight: "40px",
          fontSize: "medium",
          border: "1px solid blue",
          width: "180px",
          justifyContent: "center",
        }}
      >
        <img
          alt=""
          src={githubIcon}
          style={{ height: "32px", paddingBottom: "4px", paddingLeft: "2px" }}
        />
        <a
          style={{ float: "right", paddingRight: "10px" }}
          href={githubAuthUrl}
        >
          {" "}
          Login with GitHub{" "}
        </a>
      </div>
    </main>
  );
};

export default Login;
