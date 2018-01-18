import { connect } from "react-redux";

import GithubLoginButton from "../components/GithubLoginButton";
import { sendCode } from "../actions/githubInfoActions";

const mapDispatchToProps = dispatch => ({
  sendCode: code => dispatch(sendCode(code))
});

export default connect(null, mapDispatchToProps)(GithubLoginButton);
