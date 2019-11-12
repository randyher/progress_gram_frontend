import React from "react";
import logo from "./logo.svg";
import Login from "./Login.js";
import "./App.css";

class App extends React.Component {
  logUserIn = userData => {
    console.log(userData);
  };
  render() {
    return (
      <div>
        <h1>Progress Gram!</h1>
        <Login logUserIn={this.logUserIn} />
      </div>
    );
  }
}

export default App;
