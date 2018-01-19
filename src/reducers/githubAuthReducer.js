const initialState = {
  isSendingCode: false,
  err: false,
  github_token: {}
};

function githubAuthReducer(state = initialState, action) {
  switch (action.type) {
    case "SENDING_GITHUB_CODE":
      return {
        ...state,
        isSendingCode: true,
        err: false
      };
    case "SENT_GITHUB_CODE_SUCCESS":
      return {
        ...state,
        isSendingCode: false,
        github_token: action.github_token
      };
    case "SENT_GITHUB_CODE_FAILURE":
      return {
        ...state,
        isSendingCode: false,
        err: action.err
      };
    default:
      return state;
  }
}

export default githubAuthReducer;
