import URLSearchParams from "url-search-params";
import {
  django_client_id,
  django_client_secret,
  url,
  convertGoogTokenSuccess
} from "../actions/googleAuthActions";

function auth_tokens_mw({ dispatch, getState }) {
  return next => action => {
    // only run for async actions
    if (typeof action === "function") {
      if (
        localStorage.getItem("goog_access_token_conv") &&
        localStorage.length > 0
      ) {
        const tokenExpirationTime = localStorage.getItem(
          "goog_access_token_expires_in"
        );
        // get the current unix epoch time in seconds
        const currentTime = Math.round(new Date().getTime() / 1000);
        const timeLeft = tokenExpirationTime - currentTime;
        console.log("token time left =======>", timeLeft);
        // check if the token is expired, if so log the user out
        if (tokenExpirationTime && tokenExpirationTime - currentTime <= 310) {
          console.log("TOKEN IS EXPIRED");
          localStorage.removeItem("goog_access_token_conv");
          localStorage.removeItem("goog_refresh_token_conv");
          localStorage.removeItem("goog_access_token_expires_in");
          localStorage.removeItem("goog_avatar_url");
          localStorage.removeItem("goog_name");
          localStorage.removeItem("goog_email");
          return dispatch({ type: "GOOGLE_LOGOUT" });
        }
        // check if the token is going to expire in less than 30mins - refresh it
        if (tokenExpirationTime && tokenExpirationTime - currentTime <= 300) {
          var searchParams = new URLSearchParams();
          searchParams.set("grant_type", "refresh_token");
          searchParams.set("client_id", django_client_id);
          searchParams.set("client_secret", django_client_secret);
          searchParams.set(
            "refresh_token",
            localStorage.getItem("goog_refresh_token_conv")
          );
          fetch(`${url}/auth/token/`, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded"
            },
            body: searchParams
          })
            .then(response => response.json())
            .then(json => dispatch(convertGoogTokenSuccess(json)))
            .then(() => next(action));
        } else {
          return next(action);
        }
      }
    }
    return next(action);
  };
}

export default auth_tokens_mw;
