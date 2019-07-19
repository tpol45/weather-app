import React, { Component} from "react";
import {connect} from "react-redux"

class WeatherPage extends Component{
  render(){
    return(
      <div>
        <div>{this.props.firstName}</div>
        <div>{this.props.lastName}</div>
        <div>{this.props.zipCode}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      firstName: state.firstName,
      lastName: state.lastName,
      zipCode: state.zipCode
    };
};

export default connect(
mapStateToProps
)(WeatherPage)