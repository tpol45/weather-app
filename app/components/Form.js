import React, {Component} from "react"
import { connect } from "react-redux";
import {setMode} from "../redux/mode"
import {setFirstName} from "../redux/firstName"
import {setLastName} from "../redux/lastName"
import {setZipCode} from "../redux/zipCode"

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
            this.props.setZipCode(this.state.zipCode)
            this.props.setResultsMode()
        } catch (error) {
            console.log(error)
        }
    }

    render () {
        return (
            <div> 
                <div> Please Fill The Form </div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='firstName'>First Name</label>
                    <input onChange={this.handleChange} name="firstName" type="text" value={this.state.firstName} />
                    <label htmlFor='lastName'>Last Name</label>
                    <input onChange={this.handleChange} name="lastName" type="text" value={this.state.lastName} />
                    <label htmlFor='zipCode'>Zip Code</label>
                    <input onChange={this.handleChange} name="zipCode" type="text" value={this.state.zipCode} />
                    <button type='submit'>Continue</button>
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
    setZipCode: zipCode => dispatch(setZipCode(zipCode))
    }
};
  
export default connect(
  null, mapDispatchToProps
)(Form)


