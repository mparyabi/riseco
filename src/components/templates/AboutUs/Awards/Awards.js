"use client";
import React from "react";
import styles from "./awards.module.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

function Awards() {
  return (
    <div className={styles.container}>
        <div className={styles.AwardsTitr}> افتخارات هلدینگ رایزکو</div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#b9b7b7",
          "--swiper-pagination-color": "#b9b7b7",
        }}
        spaceBetween={1}
        slidesPerView={3}
        dir="rtl"
        pagination={{ clickable: true }}
        //navigation={true}
        //centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        modules={[ Pagination , Autoplay]}
        className={styles.mySwiper}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.Card}>
            <div className={styles.awardImg}>
              <img src="/images/9874847-copy.webp" />
            </div>
            <div className={styles.titr}>
              {" "}
              دریافت نشان مدیر پیشرو توسط مدیرعامل هلدینگ رایزکو
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.Card}>
            <div className={styles.awardImg}>
              <img src="/images/6545641-copy-2.webp" />
            </div>
            <div className={styles.titr}>
              کسب عنوان برتر واحد نمونه استاندارد ۱۴۰۰ توسط شرکت اورند پیشرو
              <div className={styles.subTitr}>
                در آیین معرفی و تجلیل از واحدهای نمونه تولیدی استان تهران، اورند
                پیشرو لوح و تندیس واحد نمونه استاندارد ۱۴۰۰ را دریافت کرد.
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.Card}>
            <div className={styles.awardImg}>
              <img src="/images/tandis.png" />
            </div>
            <div className={styles.titr}>
              {" "}
              دریافت تندیس زرین هشتمین اجلاس مشتری مداری توسط هلدینگ رایزکو
              <div className={styles.subTitr}>
                شرکت سرمایه‌گذاری و توسعه راهبردی راز در راستای ارائه خدمات و
                محصولات باکیفیت و توجه ویژه به امر مشتری‌مداری، تندیس زرین و لوح
                تقدیر هشتمین اجلاس سراسری مشتری‌مداری را دریافت کرد.
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.Card}>
            <div className={styles.awardImg}>
              <img src="/images/Tandis-1400-1copy.png" />
            </div>
            <div className={styles.titr}>
              {" "}
              مدیرعامل رایزکو، مدیر شایسته ایران ۱۴۰۰
              <div className={styles.subTitr}>
                در همایش تقدیر از مدیران شایسته ایران احمد‌رضا صمدی، مدیرعامل
                شرکت توسعه راهبردی راز(رایزکو) تندیس زرین و لوح تقدیر مدیر
                شایسته ایران ۱۴۰۰ را دریافت کرد.
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.Card}>
            <div className={styles.awardImg}>
              <img src="/images/ISO-blue-300px-wide.png" />
            </div>
            <div className={styles.titr}>
              {" "}
              اخذ، تجدید و تمدید:
              <div className={styles.subTitr}>
                استانداردهای مختلف ISO 27001،ISO 10015 ، ISO 14000 ،OHSAS 18001
                ، گریدA+ سازه گستر و… توسط مجموعه های هلدینگ راز متناسب با
                فعالیت آنها از معتبرترین مراکز اخذ گردیده است.
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.Card}>
            <div className={styles.awardImg}>
              <img src="/images/instagram_mahakcharity.png" />
            </div>
            <div className={styles.titr}>
              {" "}
              همکاری با مرکز اهدا کنندگان سلول های بنیادی خون ساز در موسسه خیریه
              محک
              <div className={styles.subTitr}>
                با همکاری گروه بهمن (شرکت‌های بهمن موتور و بهمن دیزل) و مؤسسه
                خیریه حمایت از کودکان مبتلا به سرطان «محک» ثبت پنج هزار نمونه
                اولیه جهت مرکز اهداکنندگان سلول‌های بنیادی خون‌‍ ساز در محک
                انجام می‌شود.
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.Card}>
            <div className={styles.awardImg}>
              <img src="/images/modiriat-jahadi.png" />
            </div>
            <div className={styles.titr}>
              انتخاب جناب آقای دکتر حمیدرضا صمدی به عنوان مدیر برگزیده بخش خصوصی
              در همایش مدیریت جهادی
              <div className={styles.subTitr}>
                سومین همایش ملی مدیریت جهادی ، در این مراسم از جناب آقای دکتر
                صمدی با عنوان مدیر جهادی برگزیده بخش خصوصی با اهدای لوح تقدیر و
                نشان تقدیر به عمل آمد.
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.Card}>
            <div className={styles.awardImg}>
              <img src="/images/hr.png" />
            </div>
            <div className={styles.titr}>
              بالاترین نشان تعالی منابع انسانی به “اورندپیشرو”
              <div className={styles.subTitr}>
                در حاشیه دوازدهمین کنفرانس منابع انسانی، نشان تندیس تعالی منابع
                انسانی به شرکت “اورندپیشرو” اعطا گردید.
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.Card}>
            <div className={styles.awardImg}>
              <img src="/images/social-res.png" />
            </div>
            <div className={styles.titr}>
              شرکت آذرین ‎مادپارت راز از مجموعه شرکت‎های هولدینگ راز نشان برنزین
              مسئولیت‎های اجتماعی ایران را کسب نمود.
              <div className={styles.subTitr}>
                از بین ۱۹۶ شرکت ثبت نام شده در جایزه ملی تنها ۱۳ شرکت موفق به
                دریافت این نشان گردیدند و تنها شرکت دریافت کننده این نشان از
                صنعت خودرو شرکت آذرین مادپارت راز می‎باشد.
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Awards;
