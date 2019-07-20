import React, { Component} from "react";
import {connect} from "react-redux"
import spinner from "../../assets/spinner.png"
import clouds from "../../assets/clouds.png"
import rain from "../../assets/rain.png"
import sun from "../../assets/sun.png"


class WeatherInfo extends Component{
  render(){
    if (!this.props.weather){
        return (
            <div> <img src={spinner} /> </div>
        )
    }
    if (this.props.weather.description === "Clouds"){
        return (
            <div>
                <div> <img src={clouds} /> </div>
                <div> Forecast: {this.props.weather.description} </div>
                <div> {this.props.weather.temperature} </div>
            </div>

        )
    }
    if (this.props.weather.description === "Rain"){
        return (
            <div>
                <div> <img src={rain} /> </div>
                <div> Forecast: {this.props.weather.description} </div>
                <div> {this.props.weather.temperature} </div>
            </div>
        )
    }
    if (this.props.weather.description === "Clear" ){
        return (
            <div>
                <div> <img src={rain} /> </div>
                <div> Forecast: {this.props.weather.description} </div>
                <div> {this.props.weather.temperature} </div>
            </div>
        )
    }
    else{
        return(
            <div>
                <div>Forecast: {this.props.weather.description}</div>
                <div>{this.props.weather.temperature}</div>
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