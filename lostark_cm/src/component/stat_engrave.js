import React from "react";

function StatEngrave(props) {
  console.log(props);
  console.log(props.data[0]);
  return (
    <div>
      <div>
        <div>{props.data[0]["Name"]}</div>
        <div>{props.data[1]["Name"]}</div>
      </div>
      <div>
        <div>{props.data[2]["Name"]}</div>
        <div>{props.data[3]["Name"]}</div>
      </div>
      <div>
        <div>{props.data[4]["Name"]}</div>
      </div>
      {/* {props.data &&
        props.data.map((data) => (
          <div key={data["Name"]}>
            <div>{data["Name"]}</div>
          </div>
        ))} */}
    </div>
  );
}
export default StatEngrave;
