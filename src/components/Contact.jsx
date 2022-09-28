import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "./Helmet";
import CommonSection from "./CommonSection";
import {useRef} from 'react'
import emailjs from '@emailjs/browser';
import "./contact.css";

const Contact = () => {
  const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm("service_2xt51d9", "template_tzea4fh", form.current, "iQ_AJdSOoVyiuHRnZ")
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }

const contactHandler=()=>{
alert("We have received your query,\n We will contact you shortly")
}

  return (
    <div  className="contactbg">
    <Helmet title="Contact Us">
      <CommonSection title="Contact Us" subTitle="We'd love to hear from you" />
      <section>
        <Container className="contactClass">
          <Row>
            <Col lg="7" md="7">
              <h1 className="fw-bold mb-4">Get In Touch</h1>
              <div className="container">
            </div>
            <form ref={form} onSubmit={sendEmail} className="contactform  --card--flex-center  --dir-column">
                <label for="name"><b>Name:</b></label> <br />
                <input type="text" id="name" placeholder="Enter Your Full Name" name="user_name" required/><br></br>

                <label for="email"><b>E-mail:</b></label>
                <br />
                <input id="email" type="email" placeholder="Enter Your Correct Email" name="user_email" required/><br></br>

                 <label for="subject"><b>Subject:</b></label><br />
                <input id="subject" type="text" placeholder="Enter the Subject" name="subject" required/><br></br>

                 <label for="desc"><b>How can we help you?</b></label><br />
                <textarea id="desc" rows="10" cols="30" name="Message"></textarea><br></br>
                <button type='submit' onClick={contactHandler} className="order-btn"
              variant="outline-dark"> Send Message</button>
            </form>
            </Col>

            <Col lg="5" md="5">
               <div className="contact__inf">
                <h5 className="fw-bold">Contact Our HelpDesk</h5>
                <p className="section__description mb-0">
                If you have any questions or queries a member of staff will always be happy to help. Feel free to contact us by telephone, or email and we will be sure to get back to you accordingly.
                </p><br></br><br></br>
                <div className="contact__inf">
                <h5 className="fw-bold">Our Office Timings</h5>
                <p className="section__description mb-0">
                We are open:<br></br>
                10am (daylight) – 9pm , 7 days a week
                </p><br></br><br></br>
               <div className="contact__info">
                <h5 className="fw-bold">Our Offices</h5>
                <p className="section__description mb-0">
                <b>Mumbai Showroom:</b><br></br>
                Road No.1,Andheri,Maharashtra,India
                </p>
                <div className=" d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Phone:</h6>
                  <p className="section__description mb-0">+919075918851</p>
                </div>

                <div className=" d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section__description mb-0">indiafleetservice@gmail.com</p>
                </div><br></br>

                <div className="contact__info">
                <p className="section__description mb-0">
                <b>Kolkata Branch:</b><br></br>
                Eden park Showroom,Kolkata,West Bengal,India
                </p>
                <div className=" d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Phone:</h6>
                  <p className="section__description mb-0">+918087543196</p>
                </div>         
              </div>
              </div>
              </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
    </div>
  );
};

export default Contact;
