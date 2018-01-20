const initialState = {
	dogData: [],
	err: null,
	isFetching: false
};

function dogReducer(state = initialState, action) {
	switch (action.type) {
		case "SENDING_DOG_DATA":
			return { ...state, err: null, isFetching: true };
		case "RECEIVE_RESPONSE_DOG":
			return { ...state, dogData: action.resp, isFetching: false };
		case "RECEIVE_ERROR_DOG":
			return { ...state, err: action.err, isFetching: false };
		default:
			return state;
	}
}

export default dogReducer;
