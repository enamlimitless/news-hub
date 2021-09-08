import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ad from "../../../images/ad.png";
import logo from "../../../images/logo.png";
const MiddleNavbar = () => {
  return (
    <div className="py-3">
      <Container>
        <Row>
          <Col lg={4} sm={12}>
            <img className="logo align-center" src={logo} alt="logo" />
          </Col>
          <Col lg={8} sm={12}>
            <div className="nav-sm">
            <a
              href="http://instagram.com/enamulhaque.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="ad-nav" src={ad} alt="ad" />
            </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MiddleNavbar;
