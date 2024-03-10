import * as React from "react";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import { Button } from "@mui/material";
import Profile from "./Profile";
import { NavLink } from "react-router-dom";
import SideBar from "./SideBar";
import "./Nav.css";

export default function Nav() {
  return (
    <div className="nav-bar MuiAppBar-colorTransparent" color="transperent">
      <Profile />
      <div className="right-bar">
        <NavLink to="/getintouch">
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
        </NavLink>
        <NavLink to="/dashboard" className="nav-link">
          Dashboard
        </NavLink>
        <SideBar data={"Profile"}></SideBar>
      </div>
    </div>
  );
}
