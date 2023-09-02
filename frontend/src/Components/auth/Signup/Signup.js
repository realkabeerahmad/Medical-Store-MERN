import React, { useState } from "react";
import { sendOTP, signup } from "../apicalls";
import "../auth.css";

const Signup = ({ setShowModel }) => {
  const [values, setvalues] = useState({
    FirstName: "",
    LastName: "",
    email: "",
    otp: "",
    password: "",
    repassword: "",
    otpSent: false,
  });

  const { FirstName, LastName, email, otp, password, repassword, otpSent } =
    values;
  const [disabled, setDisabled] = useState(false);
  const handleChange = (value) => (e) => {
    setvalues({ ...values, [value]: e.target.value });
    if (
      values[value].length > 2 &&
      e.target.classList.contains("validation-error") &&
      (value === "FirstName" || value === "LastName")
    ) {
      e.target.classList.remove("validation-error");
      e.target.nextSibling.remove();
    } else if (
      e.target.classList.contains("validation-error") &&
      value === "email" &&
      isEmailValid() === true
    ) {
      e.target.classList.remove("validation-error");
    } else if (
      e.target.classList.contains("validation-error") &&
      value === "otp" &&
      otp.length > 2
    ) {
      e.target.classList.remove("validation-error");
    }
  };
  const onBlur = (value) => (e) => {
    if (
      values[value].length <= 2 &&
      !e.target.classList.contains("validation-error") &&
      (value === "FirstName" || value === "LastName")
    ) {
      e.target.classList.add("validation-error");
      const p = document.createElement("p");
      p.innerHTML = `Please Enter a valid ${value}`;
      p.classList.add("text-error");
      e.target.parentNode.insertBefore(p, e.target.nextSibling);
    }
    if (
      !e.target.classList.contains("validation-error") &&
      value === "email" &&
      isEmailValid() === false
    ) {
      e.target.classList.add("validation-error");
    }
    if (
      !e.target.classList.contains("validation-error") &&
      value === "otp" &&
      otp.length <= 2
    ) {
      e.target.classList.add("validation-error");
    }
  };
  const isEmailValid = () => {
    if (email.match(/^[\w-\.]+@([\w-\.]+\.)+[\w-]+$/g)) {
      return true;
    }
    return false;
  };
  const ValidateSignUp = () => {
    if (
      FirstName.length > 2 &&
      LastName.length > 2 &&
      otp.length > 2 &&
      email &&
      otpSent &&
      password === repassword
    ) {
      return true;
    }
    return false;
  };
  const sendOtpToUser = (e) => {
    e.preventDefault();
    setDisabled(true);
    sendOTP({ email }).then((response) => {
      if (response.error) {
        setvalues({ ...values, otpSent: false });
        console.log(otpSent);
      } else {
        setvalues({ ...values, otpSent: true });
        console.log(otpSent);
      }
    });
  };
  const createUser = (e) => {
    e.preventDefault();
    signup({ FirstName, password, email, otp, LastName })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };
  return (
    <div className="auth-container">
      <span className="signup-dismiss" onClick={() => setShowModel(false)}>
        &times;
      </span>
      <div className="signup-top">
        <span>SignUp For an Account</span>
      </div>
      <hr />
      <div className="signup-center">
        <form>
          <div className="signup-username">
            <label>FirstName: </label>
            <input
              type="text"
              value={FirstName}
              onBlur={onBlur("FirstName")}
              onChange={handleChange("FirstName")}
              placeholder="What Should we call you???"
            />
            <p>
              Your Username must be unique and can contain ' . ', Numbers and '
              _ '.
            </p>
          </div>
          <div className="signup-name">
            <label>Name: </label>
            <input
              type="text"
              onBlur={onBlur("LastName")}
              value={LastName}
              onChange={handleChange("LastName")}
              placeholder="What everyone call you???"
            />
          </div>
          <div className="signup-email">
            <label>Email: </label>
            <input
              type="email"
              value={email}
              onBlur={onBlur("email")}
              onChange={handleChange("email")}
              placeholder="Enter your Email please"
            />
            {otpSent && (
              <p style={{ color: "green", fontSize: "13px" }}>
                OTP sent successfully
              </p>
            )}
            <button
              onClick={(e) => !otpSent && sendOtpToUser(e)}
              disabled={disabled || !isEmailValid()}
            >
              {!otpSent && disabled && <p className="loader"></p>}
              Send OTP
            </button>
          </div>
          <div className="signup-otp">
            <label>Enter OTP: </label>

            <input
              type="number"
              value={otp}
              onChange={handleChange("otp")}
              onBlur={onBlur("otp")}
              placeholder="Enter OTP please"
            />
          </div>
          <div className="signup-password">
            <label>Choose a Password: (At least 6 Characters)</label>
            <input
              type="password"
              value={password}
              onChange={handleChange("password")}
              onBlur={onBlur("password")}
              placeholder="That's a Secrat"
            />
          </div>
          <div className="signup-repassword">
            <label>Reenter the Password: </label>
            <input
              type="password"
              value={repassword}
              onBlur={onBlur("repassword")}
              onChange={handleChange("repassword")}
              placeholder="That's also a Secrat"
            />
            {(password || repassword) &&
              (password !== repassword ? (
                <p style={{ color: "red", fontSize: "13px" }}>
                  Password do not match
                </p>
              ) : (
                <p style={{ color: "green", fontSize: "13px" }}>
                  Password Match.
                </p>
              ))}
          </div>
          <button
            className="signup-button"
            disabled={!ValidateSignUp() || !password || !repassword}
            onClick={(e) => createUser(e)}
          >
            Sign Up
          </button>
        </form>
      </div>
      <hr />
      <div className="login-bottom">
        Already have an account?
        <button onClick={() => setShowModel("login")}>LogIn</button> Now
      </div>
    </div>
  );
};

export default Signup;
