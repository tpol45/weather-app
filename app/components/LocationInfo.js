import React, { Component} from "react";
import {connect} from "react-redux"

class LocationInfo extends Component{
  render(){
    return(
      <div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      zipCode: state.zipCode
    };
};

export default connect(
mapStateToProps
)(LocationInfo)