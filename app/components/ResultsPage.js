import React, { Component} from "react";
import { connect } from "react-redux";
import LocationInfo from "./LocationInfo"
import WeatherInfo from "./WeatherInfo"
import Greeting from "./Greeting"
import {setMode} from "../redux/mode"


class ResultsPage extends Component{
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (evt) {
    this.props.setEntryMode()
  }

  render(){
    if (!this.props.cityInfo.city){
      return(
        <div>
          <div>City Not Found</div>
          <button onClick={this.handleClick}>Go Back</button>
        </div>
      )
    }
    else {
      return(
        <div>
          <Greeting />
          Weather
          <WeatherInfo />
          You are in:
          <LocationInfo />
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
      cityInfo: state.cityInfo
    };
};

const mapDispatchToProps = dispatch => {
  return {
    setEntryMode: () => dispatch(setMode('entry'))
  }
};

export default connect(
mapStateToProps, mapDispatchToProps
)(ResultsPage)