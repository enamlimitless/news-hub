import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Category.css";
import Entertainment from "./Entertainment";
import Health from "./Health";
import International from "./International";
import Politics from "./Politics";
import Sports from "./Sports";
const Category = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={4}>
            <Politics />
          </Col>
          <Col md={4}>
            <International />
          </Col>
          <Col md={4}>
            <Sports />
          </Col>
          <Col md={4}>
            <Health />
          </Col>
          <Col md={4}>
            <Entertainment />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Category;
