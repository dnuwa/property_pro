import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { authLogin } from '../actions/loginAction'

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    onChange = (e) =>{
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        this.props.authLogin(this.state);
    }

    render() {
        return (
            <form className="container" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" 
                    name="email" 
                    className="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp" 
                    placeholder="Enter email"
                    value={this.state.email}
                    onChange={this.onChange} />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                    name="password" 
                    className="form-control" 
                    id="exampleInputPassword1" 
                    placeholder="Password"
                    value={this.state.password} 
                    onChange={this.onChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

Login.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
}

export default connect(null, { authLogin })(Login);
