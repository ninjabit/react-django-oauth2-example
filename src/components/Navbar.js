import React, { Component } from "react";
import GoogleButtons from "./Gbtns";
import GoogleLoginButton from "../containers/GoogleLoginButtonContainer";

class Navbar extends Component {
	// navbarLinks() {
	// 	if (this.props.googleInfo.isAuthenticated) {
	// 		return [

	// 		]
	// 	}
	// }

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
				<a className="navbar-brand" href="#">
					Navbar
				</a>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<a className="nav-link" href="#">
								Home <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Features
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								<GoogleButtons />
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								hi
							</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Navbar;
