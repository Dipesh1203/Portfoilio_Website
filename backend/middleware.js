const Profile = require("./models/profile.model");
const User = require("./models/user.model");
const Project = require("./models/projects.model");

module.exports.isLoggedIn = async (req, res, next) => {
  if (!req.isAuthenticated()) {
    console.log("login first");
    return res.redirect("/user/login");
  }
  next();
};
module.exports.saveRedirectUrl = (req, res, next) => {
  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
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
