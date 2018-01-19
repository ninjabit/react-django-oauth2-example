import React, { Component } from "react";
import GitHubLogin from "react-github-login";

class GithubLoginButton extends Component {
  render() {
    const onSuccess = response => {
      console.log(response);
      this.props.sendGithubCode(response);
    };
    const onFailure = response => console.error(response);
    return (
      <GitHubLogin
        clientId="cef1ec48f4ae7d49fcf0"
        onSuccess={onSuccess}
        onFailure={onFailure}
        redirectUri=""
        buttonText="Login with Github"
        className="fa fa-github btn btn-primary"
      />
    );
  }
}

export default GithubLoginButton;
