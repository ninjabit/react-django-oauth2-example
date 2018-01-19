const url = "http://127.0.0.1:8000";

const isSendingGithubCode = () => ({
  type: "SENDING_GITHUB_CODE"
});

const sentGithubCodeSuccess = json => ({
  type: "SENT_GITHUB_CODE_SUCCESS",
  github_token: json
});

const sentGithubCodeFailure = err => ({
  type: "SENT_GITHUB_CODE_FAILURE",
  err
});

function sendGithubCode(code) {
  return async function(dispatch) {
    dispatch(isSendingGithubCode());
    try {
      let response = await fetch(`${url}/github/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(code)
      });
      if (!response.ok) {
        throw new Error("Invalid authorization with Github. Please try again.");
      }
      let responseJson = await response.json();
      return dispatch(sentGithubCodeSuccess(responseJson));
    } catch (err) {
      return dispatch(sentGithubCodeFailure(err));
    }
  };
}

export { sendGithubCode };
