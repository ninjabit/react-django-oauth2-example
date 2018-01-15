import React, { Component } from "react";

import GoogleButtons from "./containers/GoogleButtonsContainer";
import DogList from "./containers/DogListContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Google Login and Logout Buttons</h1>
        </header>
        <GoogleButtons />
        <DogList />
      </div>
    );
  }
}

export default App;
