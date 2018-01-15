import { requestDogs } from "../actions/dogActions";
import DogList from "../components/DogList";

import { connect } from "react-redux";

function mapStateToProps(state) {
	return {
		dogs: state.dogs
	};
}

function mapDispatchToProps(dispatch) {
	return {
		requestDogs: () => dispatch(requestDogs())
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(DogList);
