import {
	sendGoogleData,
	authenticateAction
} from "../actions/googleInfoActions";
import GoogleLoginButton from "../components/GoogleLoginButton";

import { connect } from "react-redux";

const mapDispatchToProps = dispatch => ({
	sendGoogleData: info => dispatch(sendGoogleData(info)),
	authenticateAction: (history, dispatch) =>
		dispatch(authenticateAction(history, dispatch)),
	dispatch
});

export default connect(null, mapDispatchToProps)(GoogleLoginButton);
