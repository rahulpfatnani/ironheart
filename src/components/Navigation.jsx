import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
// import App from "../App";
import "./Navigation.css"


function Navigation() {
  const navigate=useNavigate();
  let userInfo;
let  userName;
  if(sessionStorage.getItem('user-info')){
userInfo=JSON.parse(sessionStorage.getItem('user-info'))
userName=userInfo.UserDetails.AuthorizedPerson_Name
  }


  const logoutHandler=()=>{
    sessionStorage.clear();
    localStorage.clear();
    navigate("/");
  }

  const inventoryHandler=()=>{
    navigate("/VehicleSelection")
  }
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">      
        {/* <App/> */}
          <NavLink className="navbar-brand" to="/">
            <em><strong>Indian Fleet Services</strong></em>
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                {sessionStorage.getItem('user-info')?
                <NavLink className="nav-link" to="/Login" onClick={logoutHandler}>
                Logout
                </NavLink>:
                <li className="nav-item">
                <NavLink className="nav-link" to="/Login">
                  Login
                </NavLink>
              </li>}
              </li>
              <li className="nav-item">
                {sessionStorage.getItem('user-info')?
                <NavLink className="nav-link" to="/VehicleSelection" onClick={inventoryHandler}>
                  Inventory
                </NavLink>:
                <li className="nav-item">
                
              </li>}
              </li>
              <li className="nav-item">
                {sessionStorage.getItem('user-info')?
                <NavLink className="nav-link" to="/" onClick={logoutHandler}>
                {/* Logout */}
                 </NavLink>
                :<li className="nav-item">
                <NavLink className="nav-link" to="/CustRegister">
                  Register
                </NavLink>
              </li>}
              </li>              
              <li className="nav-item">
                {(!userName)? "":
                <text style={{color:'white',textDecorationLine: 'Underline'}} className="nav-link">
                  Welcome {userName}
                </text>}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
