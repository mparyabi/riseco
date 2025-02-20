import React from "react";
import styles from "./activityfields.module.css";

function ActivityFields() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.rightSide}>
          <div className={styles.imgCard}>
            <img src="/images/refining.png" />
            <div className={styles.titr}>نفت و گاز</div>
          </div>
        </div>
        <div className={styles.leftSide}>
          <ul>
            <li>دوما پارسیان کیش</li>
            <li>شرکت زیما توسعه پارسیان کیش</li>
            <li>شرکت Texoped Parsian Kish</li>
            <li>پدم پارسیان کیش</li>
            <li>پترو سرویس پارسیان کیش</li>
            <li>پترو ترک</li>
            <li>شرکت Petro Drilling Fluid</li>
          </ul>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.rightSide}>
          <div className={styles.imgCard}>
            <img src="/images/khodro.png" />
            <div className={styles.titr}>خودروسازی و قطعات خودرو</div>
          </div>
        </div>
        <div className={styles.leftSide}>
          <ul>
            <li>پترو پارت راز نیشابور</li>
            <li>اورند پیشرو</li>
            <li>جنرال کب پارس</li>
            <li>شرکت رایزکو – مکاپلاست</li>
            <li>آذرین ماد پارت راز</li>
            <li>اورند پارت راز</li>
          </ul>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.rightSide}>
          <div className={styles.imgCard}>
            <img src="/images/responsibility.png" />
            <div className={styles.titr}>مسئولیت های اجتماعی</div>
          </div>
        </div>
        <div className={styles.leftSide}>
          <ul>
            <li>مهراب بهشت</li>
            <li>درمانگران اورند پیشرو</li>
            <li>موسسه خیریه نیکوکاران راز</li>
          </ul>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.rightSide}>
          <div className={styles.imgCard}>
            <img src="/images/other-business.png" />
            <div className={styles.titr}>سایر حوزه های کسب و کار</div>
          </div>
        </div>
        <div className={styles.leftSide}>
          <ul>
            <li>آذرآبادگان مادپارت ارس</li>
            <li>بازرگانی توسعه پرتو سپهر ایرانیان</li>
            <li>شرکت دلتا راز</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ActivityFields;
