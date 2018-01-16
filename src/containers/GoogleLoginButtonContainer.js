import {
	sendGoogleData,
	authenticateAction
} from "../actions/googleInfoActions";
import GoogleLoginButton from "../components/GoogleLoginButton";

import { connect } from "react-redux";

const mapStateToProps = state => ({
	auth: state.auth
});

const mapDispatchToProps = dispatch => ({
	sendGoogleData: info => dispatch(sendGoogleData(info)),
	authenticateAction: (history, dispatch) =>
		dispatch(authenticateAction(history, dispatch)),
	dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(GoogleLoginButton);
