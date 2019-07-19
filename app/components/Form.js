import React, {Component} from "react"
import { connect } from "react-redux";
import {setMode} from "../redux/mode.js"


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
            this.props.setResultsMode()
        } catch (error) {
            console.log(error)
        }
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>{this.props.mode}</div>
                <label htmlFor='firstName'>First Name</label>
                <input onChange={this.handleChange} name="firstName" type="text" value={this.state.name} />
                <label htmlFor='lastName'>Last Name</label>
                <input onChange={this.handleChange} name="lastName" type="text" value={this.state.address} />
                <label htmlFor='zipCode'>Zip Code</label>
                <input onChange={this.handleChange} name="zipCode" type="text" value={this.state.description} />
                <button type='submit'>Continue</button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {mode: state.mode};
  };
  
const mapDispatchToProps = dispatch => {
  return {
    setResultsMode: () => dispatch(setMode('results'))
  }
};
  
export default connect(
  mapStateToProps, mapDispatchToProps
)(Form)


