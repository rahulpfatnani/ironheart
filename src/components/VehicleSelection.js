import React, { useEffect, useState } from "react";
import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Helmet from "./Helmet";
import CommonSection from "./CommonSection";
import "./VehicleSelection.css";
import { Button } from "react-bootstrap";

const VehicleSelection = () => {
  const [segments, setSegments] = useState([]);
  const [manufactures, setManufacturers] = useState([]);
  const [models, setModels] = useState([]);
  const [userSegment, setUserSegment] = useState("");
  const [userManufacture, setUserManufacturer] = useState("");
  const [userModel, setUserModel] = useState("");
  const [minQty, setMinQty] = useState(0);
  const [fixQty, setFixQty] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("user-info")) {
    } else {
      navigate("/Login");
      alert("Please Login First");
    }
  }, []);

  // Segments

  const fetchSegments = () => {
    fetch("https://localhost:44357/api/VehicleSelection/Segment_Master")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSegments(data);
      });
  };

  useEffect(() => {
    fetchSegments();
  }, []);

  let optionSegments;
  optionSegments = segments.map((seg) => (
    <option key={seg.Seg_id} value={seg.Seg_id}>
      {seg.Seg_Name}
    </option>
  ));

  // Manufacturers

  const fetchManufacturerOptions = (id) => {
    fetch(
      `https://localhost:44357/api/VehicleSelection/Manufacturer_Master?id=${id}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setManufacturers(data);
        // console.log(data);
      });
  };

  let optionManufacturers;
  optionManufacturers = manufactures.map((mfg) => (
    <option key={mfg.Mfg_id} value={mfg.Mfg_id}>
      {mfg.Mfg_Name}
    </option>
  ));

  const handleSegChange = (e) => {
    // console.log(e.target.value);
    let id = e.target.value;
    fetchManufacturerOptions(id);
    setUserSegment(e.target.value);
  };

  // Models

  const fetchModelsOptions = (id) => {
    fetch(
      `https://localhost:44357/api/VehicleSelection/Model_Master?mfgid=${id}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setModels(data);
        // console.log(data);
      });
  };

  let optionModels;
  optionModels = models.map((mod) => (
    <option key={mod.Model_id} value={mod.Model_id}>
      {mod.Model_Name}
    </option>
  ));

  const handleMfgChange = (e) => {
    // console.log(e.target.value);
    let id = e.target.value;
    fetchModelsOptions(id);
    setUserManufacturer(e.target.value);
  };

  const handleModelChange = (e) => {
    // console.log(e.target.value);
    fetchMinQty(e.target.value);
    setUserModel(e.target.value);
  };

  const handleMinQty = (e) => {
    // console.log(e.target.value);
    if (e.target.value > fixQty) {
      setMinQty(e.target.value);
      // console.log(minQty);
    }
  };

  // Min Qty

  const fetchMinQty = (id) => {
    fetch(
      `https://localhost:44357/api/VehicleSelection/Model_Master_Qty?modid=${id}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMinQty(data[0]);
        setFixQty(data[0] - 1);
        // console.log(data);
      });
  };

  // Session Push
  let finalVehicle = { userSegment, userManufacture, userModel, minQty };

  const submitHandler = () => {
    sessionStorage.setItem("Vehicle", JSON.stringify(finalVehicle));
    navigate("/VehicleDetails");
  };
  const cancelHandler = () => {
    navigate("/");
  };

  return (
    <div className="selbg">
      <Helmet title="Vehicle Selection">
        <CommonSection
          title="Select Your Vehicle"
          subTitle="Don’t Dream It. Drive It"
        />
        <Stack
          className="vehSelect"
          spacing={2}
          direction="column"
          display="Flex"
        >
          <div>
            <label className="vehSel">
              <b> Segments:</b>
              <br />
              <select placeholder="select-Segment" onChange={handleSegChange}>
                <option disabled selected>
                  Select Segment
                </option>
                {optionSegments}
              </select>
            </label>
          </div>
          <div>
            <label className="vehSel">
              <b> Manufacturer:</b>
              <br />
              <select default="select-Manufacturer" onChange={handleMfgChange}>
                <option disabled selected>
                  Select Manufacturer
                </option>
                {optionManufacturers}
              </select>
            </label>
          </div>
          <div>
            <label className="vehSel">
              <b> Model:</b>
              <br />
              <select default="select-Model" onChange={handleModelChange}>
                <option disabled selected>
                  Select Model
                </option>
                {optionModels}
              </select>
            </label>
          </div>
          <div>
            <label className="vehSel">
              <b> Minimum Quantity:</b>
              <br />
              <input
                type="number"
                placeholder="Minimum Quantity"
                value={minQty}
                onChange={handleMinQty}
              />
            </label>
          </div>
          <div>
            <Button
              className="order-btn"
              variant="dark"
              type="button"
              onClick={submitHandler}
            >
              <b>Submit</b>
            </Button>
            <Button
              className="order-btn"
              variant="dark"
              type="button"
              onClick={cancelHandler}
            >
              <b>Cancel</b>
            </Button>
          </div>
        </Stack>
      </Helmet>
    </div>
  );
};

export default VehicleSelection;
