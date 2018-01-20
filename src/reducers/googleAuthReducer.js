const initialState = {
  err: null,
  isAuthenticated: false,
  isAuthenticating: false,
  token_data: {}
};

function googleInfoReducer(state = initialState, action) {
  switch (action.type) {
    case "GOOG_IS_AUTHENTICATING":
      return {
        ...state,
        isAuthenticating: true,
        err: null,
        isAuthenticated: false,
        token_data: {}
      };
    case "CONVERT_GOOG_TOKEN_SUCCESS":
      return {
        ...state,
        err: null,
        isAuthenticated: true,
        isAuthenticating: false,
        token_data: action.goog_token
      };
    case "CONVERT_GOOG_TOKEN_FAILURE":
      return {
        ...state,
        err: action.err,
        isAuthenticated: false,
        isAuthenticating: false
      };
    case "GOOGLE_LOGOUT":
      return {
        ...state,
        isAuthenticated: false
      };
    case "GOOG_AUTHENTICATE_ACTION":
      return {
        ...state,
        isAuthenticated: true
      };
    default:
      return state;
  }
}

export default googleInfoReducer;
