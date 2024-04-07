import React from "react";
import styles from "./LoginSignup.module.css";
import { style } from "@mui/system";

const Signup = () => {
  return (
    <section className={style.container}>
      <div className={styles.signup}>
        <h2>Sign Up</h2>
        <form action="/api/user/signup" method="POST" className={styles.form}>
          <label htmlFor="username">User Name</label>
          <input name="username" type="text" id="username" />

          <label htmlFor="email">Email</label>
          <input name="email" type="email" id="email" />

          <label htmlFor="password">Password</label>
          <input name="password" type="password" id="password" />

          <button>Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Signup;
