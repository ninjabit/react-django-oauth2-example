import { connect } from "react-redux";

import GoogleLogoutButton from "../components/GoogleLogoutButton";
import { googleLogoutAction } from "../actions/googleTokenActions";

const mapDispatchToProps = dispatch => ({
  googleLogoutAction: () => dispatch(googleLogoutAction())
});

export default connect(null, mapDispatchToProps)(GoogleLogoutButton);
