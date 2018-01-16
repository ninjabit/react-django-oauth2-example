const url = "http://127.0.0.1:8000";

const requestingDogData = () => ({ type: "SENDING_DOG_DATA" });
const receiveResponseDog = resp => ({ type: "RECEIVE_RESPONSE_DOG", resp });
const receiveErrorDog = err => ({ type: "RECEIVE_ERROR_DOG", err });

function requestDogs(info) {
	return async function(dispatch) {
		dispatch(requestingDogData());
		try {
			let response = await fetch(`${url}/dogs/`, {
				credentials: "include",
				headers: {
					"Access-Control-Allow-Credentials": true
				}
			});
			console.log("RESP", response);
			console.log(response.headers.get("Cookie"));
			if (!response.ok) {
				throw new Error("DOG ERRORRRR -p-");
			}

			let responseJson = await response.json();
			return dispatch(receiveResponseDog(responseJson));
		} catch (err) {
			dispatch(receiveErrorDog(err));
		}
	};
}

export { requestDogs };
