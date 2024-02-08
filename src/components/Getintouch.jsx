import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "../components/Getintouch.css";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const Getintouch = () => {
  return (
    <div className="getintouch">
      <img className="getintouchgif" src="./src/assets/getintouch.gif" alt="" />

      <div className="getInTouchForm">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "40ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <Grid
            container
            spacing={{ xs: 1, sm: 1, md: 1 }}
            columns={{ xs: 4, sm: 4, md: 4 }}
          >
            <Grid xs={2}>
              <TextField
                id="outlined-basic"
                label="First Name"
                variant="outlined"
              />
            </Grid>

            <Grid xs={2}>
              <TextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
              />
            </Grid>
            <Grid xs={2}>
              <TextField id="outlined-basic" label="Email" variant="outlined" />
            </Grid>

            <Grid xs={2}>
              <TextField
                id="outlined-Number"
                label="Phone No."
                type="number"
                variant="outlined"
              />
            </Grid>
            <Grid xs={12}>
              <TextField
                id="outlined-multiline-flexible"
                label="Message"
                multiline
                rows={5}
                maxRows={10}
                fullWidth
              />
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default Getintouch;
