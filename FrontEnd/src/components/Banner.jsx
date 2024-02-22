import * as React from "react";
import { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import "./Banner.css";

export default function Banner(props) {
  return (
    <>
      <section className="banner">
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <div className="intro">
              <div>
                <Button
                  type="none"
                  variant="outlined"
                  color="inherit"
                  style={{
                    background:
                      "linear-gradient(to right, #ff00ffc0, #7b18edc1)",
                    backdropFilter: "blur(60px)",
                    color: "#fff",
                    height: "60px",
                    fontSize: "1rem",
                  }}
                >
                  Welcome to my Portfolio
                </Button>
              </div>
              <h1 className="typewriter-text">
                Hi! I'm {props.data ? props.data.name : <></>}
              </h1>
              <h4>{props.data ? props.data.headline : <></>}</h4>
              <p>{props.data ? props.data.intro : <></>}</p>
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
