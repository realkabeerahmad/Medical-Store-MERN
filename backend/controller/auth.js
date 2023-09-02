const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
let otpMap = new Map();
require("dotenv").config();

exports.sendOtp = async (req, res) => {
  let email = req.body.email;
  let generatedOTP = Math.floor(Math.random() * 1000000);
  otpMap.set(email, { generatedOTP });

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "abdulkabeerahmed427@gmail.com",
      pass: "umerfuckyou",
    },
  });
  await transporter.sendMail(
    {
      from: "abdulkabeerahmed427@gmail.com",
      to: email,
      subject: "OTP for Email Verifaction",
      text: "Kabeer",
      html: `<h1>Your OTP for registration at PETHUB</h1>
      <p>Hi ${
        FirstName + " " + LastName
      } Thanks for Registering with us here the OTP Code for your email verification for PETHUB is below:</p><h1>${generatedOTP}</h1>`,
    },
    (err, info) => {
      if (err) {
        return res.status(400).json({
          error: "Not able to send OTP",
        });
      }
      return res.status(200).json({
        message: "OPT sent Successfully",
      });
    }
  );
};

exports.signup = (req, res) => {
  let sentOtp = otpMap.get(req.body.email);
  if (req.body.otp == sentOtp?.generatedOTP) {
    const user = new User(req.body);
    user.save((err, _user) => {
      if (err || !_user) {
        return res.status(400).json({
          error: "Unable to register",
        });
      }
      return res.status(200).json({
        user: _user,
      });
    });
  } else {
    return res.status(401).json({
      error: "Invalid OTP",
    });
  }
};
exports.signin = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "No User Found",
      });
    }
    if (!user.authenticate(password)) {
      return res.status(401).json({
        error: "User Name and Password not matched",
      });
    }
    const token = jwt.sign({ user_id: user._id }, process.env.SECRET);
    const { _id, FirstName, LastName, email } = user;
    return res.json({
      token,
      user: { _id, FirstName, LastName, email },
    });
  });
};
exports.authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader?.split(" ")[1];
  if (token == null) {
    return res.status(401);
  }
  jwt.verify(token, process.env.SECRET, (err, user) => {
    if (err) {
      return res.status(401).json({
        error: "Access Denied",
      });
    }
    req.user = user;
    next();
  });
};
