import { useState } from "react";
import "./App.css";
import Container from "@mui/material/Container";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Getintouch from "./components/Getintouch";

function App() {
  return (
    <>
      <div className="App">
        <Nav />
        <Container>
          <Banner />
          <Skills />
          <Projects />
          <Getintouch />
        </Container>
        <Footer />
      </div>
    </>
  );
}

export default App;
