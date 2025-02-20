"use client";
import React from "react";
import styles from "./customers.module.css";
import { IoGitNetworkOutline } from "react-icons/io5";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

function Customers() {
  return (
    <div className={styles.container}>
      <div className={styles.titrText}>
        <IoGitNetworkOutline style={{ marginLeft: "7px" }} />
        مشتریان
      </div>
      <div className={styles.logoContainer}>
        <Swiper
          spaceBetween={30}
          slidesPerView={6}
          dir="rtl"
          //centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}

          modules={[Autoplay,  Navigation]}
          className={styles.mySwiper}
        >
          <SwiperSlide className={styles.swiperSlide}>
            <img src="/images/mazda.png" alt="مزدا"/>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <img src="/images/peugeot.png" alt="پژو"/>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <img src="/images/imperial.png" alt="امپریال"/>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <img src="/images/kia.png" alt="کیا"/>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <img src="/images/piaggiot.png" alt="پیاجیوت"/>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <img src="/images/saipa.png" alt="سایپا"/>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <img src="/images/zamyad.png" alt="زامیاد"/>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <img src="/images/ikco.png" alt="ایران خودرو"/>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <img src="/images/sapco.png" alt="ساپکو"/>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <img src="/images/citroen.png" alt="سیتروئن"/>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <img src="/images/bahman.png" alt="بهمن"/>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Customers;
