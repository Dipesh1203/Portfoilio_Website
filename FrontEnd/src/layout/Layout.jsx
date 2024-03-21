import { Box } from "@mui/material";
import React from "react";
import styles from "../App.module.css";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Contact from "../components/Contact/Contact";

const Layout = () => {
  return (
    <div className={styles.App}>
      <Navbar />
      <Outlet />
      {/* <Contact /> */}
    </div>
  );
};

export default Layout;
