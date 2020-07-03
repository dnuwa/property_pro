import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

export class Header extends Component {
  logout = () => {
    localStorage.clear();
    window.location.replace("/login");
  };

  render() {
    // console.log(this.props.userData);

    return (
      <nav className="navbar bg-dark fixed-nav">
        <div className="logo">
          <Link to="/">PropertyPro-Lite</Link>{" "}
        </div>
        <ul className="list-group flex-md-row list">
          {!this.props.userData.data ? (
            <ul className="list-group flex-md-row list">
              <li className="list-group-item bg-dark">
                <Link to="/login">
                  <div className="headerlink">Login</div>
                </Link>
              </li>
              <li className="list-group-item bg-dark">
                <Link to="/signup">
                  <div className="headerlink">Signup</div>
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="list-group flex-md-row list">
              <li className="list-group-item bg-dark">
                <Link to="/advertise">
                  <div className="headerlink">Advertise</div>
                </Link>
              </li>
              <li className="list-group-item bg-dark">
                <Link to="#">
                  <div className="headerlink">Edit Profile</div>
                </Link>
              </li>
              <li className="list-group-item bg-dark">
                <Link to="#">
                  <div className="headerlink" onClick={this.logout}>
                    Logout
                  </div>
                </Link>
              </li>
            </ul>
          )}
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  userData: state.authentication.userInfo,
});

export default connect(mapStateToProps, null)(Header);
