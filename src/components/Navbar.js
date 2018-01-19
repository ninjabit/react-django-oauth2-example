import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";

import GoogleLoginButton from "../containers/GoogleLoginButtonContainer.js";
import GoogleLogoutButton from "../containers/GoogleLogoutButtonContainer.js";

import GithubLoginButton from "../containers/GithubLoginButtonContainer";
import GithubLogoutButton from "./GithubLogoutButton";

import "../index.css";

class Navbar extends Component {
  googNavbarLinks() {
    if (this.props.goog_auth.isAuthenticated) {
      return [
        <li className="nav-item" key="goog-logout-btn">
          <GoogleLogoutButton history={this.props.history} />
        </li>
      ];
    }
  }
  loginNavbarButtons() {
    if (
      !this.props.goog_auth.isAuthenticated &&
      !this.props.github_auth.isAuthenticated
    ) {
      return [
        <li className="nav-item" key="goog-login-btn">
          <GoogleLoginButton history={this.props.history} />
        </li>,
        <li className="tryme nav-item" key="git-login-btn">
          <GithubLoginButton />
        </li>
      ];
    }
  }

  secretNavbarButton() {
    if (
      this.props.goog_auth.isAuthenticated |
      this.props.github_auth.isAuthenticated
    ) {
      return [
        <li className="nav-item" key="goog-secret">
          <NavLink to="/secret/" exact className="nav-link">
            Secret
          </NavLink>
        </li>
      ];
    }
  }

  githubNavbarLinks() {
    if (this.props.github_auth.isAuthenticated) {
      return [
        <li className="nav-item mr-3" key="logout-btn">
          <GithubLogoutButton history={this.props.history} />
        </li>
      ];
    }
  }

  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            {this.googNavbarLinks()}
            {this.githubNavbarLinks()}
            {this.loginNavbarButtons()}
            {this.secretNavbarButton()}
          </ul>
          {localStorage.getItem("goog_avatar_url") && (
            <ul className="navbar-nav ml-auto">
              <li className="avatar-li nav-item">
                <img
                  src={localStorage.getItem("goog_avatar_url")}
                  alt="profile-avatar"
                  className="avatar-a img-fluid rounded-circle"
                  title={
                    "Profile: " +
                    localStorage.getItem("goog_name") +
                    " (" +
                    localStorage.getItem("goog_email") +
                    ")"
                  }
                />
              </li>
            </ul>
          )}
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
