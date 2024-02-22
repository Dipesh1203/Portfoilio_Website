const express = require("express");
const router = express.Router();
const Profile = require("../models/profile.model");
const { isLoggedIn, isAlreadyUser, isOwner } = require("../middleware");

router.get("/", (req, res) => {
  console.log("Hello");
  res.send("hello");
});

// create
router.post("/new", isLoggedIn, async (req, res) => {
  try {
    let data = req.body;
    const newProfile = new Profile(data);
    await newProfile.save();
    const updatedData = await Profile.updateOne(
      { _id: data._id },
      { owner: req.user._id }
    );
    console.log(newProfile);
    console.log(updatedData);
    res.json(await Profile.findById({ _id: newProfile._id }));
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

//show route
router.get("/all", async (req, res) => {
  try {
    let data = await Profile.find();
    console.log(data);
    res.json(data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

//find by id
router.get("/:id", async (req, res) => {
  let { id } = req.params;
  let data = await Profile.findById(id);

  console.log(data);
  res.json(data);
});

//update Route
router.put("/:id", isLoggedIn, isOwner, async (req, res) => {
  let { id } = req.params;
  let data1 = req.body;
  let data = await Profile.updateOne({ _id: id }, data1);
  res.send(
    "recieved data " + data1.name + " | " + " matching data " + data.name
  );
});

//destroy by id
router.post("/:id/delete", isLoggedIn, isOwner, async (req, res) => {
  let { id } = req.params;
  let data = await Profile.deleteOne({ _id: id });
  console.log(data);
  res.send("delete SucessFully data with id-" + id + data.name);
});

module.exports = router;
