import React, { Component} from "react";
import Form from "./Form.js"
import "../App.css";


export default class App extends Component{
  constructor() {
    super()
  }
  render(){
    return(
      <div className="App">
        <h1> Weather App </h1>
        <div><Form /></div>
      </div>
    );
  }
}