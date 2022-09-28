import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "About",
  },

  {
    path: "/login",
    display: "Login",
  },

  {
    path: "/CustRegister",
    display: "Sign Up",
  },

  {
    path: "/contact",
    display: "Contact",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                  <i class="ri-car-line"></i>
                  <span>
                    Indian Fleet Services <br></br>
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content"></p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Head Office</h5>
              <p className="office__info">Andheri,Maharashtra,India</p>
              <p className="office__info">Phone: +919075918851</p>

              <p className="office__info">Email: indiafleetservice@gmail.com</p>

              <p className="office__info">Office Time: 10am - 7pm</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <a href="https://goo.gl/maps/dWuVgXzebSEzDp4R6" target="_blank">
                <img
                  src="../EmpImages/MAP.png"
                  height={200}
                  alt="Our Office Location"
                />
              </a>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>Copyright &copy; {year},
                Developed by Group13. All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
