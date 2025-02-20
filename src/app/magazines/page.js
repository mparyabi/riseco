"use client";
import React from "react";
import styles from "./magazine.module.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";

function Magazines() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.cover}>
          <div className={styles.coverRight}>
            <div className={styles.newVersion}>نسخه جدید منتشر شد...</div>
            <div className={styles.coverTitr}>نشریه راز صنعت - پاییز ۱۴۰۳ </div>
          </div>
          <div className={styles.coverLeft}>
            <img src="./images/magazines/yalda-1-218x300.jpg" className={styles.coverImg}/>
          </div>
        </div>
        <div className={styles.magazineSlider}>
          <div className={styles.titr}>نشریات هلدینگ رایزکو</div>
          <Swiper
            style={{
              "--swiper-navigation-color": "#b9b7b7",
              "--swiper-pagination-color": "#b9b7b7",
            }}
            spaceBetween={1}
            slidesPerView={5}
            dir="rtl"
            pagination={{ clickable: true }}
            navigation={true}
            //centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Pagination]}
            className={styles.mySwiper}
          >
            <SwiperSlide className={styles.swiperSlide}>
              <div className={styles.magCard}>
                <Link href="#">
                  <div className={styles.magImg}>
                    <img src="./images/magazines/yalda-1-218x300.jpg" />
                  </div>
                </Link>
                <div className={styles.magTitr}>نشریه راز صنعت</div>
                <div className={styles.magDesc}>پاییز ۱۴۰۳</div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <div className={styles.magCard}>
                <Link href="#">
                  <div className={styles.magImg}>
                    <img src="./images/magazines/razesanat-bahar1403.png" />
                  </div>
                </Link>
                <div className={styles.magTitr}>نشریه راز صنعت</div>
                <div className={styles.magDesc}>بهار ۱۴۰۳</div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <div className={styles.magCard}>
                <Link href="#">
                  <div className={styles.magImg}>
                    <img src="./images/magazines/rakhshane-del.jpg" />
                  </div>
                </Link>
                <div className={styles.magTitr}>نشریه رخشان دل</div>
                <div className={styles.magDesc}>تابستان ۱۴۰۳</div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <div className={styles.magCard}>
                <Link href="#">
                  <div className={styles.magImg}>
                    <img src="./images/magazines/parnian.JPG" />
                  </div>
                </Link>
                <div className={styles.magTitr}>نشریه پرنیان دل</div>
                <div className={styles.magDesc}>تابستان ۱۴۰۳</div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <div className={styles.magCard}>
                <Link href="#">
                  <div className={styles.magImg}>
                    <img src="./images/magazines/nowruz-mag.jpg" />
                  </div>
                </Link>
                <div className={styles.magTitr}>نشریه راز صنعت</div>
                <div className={styles.magDesc}>نوروز ۱۴۰۳</div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className={styles.archiveContainer}>
        <div className={styles.archTitr}>آرشیو نسخه های قدیمی</div>
        <div className={styles.archCardContainer}>
          <div className={styles.archCard}>
            <Link href="#">
              <img
                className={styles.archImg}
                src="./images/magazines/yalda-1-218x300.jpg"
              />
              <div className={styles.archMagTitr}>نشریه راز صنعت</div>
              <div className={styles.archMagDesc}>پاییز ۱۴۰۳</div>
            </Link>
          </div>

          <div className={styles.archCard}>
            <Link href="#">
              <img
                className={styles.archImg}
                src="./images/magazines/razesanat-bahar1403.png"
              />
              <div className={styles.archMagTitr}>نشریه راز صنعت</div>
              <div className={styles.archMagDesc}>بهار ۱۴۰۳</div>
            </Link>
          </div>

          <div className={styles.archCard}>
            <Link href="#">
              <img
                className={styles.archImg}
                src="./images/magazines/rakhshane-del.jpg"
              />
              <div className={styles.archMagTitr}>نشریه رخشان دل</div>
              <div className={styles.archMagDesc}>تابستان ۱۴۰۳</div>
            </Link>
          </div>

          <div className={styles.archCard}>
            <Link href="#">
              <img
                className={styles.archImg}
                src="./images/magazines/parnian.JPG"
              />
              <div className={styles.archMagTitr}>نشریه پرنیان دل</div>
              <div className={styles.archMagDesc}>تابستان ۱۴۰۳</div>
            </Link>
          </div>

          <div className={styles.archCard}>
            <Link href="#">
              <img
                className={styles.archImg}
                src="./images/magazines/nowruz-mag.jpg"
              />
              <div className={styles.archMagTitr}>نشریه راز صنعت</div>
              <div className={styles.archMagDesc}>نوروز ۱۴۰۳</div>
            </Link>
          </div>

          <div className={styles.archCard}>
            <Link href="#">
              <img
                className={styles.archImg}
                src="./images/magazines/cover-mag-8.png"
              />
              <div className={styles.archMagTitr}>نشریه راز صنعت</div>
              <div className={styles.archMagDesc}>زمستان ۱۴۰۳</div>
            </Link>
          </div>

          <div className={styles.archCard}>
            <Link href="#">
              <img
                className={styles.archImg}
                src="./images/magazines/yalda-1-218x300.jpg"
              />
              <div className={styles.archMagTitr}>نشریه راز صنعت</div>
              <div className={styles.archMagDesc}>پاییز ۱۴۰۳</div>
            </Link>
          </div>

          <div className={styles.archCard}>
            <Link href="#">
              <img
                className={styles.archImg}
                src="./images/magazines/razesanat-bahar1403.png"
              />
              <div className={styles.archMagTitr}>نشریه راز صنعت</div>
              <div className={styles.archMagDesc}>بهار ۱۴۰۳</div>
            </Link>
          </div>

          <div className={styles.archCard}>
            <Link href="#">
              <img
                className={styles.archImg}
                src="./images/magazines/rakhshane-del.jpg"
              />
              <div className={styles.archMagTitr}>نشریه رخشان دل</div>
              <div className={styles.archMagDesc}>تابستان ۱۴۰۳</div>
            </Link>
          </div>

          <div className={styles.archCard}>
            <Link href="#">
              <img
                className={styles.archImg}
                src="./images/magazines/parnian.JPG"
              />
              <div className={styles.archMagTitr}>نشریه پرنیان دل</div>
              <div className={styles.archMagDesc}>تابستان ۱۴۰۳</div>
            </Link>
          </div>

          <div className={styles.archCard}>
            <Link href="#">
              <img
                className={styles.archImg}
                src="./images/magazines/nowruz-mag.jpg"
              />
              <div className={styles.archMagTitr}>نشریه راز صنعت</div>
              <div className={styles.archMagDesc}>نوروز ۱۴۰۳</div>
            </Link>
          </div>

          <div className={styles.archCard}>
            <Link href="#">
              <img
                className={styles.archImg}
                src="./images/magazines/cover-mag-8.png"
              />
              <div className={styles.archMagTitr}>نشریه راز صنعت</div>
              <div className={styles.archMagDesc}>زمستان ۱۴۰۳</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Magazines;
