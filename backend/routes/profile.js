const express = require("express");
const router = express.Router();
const Profile = require("../models/profile.model");
const { isLoggedIn, isAlreadyUser, isOwner } = require("../middleware");
const projectRoutes = require("./projects");

router.get("/", isLoggedIn, (req, res) => {
  try {
    console.log("Hello");
    res.send("hello");
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

// create
router.post("/new", isLoggedIn, async (req, res) => {
  try {
    let data = req.body;
    const { id } = req.user;
    data.owner = id;
    console.log(req.user._id);
    const newProfile = new Profile(data);
    await newProfile.save();
    console.log(newProfile);
    res.json(await Profile.findById({ _id: newProfile._id }));
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

//Create Project
router.use("/projects", projectRoutes);

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
router.put("/update/:id", isLoggedIn, isOwner, async (req, res) => {
  try {
    // let id = req.params.id.replace(/^:/, ""); // Remove colon if present
    let { id } = req.params;
    console.log("id -- " + id);
    let data1 = req.body;

    // Use findByIdAndUpdate to update the profile based on the provided ID
    let data = await Profile.findByIdAndUpdate(id, data1);

    res.send(
      "received data " +
        data1.name +
        " | " +
        " matching data " +
        (data ? data.name : "Data not found")
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

//destroy by id
router.post("/:id/delete", isLoggedIn, isOwner, async (req, res) => {
  let { id } = req.params;
  let data = await Profile.deleteOne({ _id: id });
  console.log(data);
  res.send("delete SucessFully data with id-" + id + data.name);
});
// router.delete("/all/delete",isLoggedIn,async (req,res)=>{
//   let data =
// })

module.exports = router;
