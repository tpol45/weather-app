import React, { Component} from "react";
import LocationInfo from "./LocationInfo"
import WeatherInfo from "./WeatherInfo"
import Greeting from "./Greeting"


export default class ResultsPage extends Component{
  render(){
    return(
      <div>
        <Greeting />
        <LocationInfo />
        <WeatherInfo />
      </div>
    );
  }
}