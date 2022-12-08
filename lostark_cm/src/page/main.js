import React from "react";
import Header from "../component/header";
import Input from "../component/input";
import styles from "../css/main.module.css";

function Main() {
  return (
    <div className={styles.main}>
      <Header />
      <Input />
    </div>
  );
}
export default Main;
