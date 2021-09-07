import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import LatestNews from "../LatestNews/LatestNews";
const HomeArticle = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={8}>
            <LatestNews />
          </Col>
          <Col md={4}>
              <h1>Hello</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeArticle;
