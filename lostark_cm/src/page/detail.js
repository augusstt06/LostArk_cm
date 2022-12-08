import React from "react";
import { useLocation } from "react-router";

function Detail() {
  let location = useLocation();
  console.log(location);
  return <div>상세</div>;
}

export default Detail;
