import React, { useEffect } from "react";
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

  const getCharacter_Armor = async () => {
    try {
      const res = await axios.get(
        encodeURI(`/armories/characters/${userId}/profiles`),
        {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
          },
        }
      );
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    // getCharacter();
    getCharacter_Armor();
  }, []);
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
