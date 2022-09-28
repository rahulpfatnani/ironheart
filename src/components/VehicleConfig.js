import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Helmet from "./Helmet";
import CommonSection from "./CommonSection";
import { useNavigate } from "react-router-dom";
import { Row, Col, Card, Button } from "react-bootstrap";
import { CardHeader } from "reactstrap";
import Marquee from "react-fast-marquee";
import "./CustRegister.css";

const VehicleConfig = () => {
  // Clearing the local & session storage for component names

  const [count, setCount] = useState(0);
  const [altCompId, setAltCompId] = useState([]);

  const fetchAltCompId = () => {
    fetch(`https://localhost:44357/api/VehicleConfig/ConfigFeatures`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAltCompId(data);
        setCount(1);
      });
  };

  useEffect(() => {
    fetchAltCompId();
  }, []);

  useEffect(() => {
    altCompId.map((id) => {
      sessionStorage.removeItem(id);
      localStorage.clear();
    });
  }, [count]);

  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("user-info")) {
    } else {
      navigate("/Login");
      alert("Please Login First");
    }
  }, []);

  const [details, setDetails] = useState([]);
  const [stdDetails, setStdDetails] = useState([]);
  const [altStdDetails, setAltStdDetails] = useState([]);
  const [intDetails, setIntDetails] = useState([]);
  const [altIntDetails, setAltIntDetails] = useState([]);
  const [extDetails, setExtDetails] = useState([]);
  const [altExtDetails, setAltExtDetails] = useState([]);
  const [stdTemp, setStdTemp] = useState("");
  const [intTemp, setIntTemp] = useState("");
  const [extTemp, setExtTemp] = useState("");
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [isVisible5, setIsVisible5] = useState(false);
  const [isVisible6, setIsVisible6] = useState(false);

  const toggleVisible1 = () => setIsVisible1(!isVisible1);
  const toggleVisible2 = () => setIsVisible2(!isVisible2);
  const toggleVisible3 = () => setIsVisible3(!isVisible3);

  const [flag, setFlag] = useState(false);

  let vehDet = JSON.parse(sessionStorage.getItem("Vehicle"));
  let mdId = vehDet.userModel;

  let vehModPrice = JSON.parse(sessionStorage.getItem("UserModelObj"));

  const [basePrice, setBasePrice] = useState(vehModPrice.Price);
  const [userPrice, setUserPrice] = useState(vehModPrice.Price);

  let vehImgName = vehModPrice.Model_Image;
  let mdName = vehModPrice.Model_Name;

  // Non-Configurablle Components

  const fetchDetails = (id) => {
    fetch(`https://localhost:44357/api/VehicleConfig/Features?id=${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDetails(data);
      });
  };

  useEffect(() => {
    fetchDetails(mdId);
  }, []);

  // Configurable Standard Components

  const fetchStdDetails = (id) => {
    fetch(`https://localhost:44357/api/VehicleConfig/StdFeatures?id=${id}`)
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

  // Alternate Features for Standard Features

  const fetchAltStdOptions = (modid, cmpid) => {
    fetch(
      `https://localhost:44357/api/VehicleConfig/AltStdFeatures?modid=${modid}&cmpid=${cmpid}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAltStdDetails(data);
        // console.log(data);
      });
  };

  let optionAltStd;
  optionAltStd = altStdDetails.map((altStd) => (
    <option key={altStd.Alt_Comp_id} value={JSON.stringify(altStd)}>
      {altStd.Alt_Comp_Name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8377;&nbsp;
      {altStd.Delta_price}
    </option>
  ));

  const handleAltStdChange = (e) => {
    setFlag(false);
    sessionStorage.setItem(stdTemp, JSON.parse(e.target.value).Alt_Comp_Name);
    localStorage.setItem(stdTemp, JSON.parse(e.target.value).Delta_price);
  };

  // Configurable Interior Components

  const fetchIntDetails = (id) => {
    fetch(`https://localhost:44357/api/VehicleConfig/IntFeatures?id=${id}`)
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

  // Alternate Features for Interior Features

  const fetchAltIntOptions = (modid, cmpid) => {
    fetch(
      `https://localhost:44357/api/VehicleConfig/AltIntFeatures?modid=${modid}&cmpid=${cmpid}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAltIntDetails(data);
        // console.log(data);
      });
  };

  let optionAltInt;
  optionAltInt = altIntDetails.map((altInt) => (
    <option key={altInt.Alt_Comp_id} value={JSON.stringify(altInt)}>
      {altInt.Alt_Comp_Name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8377;&nbsp;
      {altInt.Delta_price}
    </option>
  ));

  const handleAltIntChange = (e) => {
    setFlag(false);
    sessionStorage.setItem(intTemp, JSON.parse(e.target.value).Alt_Comp_Name);
    localStorage.setItem(intTemp, JSON.parse(e.target.value).Delta_price);
  };

  // Configurable Exterior Components

  const fetchExtDetails = (id) => {
    fetch(`https://localhost:44357/api/VehicleConfig/ExtFeatures?id=${id}`)
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

  // Alternate Features for Standard Features

  const fetchAltExtOptions = (modid, cmpid) => {
    fetch(
      `https://localhost:44357/api/VehicleConfig/AltExtFeatures?modid=${modid}&cmpid=${cmpid}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAltExtDetails(data);
      });
  };

  let optionAltExt;
  optionAltExt = altExtDetails.map((altExt) => (
    <option key={altExt.Alt_Comp_id} value={JSON.stringify(altExt)}>
      {altExt.Alt_Comp_Name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8377;&nbsp;
      {altExt.Delta_price}
    </option>
  ));

  //Testing for Pricing

  let arrayOfValues = [];
  let sum = 0;

  const calculate = () => {
    arrayOfValues = Object.values(localStorage);
    for (let i = 0; i < arrayOfValues.length; i++) {
      sum += parseInt(arrayOfValues[i]);
    }
    setUserPrice(basePrice + sum);
    setFlag(true);
    setTimeout(() => (sum = 0), 100);
  };

  const handleAltExtChange = (e) => {
    setFlag(false);
    sessionStorage.setItem(extTemp, JSON.parse(e.target.value).Alt_Comp_Name);
    localStorage.setItem(extTemp, JSON.parse(e.target.value).Delta_price);
  };

  const handleStdButtonClick = (e) => {
    fetchAltStdOptions(mdId, e.target.value);
    setStdTemp(e.target.value);
    setIsVisible4(true);
  };

  const handleIntButtonClick = (e) => {
    fetchAltIntOptions(mdId, e.target.value);
    setIntTemp(e.target.value);
    setIsVisible5(true);
  };

  const handleExtButtonClick = (e) => {
    fetchAltExtOptions(mdId, e.target.value);
    setExtTemp(e.target.value);
    setIsVisible6(true);
  };

  // For Standard Features
  let ListStdTemplate;
  if (stdDetails.length) {
    ListStdTemplate = stdDetails.map((stddetail) => (
      <div className="alt-btn" align="left">
        <button
          key={stddetail.Comp_id}
          value={stddetail.Comp_id}
          onClick={handleStdButtonClick}
        >
          {stddetail.Comp_name}
        </button>
        <br />
      </div>
    ));
  } else {
    ListStdTemplate = (
      <li> No Configurable Standard Features are available </li>
    );
  }

  // For Interior Features
  let ListIntTemplate;
  if (intDetails.length) {
    ListIntTemplate = intDetails.map((intdetail) => (
      <div className="alt-btn" align="left">
        <button
          key={intdetail.Comp_id}
          value={intdetail.Comp_id}
          onClick={handleIntButtonClick}
        >
          {intdetail.Comp_name}
        </button>
        <br />
      </div>
    ));
  } else {
    ListIntTemplate = (
      <li> No Configurable Interior Features are available </li>
    );
  }

  // For Exterior Features
  let ListExtTemplate;
  if (extDetails.length) {
    ListExtTemplate = extDetails.map((extdetail) => (
      <div className="alt-btn" align="left">
        <button
          key={extdetail}
          value={extdetail.Comp_id}
          onClick={handleExtButtonClick}
        >
          {extdetail.Comp_name}
        </button>
        <br />
      </div>
    ));
  } else {
    ListExtTemplate = (
      <li> No Configurable Exterior Features are available </li>
    );
  }

  const confirmHandler = () => {
    calculate();
    sessionStorage.setItem("finalPrice", userPrice);
    navigate("/Order");
  };

  const cancelHandler = () => {
    sessionStorage.removeItem("Vehicle");
    localStorage.clear();
    navigate("/VehicleSelection");
  };

  return (
    <div>
      <Helmet title="Vehicle Config">
        <CommonSection
          title="Configure Your Vehicle"
          subTitle="Drive the change by changing your drive."
        />
        <container align="center">
          <Card>
            <CardHeader>
              <Row>
                <Col>
                  <h4 align="left">Non-Configurable Features</h4>
                </Col>
                <Col>
                  <h4 align="Center">
                    <strong>{mdName}</strong>
                  </h4>
                </Col>
              </Row>
            </CardHeader>
            <Card.Body>
              <Row>
                <Col align="left">
                  {details.length > 0 && (
                    <ul>
                      {details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  )}
                </Col>
                <Col align="Center">
                  <img
                    className="col-sm-12 offset-sm-1"
                    src={"../carImages/" + vehImgName}
                    alt="Model_Image"
                  ></img>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </container>
        <container align="center">
          <Card>
            <CardHeader>
              <h4 align="center">Configurable Features</h4>
            </CardHeader>
            <Card.Body>
              <Marquee style={{ color: "red", speed: 30 }}>
                Please Click on below buttons to configure!!!
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Please Click on
                below buttons to
                configure!!!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Please Click on
                below buttons to configure!!!
              </Marquee>
              <br />
              <Row align="center">
                <Col>
                  <Button
                    className="order-btn"
                    variant="outline-dark"
                    type="button"
                    onClick={toggleVisible1}
                    active
                  >
                    <b>Standard</b>
                  </Button>

                  {isVisible1 && (
                    <div className="infoway" align="center">
                      <div>
                        <ul>{ListStdTemplate}</ul>
                      </div>
                      <Box>
                        {isVisible4 ? (
                          <select
                            id="std"
                            class="readers"
                            placeholder="select-AltStdComp"
                            onChange={handleAltStdChange}
                          >
                            <option disabled selected>
                              Select Alternate Component
                            </option>
                            {optionAltStd}
                          </select>
                        ) : (
                          ""
                        )}
                      </Box>
                    </div>
                  )}
                </Col>
                <Col>
                  <Button
                    className="order-btn"
                    variant="outline-dark"
                    type="button"
                    onClick={toggleVisible2}
                    active
                  >
                    <b>Interior</b>
                  </Button>

                  {isVisible2 && (
                    <div className="infoway" align="center">
                      <Box>
                        <div>
                          <ul>{ListIntTemplate}</ul>
                        </div>
                        {isVisible5 ? (
                          <select
                            id="std"
                            placeholder="select-AltIntComp"
                            onChange={handleAltIntChange}
                          >
                            <option disabled selected>
                              Select Alternate Component
                            </option>
                            {optionAltInt}
                          </select>
                        ) : (
                          ""
                        )}
                      </Box>
                    </div>
                  )}
                </Col>
                <Col>
                  <Button
                    className="order-btn"
                    variant="outline-dark"
                    type="button"
                    onClick={toggleVisible3}
                    active
                  >
                    <b>Exterior</b>
                  </Button>

                  {isVisible3 && (
                    <div className="infoway" align="center">
                      <Box>
                        <div>
                          <ul>{ListExtTemplate}</ul>
                        </div>
                        {isVisible6 ? (
                          <select
                            id="alt-ext-drop-down"
                            class="readers"
                            placeholder="select-AltExtComp"
                            onChange={handleAltExtChange}
                          >
                            <option disabled selected>
                              Select Alternate Component
                            </option>
                            {optionAltExt}
                          </select>
                        ) : (
                          ""
                        )}
                      </Box>
                    </div>
                  )}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </container>
        <container>
          <Row>
            <Col align="center">
              Model Price = <strong>&#8377;&nbsp;{basePrice}</strong>
            </Col>
            <Col align="center">
              Final Price = <strong>&#8377;&nbsp;{userPrice}</strong>
            </Col>
          </Row>
          <Col align="center">
            <Button
              className="order-btn"
              variant="outline-dark"
              type="button"
              onClick={calculate}
            >
              <b>Confirm Price</b>
            </Button>
            <p>
              <b>Note</b>: Please Confirm the Price first
            </p>
            <hr />
          </Col>
          {/* <hr /> */}
          <div align="center" className="config-btn">
            <Button
              className="order-btn"
              variant="outline-dark"
              type="button"
              onClick={confirmHandler}
              disabled={flag ? false : true}
            >
              <b>Confirm Order</b>
            </Button>
            <Button
              className="order-btn"
              variant="outline-dark"
              type="button"
              onClick={cancelHandler}
            >
              <b>Cancel</b>
            </Button>
          </div>
        </container>
      </Helmet>
    </div>
  );
};

export default VehicleConfig;
