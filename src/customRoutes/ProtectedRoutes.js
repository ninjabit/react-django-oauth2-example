import { Route, Redirect } from "react-router-dom";
import Cookies from "js-cookie";
import React from "react";

const checkAuth = () => {
	const cookie = Cookies.get("auth_token");
	if (!cookie) {
		return false;
	}
	return true;
};

const PrivateRoute = ({ component: Component }, ...rest) => (
	<Route
		{...rest}
		render={props => {
			return checkAuth() ? (
				<Component {...props} />
			) : (
				<Redirect to={{ pathname: "/" }} />
			);
		}}
	/>
);

const AuthenticatedRoute = ({ component: Component }, ...rest) => (
	<Route
		{...rest}
		render={props => {
			return checkAuth() ? (
				<Redirect to={{ pathname: "/secret" }} />
			) : (
				<Component {...props} />
			);
		}}
	/>
);

export { PrivateRoute, AuthenticatedRoute };
