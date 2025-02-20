import React from "react";
import styles from "./chart.module.css";

function Chart() {
  return (
    <div className={styles.chartContainer}>
      <div className={styles.title}> 
      ساختار مدیران ارشد
      </div>
      <div className={styles.chartImg}>
        <img src="/images/chart1403.jpg"/>
      </div>
    </div>
  );
}

export default Chart;
