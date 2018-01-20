import React from "react";
import { NavLink, withRouter } from "react-router-dom";

import GoogleLoginButton from "../containers/GoogleAuth/GoogleLoginButtonContainer.js";
import GoogleLogoutButton from "../containers/GoogleAuth/GoogleLogoutButtonContainer.js";

import GithubLoginButton from "../containers/GithubAuth/GithubLoginButtonContainer";
import GithubLogoutButton from "../containers/GithubAuth/GithubLogoutButtonContainer";

import "../index.css";

function Navbar(props) {
  function userIsAuthenticatedGoogle() {
    if (props.goog_auth.isAuthenticated) {
      return [
        <li className="nav-item" key="goog-logout-btn">
          <GoogleLogoutButton history={props.history} />
        </li>
      ];
    }
  }
  function userIsNotAuthenticated() {
    if (
      !props.goog_auth.isAuthenticated &&
      !props.github_auth.isAuthenticated
    ) {
      return [
        <li className="nav-item" key="goog-login-btn">
          <GoogleLoginButton history={props.history} />
        </li>,
        <li className="nav-item" key="git-login-btn">
          <GithubLoginButton />
        </li>
      ];
    }
  }

  function userIsAuthenticated() {
    if (props.goog_auth.isAuthenticated | props.github_auth.isAuthenticated) {
      return [
        <li className="nav-item" key="secret">
          <NavLink to="/secret/" exact className="nav-link">
            Secret
          </NavLink>
        </li>
      ];
    }
  }

  function userIsAuthenticategGithub() {
    if (props.github_auth.isAuthenticated) {
      return [
        <li className="nav-item mr-3" key="git-logout-btn">
          <GithubLogoutButton history={props.history} />
        </li>
      ];
    }
  }

  return (
    <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
      <ul className="navbar-nav ">
        <li className="nav-item active">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </li>
        {userIsAuthenticatedGoogle()}
        {userIsAuthenticategGithub()}
        {userIsNotAuthenticated()}
        {userIsAuthenticated()}
      </ul>
    </nav>
  );
}

export default withRouter(Navbar);
