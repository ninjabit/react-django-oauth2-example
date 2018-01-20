import { connect } from "react-redux";

import { githubLogoutAction } from "../../actions/githubAuthActions";
import GithubLogoutButton from "../../components/GithubAuth/GithubLogoutButton";

const mapDispatchToProps = dispatch => ({
  githubLogoutAction: () => dispatch(githubLogoutAction())
});

export default connect(null, mapDispatchToProps)(GithubLogoutButton);
