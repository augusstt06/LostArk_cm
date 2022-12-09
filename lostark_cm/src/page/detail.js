import React, { useEffect } from "react";
import Header from "../component/header";
import Input from "../component/input";
import styles from "../css/detail.module.css";
import { useLocation } from "react-router";
import axios from "axios";
import { customAxios } from "../api/customAxios";

function Detail() {
  let location = useLocation();

  const userId = location.state.id.userId;
  console.log(userId);

  const getCharacter_Armor = async () => {
    try {
      const res = await customAxios.get(
        encodeURI(`/armories/characters/${userId}/profiles`)
      );
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCharacter_Armor();
  }, [userId]);

  return (
    <div className={styles.detail}>
      <div className={styles.detailHeader}>
        <Header />
        <Input />
      </div>
      <div className={styles.detailBody}>ㅇ</div>
    </div>
  );
}

export default Detail;
