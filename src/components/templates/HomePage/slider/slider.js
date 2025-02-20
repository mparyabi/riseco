import React from "react";
import styles from "./slider.module.css";
import SwiperComponent from "./swiperSlider";

function Slider() {
  return (
    <div className={styles.container}>
      <div className={styles.slider}>
        <div className={styles.swiperCard}>
          <SwiperComponent />
        </div>
      </div>
    </div>
  );
}

export default Slider;
