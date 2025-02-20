import React from "react";
import styles from "./CompanyLogos.module.css";
import Link from "next/link";

function CompanyLogos() {
  return (
    <div className={styles.Container}>
      <div className={styles.titr}> شرکت های زیرمجموعه هلدینگ رایزکو</div>
      <div className={styles.logosContainer}>
        <Link href="#">
          <div className={styles.logo}>
            <img src="/images/avrand-logo.png" alt="شرکت اورند پیشرو"/>
          </div>
        </Link>

        <Link href="#">
          <div className={styles.logo}>
            <img src="/images/enco100.png" alt="کارخانه اتحادیه نوین" />
          </div>
        </Link>

        <Link href="#">
          <div className={styles.logo}>
            <img src="/images/general.png" alt="شرکت جنرال کب پارس" />
          </div>
        </Link>

        <Link href="#">
          <div className={styles.logo}>
            <img src="/images/amper100.png" alt="کارخانه نوآوری آمپر" />
          </div>
        </Link>

        <Link href="#">
          <div className={styles.logo}>
            <img src="/images/maad-part.png" alt="آذرین مادپارت راز" />
          </div>
        </Link>

        <Link href="#">
          <div className={styles.logo}>
            <img src="/images/raz100.png" alt="موسسه خیریه نیکوکاران راز" />
          </div>
        </Link>

        <Link href="#">
          <div className={styles.logo}>
            <img src="/images/didi.png" alt="آب معدنی دی دی واتر" />
          </div>
        </Link>

        <Link href="#">
          <div className={styles.logo}>
            <img src="/images/salamat100.png" alt="درمانگاه اورند سلامت"/>
          </div>
        </Link>

        <Link href="#">
          <div className={styles.logo}>
            <img src="/images/hamrah-raz.png" alt="حمل و نقل راز - همراز"/>
          </div>
        </Link>

        <Link href="#">
          <div className={styles.logo}>
            <img src="/images/sazeh100.png" alt="اورند سازه راز"/>
          </div>
        </Link>

        <Link href="#">
          <div className={styles.logo}>
            <img src="/images/mad-arya100.png" alt="ماد آریا ویستا"/>
          </div>
        </Link>

        <Link href="#">
          <div className={styles.logo}>
            <img src="/images/visman100.png" alt="شرکت ویسمن موتور"/>
          </div>
        </Link>

        <Link href="#">
          <div className={styles.logo}>
            <img src="/images/bahman100.png" alt="شرکت بهمن موتور"/>
          </div>
        </Link>

        <Link href="#">
          <div className={styles.logo}>
            <img src="/images/kren100.png" alt="شرکت کارن"/>
          </div>
        </Link>

        <Link href="#">
          <div className={styles.logo}>
            <img src="/images/logo1.png" alt="شرکت زیما توسعه پارسیان کیش"/>
          </div>
        </Link>

        <Link href="#">
          <div className={styles.logo}>
            <img src="/images/petrotrak.png" alt="شرکت پترو تراک"/>
          </div>
        </Link>

        <Link href="#">
          <div className={styles.logo}>
            <img src="/images/petrodrilling.png" alt="شرکت پترو دریلینگ"/>
          </div>
        </Link>

        <Link href="#">
          <div className={styles.logo}>
            <img src="/images/petro.png" alt="شرکت پترو سرویس"/>
          </div>
        </Link>

        <Link href="#">
          <div className={styles.logo}>
            <img src="/images/boyardi100.png" alt="شرکت بویاردی"/>
          </div>
        </Link>

        <Link href="#">
          <div className={styles.logo}>
            <img src="/images/texo100.png" alt="شرکت تکسوپد"/>
          </div>
        </Link>

        <Link href="#">
          <div className={styles.logo}>
            <img src="/images/pedem.png" alt="شرکت پدم"/>
          </div>
        </Link>

        <Link href="#">
          <div className={styles.logo}>
            <img src="/images/aras100.png" alt="شرکت آذرماد ارس"/>
          </div>
        </Link>

        <Link href="#">
          <div className={styles.logo}>
            <img src="/images/Parto100.png" alt="شرکت پرتوفرازان آویژه کیمیا"/>
          </div>
        </Link>

        <Link href="#">
          <div className={styles.logo}>
            <img src="/images/horand2.png" alt="شرکت هوراند پیشرو"/>
          </div>
        </Link>

        
        <Link href="#">
          <div className={styles.logo}>
            <img src="/images/kpart.png" alt="شرکت پارت پلاستیک خراسان"/>
          </div>
        </Link>

        <Link href="#">
          <div className={styles.logo}>
            <img src="/images/arsam100.png" alt="شرکت آرسام پلاست راز"/>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default CompanyLogos;
