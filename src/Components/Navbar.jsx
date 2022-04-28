import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";

const Navigation = () => {
    return (
        <Navbar bg="dark" className="navbar-dark" expand="lg">
          <Container>
            <Navbar.Brand href="https://crbarning.github.io/ChatApp">
              Chat App!
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="https://crbarning.github.io/ChatApp">
                  Home
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
  }

  export default Navigation;