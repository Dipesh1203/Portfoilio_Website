import React, { useEffect, useState } from "react";
import styles from "./AllProfile.module.css";
import axios from "axios";

const Val = (props) => {
  let { userName, name, headline, email } = props.item;
  return (
    <>
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
    </>
  );
};
const AllProfile = () => {
  let [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/profile/all").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);
  return (
    <div className={styles.App}>
      {data && data.map((i, j) => <Val key={j} item={i} />)}
    </div>
  );
};

export default AllProfile;
