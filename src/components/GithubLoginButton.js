import React, { Component } from "react";
import GitHubLogin from "react-github-login";

class GithubLoginButton extends Component {
  render() {
    const onSuccess = response => {
      console.log(response);
      this.props
        .sendCode(response.code)
        .then(resp => console.log("After Code: ", resp));
    };
    const onFailure = response => console.error(response);

    // const responseGoogle = response => {
    // 	console.log(response);
    // 	this.props
    // 		.sendGoogleData({
    // 			token: response.tokenId,
    // 			email: response.profileObj.email,
    // 			familyName: response.profileObj.familyName,
    // 			givenName: response.profileObj.givenName,
    // 			googleId: response.profileObj.googleId,
    // 			imageUrl: response.profileObj.imageUrl,
    // 			name: response.profileObj.name
    // 		})
    // 		.then(
    // 			(
    // 				history = this.props.history,
    // 				dispatch = this.props.dispatch
    // 			) => {
    // 				this.props.authenticateAction(history, dispatch);
    // 			}
    // 		);

    return (
      <GitHubLogin
        clientId="cef1ec48f4ae7d49fcf0"
        onSuccess={onSuccess}
        onFailure={onFailure}
        redirectUri=""
        buttonText="Github Login"
        className="btn btn-danger"
      />
    );
  }
}

export default GithubLoginButton;
