import React from "react";
import LoadingSpinner from "../utils_materialui/LoadingSpinner";

const Home = ({ github_auth, goog_auth }) => {
  return (
    <div>
      {(github_auth.isSendingCode || goog_auth.isAuthenticating) && (
        <LoadingSpinner />
      )}
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;
