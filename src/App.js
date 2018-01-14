import React, { Component } from "react";

import GoogleButtons from "./containers/GoogleButtonsContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Google Login and Logout Buttons</h1>
        </header>
        <GoogleButtons />
      </div>
    );
  }
}

export default App;
