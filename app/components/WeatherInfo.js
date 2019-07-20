import React, { Component} from "react";
import {connect} from "react-redux"



class WeatherInfo extends Component{
  render(){
    return(
        <div>
            <div>{this.props.weather.description}</div>
            <div>{this.props.weather.temperature}</div>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      weather: state.weather
    };
};

export default connect(
mapStateToProps
)(WeatherInfo)