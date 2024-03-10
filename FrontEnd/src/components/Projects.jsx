import React from "react";
import Box from "@mui/material/Box";
import "../components/Projects.css";
import Grid from "@mui/material/Unstable_Grid2";
import ProjectCard from "./ProjectCard";

const Projects = (props) => {
  const projectData = [
    {
      title: "E-commerce Website",
      description:
        "Developed a full-stack e-commerce website with user authentication, product listings, and a shopping cart feature. Utilized React for the frontend and Node.js with Express for the backend. Integrated payment gateway for online transactions.",
      image: "./src/assets/banner-bg.png",
      link: "https://github.com/username/ecommerce-project",
      ownerProfile: "60cbbbd3e42061d7c7e72837", // Replace with a valid ObjectId
    },
    {
      title: "Mobile App - Task Manager",
      description:
        "Built a mobile app for task management with features like creating tasks, setting deadlines, and marking tasks as completed. Implemented the app using React Native for cross-platform compatibility.",
      image: "./src/assets/banner-bg.png",
      link: "https://github.com/username/task-manager-app",
      ownerProfile: "60cbbbd3e42061d7c7e72838", // Replace with a valid ObjectId
    },
    // Add more projects as needed
  ];

  return (
    <section
      id="projectSection"
      style={{ backdropFilter: "blur(30px)" }}
      className="projects"
    >
      <h1>Projects</h1>
      <p>
        Hello there! Welcome to my portfolio projects section. Here, I'd like to
        showcase some of the exciting projects I've had the privilege to work
        on. Each project has been a journey of learning, creativity, and
        problem-solving. Feel free to explore and get a glimpse of the diverse
        skills and technologies I've had the opportunity to engage with.
      </p>

      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {projectData ? (
            projectData.map((item, i) => (
              <Grid xs={2} sm={4} md={4}>
                <ProjectCard key={i} item={item} />
              </Grid>
            ))
          ) : (
            <></>
          )}
        </Grid>
      </Box>
    </section>
  );
};

export default Projects;
