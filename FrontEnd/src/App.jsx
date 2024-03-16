import React, { useState } from "react";
import styles from "./App.module.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner/Banner";
import Skill from "./components/Skill/Skill";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Banner />
      <Skill />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
