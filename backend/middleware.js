const Profile = require("./models/profile.model");
const User = require("./models/user.model");
const Project = require("./models/projects.model");
const jwt = require("jsonwebtoken");
const jwt = require("jsonwebtoken");

module.exports.isLoggedIn = (req, res, next) => {
  console.log(req.cookies);
  const token = req.cookies.token;
  if (!token) {
    res.status(403).send("please login first");
  }
  try {
    const decode = jwt.verify(token, "asdf");
    console.log(decode);
    req.user = decode;
    return next();
  } catch (error) {
    console.log(error);
    res.status(401).send("Invalid");
  }
};

module.exports.isOwner = async (req, res, next) => {
  try {
    const { id } = req.params;
    const profile = await Profile.findById(id);

    if (!profile) {
      return res.status(404).send("Profile not found");
    }
    console.log(req.locals);
    console.log(req);
    if (!profile.owner.equals(req.user._id)) {
      return res.json("you have no access");
    }
    next();
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
  next();
};

module.exports.isAlreadyUser = async (req, res, next) => {
  let userBody = req.body;
  let userData = await Profile.findOne({ email: userBody.email });
  if (!userData) {
    next();
  } else {
    res.redirect(`/profile/${userData._id}`);
  }
};
