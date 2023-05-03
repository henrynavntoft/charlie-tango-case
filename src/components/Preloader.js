import React from "react";
import styles from "./Preloader.module.css";

const Preloader = () => (
  <div className={styles.preloader}>
    <div className={styles.spinner}></div>
  </div>
);

export default Preloader;
