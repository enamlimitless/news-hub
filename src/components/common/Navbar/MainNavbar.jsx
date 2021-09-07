import React from "react";
import {
  Container,
  FormControl,
  InputGroup,
  Nav,
  Navbar
} from "react-bootstrap";
import { BiSearchAlt2 } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
const MainNavbar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/">
            <FaBars />
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
              <div>
                <InputGroup className="mt-1">
                  <FormControl
                    placeholder="Search Your Quarry"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Text id="basic-addon2">
                    <BiSearchAlt2 />
                  </InputGroup.Text>
                </InputGroup>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MainNavbar;
