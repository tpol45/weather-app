import React, { Component} from "react";
import Form from "./Form.js"
import "./App.css";

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1> Weather App </h1>
        <Form />
      </div>
    );
  }
}

export default App;