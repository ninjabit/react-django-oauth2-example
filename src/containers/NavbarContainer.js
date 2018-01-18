import { connect } from "react-redux";

import Navbar from "../components/Navbar";

const mapStateToProps = state => ({
  goog_auth: state.goog_auth
});

export default connect(mapStateToProps)(Navbar);
