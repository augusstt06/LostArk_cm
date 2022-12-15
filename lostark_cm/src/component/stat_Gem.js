import React from "react";

function StatGem(props) {
  console.log(props, "보석");

  return (
    <div>
      {props.data &&
        props.data.map((data) => (
          <div key={data["Tooltip"]}>
            <img src={data["Icon"]} alt={data["Name"]} />
            <div>{data["Name"]}</div>
          </div>
        ))}
    </div>
  );
}
export default StatGem;
