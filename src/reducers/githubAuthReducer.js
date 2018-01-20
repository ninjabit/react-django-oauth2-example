const initialState = {
  isSendingCode: false,
  isAuthenticated: false,
  err: false,
  token_user_obj: {
    github_token: {},
    user: {}
  }
};

function githubAuthReducer(state = initialState, action) {
  switch (action.type) {
    case "SENDING_GITHUB_CODE":
      return {
        ...state,
        isSendingCode: true,
        err: false,
        isAuthenticated: false
      };
    case "SENT_GITHUB_CODE_SUCCESS":
      console.log("ACTION TOKEN OBJ", action.token_user_obj);
      return {
        ...state,
        isSendingCode: false,
        token_user_obj: {
          github_token: action.token_user_obj.token,
          user: action.token_user_obj.user
        },
        isAuthenticated: true
      };
    case "SENT_GITHUB_CODE_FAILURE":
      return {
        ...state,
        isSendingCode: false,
        err: action.err,
        isAuthenticated: false
      };
    case "GITHUB_LOGOUT":
      return {
        ...initialState
      };
    case "GITHUB_AUTHENTICATE_ACTION": {
      return {
        ...state,
        isAuthenticated: true
      };
    }
    default:
      return state;
  }
}

export default githubAuthReducer;
