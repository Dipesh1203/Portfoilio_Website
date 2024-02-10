import React from "react";
import SkillCarousal from "./SkillCarousal";
import "./Skills.css";

const Skills = () => {
  return (
    <div
      id="skillsSection"
      style={{ backdropFilter: "blur(30px)" }}
      className="skill"
    >
      <h1>Skills</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo incidunt
        perferendis, eius laborum beatae amet nesciunt voluptate iure. Dolor
        voluptate tempore quae provident vel exercitationem modi consectetur
        ipsam dolore eligendi!
      </p>
      <SkillCarousal />
    </div>
  );
};

export default Skills;
