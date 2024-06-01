import React, { useEffect, useState } from "react";
import styles from "./AllProfile.module.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Val = (props) => {
  let { userName, name, headline, email, _id } = props.item;
  return (
    <Link href={`/profile/${_id}`}>
      <div className={styles.badge}>
        <h3>
          <b>UserName : </b>
          {userName}
        </h3>
        <h3>
          <b>Name : </b>
          {name}
        </h3>
        <h3>
          <b>HeadLine : </b>
          {headline}
        </h3>
        <h4>
          <b>User Email : </b>
          {email}
        </h4>
      </div>
    </Link>
  );
};
const AllProfile = () => {
  let [data, setData] = useState([]);
  useEffect(() => {
    axios.get("/api/profile/all").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);
  // let navigate = useNavigate();
  // const routeChange = (data) => {
  //   let path = `${data}`;
  //   navigate(path);
  // };
  return (
    <div className={styles.App}>
      {data && data.map((i, j) => <Val key={j} item={i} />)}
    </div>
  );
};

export default AllProfile;
