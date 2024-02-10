import { useState } from "react";
import "./App.css";
import Container from "@mui/material/Container";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Getintouch from "./components/Getintouch";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

function App() {
  return (
    <>
      <div className="App">
        <Nav />
        <div className="container">
          <Banner />
          <Skills />
          <Projects />
          <Getintouch />
        </div>
        <Container></Container>
        <Footer />
      </div>
    </>
  );
}

export default App;
