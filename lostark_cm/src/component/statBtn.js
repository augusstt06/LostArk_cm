import React from "react";

function StatBtn(props) {
  return (
    <div>
      <button
        type="button"
        className="btn btn-outline-primary"
        name="Engrave"
        style={{ border: "1px solid black", color: "#fff" }}
        onClick={props.data}
      >
        각인
      </button>
      <button
        type="button"
        className="btn btn-outline-primary"
        name="Jem"
        style={{ border: "1px solid black", color: "#fff" }}
        onClick={props.data}
      >
        보석
      </button>
      <button
        type="button"
        className="btn btn-outline-primary"
        name="Card"
        style={{ border: "1px solid black", color: "#fff" }}
        onClick={props.data}
      >
        카드
      </button>
    </div>
  );
}

export default StatBtn;
