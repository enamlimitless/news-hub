import Button from "@restart/ui/esm/Button";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiOutlineUser } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import banner3 from "../../images/banner3.jpg";

const LatestNews = () => {
  return (
    <div>
      <h3 className="my-5 head">Latest News</h3>
      <Row>
        <Col lg={6} sm={12}>
          <img src={banner3} alt="" />
        </Col>
        <Col lg={6} sm={12} className="bg-dark">
          <div className="m-5">
            <p className="date m-0">
              <AiOutlineUser /> James Bond <FaRegComment /> 40
            </p>
            <h2 className="my-4">
              Migrants Told: Stay In France Or Go Back To Your Country
            </h2>
            <p className="text-light text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quos
              quia fugiat provident deleniti accusantium praesentium quae beatae
              enim rem.
            </p>
            <Button
              className="mt-5 py-3 text-light px-5 btn btn-outline-danger"
              variant="outline-warning"
            >
              Learn More
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default LatestNews;
