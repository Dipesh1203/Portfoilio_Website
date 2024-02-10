import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div
        style={{ backdropFilter: "blur(20px)" }}
        className="nav-bar MuiAppBar-colorTransparent footer-bar"
      >
        <div className="footer-left">
          <h2>Logo</h2>
        </div>

        <div className="footer-right">
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
        </div>
      </div>
    </>
  );
}
