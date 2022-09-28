import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./Sidebar.css";

export default (props) => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/About">
        About Us
      </a>
      <a className="menu-item" href="/Contact">
        Contact Us
      </a>
      <a className="menu-item" href="/VehicleSelection">
        Inventory
      </a>
    </Menu>
  );
};
