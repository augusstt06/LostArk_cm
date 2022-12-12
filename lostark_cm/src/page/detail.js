import React, { useEffect, useState } from "react";
import Header from "../component/header";
import Input from "../component/input";
import RaidBtn from "../component/raidBtn";
import StatBtn from "../component/statBtn";
import StatEngrave from "../component/stat_engrave";
import UserArmor from "../component/userArmor";
import styles from "../css/detail.module.css";
import { useLocation } from "react-router";
import {
  getCharacter_Profile,
  getCharacter_Armor,
  getCharacter_Engrave,
  getCharacter_Gem,
} from "../api/character/index";

function Detail() {
  let location = useLocation();
  const userId = location.state.id.userId;

  const [armor, setArmor] = useState();
  const [engrave, setEngrave] = useState();
  const [gem, setGem] = useState();

  const [raid, setRaid] = useState("");
  const [stat, setStat] = useState("");

  const selectRaid = (e) => {
    setRaid(e.target.name);
  };
  const selectStat = (e) => {
    setStat(e.target.name);
  };

  useEffect(() => {
    getCharacter_Profile(userId);
    getCharacter_Armor(userId, setArmor);
    getCharacter_Engrave(userId, setEngrave);
    getCharacter_Gem(userId, setGem);
  }, [userId]);
  console.log(gem);
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
            <p>장비</p>
            <UserArmor data={armor} />
            <StatBtn data={selectStat} />
            <StatEngrave data={engrave} />
          </div>
          <div className={styles.control_group}>
            <div>레이드 기준</div>
          </div>
          <div>여기는 경매장 가격</div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
