import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import { FaRegComment } from 'react-icons/fa';
import { MdDateRange } from 'react-icons/md';
import banner1 from "../../images/banner1.jpg";
import banner2 from "../../images/banner2.jpg";
import TopNews from "../TopNews.jsx/TopNews";
import './Header.css';
const Header = () => {
  return (
    <div>
      <Container className="mt-5">
        <Row>
          <Col md={8}>
            <Carousel fade>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={banner1}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <div>
                    <span className=""><a href="/">World</a></span>
                    <span><MdDateRange/></span>
                    <span><FaRegComment />30</span>
                  </div>
                  <h2 className="slide-cap text-left">Lorem ipsum dolor sit amet.</h2>
                  <p className="slide-text">
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={banner2}
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={banner1}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col md={4}>
            <TopNews />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
