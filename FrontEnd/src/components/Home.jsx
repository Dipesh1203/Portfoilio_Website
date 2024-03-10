import React from "react";
import SideBar from "./SideBar";
import Nav from "./Nav";
import Banner from "./Banner";

const Home = () => {
  const profile = {
    _id: "65ccbbabe42061d7c7e72831",
    name: "John Doe",
    userName: "john_doe123",
    email: "john.doe@example.com",
    headline: "Web Developer",
    intro: "Passionate about creating awesome web applications.",
    skills: ["JavaScript", "HTML", "CSS", "express", "nodejs"],
    __v: 0,
  };
  return (
    <div style={{ margin: "", alignItems: "center" }}>
      <Nav></Nav>
      <div className="container">
        <Banner profile={profile} />
      </div>
    </div>
  );
};

export default Home;
