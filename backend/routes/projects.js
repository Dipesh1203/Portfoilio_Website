const express = require("express");
const router = express.Router();
const Project = require("../models/projects.model.js");
const Profile = require("../models/profile.model.js");
const User = require("../models/user.model.js");
const { isAlreadyUser, isLoggedIn, isOwner } = require("../middleware.js");

// router.put("/new", async (req, res) => {
//   try {
//   } catch (error) {}
//   let data = req.body;
//   const projectCreated = new Project(data);
//   await Project.Save();
//   console.log("Project Created Successsfully" + data);
//   res.json(projectCreated);
// });

// create
router.post("/new", isLoggedIn, isAlreadyUser, async (req, res) => {
  try {
    let data = req.body;
    const newProject = new Project(data);
    await newProject.save();
    console.log("Project" + newProject);
    let ownerProfileId = await Profile.findOne({
      owner: req.locals.currUser._id,
    });
    let newProjectWithOwner = await Project.updateOne(
      { _id: newProject._id },
      { owner: ownerProfileId._id }
    );
    console.log("ProjectWithOwner" + newProjectWithOwner);
    console.log("Successfully created Project");
    res.json(data.title);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

//show route
router.get("/all", async (req, res) => {
  try {
    let data = await Project.find();
    console.log(data);
    res.json(data);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

//for search bar
//find by id
router.get("/:id", async (req, res) => {
  let { id } = req.params;
  let data = await Project.findById(id);

  console.log(data);
  res.json(data);
});

//update Route
router.put("/:id", isLoggedIn, isOwner, async (req, res) => {
  let { id } = req.params;
  let data1 = req.body;
  let data = await Project.updateOne({ _id: id }, data1);
  res.json(data);
});

//destroy by id
router.post("/:id/delete", isLoggedIn, isOwner, async (req, res) => {
  let { id } = req.params;
  let data = await Project.deleteOne({ _id: id });
  console.log(data);
  console.log("delete SucessFully data with id-" + id);
  res.json(data);
});

module.exports = router;
