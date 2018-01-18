import URLSearchParams from "url-search-params";
const url = "http://127.0.0.1:8000";

const convertGoogTokenSuccess = json => ({
  type: "CONVERT_GOOG_TOKEN_SUCCESS",
  goog_token: json
});

const convertGoogTokenFailure = err => ({
  type: "CONVERT_GOOG_TOKEN_FAILURE",
  err
});

function convertGoogleToken(access_token) {
  return async function(dispatch) {
    const searchParams = new URLSearchParams();
    searchParams.set("grant_type", "convert_token");
    searchParams.set("client_id", "FMg1tMRE2b7XzzdY3K7cvE6zNw6nwDSr5asPfyuN");
    searchParams.set(
      "client_secret",
      "emZVU6yoz9ohWJ1pYZIBWzR3CPlkUfHbYbpZuGxfxZGXcsrYhxgpneQXVmhkr5HcX8htuhsI4WDG3h61D0C5sNGDoLobmyt4KnyPvI6ynoeMLZEXqbLD2CKVYLEBIOI3"
    );
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

export { convertGoogleToken };
