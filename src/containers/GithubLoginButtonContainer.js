import { sendGithubCode } from "../actions/githubAuthActions";
import GithubLoginButton from "../components/GithubLoginButton";

import { connect } from "react-redux";

const mapDispatchToProps = dispatch => ({
  sendGithubCode: code => dispatch(sendGithubCode(code))
});

export default connect(null, mapDispatchToProps)(GithubLoginButton);
