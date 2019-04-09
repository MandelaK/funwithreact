import React from "react";
import {Navbar, Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';


const NavBar = () => {
    return (
      <div>
        <Navbar className="container" collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">Fun with React!!!</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavLink to="/beer">Grab a Beer</NavLink>
              <NavLink to="/jokes">How about a laugh??</NavLink>
              <NavLink to="/users">Random Users</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
    }

export default NavBar;
