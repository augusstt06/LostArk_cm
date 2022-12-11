import React, { useEffect, useState } from "react";
import Header from "../component/header";
import Input from "../component/input";
import Table from "../component/table";
import RaidBtn from "../component/raidBtn";
import styles from "../css/detail.module.css";
import { useLocation } from "react-router";
import {
  getCharacter_Profile,
  getCharacter_Armor,
  getCharacter_Engrave,
} from "../api/character/index";

function Detail() {
  let location = useLocation();
  const userId = location.state.id.userId;

  const [info, setInfo] = useState();
  const [raid, setRaid] = useState("");

  const selectRaid = (e) => {
    setRaid(e.target.name);
  };
  useEffect(() => {
    getCharacter_Profile(userId);
    getCharacter_Armor(userId, setInfo);
    getCharacter_Engrave(userId);
  }, [userId]);
  console.log(raid);

  return (
    <div className={styles.detail}>
      <div className={styles.detailHeader}>
        <Header />
        <Input />
      </div>
      <div className={styles.detailBody}>
        <div className={styles.raidBtn}>
          <RaidBtn data={selectRaid} />
        </div>
        <div className={styles.spec}>
          <div className={styles.user}>
            {info &&
              info.map((data) =>
                data["Type"] === "무기" ||
                data["Type"] === "투구" ||
                data["Type"] === "상의" ||
                data["Type"] === "하의" ||
                data["Type"] === "장갑" ||
                data["Type"] === "견갑" ? (
                  <div key={data["Name"]}>
                    <img src={data["Icon"]} alt={data["Name"]} />
                    {data["Name"]}
                  </div>
                ) : null
              )}
          </div>
          <div className={styles.control_group}>
            {info &&
              info.map((data) =>
                data["Type"] === "무기" ||
                data["Type"] === "투구" ||
                data["Type"] === "상의" ||
                data["Type"] === "하의" ||
                data["Type"] === "장갑" ||
                data["Type"] === "견갑" ? (
                  <div key={data["Name"]}>
                    <img src={data["Icon"]} alt={data["Name"]} />
                    {data["Name"]}
                  </div>
                ) : null
              )}
          </div>
          <div>여기는 경매장 가격</div>
        </div>
        {/* <Table /> */}
      </div>
    </div>
  );
}

export default Detail;
