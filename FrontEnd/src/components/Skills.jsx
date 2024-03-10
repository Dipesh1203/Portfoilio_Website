import React from "react";
import SkillCarousal from "./SkillCarousal";
import "./Skills.css";

const Skills = (props) => {
  // console.log(data);
  return (
    <div
      id="skillsSection"
      style={{ backdropFilter: "blur(30px)" }}
      className="skill"
    >
      <h1>Skills</h1>
      <h3>Areas Of Interest</h3>
      <div className="skills-list">
        {props.profile ? (
          props.profile.skills?.map((dat, i) => <li key={i}>{dat}</li>)
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Skills;
