"use client";
import React, { useEffect, useState } from "react";
import { LuNewspaper, LuGalleryThumbnails } from "react-icons/lu";
import styles from "./sidebar.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";

function Sidebar({news}) {

  return (
    <div className={styles.sidebar}>
      <div className={styles.gallery}>
        <div className={styles.titr}>
          <LuGalleryThumbnails style={{ marginLeft: "10px" }} />
          گالری عکس ها
        </div>
        <div className={styles.sidebarCard}>
          <Swiper
            style={{
              "--swiper-navigation-color": "#b9b7b7",
              "--swiper-navigation-size": "25px",
            }}
            spaceBetween={1}
            slidesPerView={1}
            dir="rtl"
            pagination={{ clickable: true }}
            navigation={true}
            centeredSlides={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Navigation, Autoplay]}
            className={styles.mySwiper}
          >
            <SwiperSlide className={styles.swiperSlide}>
              <img src="/images/gallery/4L2A7153.jpg" />
              <div className={styles.overlay}>
                <h3 className={styles.galleryTitr}>
                  نمایشگاه ایران پلاست مهر 96
                </h3>
              </div>
            </SwiperSlide>

            <SwiperSlide className={styles.swiperSlide}>
              <img src="/images/gallery/IMG_7974.jpg" />
              <div className={styles.overlay}>
                <h3 className={styles.galleryTitr}>بازدید هیئت آلمانی</h3>
              </div>
            </SwiperSlide>

            <SwiperSlide className={styles.swiperSlide}>
              <img src="/images/gallery/32d25e97-2a11.jpg" />
              <div className={styles.overlay}>
                <h3 className={styles.galleryTitr}>کمپین یک نفس - یک زندگی</h3>
              </div>
            </SwiperSlide>

            <SwiperSlide className={styles.swiperSlide}>
              <img src="/images/gallery/9W6A5037.jpg" />
              <div className={styles.overlay}>
                <h3 className={styles.galleryTitr}>نشست خبری اورند</h3>
              </div>
            </SwiperSlide>

            <SwiperSlide className={styles.swiperSlide}>
              <img src="/images/gallery/IMG_0921.jpg" />
              <div className={styles.overlay}>
                <h3 className={styles.galleryTitr}>ضیافت شام پژو</h3>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className={styles.lastMagazine}>
        <img src="/images/magazines/yalda-1-218x300.jpg" />
        <div className={styles.magDet}>
          <div className={styles.magTitr}>آخرین نسخه منتشر شد...</div>
          <div className={styles.magDesc}>
            ماهنامه راز صنعت <br /> پاییز ۱۴۰۳{" "}
          </div>
        </div>
      </div>

      <div className={styles.latestNews}>
        <div className={styles.titr}>
          <LuNewspaper style={{ marginLeft: "10px" }} />
          آخرین اخبار
        </div>
{news.map((post)=>(
        <Link key={post.id} className={styles.sidebarCard} href={post.slug}>
        <div>
          <div className={styles.imgTitr}>
            <div className={styles.sidebarImg}>
            <img
              className={styles.image}
              src={post.featured_media_src_url || "/images/loading.gif"} // تصویر پیش‌فرض در صورت عدم وجود
              alt={post.title.rendered}
              loading="lazy"
            />
            </div>
            <div className={styles.sidenewsTitr}>
            {post.title.rendered}
            </div>
          </div>
          <div className={styles.date}>تاریخ : {new Date(post.date).toLocaleDateString('fa-IR')}</div>
        </div>
        </Link>
))}

      </div>
    </div>
  );
}

export default Sidebar;
