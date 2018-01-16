import React, { Component } from "react";

import DogList from "./containers/DogListContainer";

import GoogleButtons from "./components/Gbtns";

class Home extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Google Login and Logout Buttons</h1>
        </header>
      </div>
    );
  }
}

export default Home;
