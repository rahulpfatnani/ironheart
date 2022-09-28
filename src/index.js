import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
  Navigation,
  Footer,
  Home,
  About,
  Contact,
  Login,
  VehicleSelection,
  VehicleDetails,
  VehicleConfig,
  CustRegister,
  Order,
} from "./components";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/vehicleSelection" element={<VehicleSelection />} />
        <Route path="/vehicledetails" element={<VehicleDetails />} />
        <Route path="/vehicleconfig" element={<VehicleConfig />} />
        <Route path="/custregister" element={<CustRegister />} />
        <Route path="/order" element={<Order />} />
      </Routes>
      <Footer />
    </Router>
    {/* <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} /> */}
  </React.StrictMode>

  // document.getElementById("root")
);

serviceWorker.unregister();
