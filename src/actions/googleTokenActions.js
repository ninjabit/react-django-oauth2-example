const url = "http://127.0.0.1:8000";

const convertGoogTokenSuccess = json => ({
  type: "CONVERT_GOOG_TOKEN_SUCCESS",
  goog_token: json
});

const convertGoogTokenFailure = err => ({
  type: "CONVERT_GOOG_TOKEN_FAILURE",
  err
});

function covertGoogleToken(access_token) {
  return async function(dispatch) {
    try {
      let response = await fetch(`${url}/convert-token/`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          grant_type: "convert_token",
          client_id: "FMg1tMRE2b7XzzdY3K7cvE6zNw6nwDSr5asPfyuN",
          client_secret:
            "emZVU6yoz9ohWJ1pYZIBWzR3CPlkUfHbYbpZuGxfxZGXcsrYhxgpneQXVmhkr5HcX8htuhsI4WDG3h61D0C5sNGDoLobmyt4KnyPvI6ynoeMLZEXqbLD2CKVYLEBIOI3",
          token: access_token
        })
      });
      if (!response.ok) {
        throw new Error("An Error has occured, please try again.");
      }
      let responseJson = await response.json();
      return dispatch(convertGoogTokenSuccess());
    } catch (err) {
      return dispatch(convertGoogTokenFailure());
    }
  };
}

export { convertGoogleToken };
