import { useState, useEffect } from "react";
import axios from "axios";
import Container from "@mui/material/Container";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Getintouch from "./components/Getintouch";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./index.css";
import Layout from "./layout/Layout";
import SideBar from "./components/SideBar";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home></Home>} />
          <Route path="/profile" exact element={<Profile></Profile>} />
          <Route path="/getintouch" exact element={<Getintouch></Getintouch>} />
          <Route path="/dashboard" exact element={<Dashboard></Dashboard>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
