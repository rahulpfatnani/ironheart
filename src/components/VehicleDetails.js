import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Helmet from "./Helmet";
import CommonSection from "./CommonSection";
import { Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CustRegister.css";

const VehicleDetails = () => {
  const [coreDetails, setCoreDetails] = useState([]);
  const [stdDetails, setStdDetails] = useState([]);
  const [intDetails, setIntDetails] = useState([]);
  const [extDetails, setExtDetails] = useState([]);
  const [userModelObj, setUserModelObj] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("user-info")) {
    } else {
      navigate("/Login");
      alert("Please Login First");
    }
  }, []);

  // Getting Base Model Price
  sessionStorage.setItem("UserModelObj", JSON.stringify(userModelObj));

  let ModObj = JSON.parse(sessionStorage.getItem("UserModelObj"));
  let vehImgName = ModObj.Model_Image;
  let mdName = ModObj.Model_Name;
  let mdPrice = ModObj.Price;

  let obj = JSON.parse(sessionStorage.getItem("Vehicle"));
  let mdId = obj.userModel;

  const fetchCoreDetails = (id) => {
    fetch(`https://localhost:44357/api/VehicleDetails/Core?id=${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCoreDetails(data);
      });
  };

  useEffect(() => {
    fetchCoreDetails(mdId);
    localStorage.clear();
  }, []);

  const fetchStdDetails = (id) => {
    fetch(`https://localhost:44357/api/VehicleDetails/Standard?id=${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setStdDetails(data);
      });
  };

  useEffect(() => {
    fetchStdDetails(mdId);
  }, []);

  const fetchIntDetails = (id) => {
    fetch(`https://localhost:44357/api/VehicleDetails/Interior?id=${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIntDetails(data);
      });
  };

  useEffect(() => {
    fetchIntDetails(mdId);
  }, []);

  const fetchExtDetails = (id) => {
    fetch(`https://localhost:44357/api/VehicleDetails/Exterior?id=${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setExtDetails(data);
      });
  };

  useEffect(() => {
    fetchExtDetails(mdId);
  }, []);

  // Base Model Price

  const fetchUserModel = (modid) => {
    fetch(
      `https://localhost:44357/api/VehicleSelection/User_Model?modid=${modid}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUserModelObj(data[0]);
        // console.log(data[0]);
      });
  };

  useEffect(() => {
    fetchUserModel(mdId);
  }, []);

  let VehicleFeatures = { coreDetails, stdDetails, intDetails, extDetails };

  const confirmHandler = () => {
    sessionStorage.setItem("VehicleFeatures", JSON.stringify(VehicleFeatures));
    sessionStorage.setItem("finalPrice", mdPrice);
    navigate("/Order");
  };

  const configureHandler = () => {
    sessionStorage.setItem("VehicleFeatures", JSON.stringify(VehicleFeatures));
    navigate("/VehicleConfig");
  };

  const cancelHandler = () => {
    sessionStorage.removeItem("Vehicle");
    navigate("/VehicleSelection");
  };

  return (
    <div>
      <Helmet title="Vehicle Details">
        <CommonSection
          title="Vehicle Details"
          subTitle="Designed for driving delight."
        />
        <container align="center">
          <h4>
            <strong>{mdName}</strong>
          </h4>
          <img
            className="col-sm-6 offset-sm-3"
            src={"../carImages/" + vehImgName}
            alt="Model_Image"
          ></img>
        </container>
        <container align="center">
          <Card>
            <Card.Header>
              <h2>Features</h2>
            </Card.Header>
            <Card.Body>
              <Row>
                <Row>
                  <Col>
                    <h4 align="left">Core Features</h4>
                    <hr></hr>
                  </Col>
                  <Col>
                    <h4 align="left">Standard Features</h4>
                    <hr></hr>
                  </Col>
                </Row>
                <Col align="left">
                  {coreDetails.length > 0 && (
                    <ul>
                      {coreDetails.map((core) => (
                        <li key={core}>{core}</li>
                      ))}
                    </ul>
                  )}
                </Col>
                <Col align="left">
                  {stdDetails.length > 0 && (
                    <ul>
                      {stdDetails.map((std) => (
                        <li key={std}>{std}</li>
                      ))}
                    </ul>
                  )}
                </Col>
              </Row>
              <Row>
                <Row>
                  <hr />
                  <Col>
                    <h4 align="left">Interior Features</h4>
                    <hr></hr>
                  </Col>
                  <Col>
                    <h4 align="left">Exterior Features</h4>
                    <hr></hr>
                  </Col>
                </Row>
                <Col align="left">
                  {intDetails.length > 0 && (
                    <ul>
                      {intDetails.map((int) => (
                        <li key={int}>{int}</li>
                      ))}
                    </ul>
                  )}
                </Col>
                <Col align="left">
                  {extDetails.length > 0 && (
                    <ul>
                      {extDetails.map((ext) => (
                        <li key={ext}>{ext}</li>
                      ))}
                    </ul>
                  )}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </container>
        <div align="center">
          <p>
            Base Model Price is:
            <strong>&nbsp;&#8377;&nbsp;{ModObj.Price}</strong>
          </p>
          <hr />
        </div>
        <div className="vehDetbtn" align="center">
          <div>
            <Button
              className="order-btn"
              variant="outline-dark"
              type="button"
              onClick={confirmHandler}
              size="small"
            >
              Confirm
            </Button>
            <Button
              className="order-btn"
              variant="outline-dark"
              type="button"
              onClick={configureHandler}
              size="small"
            >
              Configure
            </Button>
            <Button
              className="order-btn"
              variant="outline-dark"
              type="button"
              onClick={cancelHandler}
              size="small"
            >
              Cancel
            </Button>
          </div>
        </div>
      </Helmet>
    </div>
  );
};

export default VehicleDetails;
