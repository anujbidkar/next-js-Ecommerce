import React from "react";
import styles from "./styles.module.scss";

const Top = () => {
  return (
    <div className={styles.top}>
      <div className={styles.top_container}>
        <ul className={styles.top_list}></ul>
      </div>
    </div>
  );
};

export default Top;
