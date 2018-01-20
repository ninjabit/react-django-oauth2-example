import URLSearchParams from "url-search-params";

const url = "http://127.0.0.1:8000";

/*These are the django client ID and SECRET
  from the OauthToolkit Application registered in your django admin
*/
const django_client_id = "FMg1tMRE2b7XzzdY3K7cvE6zNw6nwDSr5asPfyuN";
const django_client_secret =
  "emZVU6yoz9ohWJ1pYZIBWzR3CPlkUfHbYbpZuGxfxZGXcsrYhxgpneQXVmhkr5HcX8htuhsI4WDG3h61D0C5sNGDoLobmyt4KnyPvI6ynoeMLZEXqbLD2CKVYLEBIOI3";

const isAuthenticating = () => ({
  type: "GOOG_IS_AUTHENTICATING"
});

function convertGoogTokenSuccess(json) {
  localStorage.setItem("goog_access_token_conv", json.access_token);
  return {
    type: "CONVERT_GOOG_TOKEN_SUCCESS",
    goog_token: json
  };
}

function googleLogoutAction() {
  return function(dispatch) {
    localStorage.removeItem("goog_access_token_conv");
    dispatch({ type: "GOOGLE_LOGOUT" });
    return Promise.resolve();
  };
}

const convertGoogTokenFailure = err => ({
  type: "CONVERT_GOOG_TOKEN_FAILURE",
  err
});

// the API endpoint expects form-urlencoded-data thus search-params
function convertGoogleToken(access_token) {
  return async function(dispatch) {
    dispatch(isAuthenticating());
    const searchParams = new URLSearchParams();
    searchParams.set("grant_type", "convert_token");
    searchParams.set("client_id", django_client_id);
    searchParams.set("client_secret", django_client_secret);
    searchParams.set("backend", "google-oauth2");
    searchParams.set("token", access_token);
    try {
      let response = await fetch(`${url}/auth/convert-token/`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: searchParams
      });
      if (!response.ok) {
        throw new Error("An Error has occured, please try again.");
      }
      let responseJson = await response.json();
      return dispatch(convertGoogTokenSuccess(responseJson));
    } catch (err) {
      return dispatch(convertGoogTokenFailure(err));
    }
  };
}

export { convertGoogleToken, googleLogoutAction };
