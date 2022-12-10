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

  useEffect(() => {
    getCharacter_Profile();
    getCharacter_Armor();
  }, [userId]);
  console.log(info);

  return (
    <div className={styles.detail}>
      <div className={styles.detailHeader}>
        <Header />
        <Input />
      </div>
      <div className={styles.detailBody}>
        <div
          className="btn-group"
          role="group"
          aria-label="Basic outlined example"
        >
          <button type="button" className="btn btn-outline-primary">
            발탄
          </button>
          <button type="button" className="btn btn-outline-primary">
            비아키스
          </button>
          <button type="button" className="btn btn-outline-primary">
            쿠크세이튼
          </button>
          <button type="button" className="btn btn-outline-primary">
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
                  <div>
                    <img src={data["Icon"]} alt={data["Name"]} />
                    {data["Name"]}
                  </div>
                ) : null
              )}
          </div>
        </div>
        {/* <Table /> */}
      </div>
    </div>
  );
}

export default Detail;
