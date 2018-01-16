import React, { Component } from "react";

import GoogleButtons from "./containers/GoogleButtonsContainer";
import DogList from "./containers/DogListContainer";

class Home extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Google Login and Logout Buttons</h1>
        </header>
        <GoogleButtons />
      </div>
    );
  }
}

export default Home;
