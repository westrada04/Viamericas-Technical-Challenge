import React, { Component, Fragment } from 'react';
import './App.css';
import Routes from "./Routes";
import Container from 'react-bootstrap/Container';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, withRouter } from 'react-router-dom';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false
    };
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  handleLogout = event => {
    this.userHasAuthenticated(false);
    sessionStorage.removeItem('token');
    this.props.history.push("/");
  }

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };
    return (
      <Container>
        <Navbar bg="light" expand="lg">
          <Navbar.Text>
            <NavLink to="/">ViaAmericas</NavLink>
          </Navbar.Text>
          <Navbar.Toggle />

          {
            this.state.isAuthenticated
              ?
              <Navbar.Collapse className="justify-content-end">

                <Navbar.Text>
                  <NavLink to="/agencies">Agencies</NavLink>
                </Navbar.Text>

                <Navbar.Text>
                  <Nav.Link onClick={this.handleLogout}>Logout</Nav.Link>
                </Navbar.Text>

              </Navbar.Collapse>
              : <Fragment></Fragment>
          }
        </Navbar>
        <br></br>
        <Routes childProps={childProps} />
      </Container >

    );
  }
}

export default withRouter(App);