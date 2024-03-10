const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const session = require("express-session");
const User = require("./models/user.model");
const Profile = require("./models/profile.model");
const Project = require("./models/projects.model");
const bodyParser = require("body-parser");
const profileRoute = require("./routes/profile");
const userRouter = require("./routes/user");
const passport = require("passport");
const LocalStrategy = require("passport-local");

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sessionOptions = {
  secret: "random1928@",
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};
app.use(session(sessionOptions));

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(passport.initialize());
app.use(passport.session());

app.get("/home", (req, res) => {
  res.send(Home);
});
app.use("/profile", profileRoute);
app.use("/user", userRouter);
app.get("/", function (req, res) {
  const currentUser = req.locals.currentUser;
  res.send(`Welcome, ${currentUser.name}!`);
});

mongoose
  .connect("mongodb://127.0.0.1:27017/skillMagnet")
  .then(() => console.log("Connected!"))
  .catch((err) => console.log(err));

app.listen(8080, () => {
  console.log("Server is Listening to port");
});
