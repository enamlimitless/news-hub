import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ad from '../../../images/ad.png';
import logo from '../../../images/logo.png';
const MiddleNavbar = () => {
  return (
    <div className="py-3">
      <Container>
        <Row>
          <Col md={4}>
            <img className="logo" src={logo} alt="logo" />
          </Col>
          <Col md={8} sm={12}>
              <img src={ad} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MiddleNavbar;
