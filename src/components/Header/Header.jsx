import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import { FaRegComment } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import banner1 from "../../images/banner1.jpg";
import banner2 from "../../images/banner2.jpg";
import banner3 from "../../images/banner3.jpg";
import TopNews from "../TopNews.jsx/TopNews";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <Container className="mt-5">
        <Row>
          <Col md={8}>
            <Carousel fade>
              <Carousel.Item>
                <img
                  className="d-block w-100 img-fluid"
                  src={banner1}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <div className="caro-cap">
                    <span className="category">
                      <a href="/">World</a>
                    </span>
                    <span className="date">
                      <MdDateRange />5 Sep 2021
                    </span>
                    <span className="comment">
                      <FaRegComment />
                      30
                    </span>
                  </div>
                  <h3 className="slide-cap"><span>Lorem</span> ipsum dolor sit amet.</h3>
                  <p className="slide-text">
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 img-fluid"
                  src={banner2}
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <div className="caro-cap">
                    <span className="category">
                      <a href="/">Sports</a>
                    </span>
                    <span className="date">
                      <MdDateRange />5 Sep 2021
                    </span>
                    <span className="comment">
                      <FaRegComment />
                      30
                    </span>
                  </div>
                  <h3><span>Lorem</span> ipsum dolor sit amet consectetur.</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 img-fluid"
                  src={banner3}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <div className="caro-cap">
                    <span className="category">
                      <a href="/">Business</a>
                    </span>
                    <span className="date">
                      <MdDateRange />5 Sep 2021
                    </span>
                    <span className="comment">
                      <FaRegComment />
                      30
                    </span>
                  </div>
                  <h3><span>Lorem</span> ipsum dolor sit amit!</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
