import React from "react";
import { useState, useEffect } from "react";

const printobj = ({ data }) => {};
const CreateProfile = () => {
  let [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      let response = await fetch("http://localhost:8080/profile/all");
      let res = await response.json();
      console.log(res);
      setData(res);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div>
      <h1>hello</h1>
      <button onClick={fetchData}>Submit</button>
      {data ? (
        data.map((obj) => (
          <div key={obj._id}>
            <p>{obj.name}</p>
            <p>{obj.userName}</p>
            <p>{obj.email}</p>
            <p>{obj.headline}</p>
            <br />
          </div>
        ))
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default CreateProfile;
