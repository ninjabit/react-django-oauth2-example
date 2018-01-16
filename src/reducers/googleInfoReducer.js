const initialState = {
	err: null,
	isAuthenticated: false
};

function googleInfoReducer(state = initialState, action) {
	switch (action.type) {
		case "AUTHENTICATE_ACTION":
			return {
				...state,
				err: null,
				isAuthenticated: true
			};
		case "UNAUTHENTICATE_ACTION":
			return {
				...state,
				isAuthenticated: false,
				err: null
			};
		case "RECEIVE_ERROR":
			return {
				...state,
				err: action.err,
				isAuthenticated: false
			};
		default:
			return state;
	}
}

export default googleInfoReducer;
