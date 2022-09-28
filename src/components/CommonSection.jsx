import React from "react";
import { Container } from "reactstrap";
import "./common-section.css";


const CommonSection = ({ title,subTitle }) => {
  return (
    <section className="common__section mb-5">
      <Container className="text-center">
        <h1 className="text-light">{title}</h1>
        <h5 className="text-subLight"><em>{subTitle}</em></h5>
      </Container>
    </section>
  );
};

export default CommonSection;
