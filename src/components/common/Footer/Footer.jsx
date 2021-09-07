import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaInstagram,
  FaPinterest,
  FaTwitter
} from "react-icons/fa";
import f from "../../../images/1.jpg";
import logoFooter from "../../../images/logo.png";
import "./Footer.css";
import FooterBottom from "./FooterBottom";
const Footer = () => {
  return (
    <footer className="bg-dark">
      <Container className="py-5">
        <Row>
          <Col md={3}>
            <h2>About</h2>
            <img className="footer-logo" src={logoFooter} alt="" />
            <p className="text-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              consectetur illum aspernatur porro deleniti ipsum nam quam esse
              eius, dolor maiores in consequuntur delectus. Facere quasi
              doloremque odit harum tenetur?
            </p>
            <p className="text-light">Connect with Us!</p>
            <ul className="d-flex footer-social-icon align-items-center">
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <FaGooglePlusG />
                </a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <FaPinterest />
                </a>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h2>Most Popular</h2>
            <div className="d-flex mt-4">
              <img src={f} alt="" />
              <h5>Grandma’s secret blueberry pie recipe revealed!</h5>
            </div>
            <div className="d-flex mt-4">
              <img src={f} alt="" />
              <h5>Grandma’s secret blueberry pie recipe revealed!</h5>
            </div>
            <div className="d-flex mt-4">
              <img src={f} alt="" />
              <h5>Grandma’s secret blueberry pie recipe revealed!</h5>
            </div>
          </Col>
          <Col md={3}>
            <h2>Most Discussed</h2>
            <div className="d-flex mt-4">
              <img src={f} alt="" />
              <h5>Grandma’s secret blueberry pie recipe revealed!</h5>
            </div>
            <div className="d-flex mt-4">
              <img src={f} alt="" />
              <h5>Grandma’s secret blueberry pie recipe revealed!</h5>
            </div>
            <div className="d-flex mt-4">
              <img src={f} alt="" />
              <h5>Grandma’s secret blueberry pie recipe revealed!</h5>
            </div>
          </Col>
          <Col md={3}>hello</Col>
        </Row>
      </Container>
      <FooterBottom />
    </footer>
  );
};

export default Footer;
