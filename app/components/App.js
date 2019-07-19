import React, { Component} from "react";
import Form from "./Form.js"
import "../App.css";
import {connect} from "react-redux"

class App extends Component{
  constructor() {
    super()
  }
  render(){
    return(
      <div className="App">
        <h1> Weather App </h1>
        <h2> HII {this.props.mode}</h2>
        <div><Form /></div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {mode: state.mode};
};

export default connect(
mapStateToProps
)(App)