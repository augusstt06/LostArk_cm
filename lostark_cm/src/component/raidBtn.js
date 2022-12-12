import React from "react";

function RaidBtn(props) {
  return (
    <div>
      <button
        type="button"
        className="btn btn-outline-primary"
        name="Valtan_N"
        onClick={props.data}
        style={{ border: "1px solid black", color: "#fff" }}
      >
        발탄
      </button>
      <button
        type="button"
        className="btn btn-outline-primary"
        name="Valtan_H"
        onClick={props.data}
        style={{ border: "1px solid black", color: "#fff" }}
      >
        발탄(H)
      </button>
      <button
        type="button"
        className="btn btn-outline-primary"
        name="Vykas_N"
        onClick={props.data}
        style={{ border: "1px solid black", color: "#fff" }}
      >
        비아키스
      </button>
      <button
        type="button"
        className="btn btn-outline-primary"
        name="Vykas_H"
        onClick={props.data}
        style={{ border: "1px solid black", color: "#fff" }}
      >
        비아키스(H)
      </button>
      <button
        type="button"
        className="btn btn-outline-primary"
        name="Kuku"
        onClick={props.data}
        style={{ border: "1px solid black", color: "#fff" }}
      >
        쿠크세이튼
      </button>
      <button
        type="button"
        className="btn btn-outline-primary"
        name="Abrel_N"
        onClick={props.data}
        style={{ border: "1px solid black", color: "#fff" }}
      >
        아브렐슈드
      </button>
      <button
        type="button"
        className="btn btn-outline-primary"
        name="Abrel_H"
        onClick={props.data}
        style={{ border: "1px solid black", color: "#fff" }}
      >
        아브렐슈드(H)
      </button>
    </div>
  );
}

export default RaidBtn;
