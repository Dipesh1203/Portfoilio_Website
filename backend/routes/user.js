const express = require("express");
const router = express.Router();
const Project = require("../models/projects.model.js");
const Profile = require("../models/profile.model.js");
const User = require("../models/user.model.js");
const passport = require("passport");
const { saveRedirectUrl, isLoggedIn } = require("../middleware.js");

router.get("/all", async (req, res) => {
  let data = await User.find();
  console.log(data);
  res.json(data);
});

router.get("/profile", isLoggedIn, async (req, res) => {
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
    const newUser = new User({ username, email });
    const registerUser = await User.register(newUser, password);
    console.log(registerUser);
    req.login(registerUser, (err) => {
      if (err) return next(err);
      console.log("loged in");
    });
    res.json(registerUser);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});
router.get("/login", async (req, res) => {
  res.json("login invalid");
});
router.post(
  "/login",
  saveRedirectUrl,
  passport.authenticate("local"),
  async (req, res) => {
    console.log("work");
    let redirectUrl = res.locals.redirectUrl || "/user/all";
    res.redirect(redirectUrl);
  }
);

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
