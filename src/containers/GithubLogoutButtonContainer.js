import { connect } from "react-redux";

import { githubLogoutAction } from "../actions/githubAuthActions";
import GithubLogoutButton from "../components/GithubLogoutButton";

const mapDispatchToProps = dispatch => ({
  githubLogoutAction: () => dispatch(githubLogoutAction())
});

export default connect(null, mapDispatchToProps)(GithubLogoutButton);
