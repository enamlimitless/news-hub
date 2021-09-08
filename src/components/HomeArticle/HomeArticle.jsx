import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import LatestNews from "../LatestNews/LatestNews";
import Social from "../Social/Social";
const HomeArticle = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={8}>
            <LatestNews />
          </Col>
          <Col md={4}>
              <Social />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeArticle;
