const mongoose = require("mongoose");
const User = require("./models/user.model");
const Profile = require("./models/profile.model");

mongoose
  .connect("mongodb://127.0.0.1:27017/skillMagnet")
  .then(() => console.log("Connected!"))
  .catch((err) => console.log(err));

let dummyProfiles = [
  {
    name: "John Doe",
    userName: "john_doe",
    email: "john@example.com",
    image: "profile1.jpg",
    headline: "Full Stack Developer",
    intro: "Passionate about creating innovative web solutions.",
    skills: ["JavaScript", "React", "Node.js", "MongoDB"],
  },
  {
    name: "Jane Smith",
    userName: "jane_smith",
    email: "jane@example.com",
    image: "profile2.jpg",
    headline: "UX/UI Designer",
    intro: "Creating beautiful and user-friendly designs.",
    skills: ["UI/UX Design", "Sketch", "Figma"],
  },
  {
    name: "Sam Wilson",
    userName: "sam_wilson",
    email: "sam@example.com",
    image: "profile3.jpg",
    headline: "Data Scientist",
    intro: "Analyzing data to extract valuable insights.",
    skills: ["Python", "Machine Learning", "Data Analysis"],
  },
  // Add more dummy profiles as needed
];

const initDB = async () => {
  await Profile.deleteMany({});
  dummyProfiles = dummyProfiles.map((obj) => ({
    ...obj,
    owner: "65e7d36d15f391002de178ac",
  }));
  await Profile.insertMany(dummyProfiles);
  console.log("Data inserted Succssfully");
};

initDB();
