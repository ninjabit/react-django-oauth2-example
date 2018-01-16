import React, { Component } from "react";
import { GoogleLogout } from "react-google-login";

import gapi from "gapi-client";

class GoogleLogoutButton extends Component {
	componentWillMount() {
		gapi.load("auth2", () => {
			this.auth2 = gapi.auth2.init({
				client_id:
					"254472747355-6umtrkcedqn00tg7ec17l705ftttam0r.apps.googleusercontent.com"
			});
		});
	}

	render() {
		const signOut = dispatch => {
			var auth2 = gapi.auth2.getAuthInstance();
			auth2
				.signOut()
				.then(() => {
					console.log("User signed out.");
				})
				.then((dispatch = this.props.dispatch) =>
					this.props.unAuthenticateAction(dispatch)
				);
		};
		return (
			<GoogleLogout
				buttonText="Logout"
				onLogoutSuccess={signOut}
				className="btn btn-secondary"
			/>
		);
	}
}

export default GoogleLogoutButton;
