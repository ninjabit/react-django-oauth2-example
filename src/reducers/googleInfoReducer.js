const initialState = {
	err: null,
	resp: "",
	isSendingInfo: false
};

function googleInfoReducer(state = initialState, action) {
	switch (action.type) {
		case "SENDING_USER_INFO":
			return { ...state, isSendingInfo: true, err: null };
		case "RECEIVE_RESPONSE":
			return { ...state, isSendingInfo: false, resp: action.resp };
		case "RECEIVE_ERROR":
			return { ...state, isSendingInfo: false, err: action.err };
		default:
			return state;
	}
}

export default googleInfoReducer;
