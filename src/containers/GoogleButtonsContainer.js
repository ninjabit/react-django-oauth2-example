import {
	sendGoogleData,
	authenticateAction,
	unAuthenticateAction
} from "../actions/googleInfoActions";
import GoogleButtons from "../components/GoogleButtons";

import { connect } from "react-redux";

const mapStateToProps = state => ({
	googleInfo: state.googleInfo
});

function mapDispatchToProps(dispatch) {
	return {
		sendGoogleData: info => dispatch(sendGoogleData(info)),
		authenticateAction: (history, dispatch) =>
			dispatch(authenticateAction(history, dispatch)),
		unAuthenticateAction: dispatch =>
			dispatch(unAuthenticateAction(dispatch)),
		dispatch
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleButtons);
