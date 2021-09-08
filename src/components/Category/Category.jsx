import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './Category.css';
import International from "./International";
import Politics from "./Politics";
const Category = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={4}>
              <Politics/>
          </Col>
          <Col md={4}>
          <International />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Category;
