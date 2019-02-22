import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const MenuBar: React.SFC = () =>
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="page1">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse>
      <Nav className="mr-auto">
        <Nav.Link href="page1">Page1</Nav.Link>
        <Nav.Link href="page2">Page2</Nav.Link>
        <Nav.Link href="page3">Page3</Nav.Link>
        <NavDropdown title="Dropdown1" id="basic-nav-dropdown">
          <NavDropdown.Item href="page1">Page1</NavDropdown.Item>
          <NavDropdown.Item href="page2">Page2</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="page3">Page3</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Dropdown2" id="basic-nav-dropdown">
          <NavDropdown.Item href="page1">Page1</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="page2">Page2</NavDropdown.Item>
          <NavDropdown.Item href="page3">Page3</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>;

export default MenuBar;
