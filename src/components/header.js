import React from 'react';
import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap';

const Header = () => {
  const title = "Daniel Cordeiro";

  return (
    <Navbar expand="lg" fixed="top" bg="light" style={{ ...styles.borderBottom }}>
      <Container fluid>
        <Navbar.Brand href="#">{title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className="justify-content-end" id="navbarScroll">
          <Nav
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">About me</Nav.Link>
            <NavDropdown title="Projects" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Web</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Mobile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                AI
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Contact me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>)
}

const styles = {
  borderBottom: {
    boxShadow: "0 1px 0 gray"
  }
}

export default Header;
