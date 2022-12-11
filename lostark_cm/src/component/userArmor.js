import React from "react";
import styles from "../css/detail.module.css";

function UserArmor(props) {
  return (
    <div className={styles.user_armor}>
      {props.data &&
        props.data.map((data) =>
          data["Type"] === "무기" ||
          data["Type"] === "투구" ||
          data["Type"] === "상의" ||
          data["Type"] === "하의" ||
          data["Type"] === "장갑" ||
          data["Type"] === "견갑" ? (
            <div key={data["Name"]}>
              <img src={data["Icon"]} alt={data["Name"]} />
              <div className={styles.armor_tooltip}>
                <div>{data["Type"]}</div>
                {data["Grade"] === "유물" ? (
                  <div className={styles.armor_relics}>{data["Name"]}</div>
                ) : data["Grade"] === "고대" ? (
                  <div className={styles.armor_ancient}>{data["Name"]}</div>
                ) : (
                  <div className={styles.armor_legend}>{data["Name"]}</div>
                )}
              </div>
            </div>
          ) : null
        )}
    </div>
  );
}

export default UserArmor;
