import React, { Component} from "react";
import Form from "./Form.js"
import "../App.css";
import {connect} from "react-redux";


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

const mapStateToProps = state => {
  return { mode: state.mode };
};

export default connect(
  mapStateToProps,
  null
)(App);

export default App;