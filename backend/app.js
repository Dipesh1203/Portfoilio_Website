if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT;
const dbUrl = process.env.DATABASE_URL;
const session = require("express-session");
const User = require("./models/user.model");
const Profile = require("./models/profile.model");
const Project = require("./models/projects.model");
const bodyParser = require("body-parser");
const profileRoute = require("./routes/profile");
const userRouter = require("./routes/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/home", (req, res) => {
  res.send(Home);
});
app.use("/profile", profileRoute);
app.use("/user", userRouter);
app.get("/", function (req, res) {
  res.send(`Welcome!`);
});

mongoose
  .connect("mongodb://127.0.0.1:27017/skillMagnet")
  .then(() => console.log("Connected!"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Server is Listening to port ${port}`);
});
