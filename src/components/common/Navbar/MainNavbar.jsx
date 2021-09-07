import React from "react";
import {
  Container, Nav,
  Navbar
} from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
const MainNavbar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/">
            <FaBars className="h1 mt-2" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto main-nav">
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/news">Tech</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/">Business</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/">Entertainment</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/">Politics</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/">Sports</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/">Health</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/">Science</Link>
              </Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MainNavbar;
