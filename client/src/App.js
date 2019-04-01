import React, { Component } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import "./App.css";
import Landing from "./components/layout/Landing";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing />

        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
