import React from "react";

const githubLogout = () => {
  this.props.githubLogoutAction().then(() => this.props.history.push("/"));
};

const GithubLogoutButton = () => {
  return (
    <button onClick={githubLogout} className="fa fa-github btn btn-primary">
      Logout
    </button>
  );
};

export default GithubLogoutButton;
