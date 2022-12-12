import React from "react";

function StatEngrave(props) {
  console.log(props);

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
