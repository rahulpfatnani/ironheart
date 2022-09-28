import React from "react";
import Helmet from "./Helmet";
import CommonSection from "./CommonSection";
import Makecar from "./Makecar";
// import "./App.css";
import Slider from "./Slider";


import { Container, Row, Col } from "reactstrap";

import AboutSection from "./AboutSection";
import ServicesList from "./ServicesList";
import "./Home.css";

function Home() {
  
  return ( 
    <div>
    <Helmet title="Home">
     <CommonSection title="Indian Fleet Services" subTitle="Accelerating the Future." />
     <Slider />
    
      {/* ========== services section ============ */}
      <div className="home" id="topHome">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://i.gifer.com/1d7.gif"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            {/* <h1 class="font-weight-light"></h1> */}
            <p>
             We are Indian fleet Services.
             We are specialist in providing cars in bulk to consumers as per configuration.
             Do signup for more details
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* =========== about section ================ */}
    <AboutSection />
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">See our</h6>
              <h2 className="section__title">Popular Services</h2>
            </Col>

            <ServicesList />
          </Row>
        </Container>
      </section>
    
        <Makecar />
        
    </Helmet>
        </div>
  );
}

export default Home;
