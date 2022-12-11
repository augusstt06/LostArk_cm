import React from "react";

function StatBtn() {
  return (
    <div>
      <button
        type="button"
        className="btn btn-outline-primary"
        name="Valtan_N"
        style={{ border: "1px solid black", color: "#fff" }}
      >
        각인
      </button>
      <button
        type="button"
        className="btn btn-outline-primary"
        name="Valtan_H"
        style={{ border: "1px solid black", color: "#fff" }}
      >
        보석
      </button>
      <button
        type="button"
        className="btn btn-outline-primary"
        name="Vykas_N"
        style={{ border: "1px solid black", color: "#fff" }}
      >
        카드
      </button>
    </div>
  );
}

export default StatBtn;
