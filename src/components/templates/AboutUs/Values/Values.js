import React from "react";
import styles from "./values.module.css";
import { FaRegGem } from "react-icons/fa";

function Values() {
  return (
    <div className={styles.valuesContainer}>
      <div className={styles.imgContainer}>
        <img src="/images/arzesh.png" />
      </div>
      <div className={styles.valuesText}>
        <div className={styles.textTitr}>
          <FaRegGem style={{marginLeft:'10px'}} />
          ارزش های سازمان
        </div>
        ما کارکنان خود را متعهد می دانیم تا در تمام تعاملات کاری و غیر کاری با
        همکاران و سایر ذینفعان سازمان (مشتریان، سهامداران، تامین کنندگان، جامعه)
        مفاد بیانیه ارزشهای سازمانی به شرح زیر را سرلوحه رفتار و کردار خود قرار
        داده و ارزشمدار باشیم.
      </div>
    </div>
  );
}

export default Values;
