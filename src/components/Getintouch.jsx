import React from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import "../components/Getintouch.css";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const Getintouch = () => {
  const glassyEffectStyle = {
    // Adjust the color and opacity as needed
    backdropFilter: "blur(30px)", // Adjust the blur strength as needed
  };
  return (
    <div
      id="getInTouchSection"
      style={glassyEffectStyle}
      className="getintouch"
    >
      <div className="getInTouchImg">
        <img
          className="getintouchgif"
          src="./src/assets/getintouch.gif"
          alt=""
        />
      </div>

      <div className="getInTouchForm">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "100%" },
            // Adjust the width as needed
            color: "rgba(0, 0, 0, 0.87)", // Use the default text color for light theme
            backgroundColor: "#fff", // Set the background color to white
            borderRadius: "8px", // Add border radius for a smoother look
            padding: "20px", // Adjust padding as needed
            boxShadow: "0 3px 5px rgba(0, 0, 0, 0.1)", // Add a subtle shadow
          }}
          noValidate
          autoComplete="off"
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <TextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <TextField
                id="outlined-Number"
                label="Phone No."
                type="number"
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="outlined-multiline-flexible"
                label="Message"
                multiline
                rows={5}
                maxRows={10}
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default Getintouch;
