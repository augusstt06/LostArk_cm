import styles from "../css/component/input.module.css";

function Input() {
  return (
    <div className={styles.input}>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Enter ID"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          style={{ padding: "10px" }}
        />
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          style={{ fontSize: "1.2rem" }}
        >
          입력
        </button>
      </div>
    </div>
  );
}
export default Input;
