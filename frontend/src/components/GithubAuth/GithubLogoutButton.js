import React from "react";

const GithubLogoutButton = props => {
  const githubLogout = () => {
    props.githubLogoutAction().then(() => props.history.push("/"));
  };
  return (
    <button onClick={githubLogout} className="fa fa-github btn btn-primary">
      Logout
    </button>
  );
};

export default GithubLogoutButton;
