import Cookies from "js-cookie";
const url = "http://127.0.0.1:8000";

const receiveError = err => ({ type: "RECEIVE_ERROR", err });

const gapiReady = () => ({ type: "GAPI_READY" });

function authenticateAction(history, dispatch) {
	var in60Minutes = 1 / 24;
	Cookies.set("auth_token", "auth_session_cookie_val", {
		expires: in60Minutes
	});
	return dispatch({ type: "AUTHENTICATE_ACTION" });
}

function unAuthenticateAction(dispatch) {
	Cookies.remove("auth_token");
	return dispatch({ type: "UNAUTHENTICATE_ACTION" });
}

function sendGoogleData(info) {
	return async function(dispatch) {
		try {
			let response = await fetch(`${url}/checkuser/`, {
				method: "POST",
				credentials: "include",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(info)
			});
			console.log("RESPONSE...", response);
			if (!response.ok) {
				throw new Error("Incorrent credentials entered");
			}
			//Cookies.set('access_token', response.headers['Cookie'])
			let responseJson = await response.json();
			//return the Promise So I can use it in a view
			return responseJson;
		} catch (err) {
			dispatch(receiveError(err));
		}
	};
}

export { sendGoogleData, authenticateAction, unAuthenticateAction, gapiReady };
