import React from 'react';
import logo from './logo.svg';
import Login from "./Login.js"
import './App.css';

class App extends React.Component {

  logUserIn = (userData) => {
    console.log(userData);
  }
  render() {
    return (
      <div >
        <Login logUserIn={this.logUserIn} />
      </div>
    )
  }
}

export default App;
