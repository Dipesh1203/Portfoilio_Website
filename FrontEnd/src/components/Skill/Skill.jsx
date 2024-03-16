import React from "react";
import { getImageUrl } from "../../utils";
import styles from "../Skill/Skill.module.css";

const Skill = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.expertise}>Expertise</h1>
      <div className={styles.bodyPart}>
        <img
          className={styles.aboutImg}
          src={getImageUrl("about/aboutImage.png")}
          alt=""
        />
        <div className={styles.skillList}>
          <ul>
            <li>Java</li>
            <li>Javascript</li>
            <li>MongoDB</li>
            <li>Linux</li>
            <li>ExpressJs</li>
            <li>NodeJs</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skill;
