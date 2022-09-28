import React from "react";
import "./make-car.css";
import { Container, Row, Col } from "reactstrap";
import { NavLink } from "react-router-dom";


const Makecar = () => {
  return (
    <section className="become__driver">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="become__driver-img">
            <img src= "https://media.giphy.com/media/D4zbzXKSl9tOE/giphy.gif" alt="" className="w-100" />
          </Col>

          <Col lg="6" md="6" sm="12">
            <h2 className="section__title become__driver-title">
              Make your Own Dream Car
            </h2>

            <button className="btn become__driver-btn mt-4">
            <NavLink className="nav-link" to="/CustRegister">
              Signup Now
              </NavLink>
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Makecar;
