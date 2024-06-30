const express = require("express");
const router = express.Router();
const Project = require("../models/projects.model.js");
const Profile = require("../models/profile.model.js");
const User = require("../models/user.model.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.get("/all", async (req, res) => {
  let data = await User.find();
  console.log(data);
  res.json(data);
});

router.get("/profile", async (req, res) => {
  const { id } = req.user;
  const data = await Profile.findOne({ owner: id });
  // console.log(req);
  if (!data) {
    return res.json("No Profile found");
  }
  console.log(id);
  console.log(data);
  // if (data.length == 0) {
  //   res.redirect(`/profile/new`);
  // } else {
  //   res.redirect(`/profile/${data._id}`);
  // }
  res.json({ data });
});

router.post("/signup", async (req, res) => {
  try {
    let { username, email, password } = req.body;

    if (!(username && email && password)) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    // Hash password with 10 salt round
    const encPass = await bcrypt.hash(password, 10);

    // Create new user where password in encrypted
    const newUser = new User({ username, email, password: encPass });
    const registerUser = await newUser.save();

    // Generate JWT for
    const token = jwt.sign(
      { id: registerUser._id, username: registerUser.username },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // Set cookie
    const options = {
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 1 day
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    };

    res
      .status(201)
      .cookie("token", token, options)
      .json({
        message: "User registered successfully",
        user: {
          id: registerUser._id,
          username: registerUser.username,
          email: registerUser.email,
        },
        token,
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "An error occurred during registration",
      error: error.message,
    });
  }
});
router.get("/login", async (req, res) => {
  res.json("login invalid");
});
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found. Please register." });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user.userId, name: user.userName },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    const options = {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Use secure in production
    };

    res
      .status(200)
      .cookie("token", token, options)
      .json({
        message: "Login successful",
        user: { id: user.userId, name: user.userName, email: user.email },
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred during login." });
  }
});

router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/profile/all");
  });
});

//dashboard routes
router.get("/dashboard", async (req, res) => {
  res.send("DashBoard");
});
module.exports = router;
