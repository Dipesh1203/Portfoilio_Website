import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./ProjectCard.css";

export default function ProjectCard(props) {
  return (
    <>
      {props.item ? (
        <div className="card">
          <div className="image">
            <img src={props.item.image} alt="" />
          </div>
          <div className="description">
            <div className="title">{props.item.title}</div>
            <div className="description">{props.item.description}</div>
            <div className="link">{props.item.link}</div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
