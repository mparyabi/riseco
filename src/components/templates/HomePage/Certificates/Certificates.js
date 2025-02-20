import React from "react";
import styles from "./certificates.module.css";
import { GrCertificate } from "react-icons/gr";

function Certificates() {
  return (
    <div className={styles.container}>
      <div className={styles.titrText}>
        <GrCertificate style={{marginLeft:"7px"}} />
        گواهی نامه ها
      </div>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          <img src="/images/standard.png" />
        </div>
        <div className={styles.logo}>
          <img src="/images/iqnet.png" />
        </div>
        <div className={styles.logo}>
          <img src="/images/tuv.png" />
        </div>
        <div className={styles.logo}>
          <img src="/images/csq.png" />
        </div>
        <div className={styles.logo}>
          <img src="/images/csqaut.png" />
        </div>
        <div className={styles.logo}>
          <img src="/images/dakks.png" />
        </div>
        <div className={styles.textBottom}>
          استانداردهای مختلف ISO 27001،ISO 10015 ، ISO 14000،OHSAS 18001 ،
          گریدA+ سازه گستر و… توسط مجموعه های هلدینگ راز متناسب با فعالیت آنها
          از معتبرترین مراکز اخذ گردیده است.
        </div>
      </div>
    </div>
  );
}

export default Certificates;
