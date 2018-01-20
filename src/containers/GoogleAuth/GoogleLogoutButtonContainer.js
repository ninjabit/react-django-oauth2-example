import { connect } from "react-redux";

import GoogleLogoutButton from "../../components/GoogleAuth/GoogleLogoutButton";
import { googleLogoutAction } from "../../actions/googleAuthActions";

const mapDispatchToProps = dispatch => ({
  googleLogoutAction: () => dispatch(googleLogoutAction())
});

export default connect(null, mapDispatchToProps)(GoogleLogoutButton);
