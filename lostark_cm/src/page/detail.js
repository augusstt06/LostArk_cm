import React, { useEffect, useState } from "react";
import Header from "../component/header";
import Input from "../component/input";
import Table from "../component/table";
import RaidBtn from "../component/raidBtn";
import styles from "../css/detail.module.css";
import { useLocation } from "react-router";
import { customAxios } from "../api/customAxios";

function Detail() {
  let location = useLocation();
  const userId = location.state.id.userId;

  const [info, setInfo] = useState();
  const [raid, setRaid] = useState("");

  const getCharacter_Profile = async () => {
    try {
      const res = await customAxios.get(
        encodeURI(`/armories/characters/${userId}/profiles`)
      );
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getCharacter_Armor = async () => {
    try {
      const res = await customAxios.get(
        encodeURI(`/armories/characters/${userId}/equipment`)
      );
      console.log(res.data);
      setInfo(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const selectRaid = (e) => {
    setRaid(e.target.name);
  };
  useEffect(() => {
    getCharacter_Profile();
    getCharacter_Armor();
  }, [userId]);
  console.log(raid);
  return (
    <div className={styles.detail}>
      <div className={styles.detailHeader}>
        <Header />
        <Input />
      </div>
      <div className={styles.detailBody}>
        <RaidBtn data={selectRaid} />
      </div>
      <div>
        <div>
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
        <div>여기가 대조군</div>
      </div>
      {/* <Table /> */}
    </div>
  );
}

export default Detail;
