import { useState, useEffect } from "react";
import "./App.css";
import Container from "@mui/material/Container";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Getintouch from "./components/Getintouch";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

function App() {
  let [data, setData] = useState(null);

  useEffect(() => {
    // Perform some side effect, e.g., fetch data from an API
    const fetchData = async () => {
      try {
        let response = await fetch(
          "http://localhost:8080/profile/65ccbbcae42061d7c7e72835"
        );
        let res = await response.json();
        console.log(res);
        setData(res);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    // Cleanup function (optional)
    return () => {
      // Perform cleanup, e.g., unsubscribe from a subscription
      console.log("Cleanup");
    };
  }, []);
  return (
    <>
      <div className="App">
        <Nav />
        <div className="container">
          {data ? <p>{data.name}</p> : ""}

          <Banner data={data} />
          <Skills data={data} />
          <Projects />
          <Getintouch />
        </div>
        <Container></Container>
        <Footer />
      </div>
    </>
  );
}

export default App;
