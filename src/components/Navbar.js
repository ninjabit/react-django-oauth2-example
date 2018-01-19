import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import GoogleLoginButton from "../containers/GoogleLoginButtonContainer.js";
import GoogleLogoutButton from "../containers/GoogleLogoutButtonContainer.js";

class Navbar extends Component {
  navbarLinks() {
    if (this.props.goog_auth.isAuthenticated) {
      return [
        <li className="nav-item" key="logout-btn">
          <GoogleLogoutButton />
        </li>,
        <li className="nav-item" key="secret">
          <NavLink to="/secret" exact className="nav-link">
            Secret
          </NavLink>
        </li>
      ];
    }
    return [
      <li className="nav-item" key="login-btn">
        <GoogleLoginButton history={this.props.history} />
      </li>,
      <li className="nav-item" key="git-login-btn">
        <a className="nav-link" href="#">
          Future
        </a>
      </li>
    ];
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
            {this.navbarLinks()}
          </ul>
          {localStorage.getItem("goog_avatar_url") && (
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <img
                  src={localStorage.getItem("goog_avatar_url")}
                  alt="profile-avatar"
                  className="img-fluid rounded-circle"
                  style={{ height: 32, width: 32 }}
                />
              </li>
            </ul>
          )}
        </div>
      </nav>
    );
  }
}

export default Navbar;
