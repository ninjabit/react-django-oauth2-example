const initialState = {
  err: null,
  isAuthenticated: false,
  token_data: {}
};

function googleInfoReducer(state = initialState, action) {
  switch (action.type) {
    case "CONVERT_GOOG_TOKEN_SUCCESS":
      return {
        ...state,
        err: null,
        isAuthenticated: true,
        token_data: action.goog_token
      };
    case "CONVERT_GOOG_TOKEN_FAILURE":
      return {
        ...state,
        err: action.err,
        isAuthenticated: false
      };
    case "GOOGLE_LOGOUT":
      return {
        ...state,
        isAuthenticated: false
      };
    default:
      return state;
  }
}

export default googleInfoReducer;
