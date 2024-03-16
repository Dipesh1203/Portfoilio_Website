import React from "react";
import { getImageUrl } from "../../utils";
import styles from "../Banner/Banner.module.css";

const Banner = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Name </h1>
        <h3 className={styles.headline}>HeadLine</h3>
        <p className={styles.intro}>Intro</p>
        <a href="#" className={styles.contactBtn}>
          Contact me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Profile-Image"
        className={styles.profileImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Banner;
