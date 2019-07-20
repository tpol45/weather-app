import React, { Component} from "react";
import {connect} from "react-redux"
import spinner from "../../assets/spinner.png"
import clouds from "../../assets/clouds.png"
import rain from "../../assets/rain.png"
import sun from "../../assets/sun.png"
import "../App.css"


class WeatherInfo extends Component{
  render(){
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var date = new Date();
    if (!this.props.weather){
        return (
            <div className="weather-container"> <img src={spinner} /> </div>
        )
    }
    if (this.props.weather.description === "Clouds"){
        return (
            <div className="weather-container">
                <div> <img src={clouds} /> </div>
                <div className="weather-text">
                    <div> {days[date.getDay()]} {date.getMonth() + 1}/{date.getDate()}  </div>
                    <div> {this.props.weather.temperature}C </div>
                    <div> Forecast: {this.props.weather.description} </div>
                </div>
            </div>

        )
    }
    if (this.props.weather.description === "Rain"){
        return (
            <div className="weather-container">
                <div> <img src={rain} /> </div>
                <div className="weather-text">
                    <div> {days[date.getDay()]} {date.getMonth() + 1}/{date.getDate()}  </div>
                    <div> {this.props.weather.temperature}C </div>
                    <div> Forecast: {this.props.weather.description} </div>
                </div>
            </div>
        )
    }
    if (this.props.weather.description === "Clear" ){
        return (
            <div className="weather-container">
                <div> <img src={sun} /> </div>
                <div className="weather-text">
                    <div> {days[date.getDay()]} {date.getMonth() + 1}/{date.getDate()}  </div>
                    <div> {this.props.weather.temperature}C </div>
                    <div> Forecast: {this.props.weather.description} </div>
                </div>
            </div>
        )
    }
    else{
        return(
            <div className="weather-container">
                <div className="weather-text">
                    <div> {days[date.getDay()]} {date.getMonth() + 1}/{date.getDate()}  </div>
                    <div>{this.props.weather.temperature}C</div>
                    <div>Forecast: {this.props.weather.description}</div>
                </div>
            </div>
        );
    }
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