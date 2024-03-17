import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./App.module.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner/Banner";
import Skill from "./components/Skill/Skill";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import { Link } from "react-router-dom";

function App() {
  let [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/profile/65e9a20f689f6df955389092")
      .then((res) => setData(res.data));
  }, []);
  return (
    <div className={styles.App}>
      <Navbar />
      <Banner data={data} />
      <Skill data={data.skills} />
      <Projects projectId={data.projects} />
      <Contact contact={data} />
    </div>
  );
}

export default App;
