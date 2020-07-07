import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import { Navbar, Nav, ListGroup } from "react-bootstrap";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import ListGroup from "react-bootstrap/ListGroup";

export class Header extends Component {
  logout = () => {
    localStorage.clear();
    window.location.replace("/login");
  };

  render() {
    // console.log(this.props.userData);

    return (
      <Navbar bg="light" expand="lg" className="sticky-nav">
        <Navbar.Brand className="logo">
          <Link to="/">PropertyPro-Lite</Link>{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <ListGroup horizontal>
              {!this.props.userData.data ? (
                <ListGroup horizontal>
                  <ListGroup.Item className="nav-bar-links">
                    <Link to="/login">Login</Link>
                  </ListGroup.Item>
                  <ListGroup.Item className="nav-bar-links">
                    <Link to="/signup">Signup</Link>
                  </ListGroup.Item>
                </ListGroup>
              ) : (
                <ListGroup horizontal>
                  <ListGroup.Item className="nav-bar-links">
                    <Link to="/advertise">Advertise</Link>
                  </ListGroup.Item>
                  <ListGroup.Item className="nav-bar-links">
                    <Link to="#">Edit Profile</Link>
                  </ListGroup.Item>
                  <ListGroup.Item className="nav-bar-links">
                    <Link to="#" onClick={this.logout}>
                      Logout
                    </Link>
                  </ListGroup.Item>
                </ListGroup>
              )}
            </ListGroup>
          </Nav>
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => ({
  userData: state.authentication.userInfo,
});

export default connect(mapStateToProps, null)(Header);
