import React from "react";

function RaidBtn(props) {
  return (
    <div>
      <button
        type="button"
        className="btn btn-outline-primary"
        name="Valtan_N"
        onClick={props.data}
      >
        발탄
      </button>
      <button
        type="button"
        className="btn btn-outline-primary"
        name="Valtan_H"
        onClick={props.data}
      >
        발탄(H)
      </button>
      <button
        type="button"
        className="btn btn-outline-primary"
        name="Vykas_N"
        onClick={props.data}
      >
        비아키스
      </button>
      <button
        type="button"
        className="btn btn-outline-primary"
        name="Vykas_H"
        onClick={props.data}
      >
        비아키스(H)
      </button>
      <button
        type="button"
        className="btn btn-outline-primary"
        name="Kuku"
        onClick={props.data}
      >
        쿠크세이튼
      </button>
      <button
        type="button"
        className="btn btn-outline-primary"
        name="Abrel_N"
        onClick={props.data}
      >
        아브렐슈드
      </button>
      <button
        type="button"
        className="btn btn-outline-primary"
        name="Abrel_H"
        onClick={props.data}
      >
        아브렐슈드
      </button>
    </div>
  );
}

export default RaidBtn;