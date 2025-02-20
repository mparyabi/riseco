import React from "react";
import styles from "./aboutus.module.css";
import VisionMission from "@/components/templates/AboutUs/VisionMission/VisionMission";
import History from "@/components/templates/AboutUs/History/History";
import CeoMessage from "@/components/templates/AboutUs/CeoMessage/CeoMessage";
import Chart from "@/components/templates/AboutUs/Chart/Chart";
import Values from "@/components/templates/AboutUs/Values/Values";
import Awards from "@/components/templates/AboutUs/Awards/Awards";

function AboutUs() {
  return (
    <div className={styles.container}>
      <div className={styles.aboutUsContainer}>
        <CeoMessage />
        <History />
        <VisionMission />
        <Chart/>
        <Values/>
        <Awards/>
      </div>
    </div>
  );
}

export default AboutUs;
