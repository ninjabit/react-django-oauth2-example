const url = "http://127.0.0.1:8000";

const sendingUserInfo = () => ({ type: "SENDING_USER_INFO" });
const receiveResponse = resp => ({ type: "RECEIVE_RESPONSE", resp });
const receiveError = err => ({ type: "RECEIVE_ERROR", err });

function sendUserInfo(info) {
	return async function(dispatch) {
		dispatch(sendingUserInfo());
		try {
			let response = await fetch(`${url}/checkuser/`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(info)
			});

			if (!response.ok) {
				throw new Error("Incorrent credentials entered");
			}

			let responseJson = await response.json();
			return dispatch(receiveResponse(responseJson));
		} catch (err) {
			dispatch(receiveError(err));
		}
	};
}

export { sendUserInfo };
