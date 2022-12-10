import React, { useEffect } from "react";
import Header from "../component/header";
import Input from "../component/input";
import Table from "../component/table";
import styles from "../css/detail.module.css";
import { useLocation } from "react-router";
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
      <div className={styles.detailBody}>
        <div class="btn-group" role="group" aria-label="Basic outlined example">
          <button type="button" class="btn btn-outline-primary">
            발탄
          </button>
          <button type="button" class="btn btn-outline-primary">
            비아키스
          </button>
          <button type="button" class="btn btn-outline-primary">
            쿠크세이튼
          </button>
          <button type="button" class="btn btn-outline-primary">
            아브렐슈드
          </button>
        </div>
        {/* <Table /> */}
      </div>
    </div>
  );
}

export default Detail;
