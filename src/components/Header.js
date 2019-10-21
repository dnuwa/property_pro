import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <nav className="navbar mb-5 py-0 px-5 shadow p-3 mb-4 bg-white rounded">    
                <ul className="list-group flex-md-row">
                    <li className="navbar-brand list-group-item">PropertyPro-Lite</li>
                    <li className="list-group-item border-0">
                        <button type="button" className="btn btn-outline-info">Login</button>
                    </li>
                    <li className="list-group-item border-0">
                        <button type="button" className="btn btn-outline-info">Advertise</button>
                    </li>
                </ul>
                <form className="form-inline my-1">
                <div className="md-form form-sm my-0">
                <input className="form-control form-control-sm mr-sm-2 mb-0" type="text" placeholder="Search" aria-label="Search" />
                </div>
                <button className="btn btn-outline-info btn-sm my-0" type="submit">Search</button>
            </form>
            </nav>
        )
    }
}

export default Header
