import { unAuthenticateAction, gapiReady } from "../actions/googleInfoActions";

import GoogleLogoutButton from "../components/GoogleLogoutButton";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => ({
	unAuthenticateAction: dispatch => dispatch(unAuthenticateAction(dispatch)),
	gapiReady: () => dispatch(gapiReady()),
	dispatch
});

export default connect(null, mapDispatchToProps)(GoogleLogoutButton);
