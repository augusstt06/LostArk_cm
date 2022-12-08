import React from "react";
import Header from "../component/header";
import Input from "../component/input";
import styles from "../css/detail.module.css";
import { useLocation } from "react-router";
import axios from "axios";

function Detail() {
  let location = useLocation();

  const userId = location.state.id.userId;
  console.log(userId);

  const getCharacter = async () => {
    try {
      const res = await axios.get(encodeURI(`/characters/${userId}/siblings`), {
        headers: {
          authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        },
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.detail}>
      <div className={styles.detailHeader}>
        <Header />
        <Input />
      </div>
      <div className={styles.detailBody}>
        <button onClick={getCharacter}>Test</button>
      </div>
    </div>
  );
}

export default Detail;
