import React, { Component} from "react";
import {connect} from "react-redux"

class LocationInfo extends Component{
  render(){
    return(
      <div className="city-info-container">
        <div> Zip Code: {this.props.cityInfo.zipCode} </div>
        <div> City: {this.props.cityInfo.city} </div>
        <div> State: {this.props.cityInfo.state} </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      cityInfo: state.cityInfo
    };
};

export default connect(
mapStateToProps
)(LocationInfo)