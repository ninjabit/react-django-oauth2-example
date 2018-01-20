const url = "http://127.0.0.1:8000";

const isSendingGithubCode = () => ({
  type: "SENDING_GITHUB_CODE"
});

function sentGithubCodeSuccess(json) {
  localStorage.setItem("github_access_token_conv", json.token.access_token);
  localStorage.setItem(
    "github_name",
    json.user.first_name + " " + json.user.last_name
  );
  localStorage.setItem("github_email", json.user.email);
  return {
    type: "SENT_GITHUB_CODE_SUCCESS",
    token_user_obj: json
  };
}

function githubLogoutAction() {
  return function(dispatch) {
    localStorage.removeItem("github_access_token_conv");
    localStorage.removeItem("github_name");
    localStorage.removeItem("github_email");
    dispatch({ type: "GITHUB_LOGOUT" });
    return Promise.resolve();
  };
}

const sentGithubCodeFailure = err => ({
  type: "SENT_GITHUB_CODE_FAILURE",
  err
});

function sendGithubCode(code) {
  return async function(dispatch) {
    dispatch(isSendingGithubCode());
    try {
      let response = await fetch(`${url}/githubcode/`, {
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

export { sendGithubCode, githubLogoutAction };
