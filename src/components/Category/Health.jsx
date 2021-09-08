import React from "react";
import { Card, Carousel } from "react-bootstrap";
import { BiCalendarCheck } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { Link } from "react-router-dom";
const Health = () => {
  return (
    <div>
      <h2 className="head">Health</h2>
      <Carousel>
        <Carousel.Item>
          <Card>
            <Link to="/">
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1631061514369-a66cbe71120f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              />
            </Link>
            <Card.Body>
              <Card.Title>
                <p className="cate-date">
                  <BiCalendarCheck /> 7 September 2021 <FaRegComment />
                </p>
                <Link className="cate-head" to="/">
                  Card Title
                </Link>
              </Card.Title>
              <Card.Text className="cate-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Lorem ipsum dolor sit amet
                consectetur .
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card>
            <Link to="/">
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1631061514369-a66cbe71120f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              />
            </Link>
            <Card.Body>
              <Card.Title>
                <p className="cate-date">
                  <BiCalendarCheck /> 7 September 2021 <FaRegComment />
                </p>
                <Link className="cate-head" to="/">
                  Card Title
                </Link>
              </Card.Title>
              <Card.Text className="cate-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Lorem ipsum dolor sit amet
                consectetur .
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Health;
