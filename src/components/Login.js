import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Box } from "@mui/material";
import Helmet from "./Helmet";
import CommonSection from "./CommonSection";
import "./Login.css";

function Login() {
  const [Email_id, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();
  const cnt = useRef(0);
  const [count, setCount] = useState("");

  const block = () => {
    alert(
      "you are blocked, looking for fake users. Please Wait for 10 Sec to Try Again"
    );
  };

  useEffect(() => {
    if (sessionStorage.getItem("user-info")) {
      navigate("/VehicleSelection");
    }
  }, []);

  async function loginHandler() {
    let item = { Email_id, Password };
    let result = await fetch(
      "https://localhost:44357/api/login/CustomerLogin",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },

        body: JSON.stringify(item),
      }
    );
    result = await result.json();

    if (result.isSuccess) {
      sessionStorage.setItem("user-info", JSON.stringify(result));
      navigate("/VehicleSelection");
    } else {
      alert(result.message);
      setCount(cnt.current++);
      // console.log(count);

      if (count >= 1) {
        block();
        setTimeout(() => {
          navigate("/");
        }, 10000);
      }
    }
  }

  return (
    <div>
      <Helmet title="Login">
        <CommonSection title="Login" subTitle="Drive the Change." />
        <div className="loginform">
          <form className="inform">
            <div className="loginput-container">
              <label>
                <b>Username</b>
              </label>
              <input
                type="email"
                placeholder="Enter Your Email-Id"
                onChange={(e) => setEmail(e.target.value)}
                name="uname"
                required
              />
            </div>
            <div className="loginput-container">
              <label>
                <b>Password</b>{" "}
              </label>
              <input
                type="password"
                placeholder="Enter Your Password"
                onChange={(e) => setPassword(e.target.value)}
                name="pass"
                required
              />
            </div>
            <div className="button-container">
              <Box textAlign="center">
                <Button
                  disabled={count >= 2 ? true : false}
                  variant="contained"
                  color="primary"
                  size="small"
                  onClick={loginHandler}
                >
                  Login
                </Button>
              </Box>
            </div>
          </form>
        </div>
      </Helmet>
    </div>
  );
}
export default Login;
