import React, { Component} from "react";
import Form from "./Form.js"
import "../App.css";
import {connect} from "react-redux"
import ResultsPage from "./ResultsPage";

class App extends Component{
  constructor() {
    super()
  }
  render(){
    return(
      <div className="App">
        <h1> Weather App </h1>
        <h2> HII {this.props.mode}</h2>
        <div> {this.props.mode === 'entry' ? <Form /> : <ResultsPage /> }</div>
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