import React from "react";
import styles from "./cesomessage.module.css";

function CeoMessage() {
  return (
    <div className={styles.container}>
      <div className={styles.containerbox}>
        <div className={styles.textContainer}>
        <div className={styles.titr}>پیام رئیس هیئت مدیره - جناب آقای دکتر حمیدرضا صمدی</div>
          کسی که میخواهد بماند باید مبارزه کند و کسی که دست از مبارزه بردارد، آن
          هم در جهانی که هستی انسان بستگی به مبارزه دارد استحقاق ماندن ندارد.
        </div>
        <div className={styles.managerPic}>
          <img src="/images/boss.png" />
        </div>
      </div>
    </div>
  );
}

export default CeoMessage;
