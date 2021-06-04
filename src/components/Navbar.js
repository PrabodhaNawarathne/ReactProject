import React, { useState } from 'react';
import './Navbar.css'
import logo from '../resources/logo_main.png'
import * as ReactBootstrap from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Navbar = () => {

    const [show, setShow] = useState(false);
    const showDropdown = (e) => {
      setShow(!show);
    }
    const hideDropdown = (e) => {
      setShow(false);
    }

    return (
      <ReactBootstrap.Navbar  collapseOnSelect expand="xl" variant="dark">
        <ReactBootstrap.Navbar.Brand as={Link} to="/home" >TechExpozed</ReactBootstrap.Navbar.Brand>
        <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootstrap.Nav className="mr-auto">
            <ReactBootstrap.Nav.Link as={Link} to="/home">Home</ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link as={Link} to="/design">Design</ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link as={Link} to="/aboutPage">About</ReactBootstrap.Nav.Link>
            <ReactBootstrap.NavDropdown title="Our Services" className=".dropdown-item"
                show={show} onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
              <ReactBootstrap.NavDropdown.Item as={Link} to="/webPackages">Website Package</ReactBootstrap.NavDropdown.Item>
              <ReactBootstrap.NavDropdown.Item as={Link} to="/digitalMarketing">Digital Marketing</ReactBootstrap.NavDropdown.Item>
              <ReactBootstrap.NavDropdown.Item as={Link} to="/genuine">Genuine</ReactBootstrap.NavDropdown.Item>
              <ReactBootstrap.NavDropdown.Item as={Link} to="/wpsanitation">Workplace Sanitation</ReactBootstrap.NavDropdown.Item>
            </ReactBootstrap.NavDropdown>
          </ReactBootstrap.Nav>
          <ReactBootstrap.Nav>
            <ReactBootstrap.Nav.Link as={Link} to="/contactPage">Contact</ReactBootstrap.Nav.Link>
          </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar.Collapse>
      </ReactBootstrap.Navbar>
    );
}
export default Navbar;