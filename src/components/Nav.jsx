import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function Nav() {
  return (
    <div className="nav-bar MuiAppBar-colorTransparent" color="transperent">
      <h2>Logo</h2>
      <div className="right-bar">
        <a href="http://">Home</a>
        <a href="http://">Skills</a>
        <a href="http://">Projects</a>

        <Button variant="outlined" color="error">
          Let's Connect
        </Button>
      </div>
    </div>
  );
}
