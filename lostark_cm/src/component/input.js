import styles from "../css/component/input.module.css";
import { useState } from "react";
import { useNavigate } from "react-router";

function Input() {
  let nevigate = useNavigate();
  const [input, setInput] = useState("");

  const typingUserId = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const clickBtn = () => {
    nevigate(`/character/${input.userId}`, {
      state: {
        userid: input,
      },
    });
  };
  return (
    <div className={styles.input}>
      <div class="input-group mb-3">
        <input
          type="text"
          name="userId"
          class="form-control"
          placeholder="Enter ID"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          style={{ padding: "10px" }}
          onChange={typingUserId}
        />
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={clickBtn}
          style={{ fontSize: "1.2rem" }}
        >
          입력
        </button>
      </div>
    </div>
  );
}
export default Input;
