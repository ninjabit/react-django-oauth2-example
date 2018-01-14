import { sendUserInfo } from "../actions/googleInfoActions";
import GoogleButtons from "../components/GoogleButtons";

import { connect } from "react-redux";

const mapStateToProps = state => ({
	googleInfo: state.googleInfo
});

function mapDispatchToProps(dispatch) {
	return {
		sendUserInfo: info => dispatch(sendUserInfo(info))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleButtons);
