import React from "react";

function StatEngrave(props) {
  console.log(props);
  // console.log(props.data[0]);
  return (
    <div>
      {props.data &&
        props.data.map((data) => (
          <div key={data["Name"]}>
            <div>{data["Name"]}</div>
          </div>
        ))}
    </div>
  );
}
export default StatEngrave;
