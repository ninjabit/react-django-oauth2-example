function sendCode(code) {
  return async function(dispatch) {
    try {
      var formData = await new FormData();
      formData.append("client_id", "cef1ec48f4ae7d49fcf0");
      formData.append(
        "client_secret",
        "73529c838b4630c55b232ee14a15a58df6fa79a7"
      );
      formData.append("redirect_uri", "");
      formData.append("code", code);
      let response = await fetch(
        "https://github.com/login/oauth/access_token",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: formData
        }
      );
      if (!response.ok) {
        throw new Error("github response is not ok");
      }
      let responseJson = response.json();
      return responseJson;
    } catch (err) {
      console.log(err);
    }
  };
}

export { sendCode };
