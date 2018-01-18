import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";

class GoogleLoginButton extends Component {
  render() {
    const responseGoogle = response => {
      console.log(response);
      // this.props
      //   .sendGoogleData({
      //     token: response.tokenId,
      //     email: response.profileObj.email,
      //     familyName: response.profileObj.familyName,
      //     givenName: response.profileObj.givenName,
      //     googleId: response.profileObj.googleId,
      //     imageUrl: response.profileObj.imageUrl,
      //     name: response.profileObj.name
      //   })
    };
    return (
      <GoogleLogin
        clientId="254472747355-6umtrkcedqn00tg7ec17l705ftttam0r.apps.googleusercontent.com"
        buttonText="Google Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        className="btn btn-secondary"
      />
    );
  }
}

export default GoogleLoginButton;
