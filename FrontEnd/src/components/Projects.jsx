import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import "../components/Projects.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";

function Item(props) {
  return (
    <div className="projectCardItem">
      <img src={props.item.image} alt="" />
      <p>{props.item.title}</p>
    </div>
  );
}

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

const Projects = () => {
  let items = [
    {
      image: "./src/assets/banner-bg.png",
      title: "random",
    },
    {
      image: "./src/assets/banner-bg.png",
      title: "random",
    },
    {
      image: "./src/assets/banner-bg.png",
      title: "random",
    },
    {
      image: "./src/assets/banner-bg.png",
      title: "random",
    },
    {
      image: "./src/assets/banner-bg.png",
      title: "random",
    },
    {
      image: "./src/assets/banner-bg.png",
      title: "random",
    },
    {
      image: "./src/assets/banner-bg.png",
      title: "random",
    },
    {
      image: "./src/assets/banner-bg.png",
      title: "random",
    },
    {
      image: "./src/assets/banner-bg.png",
      title: "random",
    },
  ];
  const glassyEffectStyle = {
    // Adjust the color and opacity as needed
    backdropFilter: "blur(30px)", // Adjust the blur strength as needed
  };
  return (
    <section id="projectSection" style={glassyEffectStyle} className="projects">
      <h1>Projects</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic assumenda
        deleniti, laborum dolor, nihil, laudantium aliquid sit ad veniam dolorem
        deserunt exercitationem! Et odit culpa libero quos facere eligendi
        aspernatur.
      </p>

      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {items.map((item, i) => (
            <Grid xs={2} sm={4} md={4}>
              <Item key={i} item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </section>
  );
};

export default Projects;
