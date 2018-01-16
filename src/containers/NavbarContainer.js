import { connect } from "react-redux";

import Navbar from "../components/Navbar";

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps)(Navbar);
