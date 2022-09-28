import React, { useEffect, useState } from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Card,
  FormControl,
} from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Helmet from "./Helmet";
import CommonSection from "./CommonSection";
import "./CustRegister.css";

function Order() {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("user-info")) {
    } else {
      navigate("/Login");
      alert("Please Login First");
    }
  }, []);

  const [altCompId, setAltCompId] = useState([]);
  let mdId = JSON.parse(sessionStorage.getItem("Vehicle")).userModel;

  // console.log(mdId);

  const fetchAltCompId = (modid) => {
    fetch(
      `https://localhost:44357/api/VehicleConfig/ConfigFeatures?id=${modid}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAltCompId(data);
      });
  };

  useEffect(() => {
    fetchAltCompId(mdId);
  }, []);

  const list = altCompId.map((id) => sessionStorage.getItem(id));

  const Filterlist = list.filter((data) => data != null);

  const list1 = Filterlist.map((data) => data);

  const disablePastDate = () => {
    let dtToday = new Date();

    let month = dtToday.getMonth() + 1;
    let day = dtToday.getDate();
    let year = dtToday.getFullYear();
    if (month < 10) month = "0" + month.toString();
    if (day < 10) day = "0" + day.toString();

    return year + "-" + month + "-" + day;
  };

  let user = JSON.parse(sessionStorage.getItem("user-info"));
  let car = JSON.parse(sessionStorage.getItem("Vehicle"));
  let car1 = JSON.parse(sessionStorage.getItem("UserModelObj"));
  let userPrice = JSON.parse(sessionStorage.getItem("finalPrice"));

  let val = userPrice * car.minQty;
  let val1 = val * 0.12;
  let tp = val + val1;

  const cancelHandler = () => {
    navigate("/VehicleDetails");
  };

  const sendEmail = () => {
    let templateParams = {
      Name: user.UserDetails.AuthorizedPerson_Name,
      Contact: user.UserDetails.Contact,
      Email_id: user.UserDetails.Email_id,
      Company_Name: user.UserDetails.Company_Name,
      Mfg_id: car.userManufacture,
      Model_id: car.userModel,
      Model_Name: car1.Model_Name,
      Seg_id: car.userSegment,
      Comp_id: 1,
      Alt_id: 1,
      Order_Date: disablePastDate(),
      Qty: car.minQty,
      Order_Price: car1.Price,
      GST: 12,
      Total_Price: tp,
      Configure_Features: list1,
    };
    emailjs.send(
      "service_ygl6pvr",
      "template_hv10r2r",
      templateParams,
      "pH8C15nk1nq4dgbcc"
    );
  };

  const postOrder = async () => {
    let item = {
      Contact: user.UserDetails.Contact,
      Email_id: user.UserDetails.Email_id,
      Company_Name: user.UserDetails.Company_Name,
      Mfg_id: car.userManufacture,
      Name: user.UserDetails.AuthorizedPerson_Name,
      Model_id: car.userModel,
      //Model_Name:car1.Model_Name,
      Seg_id: car.userSegment,
      Comp_id: 1,
      Alt_id: 1,
      Order_Date: disablePastDate(),
      Qty: car.minQty,
      Order_Price: car1.Price,
      GST: 12,
      Total_Price: tp,
    };
    // console.log(item);
    let result = await fetch("https://localhost:44357/api/Orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });

    let result1 = await result.json();
    result = JSON.stringify(result);

    if (result1.isSuccess) {
      sessionStorage.setItem(
        "order-detail",
        JSON.stringify(result1.UserOrderDetails)
      );
      alert(
        "Dear " +
          user.UserDetails.AuthorizedPerson_Name +
          " Your Order Is Placed Succesfully!"
      );
      navigate("/");
      sendEmail();
    }
  };

  return (
    <div>
      <Helmet title="Order Details">
        <CommonSection
          title="Order Details"
          subTitle="Giving your Life a Speed"
        />
        <disablePastDate />
        <Container align="center">
          <br />
          <br />
          <Card>
            <Card.Header>Details</Card.Header>
            <Card.Body>
              <Form>
                <Row>
                  <Row>
                    <h4 align="left">Personal/Company Details</h4>
                    <hr></hr>
                  </Row>
                  <Col>
                    <Form.Group
                      className="mb-3"
                      controlId="AuthorizedPerson_Name"
                    >
                      <Form.Label>
                        <b>Name</b>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        disabled
                        placeholder=""
                        defaultValue={user.UserDetails.AuthorizedPerson_Name}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="Email_id">
                      <Form.Label>
                        <b>Email_id</b>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        disabled
                        placeholder=""
                        Value={user.UserDetails.Email_id}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="Contact">
                      <Form.Label>
                        <b>Contact</b>
                      </Form.Label>
                      <Form.Control
                        type="number"
                        disabled
                        placeholder=""
                        Value={user.UserDetails.Contact}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="Company">
                      <Form.Label>
                        <b>Company</b>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        disabled
                        placeholder=""
                        Value={user.UserDetails.Company_Name}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Row>
                    <hr></hr>
                    <h4 align="left">Vehicle Details</h4>
                    <hr></hr>
                  </Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="Model_Name">
                      <Form.Label>
                        <b>Model</b>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        disabled
                        placeholder=""
                        Value={car1.Model_Name}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="Quantity">
                      <Form.Label>
                        <b>Quantity</b>
                      </Form.Label>
                      <Form.Control
                        type="number"
                        disabled
                        placeholder=""
                        Value={car.minQty}
                      />
                    </Form.Group>
                  </Col>
                  <Row>
                    <Col>
                      <Form.Group
                        className="mb-3"
                        controlId="Configured Features"
                      >
                        <Form.Label>
                          <b>Configured Features</b>
                        </Form.Label>
                        <FormControl
                          as="textarea"
                          type="text"
                          disabled
                          placeholder=""
                          value={list1}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Row>
                <Row>
                  <Row>
                    <hr></hr>
                    <h4 align="left">Order Details</h4>
                    <hr></hr>
                  </Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="Price">
                      <Form.Label>
                        <b>Price per Model</b>
                      </Form.Label>
                      <Form.Control
                        type="number"
                        disabled
                        placeholder=""
                        Value={userPrice}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="Order Date">
                      <Form.Label>
                        <b>Order Date</b>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="OrderDate"
                        disabled
                        placeholder=""
                        Value={disablePastDate()}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="GST">
                      <Form.Label>
                        <b>GST Tax</b>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="GST"
                        disabled
                        placeholder=""
                        Value={"12%"}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="Total Price">
                      <Form.Label>
                        <b>Total Price</b>
                      </Form.Label>
                      <Form.Control
                        type="number"
                        name="TotalPrice"
                        disabled
                        placeholder=""
                        Value={tp}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <br />
                  <br />
                </Row>
                <Button
                  className="order-btn"
                  align="left"
                  variant="outline-dark"
                  type="button"
                  onClick={cancelHandler}
                  id="cancel"
                >
                  <b>Cancel</b>
                </Button>
                <Button
                  className="order-btn"
                  variant="outline-dark"
                  type="button"
                  onClick={postOrder}
                  id="confirm"
                >
                  <b>Confirm</b>
                </Button>
                <Button
                  className="order-btn"
                  variant="outline-dark"
                  type="button"
                  onClick={window.print}
                  id="print"
                >
                  <b>Print</b>
                </Button>
                <br />
              </Form>
            </Card.Body>
          </Card>
          <br />
        </Container>
      </Helmet>
    </div>
  );
}
export default Order;
