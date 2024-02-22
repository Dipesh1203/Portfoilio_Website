const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    minlength: 50,
    maxlength: 300,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
    required: true,
  },
  ownerProfile: {
    type: Schema.Types.ObjectId,
    ref: "Profile",
  },
});

module.exports = mongoose.model("Project", projectSchema);
