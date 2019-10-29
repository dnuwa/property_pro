import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Header extends Component {
    render() {
        return (
            <nav className="navbar mb-5 py-0 px-5 shadow p-3 mb-4 bg-white rounded">    
                <ul className="list-group flex-md-row">
                    <li className="navbar-brand list-group-item"><Link to="/">PropertyPro-Lite</Link></li>
                    <li className="list-group-item border-0">
                        <button type="button" className="btn btn-outline-info"><Link to="/login">Login</Link></button>
                    </li>
                    <li className="list-group-item border-0">
                        <button type="button" className="btn btn-outline-info"><Link to="/signup">Signup</Link></button>
                    </li>
                    <li className="list-group-item border-0">
                        <button type="button" className="btn btn-outline-info"><Link to="/advertise">Advertise</Link></button>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Header
