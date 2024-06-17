const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Project = require("./projects.model");
const User = require("./user.model");

const profileSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  headline: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  intro: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 100,
  },
  skills: {
    type: [String],
  },
  projects: {
    type: [Schema.Types.ObjectId],
    ref: "Project",
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});
const Profile = mongoose.model("Profile", profileSchema);
module.exports = Profile;
