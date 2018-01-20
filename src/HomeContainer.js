import { connect } from "react-redux";

import Home from "./Home";

const mapStateToProps = state => ({
  goog_auth: state.goog_auth,
  github_auth: state.github_auth
});

export default connect(mapStateToProps)(Home);
