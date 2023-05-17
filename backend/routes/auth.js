const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const fetchUser = require("../middleware/fetchUser")
const JWT_SECURITY = "surayvansi";
const fetchuser = require("../middleware/fetchUser");

router.post("/createuser", async (req, res) => {
  try {
    const { name, email, password, cpassword } = req.body;
    let success = false;
    if (!name || !email || !password || !cpassword) {
      return res.status(422).json({ error: "Fill All Input Columns" });
    }

    const userExists = await User.findOne({ email: email });
    if (userExists) {
      return res.status(422).json({ error: "Email Already Exists" });
    }

    if (password !== cpassword) {
      return res
        .status(422)
        .json({ error: "Password and Cpassword do not match" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const hashedCpassword = await bcrypt.hash(cpassword, salt);

    const user = new User({
      name,
      email,
      password: hashedPassword,
      cpassword: hashedCpassword,
    });
    await user.save();

    const data = {
      user: {
        id: user.id,
      },
    };
    const authtoken = jwt.sign(data, JWT_SECURITY);

    res.setHeader("Content-Type", "application/json");
    (success = true),
      res
        .status(201)
        .json({ success, authtoken, message: "User Successfully Registered" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/login", async (req, res) => {
  let success = false;
  const { email, password } = req.body;
  if (!email || !password) {
    res.send("fill the all columns");
  }
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ success, error: "plz try to login right crendetials" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res
        .status(400)
        .json({ success, error: "please try to login right crediantials " });
    }
    const data = {
      user: {
        id: user.id,
      },
    };
    const authtoken = await jwt.sign(data, JWT_SECURITY);
    console.log("hogi login");
    success = true;
    res.json({ success, authtoken });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success, error: "Internal Server Error" });
  }
});

router.post("/getuser", fetchuser, async (req, res) => {
  // Your code here
  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
