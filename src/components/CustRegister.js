import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Helmet from "./Helmet";
import CommonSection from "./CommonSection";
import emailjs from "@emailjs/browser";
import "./CustRegister.css";

function CustRegister() {
  const [AuthorizedPerson_Name, setAuthorizedPerson_Name] = useState("");
  const [Designation, setDesignation] = useState("");
  const [Email_id, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [Company_Name, setCompany_Name] = useState("");
  const [Address, setAddress] = useState("");
  const [Contact, setContact] = useState("");
  const [Country, setCountry] = useState("");
  const [Holding, setHolding] = useState("");
  const [Company_ST_No, setCompanys_ST_No] = useState("");
  const [Company_VAT_Reg_No, setCompany_VAT_Reg_No] = useState("");
  const [Company_Tax_PAN, setCompany_Tax_PAN] = useState("");
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [formValues, setFormValues] = useState("");

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // console.log(formErrors);
    }
  }, [formErrors]);

  let values = {
    Contact,
    Email_id,
    Password,
    ConfirmPassword,
    Company_Tax_PAN,
  };
  // const handleChange = () => {
  //   setFormValues({ ...formValues, [Contact]: values });
  // };
  const handleSubmit = () => {
    //e.preventDefault();
    setFormValues({ ...formValues, [Contact]: values });
    setFormErrors(validate(values));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    const regexContact = /^[6-9][0-9]{9}$/;
    const regexEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    const regexPAN = /^([A-Z]){5}([0-9]){4}([A-Z]){1}$/;

    if (!values.Email_id) {
      errors.Email_id = "Email is required!";
    } else if (!regexEmail.test(values.Email_id)) {
      errors.Email_id = "This is not valid Email_Id!";
    } else errors.Email_id = "";

    if (!values.Password) {
      errors.Password = "Password is required!";
    } else if (values.Password.length < 5) {
      errors.Password = "Password must be more than 6 character";
    } else if (values.Password.length > 15) {
      errors.Password = "Password must be less than 15 character";
    } else errors.Password = "";

    if (!values.ConfirmPassword) {
      errors.ConfirmPassword = "Please Confirm Password";
    } else if (!(values.Password === values.ConfirmPassword)) {
      errors.ConfirmPassword = "Password Does Not match";
    } else errors.ConfirmPassword = "";

    if (!values.Contact) {
      errors.Contact = "Contact is required!";
    } else if (!regexContact.test(values.Contact)) {
      errors.Contact = "This is not valid contact!";
    } else errors.Contact = "";
    if (!values.Company_Tax_PAN) {
      errors.Company_Tax_PAN = "PAN number is required!";
    } else if (!regexPAN.test(values.Company_Tax_PAN)) {
      errors.Company_Tax_PAN = "This is not valid PAN";
    } else errors.Company_Tax_PAN = "";

    return errors;
  };

  const sendEmail = () => {
    let templateParams = {
      AuthorizedPerson_Name,
      Email_id,
      Password,
    };
    emailjs.send(
      "service_2xt51d9",
      "template_9kaoq06",
      templateParams,
      "iQ_AJdSOoVyiuHRnZ"
    );
  };

  async function register() {
    let item = {
      Contact,
      AuthorizedPerson_Name,
      Designation,
      Email_id,
      Password,
      Company_Name,
      Address,
      Country,
      Holding,
      Company_ST_No,
      Company_VAT_Reg_No,
      Company_Tax_PAN,
    };
    let demo = JSON.stringify(item);
    let result = await fetch(
      "https://localhost:44357/api/Login/CustomerRegister",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: demo,
      }
    );

    let result1 = await result.json();
    result = JSON.stringify(result);
    // console.log(result1);

    if (result1.isSuccess) {
      sessionStorage.setItem(
        "user-reg",
        JSON.stringify(result1.UserRegDetails)
      );
      alert(
        "Dear " +
          result1.UserRegDetails.AuthorizedPerson_Name +
          " You have Registered Successfully"
      );
      sendEmail();
      navigate("/Login");
    } else {
      alert("Invalid Registration");
    }
  }
  return (
    <div>
      <Helmet title="Register">
        <CommonSection
          title="Registeration"
          subTitle="Drive the change by changing your drive."
        />
        <div className="form">
          {/* <form onSubmit={register}> */}
          <div className="reg-form">
            <div className="input-container">
              <label className="form__label" htmlFor="username">
                <b>AuthorizedPerson_Name</b>
                <span class="required-field"></span>
              </label>
              <input
                className="form__input"
                type="text"
                value={AuthorizedPerson_Name}
                onChange={(e) => setAuthorizedPerson_Name(e.target.value)}
                id="username"
                placeholder="AuthorizedPerson_Name"
              />
            </div>
            <div className="input-container">
              <label className="form__label" htmlFor="designation">
                <b>Designation</b>
                <span class="required-field"></span>
              </label>
              <input
                type="text"
                name=""
                id="designation"
                value={Designation}
                className="form__input"
                onChange={(e) => setDesignation(e.target.value)}
                placeholder="Designation"
              />
            </div>
            <div className="input-container">
              <label className="form__label" htmlFor="email">
                <b>Email</b>
                <span class="required-field"></span>
              </label>
              <input
                type="email"
                id="email"
                className="form__input"
                value={Email_id}
                onChange={(e) => {
                  setEmail(e.target.value);
                  handleSubmit();
                }}
                placeholder="Email"
              />
            </div>
            <p style={{ color: "red" }}>{formErrors.Email_id}</p>
            <div className="input-container">
              <label className="form__label" htmlFor="password">
                <b>Password</b>
                <span class="required-field"></span>
              </label>
              <input
                className="form__input"
                type="password"
                id="password"
                value={Password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  handleSubmit();
                }}
                placeholder="Password"
              />
            </div>
            <p style={{ color: "red" }}>{formErrors.Password}</p>
            <div className="input-container">
              <label className="form__label" htmlFor="confpassword">
                <b>Confirm Password</b>
                <span class="required-field"></span>
              </label>
              <input
                className="form__input"
                type="password"
                id="confpassword"
                value={ConfirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  handleSubmit();
                }}
                onBlur={handleSubmit}
                placeholder="Confirm Password"
              />
            </div>
            <p style={{ color: "red" }}>{formErrors.ConfirmPassword}</p>
            <div className="input-container">
              <label className="form__label" htmlFor="Company_Name">
                <b>Company_Name</b>
                <span class="required-field"></span>
              </label>
              <input
                className="form__input"
                type="text"
                id="company_Name"
                value={Company_Name}
                onChange={(e) => {
                  setCompany_Name(e.target.value);
                  handleSubmit();
                }}
                placeholder="Company_Name"
              />
            </div>
            <div className="input-container">
              <label className="form__label" htmlFor="Company_Name">
                <b>Address</b>
                <span class="required-field"></span>
              </label>
              <input
                type="text"
                id="address"
                className="form__input"
                value={Address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Address"
              />
            </div>
            <div className="input-container">
              <label className="form__label" htmlFor="contact">
                <b>Contact</b>
                <span class="required-field"></span>
              </label>
              <input
                className="form__input"
                type="text"
                id="contact"
                value={Contact}
                onBlur={handleSubmit}
                onChange={(e) => {
                  setContact(e.target.value);
                }}
                placeholder="Contact"
              />
            </div>
            <p style={{ color: "red" }}>{formErrors.Contact}</p>
            <div className="input-container">
              <label className="form__label" htmlFor="Country">
                <b>Country</b>
                <span class="required-field"></span>
              </label>
              <input
                className="form__input"
                type="text"
                id="country"
                value={Country}
                onChange={(e) => {
                  setCountry(e.target.value);
                  handleSubmit();
                }}
                placeholder="Country"
              />
            </div>
            <div className="input-container">
              <label className="form__label" htmlFor="holding">
                <b>Holding</b>
                <span class="required-field"></span>
              </label>
              <input
                className="form__input"
                type="text"
                id="holding"
                value={Holding}
                onChange={(e) => setHolding(e.target.value)}
                placeholder="Holding"
              />
            </div>
            <div className="input-container">
              <label className="form__label" htmlFor="Companys_ST_No">
                <b>Companys_ST_No</b>
                <span class="required-field"></span>
              </label>
              <input
                className="form__input"
                type="text"
                id="companys_ST_No"
                value={Company_ST_No}
                onChange={(e) => setCompanys_ST_No(e.target.value)}
                placeholder="Companys_ST_No"
              />
            </div>
            <div className="input-container">
              <label className="form__label" htmlFor="company_VAT_Reg_No">
                <b>Company_VAT_Reg_No</b>
                <span class="required-field"></span>
              </label>
              <input
                className="form__input"
                type="text"
                id="company_VAT_Reg_No"
                value={Company_VAT_Reg_No}
                onChange={(e) => setCompany_VAT_Reg_No(e.target.value)}
                placeholder="Company_VAT_Reg_No"
              />
            </div>
            <div className="input-container">
              <label className="form__label" htmlFor="company_Tax_PAN">
                <b>Company_Tax_PAN</b>
                <span class="required-field"></span>
              </label>
              <input
                className="form__input"
                type="text"
                id="company_Tax_PAN"
                value={Company_Tax_PAN}
                onBlur={handleSubmit}
                onChange={(e) => {
                  setCompany_Tax_PAN(e.target.value);
                }}
                placeholder="Company_Tax_PAN"
              />
            </div>
            <p style={{ color: "red" }}>{formErrors.Company_Tax_PAN}</p>
            <div className="button-container">
              <button
                onClick={register}
                type="submit"
                className="btn btn-primary"
              >
                Register
              </button>
            </div>
          </div>
          {/* </form> */}
        </div>
      </Helmet>
    </div>
  );
}

export default CustRegister;
