import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { authSignup } from '../actions/signupAction'

export class Signup extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            address: '',
            email: '',
            password: '',
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit =(event) => {
        event.preventDefault();
        this.props.authSignup(this.state);
    }

    render() {
        return (
            <div>
                <form className="container" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputFname">First Name</label>
                    <input type="firstname" 
                    name="firstName" 
                    className="form-control" 
                    id="exampleInputfirstname1" 
                    aria-describedby="firstnameHelp" 
                    placeholder="John"
                    value={this.state.firstName}
                    onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputLastname">Last Name</label>
                    <input type="lastname" 
                    name="lastName" 
                    className="form-control" 
                    id="exampleInputlastname1" 
                    aria-describedby="lastnameHelp" 
                    placeholder="Doe"
                    value={this.state.lastName}
                    onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPhonenumber">Phone Number</label>
                    <input type="phonenumber" 
                    name="phoneNumber" 
                    className="form-control" 
                    id="exampleInputphonenumber1" 
                    aria-describedby="phonenumberHelp" 
                    placeholder="(+250) 555-555"
                    value={this.state.phoneNumber}
                    onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputAddress">Address</label>
                    <input type="address" 
                    name="address" 
                    className="form-control" 
                    id="exampleInputaddress1" 
                    aria-describedby="addressHelp" 
                    placeholder="colivile street plot 21, kigali - Rwanda"
                    value={this.state.address}
                    onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" 
                    name="email" 
                    className="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp" 
                    placeholder="john.deo@hotmail.com"
                    value={this.state.email}
                    onChange={this.handleChange} />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                    name="password" 
                    className="form-control" 
                    id="exampleInputPassword1" 
                    placeholder="********"
                    value={this.state.password} 
                    onChange={this.handleChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
        )
    }
}

Signup.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired
}

export default connect(null, { authSignup })(Signup);
