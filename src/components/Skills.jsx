import React from "react";
import SkillCarousal from "./SkillCarousal";
import "./Skills.css";

const Skills = (props) => {
  let data = props ? props.data : {};
  return (
    <div
      id="skillsSection"
      style={{ backdropFilter: "blur(30px)" }}
      className="skill"
    >
      <h1>Skills</h1>
      <h3>Areas Of Interest</h3>
    </div>
  );
};

export default Skills;
