import React, { useEffect, useState } from "react";
import Header from "../component/header";
import Input from "../component/input";
import Table from "../component/table";
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
    console.log(raid, "??");
  };
  useEffect(() => {
    getCharacter_Profile();
    getCharacter_Armor();
  }, [userId]);

  return (
    <div className={styles.detail}>
      <div className={styles.detailHeader}>
        <Header />
        <Input />
      </div>
      <div className={styles.detailBody}>
        <button
          type="button"
          className="btn btn-outline-primary"
          name="Valtan_N"
          onClick={selectRaid}
        >
          발탄
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          name="Valtan_H"
          onClick={selectRaid}
        >
          발탄(H)
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          name="Vykas_N"
        >
          비아키스
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          name="Vykas_H"
        >
          비아키스(H)
        </button>
        <button type="button" className="btn btn-outline-primary" name="Kuku">
          쿠크세이튼
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          name="Abrel_N"
        >
          아브렐슈드
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          name="Abrel_H"
        >
          아브렐슈드
        </button>
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
      </div>
      {/* <Table /> */}
    </div>
  );
}

export default Detail;
