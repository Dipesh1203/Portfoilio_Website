import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "../../App.module.css";
import Navbar from "../Navbar";
import Banner from "../Banner/Banner";
import Skill from "../Skill/Skill";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

const Profile = () => {
  let [data, setData] = useState([]);
  let { userId } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:8080/profile/${userId}`)
      .then((res) => setData(res.data));
  }, []);
  return (
    <div className={styles.App}>
      <Banner data={data} />
      <Skill data={data.skills} />
      <Projects projectId={data.projects} />
      <Contact contact={data} />
    </div>
  );
};

export default Profile;
