import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import "./SkillCarousal.css";

function Item(props) {
  return (
    <Paper
      sx={{
        backgroundColor: "rgba(43, 43, 43, 0.752)",
        backdropFilter: "blur(30px)",
        color: "#fff",
      }}
      className="paper"
    >
      <div>
        <img className="image" src={props.item.image} alt="" />
        <p>{props.item.skillTitle}</p>
      </div>
      <div>
        <img className="image" src={props.item.image2} alt="" />
        <p>{props.item.skillTitle2}</p>
      </div>
      <div>
        <img className="image" src={props.item.image3} alt="" />
        <p>{props.item.skillTitle3}</p>
      </div>
    </Paper>
  );
}

const SkillCarousal = () => {
  let items = [
    {
      image: "./src/assets/banner-bg.png",
      skillTitle: "Web Devlopment 1",
      image2:
        "https://img.freepik.com/free-vector/business-management-vector_53876-44126.jpg?w=740&t=st=1707374322~exp=1707374922~hmac=0e87deaf4e2a10b15d756ebb881fac1c608de122df7777365f62aa654ab9da63",
      skillTitle2: "Web Devlopment2",
      image3:
        "https://img.freepik.com/free-vector/business-management-vector_53876-44126.jpg?w=740&t=st=1707374322~exp=1707374922~hmac=0e87deaf4e2a10b15d756ebb881fac1c608de122df7777365f62aa654ab9da63",
      skillTitle3: "Web Devlopment2",
    },
    {
      image:
        "https://img.freepik.com/free-vector/business-management-vector_53876-44126.jpg?w=740&t=st=1707374322~exp=1707374922~hmac=0e87deaf4e2a10b15d756ebb881fac1c608de122df7777365f62aa654ab9da63",
      skillTitle: "Web Devlopment 1",
      image2:
        "https://img.freepik.com/free-vector/business-management-vector_53876-44126.jpg?w=740&t=st=1707374322~exp=1707374922~hmac=0e87deaf4e2a10b15d756ebb881fac1c608de122df7777365f62aa654ab9da63",
      skillTitle2: "Web Devlopment2",
      image3:
        "https://img.freepik.com/free-vector/business-management-vector_53876-44126.jpg?w=740&t=st=1707374322~exp=1707374922~hmac=0e87deaf4e2a10b15d756ebb881fac1c608de122df7777365f62aa654ab9da63",
      skillTitle3: "Web Devlopment2",
    },
    {
      image:
        "https://img.freepik.com/free-vector/business-management-vector_53876-44126.jpg?w=740&t=st=1707374322~exp=1707374922~hmac=0e87deaf4e2a10b15d756ebb881fac1c608de122df7777365f62aa654ab9da63",
      skillTitle: "Web Devlopment 1",
      image2:
        "https://img.freepik.com/free-vector/business-management-vector_53876-44126.jpg?w=740&t=st=1707374322~exp=1707374922~hmac=0e87deaf4e2a10b15d756ebb881fac1c608de122df7777365f62aa654ab9da63",
      skillTitle2: "Web Devlopment2",
      image3:
        "https://img.freepik.com/free-vector/business-management-vector_53876-44126.jpg?w=740&t=st=1707374322~exp=1707374922~hmac=0e87deaf4e2a10b15d756ebb881fac1c608de122df7777365f62aa654ab9da63",
      skillTitle3: "Web Devlopment2",
    },
  ];

  return (
    <Carousel
      animation="slide"
      indicators={false}
      navButtonsAlwaysVisible={true}
      navButtonsProps={{
        style: {
          backgroundColor: "rgba(43, 43, 43, 0.752)",
          borderRadius: "5px",
        },
      }}
      timeout={10}
      className="carouselCss"
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

export default SkillCarousal;
