import React, {Component} from "react"
import { connect } from "react-redux";
import {setMode} from "../redux/mode"
import {setFirstName} from "../redux/firstName"
import {setLastName} from "../redux/lastName"
import {getWeatherInfo} from "../redux/weatherInfo"
import {getCityInfo} from "../redux/cityInfo"
import "../App.css";


class Form extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            zipCode: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange (evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit (evt) {
        evt.preventDefault()
        try {
            this.props.setFirstName(this.state.firstName)
            this.props.setLastName(this.state.lastName)
            this.props.getWeatherInfo(this.state.zipCode)
            this.props.getCityInfo(this.state.zipCode)
            this.props.setResultsMode()
        } catch (error) {
            console.log(error)
        }
    }

    render () {
        return (
            <div> 
                <div className="form-header"> Please Fill the Form </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form"><div><label className="form-label" htmlFor='firstName'>First Name</label></div>
                    <div><input className="form-input" type="text" onChange={this.handleChange} name="firstName" type="text" value={this.state.firstName} /></div>
                    <div><label className="form-label" htmlFor='lastName'>Last Name</label></div>
                    <div><input className="form-input" onChange={this.handleChange} name="lastName" type="text" value={this.state.lastName} /></div>
                    <div><label className="form-label" htmlFor='zipCode'>Zip Code</label></div>
                    <div><input className="form-input" onChange={this.handleChange} name="zipCode" type="text" value={this.state.zipCode} /></div></div>
                    <div className="submit-container"><button className="submit-button" type='submit'>Continue</button></div>
                </form>
            </div>
        )
    }
}
  
const mapDispatchToProps = dispatch => {
  return {
    setResultsMode: () => dispatch(setMode('results')),
    setFirstName: firstName => dispatch(setFirstName(firstName)),
    setLastName: lastName => dispatch(setLastName(lastName)),
    getWeatherInfo: zipCode => dispatch(getWeatherInfo(zipCode)),
    getCityInfo: zipCode => dispatch(getCityInfo(zipCode))
    }
};
  
export default connect(
  null, mapDispatchToProps
)(Form)


