import React from "react";
import styles from "./footer.module.css";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";
import Link from "next/link";

function Footer() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.footerContainer}>
          <div className={styles.right}>
            <img src="/images/riseco-R.png" />
            <div className={styles.descText}>
              شرکت سرمایه گذاری و توسعه راهبردی راز (سهامی خاص) در سال ۱۳۹۰ و با
              هدف ارائه خدمات مشاوره، مدیریت، سرمایه گذاری در بخش صنایع و معادن،
              فنی، مهندسی تولیدی و بازرگانی تأسیس گردید. در حال حاضر، هلدینگ راز
              سهامدار عمده افزون بر ۲۱ شرکت می باشد که در حوزه های مختلف سرمایه
              گذاری از قبیل خودروسازی، قطعات خودرو، نفت، گاز و پتروشیمی، آب
              معدنی، مسئولیت های اجتماعی و … مشغول به فعالیت می باشند.
            </div>
          </div>
          <div className={styles.left}>
            <div className={styles.item}>
              <Link
                href="https://neshan.org/maps/places/1e8bc79b4550806144d4612623028eb5#c35.723-51.180-15z-0p"
                className={styles.linkItem}
              >
                <FaMapMarkerAlt size={20} style={{ marginLeft: "10px" }} />
                تهران ، جاده مخصوص کرج، بین خ انصار و خ پنجاه و سوم ، ساختمان
                رایزکو
              </Link>
            </div>
            <div className={styles.item}>
              <Link href="tel:+982127607000" className={styles.linkItem}>
                <FaPhone
                  color="#5c5c5c"
                  size={20}
                  style={{ marginLeft: "10px" }}
                />
                ۰۲۱-۲۷۶۰۷۰۰۰
              </Link>
            </div>
            <div className={styles.item}>
              <Link href="mailto:info@riseco.co" className={styles.linkItem}>
                <IoMdMailOpen
                  color="#5c5c5c"
                  size={24}
                  style={{ marginLeft: "10px" }}
                />
                info@riseco.co
              </Link>
            </div>
            <div className={styles.socialNetworks}>
              <Link href="https://www.instagram.com/riseco_holding/">
                <FaInstagram
                  color="#002f6b"
                  size={30}
                  style={{ marginLeft: "10px" }}
                />
              </Link>
              <Link href="https://www.linkedin.com/company/avrand-pishro/">
                <FaLinkedinIn
                  color="#002f6b"
                  size={30}
                  style={{ marginLeft: "10px" }}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        کلیه حقوق این وب سایت محفوظ و متعلق به هلدینگ رایزکو می‌باشد.
      </div>
    </>
  );
}

export default Footer;
