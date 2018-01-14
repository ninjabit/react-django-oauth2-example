/* global gapi */
import React from "react";

import { GoogleLogin, GoogleLogout } from "react-google-login";

class GoogleButtons extends React.Component {
    componentWillMount() {
        gapi.load("auth2", () => {
            this.auth2 = gapi.auth2.init({
                client_id:
                    "254472747355-6umtrkcedqn00tg7ec17l705ftttam0r.apps.googleusercontent.com"
            });
        });
    }

    render() {
        const responseGoogle = response => {
            console.log(response);
            console.log(response.profileObj);

            this.props.sendUserInfo({
                token: response.tokenId,
                email: response.profileObj.email,
                familyName: response.profileObj.familyName,
                givenName: response.profileObj.givenName,
                googleId: response.profileObj.googleId,
                imageUrl: response.profileObj.imageUrl,
                name: response.profileObj.name
            });
        };

        function signOut() {
            var auth2 = gapi.auth2.getAuthInstance();
            auth2.signOut().then(function() {
                console.log("User signed out.");
            });
        }

        return (
            <div>
                <GoogleLogin
                    clientId="254472747355-6umtrkcedqn00tg7ec17l705ftttam0r.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                />
                <GoogleLogout buttonText="Logout" onLogoutSuccess={signOut} />
            </div>
        );
    }
}

export default GoogleButtons;
