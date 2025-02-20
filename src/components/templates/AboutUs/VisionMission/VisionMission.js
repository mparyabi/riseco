import React from 'react'
import styles from './visionmission.module.css'
import { LuGoal, LuEye } from "react-icons/lu";

function VisionMission() {
  return (
    
    <div className={styles.visionContainer}>
    <div className={styles.missionSec}>
      <div className={styles.missionSecLogo}>
        <LuGoal /> ماموریت
      </div>
      <div className={styles.missionSecText}>
        مأموریت شرکت سرمایه‌گذاری و توسعه راهبردی راز به عنوان یک هلدینگ
        چند رشته ­ای صنعتی- سرمایه‌گذاری با اولویت صنعت خودرو، صنعت نفت و
        پتروشیمی و صنایع غذایی با هدف تامین رضايت سهامداران و ساير ذينفعان
        عبارت است از:
        <br /> الف) سیاست‌گذاری و مديريت بهینه سرمايه به منظور افزايش ثروت
        و سودآوری پایدار
        <br /> ب) اهتمام و تعهد آگاهانه به مسئولیت­ های اجتماعی
        <br /> ج) فراهم‌سازی خدمات مشترک ارزش افزا به کسب و کارهای خود
      </div>
    </div>

    <div className={styles.missionSec}>
      <div className={styles.missionSecLogo}>
        <LuEye /> چشم انداز
      </div>
      <div className={styles.missionSecText}>
        شرکت سرمایه‌گذاری و توسعه راهبردی راز در جایگاه یک هلدینگ چند
        رشته­ ای صنعتی- سرمایه­ گذاری، در افق چشم ­انداز خود در سال ۱۴۰۰،
        سازمانی پیشرو با مختصات بین­ المللی و جزء ۱۰۰ شرکت برتر کشور (IMI
        100) می­ باشد.
      </div>
    </div>
  </div>

  )
}

export default VisionMission