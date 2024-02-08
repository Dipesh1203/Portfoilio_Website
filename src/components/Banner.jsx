import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

export default function Banner() {
  return (
    <>
      <section className="banner">
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <div className="intro">
              <div>
                <p variant="outlined">Welcome to my Portfolio</p>
              </div>
              <h1>Hii I am Dipesh Prajapat</h1>
              <h4>MERN Stack Developer | Problem Solver | UI/UX Desginer</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
                iste ipsa ab enim laborum doloribus reprehenderit tempora
                voluptas pariatur ducimus. Incidunt nesciunt laudantium libero
                omnis distinctio itaque dolore atque pariatur!
              </p>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="profile-img">
              <img src="./src/assets/Rocket.gif" alt="" />
            </div>
          </Grid>
        </Grid>
      </section>
    </>
  );
}
