import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Header extends Component {
    render() {
        return (
            <nav className="navbar bg-white"> 
                <div className="logo"><Link to="/">PropertyPro-Lite</Link> </div>  
                <ul className="list-group flex-md-row list">
                    <li className="list-group-item">
                        <Link to="/advertise"><div className="headerlink">Advertise</div></Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/login"><div className="headerlink">Login</div></Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/signup"><div className="headerlink">Signup</div></Link>
                    </li>
                    
                </ul>
            </nav>
        )
    }
}

export default Header
