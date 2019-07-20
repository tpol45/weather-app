import React, { Component} from "react";
import {connect} from "react-redux"
import "../App.css";

class Greeting extends Component{
  render(){
    let currentTime = new Date()
    var hour = currentTime.getHours()
    let greeting
    if (hour >= 0 && hour <= 6) greeting = 'Greetings'
    if (hour > 6 && hour <= 12) greeting = 'Good Morning'
    if (hour > 12 && hour <= 16) greeting = 'Good Afternoon'
    if (hour > 16 && hour <= 24) greeting = 'Good Evening'
    return(
      <div className="greeting-container">
        <span className="greeting">{`${greeting}, `}</span> 
        <span className="first-name">{this.props.firstName}</span>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
      firstName: state.firstName
    };
};

export default connect(
mapStateToProps
)(Greeting)