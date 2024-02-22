import * as React from "react";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { Link as ScrollLink } from "react-scroll";
import { Link, NavLink } from "react-router-dom";

import Profile from "./Profile";
import "./Nav.css";

export default function Nav() {
  return (
    <div className="nav-bar MuiAppBar-colorTransparent" color="transperent">
      <Profile />
      <div className="right-bar">
        <ScrollLink className="nav-link" to="homeSection" href="http://">
          Home
        </ScrollLink>
        <ScrollLink className="nav-link" to="skillsSection" href="http://">
          Skills
        </ScrollLink>
        <ScrollLink className="nav-link" to="projectSection" href="http://">
          Projects
        </ScrollLink>
        <ScrollLink to="getInTouchSection" href="http://">
          <Button
            type="none"
            variant="outlined"
            color="inherit"
            style={{
              backdropFilter: "blur(60px)",
              color: "#fff",
            }}
          >
            Lets Connect
          </Button>
        </ScrollLink>
        <a href="./createProfile" className="nav-link">
          Create New Profile
        </a>
      </div>
    </div>
  );
}
