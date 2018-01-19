import React, { Component } from "react";

class GithubLogoutButton extends Component {
  render() {
    const githubLogout = () => {
      this.props.githubLogoutAction().then(() => this.props.history.push("/"));
    };
    return (
      <button onClick={githubLogout} className="fa fa-github btn btn-primary">
        Logout
      </button>
    );
  }
}

export default GithubLogoutButton;
