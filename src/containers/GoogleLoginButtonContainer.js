import { convertGoogleToken } from "../actions/googleTokenActions";
import GoogleLoginButton from "../components/GoogleLoginButton";

import { connect } from "react-redux";

const mapDispatchToProps = dispatch => ({
  convertGoogleToken: access_token => dispatch(convertGoogleTOken(access_token))
});

export default connect(null, mapDispatchToProps)(GoogleLoginButton);
