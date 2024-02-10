import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-scroll";

export default function Nav() {
  return (
    <div className="nav-bar MuiAppBar-colorTransparent" color="transperent">
      <h2>Logo</h2>
      <div className="right-bar">
        <Link to="homeSection" href="http://">
          Home
        </Link>
        <Link to="skillsSection" href="http://">
          Skills
        </Link>
        <Link to="projectSection" href="http://">
          Projects
        </Link>
        <Link to="getInTouchSection" href="http://">
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
        </Link>
      </div>
    </div>
  );
}
